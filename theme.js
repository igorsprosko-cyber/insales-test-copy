/* V2.3 page standardization: same-origin navigation, footer catalog correction and non-home visual normalization. */
(function () {
  'use strict';

  var CATALOG_URL = '/collection/all';
  var ACCENT = '#5E8C31';

  /*
   * The homepage is the untouchable V2.1 reference.
   * Do not depend on data-theme-template here: the test site can render
   * different templates without that attribute being present on <body>.
   */
  function isStandardizationPage() {
    var path = window.location.pathname || '/';
    return path !== '/' && path !== '';
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
      '/* V2.3 visual corrections: controls stay transparent/light; accent appears only on hover. */\n' +
      '.add-cart-counter__btn,\n' +
      '.product-preview .add-cart-counter__btn,\n' +
      '.product-preview__controls .button,\n' +
      '.product-preview__controls-left .button,\n' +
      '.product__cart,\n' +
      '.product__buy,\n' +
      '.add-cart,\n' +
      '.btn-buy,\n' +
      '.product__add-to-cart button,\n' +
      '.product__buy-button {\n' +
      '  background: transparent !important;\n' +
      '  color: #000 !important;\n' +
      '  border-color: transparent !important;\n' +
      '  box-shadow: none !important;\n' +
      '  border-radius: 0 !important;\n' +
      '}\n' +
      '.add-cart-counter__btn:hover,\n' +
      '.product-preview .add-cart-counter__btn:hover,\n' +
      '.product-preview__controls .button:hover,\n' +
      '.product-preview__controls-left .button:hover,\n' +
      '.product__cart:hover,\n' +
      '.product__buy:hover,\n' +
      '.add-cart:hover,\n' +
      '.btn-buy:hover,\n' +
      '.product__add-to-cart button:hover,\n' +
      '.product__buy-button:hover {\n' +
      '  background: transparent !important;\n' +
      '  color: ' + ACCENT + ' !important;\n' +
      '  border-color: transparent !important;\n' +
      '  box-shadow: none !important;\n' +
      '  transform: none !important;\n' +
      '}\n' +
      '/* Footer navigation uses the same light/outline treatment on non-home pages. */\n' +
      '.footer__blog-link a,\n' +
      '.vl-footer-catalog-link {\n' +
      '  background: transparent !important;\n' +
      '  color: #000 !important;\n' +
      '  border: 1px solid #000 !important;\n' +
      '  border-radius: 12px !important;\n' +
      '  box-shadow: none !important;\n' +
      '  transform: none !important;\n' +
      '}\n' +
      '.footer__blog-link a:hover,\n' +
      '.vl-footer-catalog-link:hover {\n' +
      '  background: transparent !important;\n' +
      '  color: ' + ACCENT + ' !important;\n' +
      '  border-color: ' + ACCENT + ' !important;\n' +
      '  box-shadow: none !important;\n' +
      '}\n' +
      '/* Product rows rendered inside articles/blogs: preserve the card box and text area. */\n' +
      '.vl-article-products,\n' +
      '.vl-article-products .splide,\n' +
      '.vl-article-products .splide__track,\n' +
      '.vl-article-products .splide__list {\n' +
      '  min-width: 0 !important;\n' +
      '  overflow: visible !important;\n' +
      '}\n' +
      '.vl-article-products .splide__slide {\n' +
      '  min-width: 0 !important;\n' +
      '  box-sizing: border-box !important;\n' +
      '  padding: 6px !important;\n' +
      '}\n' +
      '.vl-article-products .product-preview {\n' +
      '  min-width: 0 !important;\n' +
      '  width: 100% !important;\n' +
      '  box-sizing: border-box !important;\n' +
      '  overflow: hidden !important;\n' +
      '}\n' +
      '.vl-article-products .product-preview__area-bottom,\n' +
      '.vl-article-products .product-preview__controls,\n' +
      '.vl-article-products .product-preview__controls-left,\n' +
      '.vl-article-products .product-preview__title,\n' +
      '.vl-article-products .product-preview__price {\n' +
      '  min-width: 0 !important;\n' +
      '  max-width: 100% !important;\n' +
      '  box-sizing: border-box !important;\n' +
      '}\n' +
      '.vl-article-products .product-preview__title,\n' +
      '.vl-article-products .product-preview__price {\n' +
      '  overflow-wrap: anywhere !important;\n' +
      '  word-break: normal !important;\n' +
      '}\n' +
      '.vl-article-products .product-preview__price {\n' +
      '  padding-left: 6px !important;\n' +
      '  padding-right: 6px !important;\n' +
      '}\n';

    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function () {
    installNonHomeVisualOverrides();
    normalizePageLinks(document);
  });

  /*
   * Safety net for widgets rendered after DOMContentLoaded.
   * External links keep target="_blank"; internal links stay in the same tab.
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
