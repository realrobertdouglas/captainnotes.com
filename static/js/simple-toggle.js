/*  "I am 5" switch on an entry (markup in _layouts/post.html): shows the simple version instead of the
    full one, and remembers the choice in this browser. Stays hidden without JavaScript, since it could
    not do anything then. */
(function () {
  var btn = document.getElementById('js-simple-toggle');
  var grown = document.getElementById('js-post-grown');
  var simple = document.getElementById('js-post-simple');
  if (!btn || !grown || !simple) return;
  var KEY = 'simple';
  function stored() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function apply(on) {
    grown.hidden = on;
    simple.hidden = !on;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  btn.addEventListener('click', function () {
    var on = btn.getAttribute('aria-pressed') !== 'true';
    try { if (on) localStorage.setItem(KEY, '1'); else localStorage.removeItem(KEY); } catch (e) {}
    apply(on);
  });
  apply(stored());
  btn.hidden = false;
})();
