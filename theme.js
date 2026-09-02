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
        if (isSameOrigin(url)) link.removeAttribute('target');
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
    root.querySelectorAll('.add-cart-counter').forEach(function (counter) {
      counter.style.setProperty('background', 'transparent', 'important');
      counter.style.setProperty('background-color', 'transparent', 'important');
    });
    root.querySelectorAll('.add-cart-counter__btn, .add-cart-counter__controls, .add-cart-counter__controls-btn, .add-cart-counter__detail').forEach(function (element) {
      element.style.setProperty('background', 'transparent', 'important');
      element.style.setProperty('background-color', 'transparent', 'important');
    });
  }

  function ensureCategoryPhotoStyles() {
    if (document.getElementById('vl-v2-category-photo-fix')) return;

    var style = document.createElement('style');
    style.id = 'vl-v2-category-photo-fix';
    style.textContent = [
      '.vl-v2-category-grid .vl-v2-category--photo{height:300px !important;min-height:0 !important;overflow:hidden !important;position:relative !important;background:#111 !important;color:#fff !important;padding:12px 32px 76px !important;}',
      '.vl-v2-category-grid .vl-v2-category--photo .vl-v2-category-photo{position:absolute !important;top:0 !important;left:0 !important;right:0 !important;width:100% !important;height:212px !important;max-height:212px !important;display:block !important;object-fit:contain !important;object-position:center center !important;background:#fff !important;z-index:0 !important;}',
      '.vl-v2-category-grid .vl-v2-category--photo:after{content:"";position:absolute;left:0;right:0;bottom:0;height:118px;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.9));pointer-events:none;}',
      '.vl-v2-category-grid .vl-v2-category--photo h3,.vl-v2-category-grid .vl-v2-category--photo p{position:relative;z-index:2;color:#fff !important;text-shadow:0 1px 5px rgba(0,0,0,.8);}',
      '.vl-v2-category-grid .vl-v2-category--photo h3{margin:0 0 6px;font-size:24px;line-height:1.15;}',
      '.vl-v2-category-grid .vl-v2-category--photo p{margin:0;font-size:12px;line-height:1.4;max-width:100%;}',
      '.vl-v2-category-grid .vl-v2-category--photo:hover{background:#111 !important;color:#fff !important;transform:translateY(-5px);}',
      '.vl-v2-category-grid .vl-v2-category--photo:hover:after{height:135px;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.94));}',
      '@media (max-width:767px){.vl-v2-category-grid .vl-v2-category--photo{height:260px !important;padding:10px 24px 70px !important;}.vl-v2-category-grid .vl-v2-category--photo .vl-v2-category-photo{height:178px !important;max-height:178px !important;}.vl-v2-category-grid .vl-v2-category--photo h3{font-size:21px;}.vl-v2-category-grid .vl-v2-category--photo p{font-size:11px;}}'
    ].join('');

    (document.head || document.documentElement).appendChild(style);
  }

  function normalizeCategoryPhotos(root) {
    if (!root || !root.querySelectorAll) return;

    ensureCategoryPhotoStyles();

    var photoUrls = {
      '01': 'https://cdn.insales-shop.ru/files/1/3865/133353241/original/foto_derevo.jpg',
      '02': 'https://cdn.insales-shop.ru/files/1/3969/133353345/original/foto_metal.jpg',
      '03': 'https://cdn.insales-shop.ru/files/1/3889/133353265/original/foto_furnitura.jpg',
      '04': 'https://cdn.insales-shop.ru/files/1/4057/133353433/original/foto_nazakaz.jpg'
    };

    root.querySelectorAll('.vl-v2-category--photo').forEach(function (card) {
      var number = card.getAttribute('data-number');
      var image = card.querySelector('.vl-v2-category-photo');
      if (!image || !photoUrls[number]) return;

      image.src = photoUrls[number];
      image.style.setProperty('object-fit', 'contain', 'important');
      image.style.setProperty('object-position', 'center center', 'important');
      image.style.setProperty('background-color', '#fff', 'important');
      image.style.setProperty('height', window.innerWidth <= 767 ? '178px' : '212px', 'important');
      image.style.setProperty('max-height', window.innerWidth <= 767 ? '178px' : '212px', 'important');
      card.style.setProperty('height', window.innerWidth <= 767 ? '260px' : '300px', 'important');
      card.style.setProperty('min-height', '0', 'important');
      card.style.setProperty('padding', window.innerWidth <= 767 ? '10px 24px 70px' : '12px 32px 76px', 'important');
    });
  }

  function normalizePageLinks(root) {
    normalizeFooterCatalogLinks(root);
    if (!isStandardizationPage()) return;
    normalizeInternalBlankTargets(root);
    normalizeKnownLinks(root);
  }

  ensureCategoryPhotoStyles();

  document.addEventListener('DOMContentLoaded', function () {
    normalizePageLinks(document);
    removeProductCartOverlay(document);
    normalizeCategoryPhotos(document);
  });

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
