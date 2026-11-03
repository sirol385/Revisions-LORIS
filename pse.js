const tabs = {
  tab_A9: [
    { title: "Cours élève A9", file: "Fichiers-PDF/PSE_A9_Cours_Eleve.pdf" },
    { title: "Cours corrigé A9", file: "Fichiers-PDF/PSE_A9_Cours_Corrige.pdf" },
    { title: "Fiche synthèse A9", file: "Fichiers-PDF/PSE_A9_Fiche_synthese_corrige.pdf" }],
  tab_B5: [
    { title: "Cours élève B5", file: "Fichiers-PDF/PSE_B5_Cours_Eleve.pdf" },
    { title: "Cours corrigé B5", file: "Fichiers-PDF/PSE_B5_Cours_Corrige.pdf" }],
  tab_C7: [
    { title: "Cours élève C7", file: "Fichiers-PDF/PSE_C7_Cours_Eleve.pdf" },
    { title: "Cours corrigé C7", file: "Fichiers-PDF/PSE_C7_Cours_Corrige.pdf" }],
  tab_C8: [
    { title: "Cours élève C8", file: "Fichiers-PDF/PSE_C8_Cours_Eleve.pdf" },
    { title: "Cours corrigé C8", file: "Fichiers-PDF/PSE_C8_Cours_Corrige.pdf" }],
  tab_C9: [
    { title: "Cours élève C9", file: "Fichiers-PDF/PSE_C9_Cours_Eleve.pdf" },
    { title: "Cours corrigé C9", file: "Fichiers-PDF/PSE_C9_Cours_Corrige.pdf" }],
  tab_C10: [
    { title: "Cours élève C10", file: "Fichiers-PDF/PSE_C10_Cours_Eleve.pdf" },
    { title: "Cours corrigé C10", file: "Fichiers-PDF/PSE_C10_Cours_Corrige.pdf" }],
  tab_C11: [
    { title: "Cours élève C11", file: "Fichiers-PDF/PSE_C11_Cours_Eleve.pdf" },
    { title: "Cours corrigé C11", file: "Fichiers-PDF/PSE_C11_Cours_Corrige.pdf" },
    { title: "Fiche synthèse C11", file: "Fichiers-PDF/PSE_C11_Fiche_synthese_corrige.pdf" }],
  tab_C12: [
    { title: "Fiche synthèse C12", file: "Fichiers-PDF/PSE_C12_Fiche_synthese_corrige.pdf" }]};
const titresOnglets = {
  tab_A9: "A9 – La sécurité alimentaire",
  tab_B5: "B5 – Les ressources en énergie et le développement durable",
  tab_C7: "C7 – Le suivi de la santé au travail",
  tab_C8: "C8 – Accidents du travail et maladies professionnelles",
  tab_C9: "C9 – Les risques psychosociaux",
  tab_C10: "C10 – Les risques liés à l'activité physique",
  tab_C11: "C11 – L'analyse d'une situation de travail",
  tab_C12: "C12 – L'égalité du traitement au travail",};
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
    if (!btn) return;
    if (localStorage.getItem("modeNuit") === "true") {
        document.body.classList.add("nuit");
        btn.classList.add("nuit");
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
    btn.addEventListener("click", function() {
        const isNuit = !document.body.classList.contains("nuit");
        document.body.classList.toggle("nuit");
        btn.classList.toggle("nuit");
        btn.textContent = isNuit ? "🌙" : "☀️";
        localStorage.setItem("modeNuit", isNuit);
    });
}
function setupModal() {
  const modal = document.getElementById('mentionsModal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.close-btn');
  let _triggerEl = null, _trapHandler = null;
  window.openModal = function () {
    _triggerEl = document.activeElement;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.querySelector('.retour-button').style.filter = 'blur(3px)';
    document.querySelector('.retour-button').style.opacity = '0.4';
    requestAnimationFrame(() => modal.classList.add('show'));
    document.querySelectorAll('body > *').forEach(el => {
      if (el !== modal && !el.contains(modal)) {
        el.setAttribute('inert', '');
        el.setAttribute('data-was-inert', '');
      }
    });
    _trapHandler = function (e) { if (e.key === 'Tab') e.preventDefault(); };
    document.addEventListener('keydown', _trapHandler);
  };
  window.closeModal = function () {
    if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
    document.querySelectorAll('[data-was-inert]').forEach(el => {
      el.removeAttribute('inert');
      el.removeAttribute('data-was-inert');
    });
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.querySelector('.retour-button').style.filter = '';
    document.querySelector('.retour-button').style.opacity = '';
    setTimeout(() => { modal.style.display = 'none'; }, 100);
    if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
  };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
}
function loadTab(tabName) {
  const items = tabs[tabName];
  if (!items) return;
  content.innerHTML = "";
  if (titresOnglets[tabName]) {
    const titreCours = document.createElement("h2");
    titreCours.textContent = titresOnglets[tabName];
    titreCours.style.textAlign = "center";
    titreCours.style.marginBottom = "1.5rem";
    content.appendChild(titreCours);
  }
  items.forEach(item => {
    const h2 = document.createElement("h2");
    h2.textContent = item.title;
    const iframe = document.createElement("iframe");
    iframe.className = "viewer";
    iframe.src = item.file;
    const block = document.createElement("div");
    block.className = "pdf-block";
    block.appendChild(h2);
    block.appendChild(iframe);
    content.appendChild(block);
  });
}
function loadTab(tabName) {
  const items = tabs[tabName];
  if (!items) return;
  content.innerHTML = "";
  items.forEach(item => {
    const h2 = document.createElement("h2");
    h2.textContent = item.title;
    const iframe = document.createElement("iframe");
    iframe.className = "viewer";
    iframe.src = item.file;
const block = document.createElement("div");
block.className = "pdf-block";
block.appendChild(h2);
block.appendChild(iframe);
content.appendChild(block);
  });
}
const content = document.getElementById("content");
const buttons = document.querySelectorAll(".tab-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadTab(btn.dataset.tab);
  });
});
buttons[0].classList.add("active");
loadTab(buttons[0].dataset.tab);
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
document.addEventListener('DOMContentLoaded', () => {
    toggleMode();
    updateRetourButton();
    setupModal();
});