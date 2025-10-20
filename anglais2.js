const mots = {
  "A la fin des": "late",
  "Au début des": "early",
  "Jeunesse": "youth",
  "Valeurs": "values",
  "Règles": "rules",
  "Témoin": "witness",
  "Laid": "ugly",
  "Déranger": "disturb",
  "Interrompre": "disrupt",
  "Complaisance": "complacency",
  "Déclaration": "statement",
  "Élan": "impulse",
  "Outrager": "outrage",
  "Leur propre": "their own",
  "Carton": "cardboard",
  "Manche": "sleeve",
  "Expérimenter": "experiment",
  "Sortie": "release",
  "Impliquer": "involve",
  "Variété": "variety",
  "Croyances": "beliefs",
  "Inclure": "include",
  "Mécontent": "dissatisfied",
  "Rejeter": "reject",
  "Principal": "mainstream",
  "Corrompre": "corrupt",
  "Imparfait": "flawed",
  "Armes": "weapons",
  "Rechercher": "seek",
  "Sens": "meaning"
};
const preterits = {
  "be": "was/were",
  "bear":"bore",
  "become":"became",
  "begin":"began",
  "bet":"bet",
  "bite":"bit",
  "blow":"blew",
  "break":"broke",
  "bring":"brought",
  "build":"built",
  "burn":"burnt",
  "buy":"bought",
  "catch":"caught",
  "choose":"chose",
  "come": "came",
  "cost":"cost",
  "cut":"cut",
  "do":"did",
  "draw": "drew",
  "dream":"dreamt",
  "drink": "drank",
  "drive": "drove",
  "eat": "ate",
  "fall":"fell",
  "feel": "felt",
  "fight":"fought",
  "find":"found",
  "fly": "flew",
  "forget": "forgot",
  "forgive":"forgave",
  "get":"got",
  "give":"gave",
  "go":"went",
  "have":"had",
  "hear":"heard",
  "keep":"kept",
  "learn":"learnt",
  "leave":"left",
  "know":"knew",
  "lose":"lost",
  "make":"made",
  "meet":"met",
  "read":"read",
  "ring":"rang",
  "run":"ran",
  "say":"said",
  "see":"saw",
  "sell":"sold",
  "sit":"sat",
  "sleep":"slept",
  "steal":"stole",
  "swim":"swam",
  "take":"took",
  "think":"thought",
  "write": "wrote",
  "wear":"wore"
};
let dataset = "mots";
const datasetSelect = document.getElementById("dataset");
let listeMots = [];
let listePreterits = [];
let mode = "fr-en";
let index = 0;
let stats = {};
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const startBtn = document.getElementById("start");
const validateBtn = document.getElementById("validate");
const modeSelect = document.getElementById("mode");
const wordStats = document.getElementById("word-stats");
const ongletAnglais = document.getElementById("onglet-anglais");
const quiz = document.getElementById("quiz");
startBtn.addEventListener("click", () => {
  dataset = datasetSelect ? datasetSelect.value : "mots";
  mode = modeSelect.value;
  document.getElementById("controls").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("word-stats").classList.remove("hidden");
  if (ongletAnglais) ongletAnglais.classList.add("hidden");
  if (quiz) quiz.classList.remove("hidden");
  if (answer) answer.classList.remove("hidden");
  if (validateBtn) validateBtn.classList.remove("hidden");
  initGame();
});
function initGame() {
    stats = {};
    feedback.textContent = "";
    if (mode === "preterit") {
        listeMots = Object.entries(preterits).map(([infinitif, preterit]) => ({
            infinitif,
            preterit,
            type: "preterit"
        }));
    } else if (mode === "aléatoire") {
        const motsAlea = Object.entries(mots)
            .map(([fr, en]) => [
                { fr, en, type: "fr-en" },
                { fr, en, type: "en-fr" }
            ]).flat();
        
        const preteritsAlea = Object.entries(preterits)
            .map(([infinitif, preterit]) => ({
                infinitif,
                preterit,
                type: "preterit"
            }));
            
        listeMots = [...motsAlea, ...preteritsAlea];
    } else {
        listeMots = Object.entries(mots).map(([fr, en]) => ({ fr, en, type: mode }));
    }
    for (let i = listeMots.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listeMots[i], listeMots[j]] = [listeMots[j], listeMots[i]];
    }
    index = 0;
    renderStats();
    nextWord();
}
function nextWord() {
    if (index >= listeMots.length) {
        const mauvais = listeMots.filter(item => {
            const key = item.type === "preterit" ? item.infinitif : (item.fr || item.infinitif);
            return stats[key]?.bad > 0;
        });
        if (mauvais.length > 0) {
            listeMots = mauvais;
            index = 0;
            feedback.textContent = "On recommence les mots mal traduits ! 💪";
        } else {
            feedback.textContent = "Bravo ! Tu as tout réussi 🎉";
            return;
        }
    }
    const item = listeMots[index];
    if (item.type === "preterit") {
        question.textContent = `${item.infinitif} → Prétérit ?`;
    } else {
        question.textContent = item.type === "fr-en" ? item.fr : item.en;
    }
    answer.value = "";
    answer.focus();
}
validateBtn.addEventListener("click", checkAnswer);
answer.addEventListener("keydown", e => {
  if (e.key === "Enter") checkAnswer();
});
function checkAnswer() {
    const item = listeMots[index];
    let key, bonneRep;
    if (item.type === "preterit") {
        key = item.infinitif;
        bonneRep = item.preterit;
    } else {
        key = item.fr;
        bonneRep = item.type === "fr-en" ? item.en : item.fr;
    }
    const rep = answer.value.trim().toLowerCase();
    if (!stats[key]) stats[key] = { good: 0, bad: 0 };
    let delay = 2000;
    if (rep === bonneRep.toLowerCase()) {
        feedback.textContent = "✅ Bonne réponse !";
        feedback.style.color = "limegreen";
        stats[key].good++;
        delay = 2000;
    } else {
        feedback.textContent = `❌ Mauvaise réponse. C'était "${bonneRep}".`;
        feedback.style.color = document.body.classList.contains("nuit") ? "red" : "darkred";
        stats[key].bad++;
        delay = 4000;
    }
    renderStats();
    index++;
    setTimeout(() => {
        feedback.textContent = "";
        nextWord();
    }, delay);
}
function renderStats() {
  const usePreterits =
    dataset === "preterits" ||
    dataset === "preterit" ||
    (Array.isArray(listeMots) && listeMots.some(item => item && item.type === "preterit"));
  const entries = usePreterits ? Object.entries(preterits) : Object.entries(mots);
  wordStats.innerHTML = entries
    .map(([k]) => {
      const s = stats[k] || { good: 0, bad: 0 };
      return `
        <div class="word-item">
          <span>${k}</span>
          <span>
            <span class="good">+${s.good}</span> /
            <span class="bad">-${s.bad}</span>
          </span>
        </div>`;
    })
    .join("");
}
function toggleMode() {
    const btn = document.getElementById("toggle-mode");
    const h1 = document.querySelector("h1");
    if (localStorage.getItem("modeNuit") === "true") {
        document.body.classList.add("nuit");
        if (h1) h1.classList.add("nuit");
        if (wordStats) wordStats.classList.add("nuit");
        if (quiz) quiz.classList.add("nuit");
        if (answer) answer.classList.add("nuit");
        if (validateBtn) validateBtn.classList.add("nuit");
        if (feedback) feedback.classList.add("nuit");
        if (startBtn) startBtn.classList.add("nuit");
        btn.classList.add("nuit");
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
    btn.addEventListener("click", function() {
        const isNuit = !document.body.classList.contains("nuit");
        document.body.classList.toggle("nuit");
        if (h1) h1.classList.toggle("nuit");
        if (wordStats) wordStats.classList.toggle("nuit");
        if (quiz) quiz.classList.toggle("nuit");
        if (answer) answer.classList.toggle("nuit");
        if (validateBtn) validateBtn.classList.toggle("nuit");
        if (feedback) feedback.classList.toggle("nuit");
        if (startBtn) startBtn.classList.toggle("nuit");
        btn.classList.toggle("nuit");
        btn.textContent = isNuit ? "🌙" : "☀️";
        localStorage.setItem("modeNuit", isNuit);
    });
}
toggleMode();