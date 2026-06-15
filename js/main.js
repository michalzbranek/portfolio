;(function () {
  'use strict'

  /* =========================================================
     Ikony (inline SVG, viewBox="0 0 24 24", fill="currentColor")
     ========================================================= */
  var ICONS = {
    instagram: '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.058 1.278.31 2.149.617 2.909.334.818.78 1.487 1.45 2.157.67.67 1.34 1.116 2.158 1.45.76.307 1.631.559 2.909.617C8.333 23.986 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.278-.058 2.149-.31 2.909-.617.818-.334 1.487-.78 2.157-1.45.67-.67 1.116-1.34 1.45-2.158.307-.76.559-1.631.617-2.909C23.986 15.668 24 15.259 24 12c0-3.26-.014-3.667-.072-4.947-.058-1.278-.31-2.149-.617-2.909-.334-.818-.78-1.487-1.45-2.157A6.27 6.27 0 0 0 19.4.63c-.76-.307-1.631-.559-2.909-.617C15.668.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>',
    facebook:  '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
    linkedin:  '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    x:         '<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>',
    blog:      '<path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4c0-1.103-.897-2-2-2zm-1 9H8V9h10v2zm0-4H8V5h10v2z"/>',
    photo:     '<path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>'
  }

  function icon(name) {
    var paths = ICONS[name] || ''
    return (
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' +
        paths +
      '</svg>'
    )
  }

  /* =========================================================
     Naplnění sekcí obsahem z data.js
     ========================================================= */
  function fillContent() {
    var el

    el = document.getElementById('home-name')
    if (el) el.textContent = PORTFOLIO_NAME

    el = document.getElementById('home-role')
    if (el) el.textContent = PORTFOLIO_ROLE

    el = document.getElementById('about-text')
    if (el) el.textContent = ABOUT_TEXT

    /* Projekty */
    var grid = document.getElementById('project-grid')
    if (grid) {
      PROJECTS.forEach(function (p) {
        var li = document.createElement('li')
        li.innerHTML =
          '<figure>' +
            '<img src="' + p.img + '" alt="' + p.alt + '" loading="lazy" />' +
            '<figcaption>' +
              '<a href="' + p.href + '" target="_blank" rel="noopener" class="project-link">' +
                p.title +
              '</a>' +
            '</figcaption>' +
          '</figure>'
        grid.appendChild(li)
      })
    }

    /* Kontakt */
    var contactList = document.getElementById('contact-list')
    if (contactList) {
      CONTACT_ITEMS.forEach(function (item) {
        var li = document.createElement('li')
        li.textContent = item.text
        contactList.appendChild(li)
      })
    }
  }

  /* =========================================================
     Sidebar — sociální ikony
     ========================================================= */
  function buildSidebar() {
    var sidebar = document.getElementById('sidebar')
    if (!sidebar) return

    SOCIAL_LINKS.forEach(function (link) {
      var a = document.createElement('a')
      a.href = link.href
      a.target = '_blank'
      a.rel = 'noopener'
      a.setAttribute('aria-label', link.label)
      a.innerHTML = icon(link.icon)
      sidebar.appendChild(a)
    })
  }

  /* =========================================================
     Hamburger + drawer
     ========================================================= */
  function initDrawer() {
    var btn     = document.getElementById('hamburger-btn')
    var drawer  = document.getElementById('drawer')
    var overlay = document.getElementById('drawer-overlay')
    if (!btn || !drawer || !overlay) return

    function open() {
      drawer.classList.add('is-open')
      overlay.classList.add('is-open')
      btn.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
    }

    function close() {
      drawer.classList.remove('is-open')
      overlay.classList.remove('is-open')
      btn.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
    }

    btn.addEventListener('click', function () {
      btn.getAttribute('aria-expanded') === 'true' ? close() : open()
    })

    overlay.addEventListener('click', close)

    drawer.querySelectorAll('.drawer-link').forEach(function (link) {
      link.addEventListener('click', close)
    })
  }

  /* =========================================================
     Start
     ========================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    fillContent()
    buildSidebar()
    initDrawer()
  })
})()
