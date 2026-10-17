/* =========================================================
   EDIT EVERYTHING HERE — names, dates, venues, contacts.
   Times are 24h "HH:MM" in the timezone below.
   ========================================================= */
const VENUE = {
  venue: "The Langkawi Resort",
  address: "Bariatu, Ranchi, 834009",
  map: "https://share.google/zkD2DEFbRsMNBRoNX",
};

const CONFIG = {
  groom: {
    first: "Tarang",
    full: "Tarang Khetan",
    grandparents: "Gr/S/o Late Mrs. Sita Devi & Late Mr. Santulal Khetan",
    parents: "S/o Mrs. Sheela & Mr. Sanjay Khetan",
  },
  bride: {
    first: "Muskan",
    full: "Muskan Mittal",
    grandparents: "Gr/D/o Lt. Mrs. Gini Devi & Lt. Mr. Bishamber Dayal Agarwal",
    parents: "D/o Mrs. Vinita & Mr. Raj Kumar Agarwal",
  },
  initials: "T&M",
  city: "Ranchi, Jharkhand",
  timezone: "Asia/Kolkata",
  tzOffset: "+05:30",
  closingMessage:
    "With hearts full of love and joy, we warmly invite you to celebrate our special day and bless us as we begin our forever together. ❤️",
  regards: "Khetan Family",

  // The hero date and countdown use the event marked `main: true`.
  // `end` is optional; it is only used for "Add to Calendar" (defaults to 3 hours after start).
  events: [
    {
      id: "mayra",
      name: "Mayra",
      tagline: "Blessings from the maternal family",
      date: "2026-12-01",
      start: "11:00",
      ...VENUE,
      theme: { bg1: "#f28c28", bg2: "#8f2d0b", accent: "#ffe2a3", ink: "#fff6e8", card: "rgba(0,0,0,0.22)", btnInk: "#6b1f05" },
    },
    {
      id: "sangeet",
      name: "Sangeet Night",
      tagline: "An evening of song, dance & celebration",
      date: "2026-12-01",
      start: "19:15",
      end: "23:30",
      ...VENUE,
      theme: { bg1: "#4b2391", bg2: "#170833", accent: "#f7c873", ink: "#f7efff", card: "rgba(0,0,0,0.28)", btnInk: "#170833" },
    },
    {
      id: "haldi",
      name: "Sunkissed Haldi",
      tagline: "A splash of turmeric, a lot of laughter",
      date: "2026-12-02",
      start: "09:15",
      ...VENUE,
      theme: { bg1: "#fbe06b", bg2: "#f0a020", accent: "#8a4300", ink: "#4a2600", card: "rgba(255,250,235,0.72)", btnInk: "#fff8e6" },
    },
    {
      id: "baraat",
      name: "Korath (Nikasi) & Baraat",
      tagline: "The groom sets out with music & dhol",
      date: "2026-12-02",
      start: "17:30",
      end: "19:00",
      main: true,
      ...VENUE,
      theme: { bg1: "#a3172b", bg2: "#3d040d", accent: "#f3cf6b", ink: "#fdf6e3", card: "rgba(0,0,0,0.25)", btnInk: "#3d040d" },
    },
    {
      id: "reception",
      name: "Reception",
      tagline: "Dinner, dancing & celebrations",
      date: "2026-12-02",
      start: "19:00",
      end: "23:30",
      ...VENUE,
      theme: { bg1: "#16305e", bg2: "#040a1a", accent: "#d9b45a", ink: "#eef2ff", card: "rgba(255,255,255,0.06)", btnInk: "#040a1a" },
    },
  ],

  rsvp: {
    name: "Sanjay Khetan",
    phones: ["+91 9334209666", "+91 9660744867"],
    whatsapp: "919334209666", // country code + number, digits only
  },
};

/* ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const mainEvent = CONFIG.events.find((e) => e.main) || CONFIG.events[CONFIG.events.length - 1];
const toDate = (date, time) => new Date(`${date}T${time}:00${CONFIG.tzOffset}`);

function formatDate(date, opts) {
  return toDate(date, "12:00").toLocaleDateString("en-IN", { timeZone: CONFIG.timezone, ...opts });
}

function formatTime(hhmm) {
  let [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${suffix}`;
}

function calendarLink(ev) {
  const stamp = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const start = toDate(ev.date, ev.start);
  let end = ev.end ? toDate(ev.date, ev.end) : new Date(start.getTime() + 3 * 36e5);
  if (end <= start) end = new Date(end.getTime() + 864e5); // runs past midnight
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${ev.name} · ${CONFIG.groom.first} & ${CONFIG.bride.first}`,
    dates: `${stamp(start)}/${stamp(end)}`,
    location: `${ev.venue}, ${ev.address}`,
    details: `${ev.name} at ${CONFIG.groom.full} & ${CONFIG.bride.full}'s wedding celebrations`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function mandalaSVG() {
  let petals = "";
  for (let i = 0; i < 16; i++) {
    const r = i * 22.5;
    petals += `<ellipse cx="100" cy="45" rx="10" ry="40" transform="rotate(${r} 100 100)"/>`;
    petals += `<ellipse cx="100" cy="22" rx="5" ry="16" transform="rotate(${r + 11.25} 100 100)"/>`;
  }
  return `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="0.8">
    ${petals}
    <circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="88" stroke-dasharray="2 3"/>
    <circle cx="100" cy="100" r="28"/><circle cx="100" cy="100" r="18"/><circle cx="100" cy="100" r="6" fill="currentColor"/>
  </svg>`;
}

/* ---------- Render content ---------- */
function render() {
  const { groom, bride, rsvp } = CONFIG;
  document.title = `${groom.first} & ${bride.first} · Wedding Invitation`;
  const fill = (attr, text) => $$(`[${attr}]`).forEach((el) => (el.textContent = text));
  fill("data-groom", groom.first);
  fill("data-bride", bride.first);
  fill("data-groom-full", groom.full);
  fill("data-bride-full", bride.full);
  fill("data-groom-gp", groom.grandparents);
  fill("data-groom-parents", groom.parents);
  fill("data-bride-gp", bride.grandparents);
  fill("data-bride-parents", bride.parents);
  fill("data-initials", CONFIG.initials);
  fill("data-city", CONFIG.city);
  fill("data-date-long", formatDate(mainEvent.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  fill("data-date-short", formatDate(mainEvent.date, { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, " · "));
  fill("data-closing", CONFIG.closingMessage);
  fill("data-regards", CONFIG.regards);
  fill("data-rsvp-name", rsvp.name);

  $("[data-rsvp-phones]").innerHTML = rsvp.phones
    .map((p) => `<a href="tel:${p.replace(/\s/g, "")}">${p}</a>`)
    .join("");
  const msg = `Hi! We're delighted to confirm our presence at ${groom.first} & ${bride.first}'s wedding. Number of guests: `;
  $("#rsvp-whatsapp").href = `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(msg)}`;
  $("#rsvp-call").href = `tel:${rsvp.phones[0].replace(/\s/g, "")}`;

  const total = CONFIG.events.length;
  $("#events").outerHTML = CONFIG.events
    .map((ev, i) => {
      const t = ev.theme;
      const style = `--bg1:${t.bg1};--bg2:${t.bg2};--accent:${t.accent};--ink:${t.ink};--card:${t.card};--btn-ink:${t.btnInk}`;
      return `
      <section id="${ev.id}" class="section event" data-label="${ev.name}" style="${style}">
        <div class="mandala" aria-hidden="true">${mandalaSVG()}</div>
        <article class="event-card reveal">
          <p class="event-count">Celebration ${i + 1} of ${total}</p>
          <h2 class="event-name${ev.name.length > 14 ? " long" : ""}">${ev.name}</h2>
          <p class="event-tagline">${ev.tagline}</p>
          <div class="divider"><span></span></div>
          <ul class="event-details">
            <li><span class="label">Date</span>${formatDate(ev.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</li>
            <li><span class="label">Time</span>${formatTime(ev.start)} onwards</li>
            <li><span class="label">Venue</span>${ev.venue}<small>${ev.address}</small></li>
          </ul>
          <div class="actions">
            <a class="btn" href="${ev.map}" target="_blank" rel="noopener">View on Map</a>
            <a class="btn ghost" href="${calendarLink(ev)}" target="_blank" rel="noopener">Add to Calendar</a>
          </div>
        </article>
      </section>`;
    })
    .join("");
}

/* ---------- Countdown ---------- */
function startCountdown() {
  const target = toDate(mainEvent.date, mainEvent.start).getTime();
  const box = $("#countdown");
  const els = { d: $("#cd-days"), h: $("#cd-hours"), m: $("#cd-mins"), s: $("#cd-secs") };
  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      box.classList.add("married");
      box.textContent = "Just Married!";
      clearInterval(timer);
      return;
    }
    els.d.textContent = Math.floor(diff / 864e5);
    els.h.textContent = Math.floor((diff / 36e5) % 24);
    els.m.textContent = Math.floor((diff / 6e4) % 60);
    els.s.textContent = Math.floor((diff / 1e3) % 60);
  };
  const timer = setInterval(tick, 1000);
  tick();
}

/* ---------- Background music ---------- */
// Fallback: a gentle music-box melody generated with Web Audio,
// used when assets/music/background.mp3 isn't present.
const Synth = {
  ctx: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);

    // dry bus + soft echo for a little space
    this.bus = ctx.createGain();
    const delay = ctx.createDelay();
    const feedback = ctx.createGain();
    const tone = ctx.createBiquadFilter();
    delay.delayTime.value = 0.36;
    feedback.gain.value = 0.32;
    tone.type = "lowpass";
    tone.frequency.value = 2200;
    this.bus.connect(this.master);
    this.bus.connect(delay);
    delay.connect(tone);
    tone.connect(feedback);
    feedback.connect(delay);
    tone.connect(this.master);

    // D – Bm – G – A arpeggios
    this.chords = [
      [62, 66, 69, 74, 78, 74, 69, 66],
      [59, 62, 66, 71, 74, 71, 66, 62],
      [55, 59, 62, 67, 71, 67, 62, 59],
      [57, 61, 64, 69, 73, 69, 64, 61],
    ];
    this.step = 0;
    this.beat = 0.34;
    this.nextTime = ctx.currentTime + 0.1;
    setInterval(() => this.schedule(), 60);
  },
  note(midi, time, dur, vol, type = "sine") {
    const ctx = this.ctx;
    const freq = 440 * Math.pow(2, (midi - 69) / 12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(vol, time + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    g.connect(this.bus);
    [[1, type, 1], [2, "sine", 0.25]].forEach(([mult, wave, level]) => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = wave;
      o.frequency.value = freq * mult;
      og.gain.value = level;
      o.connect(og).connect(g);
      o.start(time);
      o.stop(time + dur + 0.05);
    });
  },
  schedule() {
    if (!this.ctx || this.ctx.state !== "running") return;
    while (this.nextTime < this.ctx.currentTime + 0.25) {
      const chord = this.chords[Math.floor(this.step / 8) % this.chords.length];
      const i = this.step % 8;
      this.note(chord[i], this.nextTime, 1.6, 0.12, "triangle");
      if (i === 0) this.note(chord[0] - 24, this.nextTime, this.beat * 8, 0.1);
      if (i === 4) this.note(chord[2] - 12, this.nextTime, this.beat * 4, 0.05);
      this.nextTime += this.beat;
      this.step++;
    }
  },
  play() {
    this.init();
    if (!this.ctx) return;
    this.ctx.resume();
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(0.6, t, 0.6);
  },
  pause() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(0, t, 0.2);
    setTimeout(() => !Music.playing && this.ctx.suspend(), 900);
  },
};

