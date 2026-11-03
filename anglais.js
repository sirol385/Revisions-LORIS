const listes = {
hippies: {
  "A la fin des": "late","Au début des": "early","Jeunesse": "youth","Valeurs": "values","Règles": "rules","Témoin": "witness",
  "Laid": "ugly","Déranger": "disturb","Interrompre": "disrupt","Complaisance": "complacency","Déclaration": "statement",
  "Élan": "impulse","Outrager": "outrage","Leur propre": "their own","Carton": "cardboard","Manche": "sleeve",
  "Expérimenter": "experiment","Sortie": "release","Impliquer": "involve","Variété": "variety","Croyances": "beliefs",
  "Inclure": "include","Mécontent": "dissatisfied","Rejeter": "reject","Principal": "mainstream","Corrompre": "corrupt",
  "Imparfait": "flawed","Armes": "weapons","Rechercher": "seek","Sens": "meaning"},
verbes: {
  "Respecter, se conformer à": { infinitif: "abide", preterit: "abode", participe: "abode" },
  "Survenir": { infinitif: "arise", preterit: "arose", participe: "arisen" },
  "Se réveiller": { infinitif: "awake", preterit: "awoke", participe: "awoken" },
  "Être": { infinitif: "be", preterit: "was/were", participe: "been" },
  "Porter, supporter, naître": { infinitif: "bear", preterit: "bore", participe: "borne/born" },
  "Battre": { infinitif: "beat", preterit: "beat", participe: "beaten" },
  "Devenir": { infinitif: "become", preterit: "became", participe: "become" },
  "Engendrer": { infinitif: "beget", preterit: "begat/begot", participe: "begotten" },
  "Commencer": { infinitif: "begin", preterit: "began", participe: "begun" },
  "Plier, se courber": { infinitif: "bend", preterit: "bent", participe: "bent" },
  "Parier": { infinitif: "bet", preterit: "bet", participe: "bet" },
  "Offrir": { infinitif: "bid", preterit: "bid/bade", participe: "bid/bidden" },
  "Mordre": { infinitif: "bite", preterit: "bit", participe: "bitten" },
  "Saigner": { infinitif: "bleed", preterit: "bled", participe: "bled" },
  "Souffler, gonfler": { infinitif: "blow", preterit: "blew", participe: "blown" },
  "Casser": { infinitif: "break", preterit: "broke", participe: "broken" },
  "Élever (des animaux)": { infinitif: "breed", preterit: "bred", participe: "bred" },
  "Apporter": { infinitif: "bring", preterit: "brought", participe: "brought" },
  "Diffuser, émettre": { infinitif: "broadcast", preterit: "broadcast", participe: "broadcast" },
  "Construire": { infinitif: "build", preterit: "built", participe: "built" },
  "Brûler": { infinitif: "burn", preterit: "burnt/burned", participe: "burnt/burned" },
  "Éclater": { infinitif: "burst", preterit: "burst", participe: "burst" },
  "Acheter": { infinitif: "buy", preterit: "bought", participe: "bought" },
  "Pouvoir": { infinitif: "can", preterit: "could", participe: "could" },
  "Jeter, distribuer (rôles)": { infinitif: "cast", preterit: "cast", participe: "cast" },
  "Attraper": { infinitif: "catch", preterit: "caught", participe: "caught" },
  "Gronder": { infinitif: "chide", preterit: "chid/chode", participe: "chid/chidden" },
  "Choisir": { infinitif: "choose", preterit: "chose", participe: "chosen" },
  "S'accrocher": { infinitif: "cling", preterit: "clung", participe: "clung" },
  "Habiller, recouvrir": { infinitif: "clothe", preterit: "clad/clothed", participe: "clad/clothed" },
  "Venir": { infinitif: "come", preterit: "came", participe: "come" },
  "Coûter": { infinitif: "cost", preterit: "cost", participe: "cost" },
  "Ramper": { infinitif: "creep", preterit: "crept", participe: "crept" },
  "Couper": { infinitif: "cut", preterit: "cut", participe: "cut" },
  "Distribuer": { infinitif: "deal", preterit: "dealt", participe: "dealt" },
  "Creuser": { infinitif: "dig", preterit: "dug", participe: "dug" },
  "Plonger": { infinitif: "dive", preterit: "dived", participe: "dived/dove" },
  "Faire": { infinitif: "do", preterit: "did", participe: "done" },
  "Dessiner, tirer": { infinitif: "draw", preterit: "drew", participe: "drawn" },
  "Rêver": { infinitif: "dream", preterit: "dreamt/dreamed", participe: "dreamt/dreamed" },
  "Boire": { infinitif: "drink", preterit: "drank", participe: "drunk" },
  "Conduire": { infinitif: "drive", preterit: "drove", participe: "driven" },
  "Habiter": { infinitif: "dwell", preterit: "dwelt", participe: "dwelt/dwelled" },
  "Manger": { infinitif: "eat", preterit: "ate", participe: "eaten" },
  "Tomber": { infinitif: "fall", preterit: "fell", participe: "fallen" },
  "Nourrir": { infinitif: "feed", preterit: "fed", participe: "fed" },
  "Se sentir, ressentir": { infinitif: "feel", preterit: "felt", participe: "felt" },
  "Se battre": { infinitif: "fight", preterit: "fought", participe: "fought" },
  "Trouver": { infinitif: "find", preterit: "found", participe: "found" },
  "S'enfuir": { infinitif: "flee", preterit: "fled", participe: "fled" },
  "Lancer": { infinitif: "fling", preterit: "flung", participe: "flung" },
  "Voler": { infinitif: "fly", preterit: "flew", participe: "flown" },
  "Interdire": { infinitif: "forbid", preterit: "forbade", participe: "forbidden" },
  "Prévoir": { infinitif: "forecast", preterit: "forecast", participe: "forecast" },
  "Prévoir, pressentir": { infinitif: "foresee", preterit: "foresaw", participe: "foreseen" },
  "Oublier": { infinitif: "forget", preterit: "forgot", participe: "forgotten/forgot" },
  "Pardonner": { infinitif: "forgive", preterit: "forgave", participe: "forgiven" },
  "Abandonner": { infinitif: "forsake", preterit: "forsook", participe: "forsaken" },
  "Geler": { infinitif: "freeze", preterit: "froze", participe: "frozen" },
  "Obtenir": { infinitif: "get", preterit: "got", participe: "gotten/got" },
  "Donner": { infinitif: "give", preterit: "gave", participe: "given" },
  "Aller": { infinitif: "go", preterit: "went", participe: "gone" },
  "Moudre, opprimer": { infinitif: "grind", preterit: "ground", participe: "ground" },
  "Grandir, pousser": { infinitif: "grow", preterit: "grew", participe: "grown" },
  "Tenir, pendre": { infinitif: "hang", preterit: "hung", participe: "hung" },
  "Avoir": { infinitif: "have", preterit: "had", participe: "had" },
  "Entendre": { infinitif: "hear", preterit: "heard", participe: "heard" },
  "Cacher": { infinitif: "hide", preterit: "hid", participe: "hidden" },
  "Taper, appuyer": { infinitif: "hit", preterit: "hit", participe: "hit" },
  "Tenir": { infinitif: "hold", preterit: "held", participe: "held" },
  "Blesser": { infinitif: "hurt", preterit: "hurt", participe: "hurt" },
  "Garder": { infinitif: "keep", preterit: "kept", participe: "kept" },
  "S'agenouiller": { infinitif: "kneel", preterit: "knelt/knelled", participe: "knelt/kneeled" },
  "Connaître, savoir": { infinitif: "know", preterit: "knew", participe: "known" },
  "Poser": { infinitif: "lay", preterit: "laid", participe: "laid" },
  "Mener, guider": { infinitif: "lead", preterit: "led", participe: "led" },
  "S'incliner, se pencher": { infinitif: "lean", preterit: "leant/leaned", participe: "leant/leaned" },
  "Sauter, bondir": { infinitif: "leap", preterit: "leapt/leaped", participe: "leapt/leaped" },
  "Apprendre": { infinitif: "learn", preterit: "learnt", participe: "learnt" },
  "Laisser, quitter, partir": { infinitif: "leave", preterit: "left", participe: "left" },
  "Prêter": { infinitif: "lend", preterit: "lent", participe: "lent" },
  "Permettre, louer": { infinitif: "let", preterit: "let", participe: "let" },
  "S'allonger": { infinitif: "lie", preterit: "lay", participe: "lain" },
  "Allumer": { infinitif: "light", preterit: "lit/lighted", participe: "lit/lighted" },
  "Perdre": { infinitif: "lose", preterit: "lost", participe: "lost" },
  "Fabriquer": { infinitif: "make", preterit: "made", participe: "made" },
  "Signifier": { infinitif: "mean", preterit: "meant", participe: "meant" },
  "Rencontrer": { infinitif: "meet", preterit: "met", participe: "met" },
  "Tondre": { infinitif: "mow", preterit: "mowed", participe: "mowed/mown" },
  "Compenser": { infinitif: "offset", preterit: "offset", participe: "offset" },
  "Surmonter": { infinitif: "overcome", preterit: "overcame", participe: "overcome" },
  "Prendre part à": { infinitif: "partake", preterit: "partook", participe: "partaken" },
  "Payer": { infinitif: "pay", preterit: "paid", participe: "paid" },
  "Supplier, plaider": { infinitif: "plead", preterit: "pled/pleaded", participe: "pled/pleaded" },
  "Programmer": { infinitif: "preset", preterit: "preset", participe: "preset" },
  "Prouver": { infinitif: "prove", preterit: "proved", participe: "proven/proved" },
  "Mettre": { infinitif: "put", preterit: "put", participe: "put" },
  "Quitter": { infinitif: "quit", preterit: "quit", participe: "quit" },
  "Lire": { infinitif: "read", preterit: "read", participe: "read" },
  "Relayer": { infinitif: "relay", preterit: "relaid", participe: "relaid" },
  "Déchirer": { infinitif: "rend", preterit: "rent", participe: "rent" },
  "Débarrasser": { infinitif: "rid", preterit: "rid", participe: "rid" },
  "Monter (vélo, cheval)": { infinitif: "ride", preterit: "rode", participe: "ridden" },
  "Sonner, téléphoner": { infinitif: "ring", preterit: "rang", participe: "rung" },
  "Lever": { infinitif: "rise", preterit: "rose", participe: "risen" },
  "Courir": { infinitif: "run", preterit: "ran", participe: "run" },
  "Scier": { infinitif: "saw", preterit: "saw/sawed", participe: "sawn/sawed" },
  "Dire": { infinitif: "say", preterit: "said", participe: "said" },
  "Voir": { infinitif: "see", preterit: "saw", participe: "seen" },
  "Chercher": { infinitif: "seek", preterit: "sought", participe: "sought" },
  "Vendre": { infinitif: "sell", preterit: "sold", participe: "sold" },
  "Envoyer": { infinitif: "send", preterit: "sent", participe: "sent" },
  "Fixer": { infinitif: "set", preterit: "set", participe: "set" },
  "Secouer": { infinitif: "shake", preterit: "shook", participe: "shaken" },
  "Répandre, laisser tomber": { infinitif: "shed", preterit: "shed", participe: "shed" },
  "Briller": { infinitif: "shine", preterit: "shone", participe: "shone" },
  "Chausser": { infinitif: "shoe", preterit: "shod", participe: "shod" },
  "Tirer, fusiller": { infinitif: "shoot", preterit: "shot", participe: "shot" },
  "Montrer": { infinitif: "show", preterit: "showed", participe: "shown" },
  "Fermer": { infinitif: "shut", preterit: "shut", participe: "shut" },
  "Chanter": { infinitif: "sing", preterit: "sang", participe: "sung" },
  "Couler": { infinitif: "sink", preterit: "sank/sunk", participe: "sunk/sunken" },
  "S'asseoir": { infinitif: "sit", preterit: "sat", participe: "sat" },
  "Tuer": { infinitif: "slay", preterit: "slew", participe: "slain" },
  "Dormir": { infinitif: "sleep", preterit: "slept", participe: "slept" },
  "Glisser": { infinitif: "slide", preterit: "slid", participe: "slid" },
  "S'en aller furtivement": { infinitif: "slink", preterit: "slunk/slinked", participe: "slunk/slinked" },
  "Fendre": { infinitif: "slit", preterit: "slit", participe: "slit" },
  "Sentir": { infinitif: "smell", preterit: "smelt", participe: "smelt" },
  "Semer": { infinitif: "sow", preterit: "sowed", participe: "sown/sowed" },
  "Parler": { infinitif: "speak", preterit: "spoke", participe: "spoken" },
  "Aller vite": { infinitif: "speed", preterit: "sped", participe: "sped" },
  "Épeler, orthographier": { infinitif: "spell", preterit: "spelt", participe: "spelt" },
  "Dépenser, passer du temps": { infinitif: "spend", preterit: "spent", participe: "spent" },
  "Renverser": { infinitif: "spill", preterit: "spilt/spilled", participe: "spilt/spilled" },
  "Tourner, faire tourner": { infinitif: "spin", preterit: "spun", participe: "spun" },
  "Cracher": { infinitif: "spit", preterit: "spat/spit", participe: "spat/spit" },
  "Fendre": { infinitif: "split", preterit: "split", participe: "split" },
  "Gâcher, gâter": { infinitif: "spoil", preterit: "spoilt", participe: "spoilt" },
  "Répandre": { infinitif: "spread", preterit: "spread", participe: "spread" },
  "Surgir, jaillir, bondir": { infinitif: "spring", preterit: "sprang", participe: "sprung" },
  "Être debout": { infinitif: "stand", preterit: "stood", participe: "stood" },
  "Voler, dérober": { infinitif: "steal", preterit: "stole", participe: "stolen" },
  "Coller": { infinitif: "stick", preterit: "stuck", participe: "stuck" },
  "Piquer": { infinitif: "sting", preterit: "stung", participe: "stung" },
  "Puer": { infinitif: "stink", preterit: "stank", participe: "stunk" },
  "Éparpiller": { infinitif: "strew", preterit: "strewed", participe: "strewn/strewed" },
  "Frapper": { infinitif: "strike", preterit: "struck", participe: "stricken/struck" },
  "S'efforcer": { infinitif: "strive", preterit: "strove", participe: "striven" },
  "Jurer": { infinitif: "swear", preterit: "swore", participe: "sworn" },
  "Suer": { infinitif: "sweat", preterit: "sweat/sweated", participe: "sweat/sweated" },
  "Balayer": { infinitif: "sweep", preterit: "swept", participe: "swept" },
  "Gonfler, enfler": { infinitif: "swell", preterit: "swelled/sweated", participe: "swollen" },
  "Nager": { infinitif: "swim", preterit: "swam", participe: "swum" },
  "Se balancer": { infinitif: "swing", preterit: "swung", participe: "swung" },
  "Prendre": { infinitif: "take", preterit: "took", participe: "taken" },
  "Enseigner": { infinitif: "teach", preterit: "taught", participe: "taught" },
  "Déchirer": { infinitif: "tear", preterit: "tore", participe: "torn" },
  "Dire, raconter": { infinitif: "tell", preterit: "told", participe: "told" },
  "Penser": { infinitif: "think", preterit: "thought", participe: "thought" },
  "Prospérer": { infinitif: "thrive", preterit: "throve/thrived", participe: "thriven/thrived" },
  "Jeter": { infinitif: "throw", preterit: "threw", participe: "thrown" },
  "Enfoncer": { infinitif: "thrust", preterit: "thrust", participe: "thrust" },
  "Piétiner quelque chose": { infinitif: "tread", preterit: "trod", participe: "trodden" },
  "Composer": { infinitif: "typeset", preterit: "typeset", participe: "typeset" },
  "Subir": { infinitif: "undergo", preterit: "underwent", participe: "undergone" },
  "Comprendre": { infinitif: "understand", preterit: "understood", participe: "understood" },
  "Réveiller": { infinitif: "wake", preterit: "woke", participe: "woken" },
  "Porter (avoir sur soi)": { infinitif: "wear", preterit: "wore", participe: "worn" },
  "Pleurer": { infinitif: "weep", preterit: "wept", participe: "wept" },
  "Mouiller": { infinitif: "wet", preterit: "wet/wetted", participe: "wet/wetted" },
  "Gagner": { infinitif: "win", preterit: "won", participe: "won" },
  "Enrouler, remonter": { infinitif: "wind", preterit: "wound", participe: "wound" },
  "Se retirer": { infinitif: "withdraw", preterit: "withdrew", participe: "withdrawn" },
  "Tordre": { infinitif: "wring", preterit: "wrung", participe: "wrung" },
  "Écrire": { infinitif: "write", preterit: "wrote", participe: "written" }},
charles: {
  "je m’adresse":"I speak","sentiments":"feelings","chagrin":"sorrow","tout au long de sa vie":"throughout her life","être redevable":"owe",
  "dette":"debt","promesse":"promise","nous pleurons":"she is mourned","renouveler":"renew","chagrin personnel":"personal grief",
  "partager":"share","chef d’état":"head of state","à travers le monde":"across the world","profond":"deep","jurer":"pledge",
  "programme":"broadcast","dédier":"devote","engagement":"commitment","sa vie entière":	"her whole life","devoir":"duty",
  "fois":"times","tristesse et perte":"sadness and loss",},
henry: {
  "Ambitieux": "ambitious", "Calculateur": "calculating","Dépenser": "spend","Accumulateur": "accumulate","Conduire à": "lead",
  "C'est pourquoi": "therefore","En tout": "all in all","Se souvenir": "remember","Destin/sort": "fate","Chaque": "each",
  "Assez": "quite","Montrer": "show","Nommé": "entitled","Le plus proche": "the closest","Emprunter": "borrow",
  "Être en désaccord": "disagree with","Être à court de": "run out of","Vendre": "sell","Ensemble": "together","Construction": "building",
  "Flotte marchande": "merchant fleet","Richesse": "wealth","Commerce": "trade",}};
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
function loadListe(key) {
  mots = listes[key];
  listeMots = Object.entries(mots);
  index = 0;
  stats = {};
  processing = false;
  const content = document.getElementById("content");
  if (key === "verbes") {
    content.innerHTML = `
      <div id="mode-selector">
        <h2>Choisissez votre mode</h2>
        <button class="mode-btn" data-mode="fr-infinitif">Français → Infinitif</button>
        <button class="mode-btn" data-mode="infinitif-fr">Infinitif → Français</button>
        <button class="mode-btn" data-mode="fr-infinitif-random">Français → Infinitif (Aléatoire)</button>
        <button class="mode-btn" data-mode="fr-preterit">Français → Prétérit</button>
        <button class="mode-btn" data-mode="preterit-fr">Prétérit → Français</button>
        <button class="mode-btn" data-mode="fr-preterit-random">Français → Prétérit (Aléatoire)</button>
        <button class="mode-btn" data-mode="fr-participe">Français → Participe Passé</button>
        <button class="mode-btn" data-mode="participe-fr">Participe Passé → Français</button>
        <button class="mode-btn" data-mode="fr-participe-random">Français → Participe Passé (Aléatoire)</button>
        <a href="https://drive.google.com/drive/folders/1ODTCG0FIWr-8IkDS7ToZ5GunrVfkD5lm?usp=sharing" target="_blank" class="gdrive-link">📄 <span>Voir les cours sur Google Drive</span></a>
      </div>
    `;
  } else {
    const gdriveLinks = {
      hippies: "https://drive.google.com/drive/folders/1a6zdBkyjeBqP4S17XWtxM2rUOSX4PrCP?usp=sharing",
      charles: "https://drive.google.com/drive/folders/1UQ6EMvjAKk2VtQhH2lqF6a5qBnLhcwdx?usp=sharing",
      henry:   "https://drive.google.com/drive/folders/1C85iI2Nm3TtT8MEHM_NUFhAj7CzgAEqf?usp=sharing"
    };
    content.innerHTML = `
      <div id="mode-selector">
        <h2>Choisissez votre mode</h2>
        <button class="mode-btn" data-mode="fr-en">Français → Anglais</button>
        <button class="mode-btn" data-mode="en-fr">Anglais → Français</button>
        <button class="mode-btn" data-mode="fr-en-random">Français → Anglais (Aléatoire)</button>
        <a href="${gdriveLinks[key]}" target="_blank" class="gdrive-link">📄 <span>Voir les cours sur Google Drive</span></a>
      </div>
    `}
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.dataset.mode));
  });
}
function setupTabs() {
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadListe(btn.dataset.tab);
    });
  });
  document.querySelector('nav button[data-tab="hippies"]').classList.add("active");
}
function startQuiz(mode) {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div id="game">
      <div id="word-stats"></div>
      <div id="quiz">
        <p id="question"></p>
        <input type="text" id="answer" placeholder="Votre réponse..." autofocus>
        <div class="button-container">
          <button id="validate">Valider</button>
          <button id="restart">Recommencer</button>
        </div>
        <p id="feedback"></p>
      </div>
    </div>
  `;
  document.getElementById("validate").addEventListener("click", checkAnswer);
  document.getElementById("restart").addEventListener("click", () => {
    index = 0;
    listeMots = mode.includes('random')
      ? shuffleArray(Object.entries(mots))
      : Object.entries(mots);
    document.getElementById("feedback").textContent = "";
    nextWord();
  });
  document.getElementById("answer").addEventListener("keydown", e => {
    if (e.key === "Enter") checkAnswer();
  });
  window.currentMode = mode;
  if (mode.includes('random')) listeMots = shuffleArray(listeMots);
  renderStats();
  nextWord();
}
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function nextWord() {
  if (index >= listeMots.length) {
    const mauvais = listeMots.filter(([fr]) => stats[fr]?.bad > 0);
    if (mauvais.length > 0) {
      listeMots = mauvais;
      index = 0;
      document.getElementById("feedback").textContent = "On recommence les mots mal traduits 💪";
      setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        nextWord();
      }, 4000);
    } else {
      document.getElementById("feedback").textContent = "Bravo ! Tu as tout réussi 🎉";
      setTimeout(() => {
        document.getElementById("feedback").textContent = "";
      }, 5000);
    }
    return;
  }
  const [fr, en] = listeMots[index];
  const mode = window.currentMode || 'fr-en';
  const questionEl = document.getElementById("question");
  if (typeof en === 'object') {
    if (mode === 'fr-infinitif' || mode === 'fr-infinitif-random') {
      questionEl.textContent = fr;
      questionEl.dataset.answer = en.infinitif.toLowerCase();
    } else if (mode === 'infinitif-fr') {
      questionEl.textContent = en.infinitif;
      questionEl.dataset.answer = fr.toLowerCase();
    } else if (mode === 'fr-preterit' || mode === 'fr-preterit-random') {
      questionEl.textContent = fr;
      questionEl.dataset.answer = en.preterit.toLowerCase();
    } else if (mode === 'preterit-fr') {
      questionEl.textContent = en.preterit;
      questionEl.dataset.answer = fr.toLowerCase();
    } else if (mode === 'fr-participe' || mode === 'fr-participe-random') {
      questionEl.textContent = fr;
      questionEl.dataset.answer = en.participe.toLowerCase();
    } else if (mode === 'participe-fr') {
      questionEl.textContent = en.participe;
      questionEl.dataset.answer = fr.toLowerCase();
    }
  } else {
    if (mode === 'fr-en' || mode === 'fr-en-random') {
      questionEl.textContent = fr;
      questionEl.dataset.answer = en.toLowerCase();
    } else if (mode === 'en-fr') {
      questionEl.textContent = en;
      questionEl.dataset.answer = fr.toLowerCase();
    }
  }
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
}
function checkAnswer() {
  clearTimeout(feedbackTimer);
  const [fr] = listeMots[index];
  const rep = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const correctAnswer = document.getElementById("question").dataset.answer;
  if (!stats[fr]) stats[fr] = { good: 0, bad: 0 };
  let feedbackTimeout;
  if (rep === correctAnswer) {
    feedback.textContent = "✅ Bonne réponse !";
    feedback.style.color = "limegreen";
    stats[fr].good++;
    feedbackTimeout = 1500;
  } else {
    feedback.textContent = `❌ Mauvaise réponse : c'était "${correctAnswer}"`;
    feedback.style.color = "darkred";
    stats[fr].bad++;
    feedbackTimeout = 2500;
  }
  renderStats();
  index++;
  nextWord();
  feedbackTimer = setTimeout(() => {
    feedback.textContent = "";
  }, feedbackTimeout);
}
function renderStats() {
  const mode = window.currentMode || 'fr-en';
  document.getElementById("word-stats").innerHTML = Object.entries(mots)
    .map(([fr, en]) => {
      const s = stats[fr] || { good: 0, bad: 0 };
      let displayText = fr;
      if (typeof en === 'object') {
        if (mode === 'infinitif-fr')  displayText = en.infinitif;
        else if (mode === 'preterit-fr')  displayText = en.preterit;
        else if (mode === 'participe-fr') displayText = en.participe;
        else displayText = fr;
      } else if (mode === 'en-fr') {
        displayText = en;
      }
      return `
        <div class="word-item">
          <span>${displayText}</span>
          <span>
            <span class="good">+${s.good}</span> /
            <span class="bad">-${s.bad}</span>
          </span>
        </div>
      `;
    })
    .join("");
}
let mots = {};
let listeMots = [];
let index = 0;
let stats = {};
let feedbackTimer = null;
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-mode");
  function apply(isNuit) {
    document.body.classList.toggle("nuit", isNuit);
    btn.textContent = isNuit ? "🌙" : "☀️";
    localStorage.setItem("modeNuit", isNuit);
  }
  apply(localStorage.getItem("modeNuit") === "true");
  btn.addEventListener("click", () => apply(!document.body.classList.contains("nuit")));
  document.body.classList.add('loaded');
  const modal = document.getElementById('mentionsModal');
  if (modal) {
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
      document.querySelector('.retour-button').style.filter = '';
      document.querySelector('.retour-button').style.opacity = '';
      setTimeout(() => { modal.style.display = 'none'; }, 100);
      if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
    };
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
    document.querySelectorAll('footer a').forEach(link => {
      link.addEventListener('click', e => { e.preventDefault(); openModal(); });
    });
  }
  updateRetourButton();
  setupTabs();
  loadListe("hippies");
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};