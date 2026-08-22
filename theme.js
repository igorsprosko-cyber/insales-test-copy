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

  document.addEventListener('DOMContentLoaded', function () {
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
