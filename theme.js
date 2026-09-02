/* V2.3 page standardization: same-origin navigation, footer catalog correction, and targeted visual regression fixes. */
(function () {
  'use strict';

  var CATALOG_URL = '/collection/all';
  var KNOWN_LINK_FIXES = {
    '/collections/opory-dlya-stolov': '/page/izdeliya-pod-zakaz'
  };

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
    if (!root || !root.querySelectorAll) return;

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

  function normalizeKnownLinks(root) {
    if (!root || !root.querySelectorAll) return;

    root.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;

      try {
        var url = new URL(href, window.location.href);
        if (!isSameOrigin(url)) return;

        var path = url.pathname.replace(/\/+$/, '') || '/';
        if (KNOWN_LINK_FIXES[path]) {
          link.setAttribute('href', KNOWN_LINK_FIXES[path] + (url.search || '') + (url.hash || ''));
        }
      } catch (error) {
        /* Invalid URLs are left untouched. */
      }
    });
  }

  function removeProductCartOverlay(root) {
    if (!root || !root.querySelectorAll) return;

    /*
     * InSales data-add-cart-counter renders the actual add-to-cart button
     * and its quantity controls. Remove only the fill from that component;
     * do not restyle the product price, quantity logic or surrounding card.
     *
     * This widget renders on every page that lists products (catalog/collection,
     * search, favorites, compare, cart, single product) — each page uses its own
     * wrapper class (.vl-collection, .vl-search-page, .vl-product-wrapper, etc.).
     * Scoping the selector to .vl-product-wrapper meant it only ever matched on
     * the single-product page, never on the catalog cards. Selecting by the
     * widget's own class directly fixes it everywhere it appears.
     */
    root.querySelectorAll('.add-cart-counter').forEach(function (counter) {
      counter.style.setProperty('background', 'transparent', 'important');
      counter.style.setProperty('background-color', 'transparent', 'important');
    });

    root.querySelectorAll('.add-cart-counter__btn, .add-cart-counter__controls, .add-cart-counter__controls-btn, .add-cart-counter__detail').forEach(function (element) {
      element.style.setProperty('background', 'transparent', 'important');
      element.style.setProperty('background-color', 'transparent', 'important');
    });
  }

  function normalizeCategoryPhotos(root) {
    if (!root || !root.querySelectorAll) return;

    var photoUrls = [
      'https://cdn.insales-shop.ru/files/1/3865/133353241/original/foto_derevo.jpg',
      'https://cdn.insales-shop.ru/files/1/3969/133353345/original/foto_metal.jpg',
      'https://cdn.insales-shop.ru/files/1/3889/133353265/original/foto_furnitura.jpg',
      'https://cdn.insales-shop.ru/files/1/4057/133353433/original/foto_nazakaz.jpg'
    ];

    root.querySelectorAll('.vl-v2-category--photo .vl-v2-category-photo').forEach(function (image, index) {
      if (photoUrls[index]) {
        image.src = photoUrls[index];
      }
    });
  }

  function normalizePageLinks(root) {
    normalizeFooterCatalogLinks(root);
    if (!isStandardizationPage()) return;
    normalizeInternalBlankTargets(root);
    normalizeKnownLinks(root);
  }

  document.addEventListener('DOMContentLoaded', function () {
    normalizePageLinks(document);
    removeProductCartOverlay(document);
    normalizeCategoryPhotos(document);
  });

  /*
   * Safety net for system widgets that may render links or product controls
   * after DOMContentLoaded. External links keep their original target="_blank"
   * behavior. Homepage/index.* remains excluded from non-footer navigation normalization.
   */
  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest ? event.target.closest('a') : null;
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    try {
      var url = new URL(href, window.location.href);
      if (!isSameOrigin(url)) return;

      var path = url.pathname.replace(/\/+$/, '') || '/';
      if (KNOWN_LINK_FIXES[path]) {
        event.preventDefault();
        window.location.assign(KNOWN_LINK_FIXES[path] + (url.search || '') + (url.hash || ''));
        return;
      }

      if (isStandardizationPage() && link.getAttribute('target') === '_blank') {
        event.preventDefault();
        window.location.assign(url.href);
      }
    } catch (error) {
      /* Invalid URLs are left untouched. */
    }
  }, true);

  if (window.MutationObserver) {
    document.addEventListener('DOMContentLoaded', function () {
      if (!document.body) return;

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            normalizePageLinks(node);
            removeProductCartOverlay(node);
            normalizeCategoryPhotos(node);
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();
