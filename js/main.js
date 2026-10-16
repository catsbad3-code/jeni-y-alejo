const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

$("paraName").textContent = REGALO.para;
$("deName").textContent = REGALO.de;
$("songTitle").textContent = REGALO.cancion.titulo;
$("songArtist").textContent = REGALO.cancion.artista;
const audio = $("audio"), songBtn = $("songBtn");
function playSong(){ const p = audio.play(); if (p && p.catch) p.catch(() => {}); }
audio.addEventListener("play", () => { songBtn.classList.add("playing"); $("songState").textContent = "❚❚ Sonando… toca para pausar"; });
audio.addEventListener("pause", () => { songBtn.classList.remove("playing"); $("songState").textContent = "▶ Toca para escucharla"; });
songBtn.addEventListener("click", () => { audio.paused ? playSong() : audio.pause(); });

$("gallery").innerHTML = REGALO.fotos.map((f, i) => `
  <figure class="photo" tabindex="0" data-i="${i}"><div class="img">${f.src ? `<img src="${esc(f.src)}" alt="${esc(f.texto)}">` : "Tu foto aquí"}</div>
  <figcaption>${esc(f.texto)}</figcaption></figure>`).join("");
let lbI = 0;
const fotosCon = REGALO.fotos.filter(f => f.src);
function openLb(i){ if (!fotosCon.length) return; lbI = (i + fotosCon.length) % fotosCon.length; $("lbImg").src = fotosCon[lbI].src; $("lbImg").alt = fotosCon[lbI].texto; $("lbText").textContent = fotosCon[lbI].texto + " ♥"; $("lightbox").hidden = false; }
$("gallery").addEventListener("click", e => { const p = e.target.closest(".photo"); if (p) openLb(fotosCon.indexOf(REGALO.fotos[+p.dataset.i])); });
$("gallery").addEventListener("keydown", e => { const p = e.target.closest(".photo"); if (p && e.key === "Enter") openLb(fotosCon.indexOf(REGALO.fotos[+p.dataset.i])); });
$("lbClose").addEventListener("click", () => $("lightbox").hidden = true);
$("lbPrev").addEventListener("click", () => openLb(lbI - 1));
$("lbNext").addEventListener("click", () => openLb(lbI + 1));
$("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") $("lightbox").hidden = true; });

$("letter").innerHTML = REGALO.carta.map(p => `<p>${esc(p)}</p>`).join("") + `<p class="sign">${esc(REGALO.firma)}, ${esc(REGALO.de)}</p>`;

$("timeline").innerHTML = REGALO.momentos.map(m => `
  <li><time>${esc(m.fecha)}</time><h3>${esc(m.titulo)}</h3><p>${esc(m.texto)}</p></li>`).join("");

const start = new Date(REGALO.inicio + "T00:00:00");
const totalDays = Math.max(0, Math.floor((Date.now() - start) / 86400000));
$("since").textContent = "desde el " + start.toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" });
$("days").textContent = totalDays.toLocaleString("es");
$("foot").textContent = REGALO.para + " y " + REGALO.de + " ♥";