const Music = {
  audio: $("#bgm"),
  btn: $("#musicBtn"),
  mode: null, // "file" | "synth"
  playing: false,

  start() {
    // Prime Web Audio synchronously inside the tap (required by Safari/iOS).
    Synth.init();
    if (this.audio.error) return this.useSynth();
    this.audio.volume = 0.6;
    this.audio.play().then(
      () => { this.mode = "file"; this.setPlaying(true); Synth.ctx && Synth.ctx.suspend(); },
      () => this.useSynth()
    );
  },
  useSynth() {
    this.mode = "synth";
    Synth.play();
    this.setPlaying(true);
  },
  play() {
    if (this.mode === "file") this.audio.play();
    else Synth.play();
    this.setPlaying(true);
  },
  pause() {
    this.setPlaying(false);
    if (this.mode === "file") this.audio.pause();
    else Synth.pause();
  },
  toggle() { this.playing ? this.pause() : this.play(); },
  setPlaying(on) {
    this.playing = on;
    this.btn.classList.toggle("muted", !on);
    this.btn.setAttribute("aria-label", on ? "Pause music" : "Play music");
  },
};

/* ---------- Petals ---------- */
function startPetals() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = $("#petals");
  const count = innerWidth < 600 ? 14 : 24;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal" + (Math.random() < 0.35 ? " gold" : "");
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--size", `${8 + Math.random() * 10}px`);
    p.style.setProperty("--dur", `${9 + Math.random() * 9}s`);
    p.style.setProperty("--delay", `${-Math.random() * 15}s`);
    box.appendChild(p);
  }
}

