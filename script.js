// ===== Dark / Light Mode Toggle =====
(function () {
  var html = document.documentElement;
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var current = html.getAttribute('data-bs-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(t) {
    html.setAttribute('data-bs-theme', t);
    document.body.classList.toggle('bg-dark', t === 'dark');
    document.body.classList.toggle('text-light', t === 'dark');
    var icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = t === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
    }
  }
})();

// ===== Search Overlay =====
(function () {
  var pages = [
    { title: 'Home', section: 'Homepage', url: 'index.html', keywords: 'home about bio education' },
    { title: 'Research', section: 'Research page', url: 'research.html', keywords: 'research papers working progress interests' },
    { title: 'Curriculum Vitae', section: 'CV page', url: 'cv.html', keywords: 'cv curriculum vitae experience skills education work' }
  ];

  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var searchBtn = document.getElementById('search-btn');

  function openSearch() {
    overlay.classList.add('active');
    setTimeout(function () { input.focus(); }, 100);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    input.value = '';
    results.innerHTML = '';
  }

  searchBtn.addEventListener('click', openSearch);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', function (e) {
    if ((e.key === 'f' || e.key === '/' || e.key === 's') &&
        !e.ctrlKey && !e.metaKey &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  input.addEventListener('input', function () {
    var q = input.value.toLowerCase().trim();
    results.innerHTML = '';
    if (!q) return;
    pages.forEach(function (p) {
      if (p.title.toLowerCase().includes(q) || p.keywords.includes(q)) {
        var a = document.createElement('a');
        a.href = p.url;
        a.className = 'search-result-item';
        a.innerHTML = '<div class="result-title">' + p.title + '</div>' +
                       '<div class="result-section">' + p.section + '</div>';
        results.appendChild(a);
      }
    });
  });
})();

// ===== Coverage line: align right edge with [Paper] link =====
(function () {
  function syncCoverageWidth() {
    document.querySelectorAll('li').forEach(function (li) {
      var paperLink = li.querySelector('.paper-link');
      var coverage = li.querySelector('.coverage');
      if (!paperLink || !coverage) return;
      var paperRect = paperLink.getBoundingClientRect();
      var coverageRect = coverage.getBoundingClientRect();
      var width = paperRect.right - coverageRect.left;
      if (width > 0) coverage.style.width = width + 'px';
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncCoverageWidth);
  } else {
    syncCoverageWidth();
  }
  window.addEventListener('load', syncCoverageWidth);
  window.addEventListener('resize', syncCoverageWidth);
})();