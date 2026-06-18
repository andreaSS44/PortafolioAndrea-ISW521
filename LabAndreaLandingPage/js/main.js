var btn = document.getElementById('themeBtn');
function aplicarTema(t) {
  document.documentElement.setAttribute('data-theme', t);
  btn.textContent = t === 'dark' ? 'Modo claro' : 'Modo oscuro';
  btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
}
aplicarTema(localStorage.getItem('tema') || 'light');
btn.addEventListener('click', function() {
  var nuevo = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  aplicarTema(nuevo);
  localStorage.setItem('tema', nuevo);
});