/* ---------- Scroll: reveal + dot nav ---------- */
function setupScroll() {
  const scroller = $("#scroller");
  const sections = $$(".section", scroller);
  const dots = $("#dots");

  sections.forEach((sec) => {
    const b = document.createElement("button");
    b.dataset.label = sec.dataset.label;
    b.setAttribute("aria-label", `Go to ${sec.dataset.label}`);
    b.addEventListener("click", () => sec.scrollIntoView({ behavior: "smooth" }));
    dots.appendChild(b);
  });
  const dotButtons = $$("button", dots);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const reveal = $(".reveal", entry.target);
        if (entry.isIntersecting) {
          reveal && reveal.classList.add("visible");
          dotButtons.forEach((d, i) => d.classList.toggle("active", sections[i] === entry.target));
        } else if (reveal) {
          reveal.classList.remove("visible"); // replay the animation when scrolling back
        }
      });
    },
    { root: scroller, threshold: 0.55 }
  );
  sections.forEach((s) => io.observe(s));

  document.addEventListener("keydown", (e) => {
    if (document.body.classList.contains("locked")) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") scroller.scrollBy({ top: innerHeight });
    if (e.key === "ArrowUp" || e.key === "PageUp") scroller.scrollBy({ top: -innerHeight });
  });
}

/* ---------- Opening sequence ---------- */
function setupIntro() {
  const intro = $("#intro");
  const envelope = $("#envelope");
  let opened = false;

  const open = () => {
    if (opened) return;
    opened = true;
    Music.start();
    intro.classList.add("opening");
    envelope.classList.add("open");

    setTimeout(() => intro.classList.add("zoom"), 1900);
    setTimeout(() => {
      intro.classList.add("done");
      document.body.classList.remove("locked");
      $("#scroller").setAttribute("aria-hidden", "false");
      $("#dots").hidden = false;
      Music.btn.hidden = false;
      startPetals();
    }, 2700);
    setTimeout(() => intro.remove(), 3800);
  };

  envelope.addEventListener("click", open);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
}

/* ---------- Boot ---------- */
render();
startCountdown();
setupScroll();
setupIntro();
Music.btn.addEventListener("click", () => Music.toggle());

// Pause when the tab is hidden, resume when it comes back.
let resumeOnShow = false;
document.addEventListener("visibilitychange", () => {
  if (document.hidden && Music.playing) { resumeOnShow = true; Music.pause(); }
  else if (!document.hidden && resumeOnShow) { resumeOnShow = false; Music.play(); }
});
