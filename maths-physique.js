const pdfParOnglet = {
  m1: {
    titre: "♾️ Suites géométriques",
    fichier: "Fichiers-PDF/MATHS_S1_Suites_eleve.pdf"},
  m2: {
    titre: "🧮 Fonctions exponentielles et logarithme décimal",
    fichier: "Fichiers-PDF/MATHS_S2_Logarithme_eleve.pdf"},
  m3: {
    titre: "🎲 Probabilités",
    fichier: "Fichiers-PDF/MATHS_S3_Probabilites_eleve.pdf"},
  m4: {
    titre: "📈 Fonction polynôme de degré 3",
    fichier: "Fichiers-PDF/MATHS_S4_Polynome_eleve.pdf"},
  m5: {
    titre: "📊 Ajustements statistiques",
    fichier: "Fichiers-PDF/MATHS_S5_Statistiques_eleve.pdf"},
  p1: {
    titre: "🧪 Prévoir une réaction d'oxydoréduction",
    fichier: "Fichiers-PDF/PHYSIQUE_S1_Oxydoreduction_eleve.pdf"},
  p2: {
    titre: "🔋 Piles et accumulateurs",
    fichier: "Fichiers-PDF/PHYSIQUE_S2_Piles_eleve.pdf"},
  p3: {
    titre: "🔌 Redresser un courant alternatif",
    fichier: "Fichiers-PDF/PHYSIQUE_S3_Redressement_eleve.pdf"},
  p4: {
    titre: "⚡ Le réseau triphasé",
    fichier: "Fichiers-PDF/PHYSIQUE_S4_Triphase_eleve.pdf"},
  p5: {
    titre: "⚙️ Les moteurs électriques",
    fichier: "Fichiers-PDF/PHYSIQUE_S5_Moteurs_eleve.pdf"},};
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
  function applyMode(isNuit) {
    document.body.classList.toggle("nuit", isNuit);
    btn.textContent = isNuit ? "🌙" : "☀️";
    localStorage.setItem("modeNuit", isNuit);
  }
  const savedMode = localStorage.getItem("modeNuit") === "true";
  applyMode(savedMode);
  btn.addEventListener("click", () => {
    applyMode(!document.body.classList.contains("nuit"));
  });
}
function updateFavicon(tabId) {
  const favicon = document.getElementById("favicon");
  if (!favicon) return;
  if (tabId.startsWith("m")) {
    favicon.href = "maths.png";
  } else if (tabId.startsWith("p")) {
    favicon.href = "physique.png";
  }
}
function afficherPDF(tabId) {
  document.querySelectorAll("nav button[data-tab]").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`nav button[data-tab="${tabId}"]`);
  if (activeBtn) activeBtn.classList.add("active");
  const data = pdfParOnglet[tabId];
  if (!data) return;
  content.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = data.titre;
  h2.style.textAlign = "center";
  const iframe = document.createElement("iframe");
  iframe.className = "viewer";
  iframe.src = data.fichier;
  const block = document.createElement("div");
  block.className = "pdf-block";
  block.appendChild(h2);
  block.appendChild(iframe);
  content.appendChild(block);
  if (data.fichier2) {
  const iframe2 = document.createElement("iframe");
  iframe2.className = "viewer";
  iframe2.src = data.fichier2;
  const block2 = document.createElement("div");
  block2.className = "pdf-block";
  block2.appendChild(iframe2);
  content.appendChild(block2);
}
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
const content = document.getElementById("content");
document.querySelectorAll("nav button[data-tab]").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".tab").forEach(s => s.classList.remove("active"));
    document.getElementById(tab)?.classList.add("active");
    updateFavicon(tab);
  });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
document.querySelectorAll("nav button[data-tab]").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    afficherPDF(tab);
    updateFavicon(tab);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  toggleMode();
  updateRetourButton();
  setupModal();
  afficherPDF("m1");
  document.querySelector('nav button[data-tab="m1"]')?.classList.add("active"); 
  updateFavicon("m1");
});