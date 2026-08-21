/* V2.3 page standardization: same-origin navigation and footer catalog correction. */
(function () {
  'use strict';

  var CATALOG_URL = '/collection/all';

  function isStandardizationPage() {
    var body = document.body;
    if (!body) return true;

    var template = body.getAttribute('data-theme-template') || '';
    return template.indexOf('index') !== 0;
  }

  function isSameOrigin(url) {
    try {
      return url.origin === window.location.origin;
    } catch (error) {
      return false;
    }
  }

  function normalizeFooterCatalogLinks(root) {
    if (!root || !root.querySelectorAll || !isStandardizationPage()) return;

    root.querySelectorAll('footer a').forEach(function (link) {
      var label = (link.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      var href = link.getAttribute('href') || '';

      if (label === 'каталог' || label === 'интернет-магазин') {
        if (href === '/' || href === '' || href === window.location.origin + '/') {
          link.setAttribute('href', CATALOG_URL);
        }
        link.classList.add('vl-footer-catalog-link');
      }
    });
  }

  function normalizeInternalBlankTargets(root) {
    if (!root || !root.querySelectorAll || !isStandardizationPage()) return;

    root.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      try {
        var url = new URL(href, window.location.href);
        if (isSameOrigin(url)) {
          link.removeAttribute('target');
        }
      } catch (error) {
        /* Invalid URLs are left untouched. */
      }
    });
  }

  function normalizePageLinks(root) {
    if (!isStandardizationPage()) return;
    normalizeFooterCatalogLinks(root);
    normalizeInternalBlankTargets(root);
  }

  function installNonHomeVisualOverrides() {
    if (!isStandardizationPage() || document.getElementById('vl-v23-visual-overrides')) return;

    var style = document.createElement('style');
    style.id = 'vl-v23-visual-overrides';
    style.textContent = '\n' +
      '/* V2.3 visual corrections: keep product controls light and unobtrusive. */\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .add-cart-counter__btn,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview .add-cart-counter__btn,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls .button,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls-left .button {\n' +
      '  background: transparent !important;\n' +
      '  color: #000 !important;\n' +
      '  border: 0 !important;\n' +
      '  box-shadow: none !important;\n' +
      '  border-radius: 0 !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview .add-cart-counter__btn:hover,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls .button:hover,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls-left .button:hover {\n' +
      '  background: transparent !important;\n' +
      '  color: #5E8C31 !important;\n' +
      '  border: 0 !important;\n' +
      '  box-shadow: none !important;\n' +
      '  transform: none !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__area-bottom {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow: visible !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__controls-left {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow: visible !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__title,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__price {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow-wrap: anywhere !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__price {\n' +
      '  padding-left: 4px !important;\n' +
      '  padding-right: 4px !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__image,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__photo,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .product-preview__area-image {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow: hidden !important;\n' +
      '}\n' +
      '/* Article/blog product rows: prevent clipping and preserve card geometry. */\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .vl-article-products,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .vl-article-products .splide,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .vl-article-products .splide__track,\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .vl-article-products .splide__list {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow: visible !important;\n' +
      '}\n' +
      'body[data-theme-template]:not([data-theme-template^="index"]) .vl-article-products .splide__slide {\n' +
      '  min-width: 0 !important;\n' +
      '  box-sizing: border-box !important;\n' +
      '  padding: 4px !important;\n' +
      '}\n';
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function () {
    installNonHomeVisualOverrides();
    normalizePageLinks(document);
  });

  /*
   * Safety net for system widgets that may render links after DOMContentLoaded.
   * External links keep their original target="_blank" behavior.
   * Homepage/index.* is intentionally excluded.
   */
  document.addEventListener('click', function (event) {
    if (!isStandardizationPage()) return;
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest ? event.target.closest('a[target="_blank"]') : null;
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    try {
      var url = new URL(href, window.location.href);
      if (isSameOrigin(url)) {
        event.preventDefault();
        window.location.assign(url.href);
      }
    } catch (error) {
      /* Invalid URLs are left untouched. */
    }
  }, true);

  if (window.MutationObserver) {
    document.addEventListener('DOMContentLoaded', function () {
      if (!document.body || !isStandardizationPage()) return;

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            normalizePageLinks(node);
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();