/* Abrir regalo */
const app = $("app");
app.classList.add("locked");
const TOQUES = 7;   // cuántos toques hacen falta para abrir el regalo
const frases = ["Sigue…", "Esto no es un perfil falso 😆", "Se está llenando de amor", "Ya casi, mi amor", "¡Falta muy poco!", "Uno más…"];
let toques = 0;
$("taps").innerHTML = "<i></i>".repeat(TOQUES);
const fill = document.querySelector(".heart-btn .fill");
$("heartBtn").addEventListener("click", () => {
  if (toques >= TOQUES) return;
  toques++;
  fill.style.transform = `scaleY(${toques / TOQUES})`;
  $("taps").children[toques - 1].classList.add("on");
  const b = $("heartBtn"); b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
  if (navigator.vibrate) try { navigator.vibrate(30); } catch (e) {}
  if (toques < TOQUES) { $("hint").textContent = frases[Math.min(toques - 1, frases.length - 1)]; return; }
  app.classList.add("opened");
  $("hint").textContent = "Has abierto tu regalo ♥";
  playSong();
  vib([80, 60, 80, 60, 200]);
  burst(40);
  setTimeout(() => { $("cover").hidden = true; app.classList.remove("locked"); app.style.paddingTop = "40px"; window.scrollTo(0, 0); countUp(); }, 1100);
});
function countUp(){
  const el = $("days"), t0 = performance.now(), dur = 1600;
  const step = now => { const k = Math.min(1, (now - t0) / dur); el.textContent = Math.round(totalDays * (1 - Math.pow(1 - k, 3))).toLocaleString("es"); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* Cuestionario */
let qi = 0;
function renderQ(){
  const p = REGALO.preguntas[qi];
  $("quiz").innerHTML = `<div class="progress">Pregunta ${qi + 1} de ${REGALO.preguntas.length}</div>
    <p class="q">${esc(p.q)}</p>
    <div class="opts">${p.opciones.map((o, i) => `<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>
    <p class="msg" id="msg"></p>`;
}
$("quiz").addEventListener("click", e => {
  const b = e.target.closest(".opt"); if (!b) return;
  const p = REGALO.preguntas[qi];
  if (+b.dataset.i === p.correcta) {
    b.classList.add("ok"); $("msg").textContent = "¡Sí! ♥";
    setTimeout(() => { qi++; if (qi < REGALO.preguntas.length) renderQ(); else finish(); }, 800);
  } else {
    b.classList.remove("no"); void b.offsetWidth; b.classList.add("no"); vib([60, 40, 60]);
    $("msg").textContent = "Mmm… inténtalo otra vez";
  }
});
$("startQuiz").addEventListener("click", () => { qi = 0; $("startQuiz").hidden = true; $("quiz").hidden = false; renderQ(); });
function finish(){
  $("quiz").hidden = true; $("scratchWrap").hidden = false; $("scratchHint").hidden = false;
  $("valeText").textContent = "♥ " + REGALO.vale;
  $("valeBy").textContent = "— " + REGALO.de;
  burst(30);
  initScratch();
}

/* Vibración (solo Android; iPhone no lo permite) */
function vib(p){ try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} }

/* Lluvia de corazones */
const reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function burst(n){
  if (reduced) return;
  let fx = document.querySelector(".fx");
  if (!fx) { fx = document.createElement("div"); fx.className = "fx"; document.body.appendChild(fx); }
  const colors = ["#8e1b3a", "#d98ea2", "#e9b8c3", "#c2335a"];
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.textContent = Math.random() < .8 ? "♥" : "❀";
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = 14 + Math.random() * 22 + "px";
    s.style.color = colors[i % colors.length];
    s.style.animationDuration = 2.6 + Math.random() * 2.4 + "s";
    s.style.animationDelay = Math.random() * 1.2 + "s";
    s.style.setProperty("--rot", (Math.random() * 360 - 180) + "deg");
    fx.appendChild(s);
    setTimeout(() => s.remove(), 7000);
  }
}

/* Chat */
$("chat").innerHTML = REGALO.chat.map(m => m.dia
  ? `<div class="chip">${esc(m.dia)}</div>`
  : `<div class="b ${m.de === "yo" ? "yo" : "ella"}${m.grande ? " big" : ""}">${esc(m.t)}<small>${esc(m.h)}</small></div>`).join("");

/* Contador en vivo */
const pad = n => String(n).padStart(2, "0");
function tick(){
  const s = Math.max(0, Math.floor((Date.now() - start) / 1000));
  $("lh").textContent = pad(Math.floor(s / 3600) % 24);
  $("lm").textContent = pad(Math.floor(s / 60) % 60);
  $("ls").textContent = pad(s % 60);
}
tick(); setInterval(tick, 1000);

/* Raspa y descubre */
function initScratch(){
  const c = $("scratch"), wrap = $("scratchWrap"), r = wrap.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  c.width = r.width * dpr; c.height = r.height * dpr;
  const ctx = c.getContext("2d"); ctx.scale(dpr, dpr);
  const g = ctx.createLinearGradient(0, 0, r.width, r.height);
  g.addColorStop(0, "#d98ea2"); g.addColorStop(.5, "#e9b8c3"); g.addColorStop(1, "#c46b85");
  ctx.fillStyle = g; ctx.fillRect(0, 0, r.width, r.height);
  ctx.fillStyle = "rgba(255,255,255,.35)";
  for (let i = 0; i < 40; i++) { ctx.font = (10 + Math.random() * 14) + "px serif"; ctx.fillText("♥", Math.random() * r.width, Math.random() * r.height); }
  ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.font = "italic 300 26px Fraunces, Georgia, serif";
  ctx.fillText("Raspa aquí ♥", r.width / 2, r.height / 2 + 8);
  ctx.globalCompositeOperation = "destination-out";
  let down = false, last = null, moves = 0, done = false, lastVib = 0;
  const pos = e => { const b = c.getBoundingClientRect(); return { x: e.clientX - b.left, y: e.clientY - b.top }; };
  const draw = p => {
    ctx.lineWidth = 34; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo((last || p).x, (last || p).y); ctx.lineTo(p.x, p.y); ctx.stroke();
    ctx.beginPath(); ctx.arc(p.x, p.y, 17, 0, Math.PI * 2); ctx.fill();
    last = p;
    const now = Date.now(); if (now - lastVib > 90) { vib(20); lastVib = now; }
    if (++moves % 8 === 0) check();
  };
  const check = () => {
    if (done) return;
    const d = ctx.getImageData(0, 0, c.width, c.height).data; let clear = 0, total = 0;
    for (let i = 3; i < d.length; i += 64) { total++; if (d[i] === 0) clear++; }
    if (clear / total > .75) { done = true; c.classList.add("done"); $("scratchHint").hidden = true; vib([100, 50, 300]); burst(50); setTimeout(() => { $("oneMore").hidden = false; }, 900); }
  };
  c.onpointerdown = e => { down = true; last = null; c.setPointerCapture(e.pointerId); draw(pos(e)); };
  c.onpointermove = e => { if (down) draw(pos(e)); };
  c.onpointerup = c.onpointercancel = () => { down = false; last = null; check(); };
}

/* Pregunta final */
$("oneMore").addEventListener("click", () => { $("oneMore").hidden = true; $("final").hidden = false; $("final").scrollIntoView({ behavior: "smooth", block: "center" }); });
const noTxt = ["¿Segura? 😏", "Ese no funciona", "Jajaja no", "Prueba el otro 😆", "No hay escapatoria", "Ya ríndete"];
let noI = 0;
function escape(e){
  if (e) e.preventDefault();
  const yn = $("yn"), no = $("no"), W = yn.clientWidth - no.offsetWidth, H = yn.clientHeight - no.offsetHeight;
  no.style.left = Math.max(0, Math.random() * W) + "px";
  no.style.top = Math.max(0, Math.random() * H) + "px";
  no.textContent = noTxt[noI++ % noTxt.length];
  vib(40);
}
["pointerenter", "pointerdown", "click"].forEach(ev => $("no").addEventListener(ev, escape));
$("yes").addEventListener("click", () => {
  $("yn").hidden = true;
  $("yesCard").hidden = false;
  vib([150, 80, 150, 80, 400]);
  $("yesCard").scrollIntoView({ behavior: "smooth", block: "center" });
  burst(90);
  setTimeout(() => burst(60), 2500);
});
