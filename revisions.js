function updateRetourButton() {
  const retour = document.querySelector('.retour-button');
  if (!retour) return;
  retour.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.referrer) {
      history.back();
    } else {
      window.location.href = isVercel()
        ? location.origin + '/Revisions-LORIS/'
        : '../Revisions-LORIS/index.html';
    }
  });
}
function toggleMode() {
  const btn = document.getElementById("toggle-mode");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");
  function apply(isNuit) {
    document.body.classList.toggle("nuit", isNuit);
    if (h2) h2.classList.toggle("nuit", isNuit);
    if (p) p.classList.toggle("nuit", isNuit);
    btn.textContent = isNuit ? "🌙" : "☀️";
    localStorage.setItem("modeNuit", isNuit);
  }
  apply(localStorage.getItem("modeNuit") === "true");
  btn.addEventListener("click", () => {
    apply(!document.body.classList.contains("nuit"));
  });
}
document.addEventListener('DOMContentLoaded', () => {
  toggleMode();
  document.body.classList.add('loaded');
  const modal = document.getElementById('mentionsModal');
  if (modal) {
    const closeBtn = modal.querySelector('.close-btn');
    let _triggerEl = null, _trapHandler = null;
    window.openModal = function () {
      _triggerEl = document.activeElement;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => modal.classList.add('show'));
      document.querySelectorAll('body > *').forEach(el => {
        if (el !== modal && !el.contains(modal)) { el.setAttribute('inert', ''); el.setAttribute('data-was-inert', ''); }
      });
      _trapHandler = function(e) { if (e.key === 'Tab') e.preventDefault(); };
      document.addEventListener('keydown', _trapHandler);
    };
    window.closeModal = function () {
      if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
      document.querySelectorAll('[data-was-inert]').forEach(el => { el.removeAttribute('inert'); el.removeAttribute('data-was-inert'); });
      modal.classList.remove('show');
      document.body.style.overflow = '';
      setTimeout(() => { modal.style.display = 'none'; }, 100);
      if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
    };
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }
});
window.addEventListener('pageshow', () => {
  const isNuit = localStorage.getItem('modeNuit') === 'true';
  document.body.classList.toggle('nuit', isNuit);
  const btn = document.getElementById('toggle-mode');
  if (btn) btn.textContent = isNuit ? '🌙' : '☀️';
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};