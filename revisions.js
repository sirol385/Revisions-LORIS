function toggleMode() {
    const btn = document.getElementById("toggle-mode");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    if (localStorage.getItem("modeNuit") === "true") {
        document.body.classList.add("nuit");
        if (h2) h2.classList.add("nuit");
        if (p) p.classList.add("nuit");
        btn.classList.add("nuit");
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
    btn.addEventListener("click", function() {
        const isNuit = !document.body.classList.contains("nuit");
        document.body.classList.toggle("nuit");
        if (h2) h2.classList.toggle("nuit");
        if (p) p.classList.toggle("nuit");
        btn.classList.toggle("nuit");
        btn.textContent = isNuit ? "🌙" : "☀️";
        localStorage.setItem("modeNuit", isNuit);
    });
}
toggleMode();