(() => {
  "use strict";

  const STORAGE_KEY = "gus-other-map-v1";
  const FREQUENCIES = ["audio", "neural", "data", "motion", "craft", "water", "home"];
  const AUDIO = {
    ambient: "assets/audio/neural-room-loop.mp3",
    threshold: "assets/audio/threshold-wake.mp3",
    axon: "assets/audio/axon-pulse.mp3",
    found: "assets/audio/frequency-found.mp3"
  };

  const ROOMS = {
    foyer: {
      index: "UNNUMBERED",
      title: "FOUND\nWITHOUT\nA MAP",
      fragment: "the first instrument was not the first.",
      theme: "bone",
      visual: "scatter",
      tone: [49, 147],
      doors: [["listening", "hiss"], ["engine", "heat"], ["shore", "west"]]
    },
    listening: {
      index: "ROOM TONE",
      title: "BEFORE\nMEANING",
      fragment: "room / music / ghost",
      theme: "paper",
      visual: "leader",
      tone: [55, 110],
      doors: [["tunnel", "inside"], ["kitchen", "slow"], ["foyer", "back"]]
    },
    tunnel: {
      index: "LIVING CABLE",
      title: "THE PATH\nIS ALIVE",
      fragment: "use changes the route.",
      theme: "ash",
      visual: "sequence",
      tone: [80, 160],
      doors: [["lab", "below"], ["whiteboard", "translate"], ["listening", "echo"]]
    },
    whiteboard: {
      index: "PARTIAL ERASURE",
      title: "ASK\nTHE USEFUL\nQUESTION",
      fragment: "not what the machine can do.",
      theme: "bone",
      visual: "chalk",
      tone: [64, 192],
      doors: [["lab", "test"], ["quiet-center", "why"], ["field-notes", "scraps"]]
    },
    lab: {
      index: "BELOW",
      title: "THREE\nMACHINES\nHUM",
      fragment: "the model is one instrument.",
      theme: "black",
      visual: "machine",
      tone: [43, 86],
      doors: [["pitlane", "margin"], ["tunnel", "carbon"], ["quiet-center", "dim"]]
    },
    pitlane: {
      index: "MISSING TIME",
      title: "0.017",
      fragment: "the corner begins before it appears.",
      theme: "paper",
      visual: "gap",
      tone: [61, 122],
      doors: [["engine", "hot"], ["watch", "late"], ["lab", "readout"]]
    },
    engine: {
      index: "WARM FIRST",
      title: "THE NARRATOR\nGOES QUIET",
      fragment: "hold until the metal changes its mind.",
      theme: "rust",
      visual: "ember",
      tone: [50, 101],
      doors: [["pitlane", "cut"], ["shore", "coast"], ["foyer", "off"]]
    },
    shore: {
      index: "WEST",
      title: "WEST\nOF MEMORY",
      fragment: "shape yields. heading holds.",
      theme: "ash",
      visual: "salt",
      tone: [52, 104],
      doors: [["kitchen", "carry"], ["watch", "drift"], ["foyer", "orient"]]
    },
    kitchen: {
      index: "LOW HEAT",
      title: "NO SHORTCUT\nFOUND",
      fragment: "water, then what remembers.",
      theme: "paper",
      visual: "stones",
      tone: [65, 130],
      doors: [["quiet-center", "keep"], ["listening", "mix"], ["shore", "salt"]]
    },
    watch: {
      index: "ACCUMULATED ERROR",
      title: "+2 SEC\nPER DAY",
      fragment: "accuracy accumulates.",
      theme: "bone",
      visual: "error",
      tone: [72, 144],
      doors: [["pitlane", "time"], ["shore", "tide"], ["quiet-center", "keep"]]
    },
    "quiet-center": {
      index: "—",
      title: "NOTHING TO MEASURE",
      fragment: "leave the lamp.",
      theme: "paper",
      visual: "quiet",
      tone: [48, 96],
      doors: [["strange-loop", "continue"], ["field-notes", "paper"], ["foyer", "lamp"]]
    },
    "field-notes": {
      index: "LOOSE PAGES",
      title: "PAGES THAT\nESCAPED",
      fragment: "not all fragments want to return.",
      theme: "ash",
      visual: "scraps",
      tone: [58, 174],
      doors: [["whiteboard", "return"], ["strange-loop", "fold"], ["foyer", "file"]]
    },
    "strange-loop": {
      index: "ORIGIN MOVING",
      title: "THE ROUTE\nLOOKS BACK",
      fragment: "origin: moving",
      theme: "black",
      visual: "loop",
      tone: [47, 141],
      doors: [["foyer", "again"], ["listening", "hear"], ["quiet-center", "rest"]]
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const threshold = $("#threshold");
  const labyrinth = $("#labyrinth");
  const room = $("#room");
  const roomArtifact = $("#room-artifact");
  const response = $("#room-response");
  const doors = $("#doors");
  const neuralField = $("#neural-field");
  const messageAudio = $("#message-audio");
  const messageButton = $("#message-player");
  const messageState = $("#message-state");
  let currentRoom = "threshold";
  let soundOn = false;
  let audioContext = null;
  let activeTone = [];
  let interactionCleanup = null;
  let ambientAudio = null;
  let ambientFade = 0;

  const saved = loadState();
  const state = {
    visited: new Set(Array.isArray(saved.visited) ? saved.visited : []),
    frequencies: new Set(Array.isArray(saved.frequencies) ? saved.frequencies : []),
    resolutionSeen: Boolean(saved.resolutionSeen),
    messageHeard: Boolean(saved.messageHeard)
  };

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (_) {
      return {};
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        visited: [...state.visited],
        frequencies: [...state.frequencies],
        resolutionSeen: state.resolutionSeen,
        messageHeard: state.messageHeard
      }));
    } catch (_) {
      // The room still exists if the browser forgets it.
    }
  }

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    const colors = { paper: "#faf8f3", bone: "#e8e2d5", ash: "#292724", black: "#11100f", rust: "#6f3422" };
    $("meta[name='theme-color']").setAttribute("content", colors[theme] || colors.paper);
  }

  function requestedRoom() {
    try {
      return decodeURIComponent(location.hash.slice(1)) || "threshold";
    } catch (_) {
      return "foyer";
    }
  }

  function route() {
    const requested = requestedRoom();
    if (requested === "threshold") showThreshold();
    else renderRoom(ROOMS[requested] ? requested : "foyer");
  }

  function showThreshold() {
    const shouldMoveFocus = document.activeElement && document.activeElement !== document.body;
    currentRoom = "threshold";
    document.body.dataset.room = "threshold";
    setTheme("paper");
    threshold.hidden = false;
    threshold.classList.remove("tearing");
    labyrinth.hidden = true;
    $(".skip-link").href = "#threshold-title";
    cleanupInteraction();
    stopRoomTone();
    renderNeuralField("threshold");
    window.scrollTo({ top: 0, behavior: "auto" });
    if (shouldMoveFocus) focusHeading($("#threshold-title"));
  }

  function enter() {
    if (reducedMotion.matches) {
      location.hash = "foyer";
      return;
    }
    threshold.classList.add("tearing");
    setTimeout(() => { location.hash = "foyer"; }, 420);
  }

  function renderRoom(id) {
    const shouldMoveFocus = document.activeElement && document.activeElement !== document.body;
    const data = ROOMS[id];
    currentRoom = id;
    document.body.dataset.room = id;
    setTheme(data.theme);
    threshold.hidden = true;
    labyrinth.hidden = false;
    $(".skip-link").href = "#room-title";
    state.visited.add(id);
    saveState();

    room.className = `room room-${id}`;
    $("#room-index").textContent = data.index;
    $("#room-title").textContent = data.title;
    $("#room-fragment").textContent = data.fragment;
    response.textContent = "";
    response.classList.remove("visible");
    roomArtifact.innerHTML = artifactMarkup(data.visual);
    renderDoors(data.doors);
    renderNeuralField(id);
    cleanupInteraction();
    setupInteraction(data.visual);

    if (soundOn) {
      startRoomTone(data.tone);
      playAsset("axon", .38);
    }
    labyrinth.classList.remove("room-entering");
    void labyrinth.offsetWidth;
    labyrinth.classList.add("room-entering");
    window.scrollTo({ top: 0, behavior: "auto" });
    if (shouldMoveFocus) focusHeading($("#room-title"));
  }

  function focusHeading(target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  function defs(seed = 9) {
    return `<defs><filter id="rough-${seed}"><feTurbulence type="fractalNoise" baseFrequency=".013 .027" numOctaves="3" seed="${seed}" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="13"/></filter></defs>`;
  }

  function hashRoom(value) {
    return [...value].reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) | 0, 2166136261) >>> 0;
  }

  function seeded(seed) {
    let value = seed || 1;
    return () => {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function renderNeuralField(id) {
    const random = seeded(hashRoom(id));
    const nodes = [{ x: 500 + (random() - .5) * 130, y: 350 + (random() - .5) * 90 }];
    for (let index = 1; index < 19; index += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 92 + random() * 430;
      nodes.push({
        x: Math.max(28, Math.min(972, nodes[0].x + Math.cos(angle) * radius * 1.24)),
        y: Math.max(28, Math.min(672, nodes[0].y + Math.sin(angle) * radius * .82))
      });
    }

    const connections = [];
    nodes.slice(1).forEach((node, index) => {
      let parent = 0;
      let distance = Infinity;
      nodes.slice(0, index + 1).forEach((candidate, candidateIndex) => {
        const score = Math.hypot(node.x - candidate.x, node.y - candidate.y) * (.86 + random() * .28);
        if (score < distance) { distance = score; parent = candidateIndex; }
      });
      connections.push([parent, index + 1]);
    });
    for (let index = 0; index < 4; index += 1) {
      const from = 1 + Math.floor(random() * (nodes.length - 1));
      let to = 1 + Math.floor(random() * (nodes.length - 1));
      if (to === from) to = (to + 5) % (nodes.length - 1) + 1;
      connections.push([from, to]);
    }

    const learned = Math.min(nodes.length, 2 + state.visited.size + state.frequencies.size * 2);
    const paths = connections.map(([from, to], index) => {
      const a = nodes[from];
      const b = nodes[to];
      const bend = (random() - .5) * 86;
      const cx = (a.x + b.x) / 2 + bend;
      const cy = (a.y + b.y) / 2 - bend * .55;
      const active = from < learned && to < learned ? " learned" : "";
      return `<path class="neural-edge${active}" pathLength="1" style="--delay:${(index * .047).toFixed(2)}s" d="M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}"/>`;
    }).join("");
    const points = nodes.map((node, index) => {
      const active = index < learned ? " learned" : "";
      const radius = index === 0 ? 7 : 2.4 + random() * 2.7;
      return `<circle class="neural-node${active}" style="--delay:${(index * .061).toFixed(2)}s" cx="${node.x.toFixed(1)}" cy="${node.y.toFixed(1)}" r="${radius.toFixed(1)}"/>`;
    }).join("");
    const origin = nodes[0];
    neuralField.classList.remove("awake", "remembering");
    neuralField.innerHTML = `<g class="neural-edges">${paths}</g><g class="neural-nodes">${points}</g>
      <g class="neural-signatures" transform="translate(${origin.x.toFixed(1)} ${origin.y.toFixed(1)})">
        <circle r="23"/><circle r="38"/><path d="M-62 0h39M23 0h62M0-61v38M0 23v42"/>
      </g>`;
    requestAnimationFrame(() => neuralField.classList.add("awake"));
  }

  function pulseNeuralField() {
    neuralField.classList.remove("remembering");
    void neuralField.getBoundingClientRect();
    neuralField.classList.add("remembering");
  }

  function artifactMarkup(type) {
    switch (type) {
      case "scatter":
        return `<div class="scatter">
          <button class="artifact-part" type="button" data-line="it is warm though nothing is connected." aria-label="Touch the first found object"><svg viewBox="0 0 220 260">${defs(3)}<path class="relic-ink" filter="url(#rough-3)" d="M47 31 181 47 204 158 129 234 31 184Z"/><path class="relic-gold" d="m74 102 84-20 13 14-86 28Z"/></svg></button>
          <button class="artifact-part" type="button" data-line="it remembers a room you have not entered." aria-label="Touch the second found object"><svg viewBox="0 0 220 270">${defs(12)}<path class="relic-paper" filter="url(#rough-12)" stroke-width="2" d="M111 15c50 46 71 92 53 140-13 36-8 78-55 99-49-20-65-71-51-112 12-35 5-84 53-127Z"/><path class="relic-faint" d="M77 77c38 18 62 63 69 113M66 132c32-5 63 8 87 36"/></svg></button>
          <button class="artifact-part" type="button" data-line="eventually the instruments began answering one another." data-transmission="true" aria-label="Touch the third found object"><svg viewBox="0 0 220 230">${defs(21)}<path class="relic-line" filter="url(#rough-21)" d="M25 178c6-117 177-108 166 2M53 166c-8-72 116-87 112 4M78 160c-3-35 59-52 63 6"/><circle class="relic-gold" cx="111" cy="165" r="14"/></svg></button>
        </div>`;
      case "leader":
        return `<div class="leader-field"><svg viewBox="0 0 720 430" aria-hidden="true">${defs(16)}<path class="relic-line" filter="url(#rough-16)" d="M-32 301C78 62 190 374 318 129c96-183 182 242 414 16"/><path class="relic-faint" d="M-14 319C92 80 201 392 330 148c95-181 190 231 412 4"/><path class="relic-faint" d="M-9 282C82 44 182 351 305 111c104-202 207 258 436 22"/></svg><input class="leader-control" type="range" min="0" max="100" value="9" aria-label="Move the loose mark across the damaged line"></div>`;
      case "sequence":
        return `<div class="sequence-field" aria-label="Four cuts in a living cable"><svg viewBox="0 0 620 520" aria-hidden="true">${defs(33)}<path class="relic-line" filter="url(#rough-33)" d="M-41 398C97 432 78 68 244 162c136 77 98 306 249 197 77-56 27-231 166-257"/><path class="relic-faint" d="M-33 411C108 449 93 89 251 180c125 72 105 289 248 192 86-59 39-219 164-254"/></svg><button class="sequence-node" type="button" data-node="0" aria-label="First cut"></button><button class="sequence-node" type="button" data-node="1" aria-label="Second cut"></button><button class="sequence-node" type="button" data-node="2" aria-label="Third cut"></button><button class="sequence-node" type="button" data-node="3" aria-label="Fourth cut"></button></div>`;
      case "chalk":
        return `<button class="artifact-button" type="button" aria-label="Erase the chalk surface"><svg class="relic-svg" viewBox="0 0 520 520">${defs(4)}<path class="relic-line" filter="url(#rough-4)" d="M61 102c124 43 246 11 381-35M94 200c73 93 176-69 324 42M53 374c103-9 214-118 400-37M127 73l289 365M420 88 114 446"/><path class="relic-faint" d="M61 252h392M260 51v417"/></svg></button>`;
      case "machine":
        return `<div class="machine-parts" aria-label="Three opaque machine parts"><button class="machine-part" type="button" data-part="0" aria-label="Touch the first part"></button><button class="machine-part" type="button" data-part="1" aria-label="Touch the second part"></button><button class="machine-part" type="button" data-part="2" aria-label="Touch the third part"></button></div>`;
      case "gap":
        return `<button class="artifact-button" type="button" aria-label="Touch the narrow gap"><svg class="relic-svg" viewBox="0 0 500 500">${defs(19)}<path class="relic-ink" filter="url(#rough-19)" d="M51 64h171l-31 381H23Z"/><path class="relic-ink" filter="url(#rough-19)" d="M278 39h174l29 408H310Z"/><path class="relic-gold" d="M231 86h35v327h-35Z"/><path class="relic-faint" d="M246 71v364"/></svg></button>`;
      case "ember":
        return `<button class="artifact-button holdable" type="button" aria-label="Hold the warm object"><svg class="relic-svg" viewBox="0 0 520 520">${defs(29)}<path class="relic-paper ember-shell" filter="url(#rough-29)" stroke-width="2" d="M254 33c60 45 60 103 125 148 51 35 50 112 9 177-44 69-113 126-185 105-80-24-115-103-89-180 22-67 41-170 140-250Z"/><path class="relic-line" d="M186 361c39-48 78-88 139-177M170 304c62-9 120 18 174 70M225 87c22 95 22 190-8 300"/></svg></button>`;
      case "salt":
        return `<button class="artifact-button" type="button" aria-label="Touch the salt bloom"><svg class="relic-svg" viewBox="0 0 520 520">${defs(7)}<g filter="url(#rough-7)"><path class="relic-paper" stroke-width="2" d="m260 37 48 131 135-40-74 119 116 74-137 10 22 139-110-86-110 86 22-139-137-10 116-74-74-119 135 40Z"/><circle class="relic-gold" cx="260" cy="260" r="36"/></g><path class="relic-faint" d="M260 54v412M59 260h402M112 112l296 296M408 112 112 408"/></svg></button>`;
      case "stones":
        return `<div class="stones" aria-label="Three unlabeled forms"><button class="stone" type="button" data-step="0" aria-label="Touch the low form"></button><button class="stone" type="button" data-step="1" aria-label="Touch the high form"></button><button class="stone" type="button" data-step="2" aria-label="Touch the far form"></button></div>`;
      case "error":
        return `<div class="error-field" aria-label="Three drifting errors"><button class="error-wheel" type="button" data-target="1" data-value="0" aria-label="Turn the first error"></button><button class="error-wheel" type="button" data-target="2" data-value="0" aria-label="Turn the second error"></button><button class="error-wheel" type="button" data-target="1" data-value="0" aria-label="Turn the third error"></button></div>`;
      case "quiet":
        return `<button class="artifact-button" type="button" aria-label="Touch the remaining point"><svg class="relic-svg" viewBox="0 0 500 500"><circle class="relic-ink" cx="250" cy="250" r="18"/><circle class="relic-faint" cx="250" cy="250" r="61"/><path class="relic-faint" d="M250 8v149M250 343v149M8 250h149M343 250h149"/></svg></button>`;
      case "scraps":
        return `<div class="article-scraps"><a class="article-scrap" href="/articles/harness-part-1.html"><span>HARNESS / I</span><span>↗</span></a><a class="article-scrap" href="/articles/harness-part-2.html"><span>HARNESS / II</span><span>↗</span></a><a class="article-scrap" href="/articles/harness-part-3.html"><span>HARNESS / III</span><span>↗</span></a><a class="article-scrap" href="/articles/first-principles.html"><span>FIRST PRINCIPLES</span><span>↗</span></a><a class="article-scrap" href="/articles/agents-attack-surface.html"><span>ATTACK SURFACE</span><span>↗</span></a></div>`;
      case "loop": {
        const positions = [[13, 66, -18], [28, 19, 7], [43, 53, -9], [59, 12, 19], [72, 67, 12], [87, 29, -14], [50, 86, 5]];
        const marks = FREQUENCIES.map((id, index) => {
          const [x, y, rotation] = positions[index];
          return `<i class="loop-mark${state.frequencies.has(id) ? " found" : ""}" style="--x:${x}%;--y:${y}%;--r:${rotation}deg"></i>`;
        }).join("");
        return `<button class="loop-arrangement${state.frequencies.size === FREQUENCIES.length ? " complete" : ""}" type="button" aria-label="Fold the route back to its beginning"><svg viewBox="0 0 640 520" aria-hidden="true">${defs(41)}<path class="relic-line" filter="url(#rough-41)" d="M54 342 177 84l119 224L381 62l91 292 116-201"/><path class="relic-faint" d="m92 401 125-182 96 215 104-202 132 183"/></svg>${marks}</button>`;
      }
      default:
        return "";
    }
  }

  function renderDoors(roomDoors) {
    doors.innerHTML = "";
    const template = $("#door-template");
    roomDoors.forEach(([id, label]) => {
      const fragment = template.content.cloneNode(true);
      const link = $(".door", fragment);
      link.href = `#${id}`;
      link.setAttribute("aria-label", `${label}; go to ${ROOMS[id].title.replace(/\n/g, " ").toLowerCase()}`);
      $("span", fragment).textContent = label;
      doors.appendChild(fragment);
    });
  }

  function cleanupInteraction() {
    if (interactionCleanup) interactionCleanup();
    interactionCleanup = null;
  }

  function setResponse(text) {
    response.textContent = text;
    response.classList.toggle("visible", Boolean(text));
  }

  function setupInteraction(type) {
    switch (type) {
      case "scatter": setupScatter(); break;
      case "leader": setupLeader(); break;
      case "sequence": setupSequence(); break;
      case "chalk": setupSingle("the useful question survives the erasure.", 196); break;
      case "machine": setupMachine(); break;
      case "gap": setupSingle("the missing time was already there.", 244); break;
      case "ember": setupEmber(); break;
      case "salt": setupSalt(); break;
      case "stones": setupStones(); break;
      case "error": setupErrors(); break;
      case "quiet": setupQuiet(); break;
      case "loop": setupLoop(); break;
    }
  }

  function setupScatter() {
    $$(".artifact-part", roomArtifact).forEach((part, index) => part.addEventListener("click", () => {
      part.classList.toggle("touched");
      setResponse(part.dataset.line || "");
      playClick(148 + index * 53);
      if (part.dataset.transmission === "true") toggleMessage();
    }));
  }

  function setupLeader() {
    const control = $(".leader-control", roomArtifact);
    control.addEventListener("input", () => {
      const value = Number(control.value);
      roomArtifact.style.setProperty("--leader", String(value));
      if (soundOn) playClick(80 + value * 1.7, .018);
      if (value >= 72) {
        setResponse("a room appears under the room.");
        collectFrequency("audio");
      }
    });
  }

  function setupSequence() {
    let step = 0;
    const nodes = $$(".sequence-node", roomArtifact);
    nodes.forEach((node) => node.addEventListener("click", () => {
      const value = Number(node.dataset.node);
      if (value === step) {
        node.classList.add("touched");
        step += 1;
        playClick(150 + step * 47);
        if (step === nodes.length) {
          setResponse("the path remembers being used.");
          collectFrequency("neural");
        }
      } else {
        step = 0;
        nodes.forEach((item) => item.classList.remove("touched"));
        node.classList.add("wrong");
        setTimeout(() => node.classList.remove("wrong"), 260);
        setResponse("");
      }
    }));
  }

  function setupSingle(text, pitch) {
    const button = $(".artifact-button", roomArtifact);
    button.addEventListener("click", () => {
      button.classList.toggle("awake");
      setResponse(text);
      playClick(pitch);
    });
  }

  function setupMachine() {
    const active = new Set();
    $$(".machine-part", roomArtifact).forEach((part, index) => part.addEventListener("click", () => {
      part.classList.toggle("on");
      part.classList.contains("on") ? active.add(index) : active.delete(index);
      playClick(115 + index * 73);
      if (active.size === 3) {
        setResponse("one body / no center");
        collectFrequency("data");
      }
    }));
  }

  function setupEmber() {
    const button = $(".holdable", roomArtifact);
    let timer = 0;
    let holding = false;
    const begin = (event) => {
      if (event.type === "keydown" && ![" ", "Enter"].includes(event.key)) return;
      event.preventDefault();
      if (holding) return;
      holding = true;
      button.classList.add("awake");
      timer = window.setTimeout(() => {
        holding = false;
        button.classList.add("resolved");
        setResponse("warm enough to stop naming it.");
        collectFrequency("motion");
      }, 920);
    };
    const end = (event) => {
      if (event && event.type === "keyup" && ![" ", "Enter"].includes(event.key)) return;
      if (!holding) return;
      holding = false;
      clearTimeout(timer);
      button.classList.remove("awake");
      setResponse("not yet.");
    };
    button.addEventListener("pointerdown", begin);
    button.addEventListener("keydown", begin);
    button.addEventListener("keyup", end);
    window.addEventListener("pointerup", end);
    interactionCleanup = () => {
      clearTimeout(timer);
      window.removeEventListener("pointerup", end);
    };
  }

  function setupSalt() {
    const button = $(".artifact-button", roomArtifact);
    let count = 0;
    button.addEventListener("click", () => {
      count += 1;
      button.style.transform = `rotate(${count * 17 - 9}deg) scale(${1 + count * .025})`;
      playClick(126 - count * 8);
      if (count >= 3) {
        setResponse("same heading / another shape");
        collectFrequency("water");
      }
    });
  }

  function setupStones() {
    const order = [0, 2, 1];
    let step = 0;
    const stones = $$(".stone", roomArtifact);
    stones.forEach((stone) => stone.addEventListener("click", () => {
      const value = Number(stone.dataset.step);
      if (value === order[step]) {
        stone.classList.add("done");
        step += 1;
        playClick(136 + step * 37);
        if (step === order.length) {
          setResponse("the order was carrying the memory.");
          collectFrequency("home");
        }
      } else {
        step = 0;
        stones.forEach((item) => item.classList.remove("done"));
        setResponse("again, slower.");
      }
    }));
  }

  function setupErrors() {
    const wheels = $$(".error-wheel", roomArtifact);
    wheels.forEach((wheel, index) => wheel.addEventListener("click", () => {
      const value = (Number(wheel.dataset.value) + 1) % 3;
      wheel.dataset.value = String(value);
      wheel.style.transform = `rotate(${value * 120 + (index - 1) * 8}deg)`;
      wheel.classList.toggle("aligned", value === Number(wheel.dataset.target));
      playClick(210 + index * 41);
      if (wheels.every((item) => item.dataset.value === item.dataset.target)) {
        setResponse("the promise advances one second.");
        collectFrequency("craft");
      }
    }));
  }

  function setupQuiet() {
    const button = $(".artifact-button", roomArtifact);
    button.addEventListener("click", () => {
      stopRoomTone();
      button.style.transform = "scale(.42)";
      button.style.opacity = ".36";
      setResponse("still here.");
    });
  }

  function setupLoop() {
    const button = $(".loop-arrangement", roomArtifact);
    if (state.frequencies.size === FREQUENCIES.length) {
      state.resolutionSeen = true;
      saveState();
      setResponse("the shape has no center.");
    } else if (state.frequencies.size > 0) {
      setResponse("some parts arrived without their names.");
    }
    button.addEventListener("click", () => { location.hash = "foyer"; });
  }

  function collectFrequency(id) {
    if (state.frequencies.has(id)) return;
    state.frequencies.add(id);
    saveState();
    roomArtifact.classList.add("discovered");
    pulseNeuralField();
    playAcquired();
  }

  function ensureAudio() {
    if (!audioContext) {
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context) return null;
      audioContext = new Context();
    }
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }

  function startRoomTone(frequencies = [48, 96]) {
    stopRoomTone();
    const context = ensureAudio();
    if (!context || !soundOn) return;
    const master = context.createGain();
    master.gain.setValueAtTime(.0001, context.currentTime);
    master.gain.exponentialRampToValueAtTime(.0065, context.currentTime + 1.8);
    master.connect(context.destination);
    activeTone = frequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index ? .28 : .52;
      oscillator.connect(gain).connect(master);
      oscillator.start();
      oscillator._master = master;
      return oscillator;
    });
  }

  function stopRoomTone() {
    if (!activeTone.length || !audioContext) return;
    const now = audioContext.currentTime;
    const master = activeTone[0]._master;
    if (master) {
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(Math.max(master.gain.value, .0001), now);
      master.gain.exponentialRampToValueAtTime(.0001, now + .16);
    }
    activeTone.forEach((oscillator) => {
      try { oscillator.stop(now + .18); } catch (_) { /* already stopped */ }
    });
    activeTone = [];
  }

  function toggleSound() {
    setSoundState(!soundOn);
  }

  function setSoundState(enabled, quietStart = false) {
    soundOn = enabled;
    const button = $("#sound-toggle");
    button.textContent = soundOn ? "sound on" : "sound";
    button.setAttribute("aria-pressed", String(soundOn));
    if (soundOn) {
      ensureAudio();
      startAmbient();
      if (ROOMS[currentRoom]) startRoomTone(ROOMS[currentRoom].tone);
      else if (!quietStart) playAsset("threshold", .52);
    } else {
      stopRoomTone();
      stopAmbient();
      if (!messageAudio.paused) messageAudio.pause();
    }
  }

  function fadeMedia(media, target, duration = 520) {
    clearInterval(ambientFade);
    const start = media.volume;
    const began = performance.now();
    ambientFade = window.setInterval(() => {
      const progress = Math.min(1, (performance.now() - began) / duration);
      media.volume = start + (target - start) * progress;
      if (progress >= 1) clearInterval(ambientFade);
    }, 40);
  }

  function startAmbient() {
    if (!ambientAudio) {
      ambientAudio = new Audio(AUDIO.ambient);
      ambientAudio.loop = true;
      ambientAudio.preload = "auto";
      ambientAudio.volume = 0;
    }
    ambientAudio.play().then(() => fadeMedia(ambientAudio, messageAudio.paused ? .18 : .055, 1100)).catch(() => {});
  }

  function stopAmbient() {
    if (!ambientAudio) return;
    fadeMedia(ambientAudio, 0, 220);
    window.setTimeout(() => {
      if (!soundOn && ambientAudio) ambientAudio.pause();
    }, 250);
  }

  function playAsset(name, volume = .5) {
    if (!soundOn || !AUDIO[name]) return;
    const cue = new Audio(AUDIO[name]);
    cue.volume = volume;
    cue.play().catch(() => {});
  }

  function playClick(frequency = 180, volume = .028) {
    if (!soundOn) return;
    const context = ensureAudio();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gain.gain.setValueAtTime(volume, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .11);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .12);
  }

  function playAcquired() {
    if (!soundOn) return;
    playAsset("found", .52);
  }

  function formatTime(value) {
    const seconds = Math.max(0, Math.ceil(Number.isFinite(value) ? value : 24));
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function updateMessageState() {
    const remaining = (messageAudio.duration || 24) - messageAudio.currentTime;
    messageState.textContent = messageAudio.paused ? (state.messageHeard ? "heard" : formatTime(remaining)) : formatTime(remaining);
  }

  function toggleMessage() {
    if (!messageAudio.paused) {
      messageAudio.pause();
      return;
    }
    if (messageAudio.ended || messageAudio.currentTime >= (messageAudio.duration || 24) - .15) messageAudio.currentTime = 0;
    setSoundState(true, true);
    fadeMedia(ambientAudio, .055, 260);
    messageAudio.play().catch(() => {
      messageState.textContent = "blocked";
    });
  }

  function eraseRoute() {
    if (!confirm("Erase the route this browser remembers?")) return;
    state.visited.clear();
    state.frequencies.clear();
    state.resolutionSeen = false;
    state.messageHeard = false;
    saveState();
    messageAudio.pause();
    messageAudio.currentTime = 0;
    messageButton.classList.remove("heard", "playing");
    messageButton.setAttribute("aria-pressed", "false");
    messageButton.setAttribute("aria-label", "Play unheard message");
    messageState.textContent = "00:24";
    location.hash = "threshold";
  }

  $("#enter-labyrinth").addEventListener("click", enter);
  $("#threshold-object").addEventListener("click", enter);
  $("#sound-toggle").addEventListener("click", toggleSound);
  $("#erase-route").addEventListener("click", eraseRoute);
  messageButton.addEventListener("click", toggleMessage);
  messageAudio.addEventListener("play", () => {
    messageButton.classList.add("playing");
    messageButton.setAttribute("aria-pressed", "true");
    messageButton.setAttribute("aria-label", "Pause message");
    neuralField.classList.add("receiving");
    updateMessageState();
  });
  messageAudio.addEventListener("timeupdate", updateMessageState);
  messageAudio.addEventListener("pause", () => {
    messageButton.classList.remove("playing");
    messageButton.setAttribute("aria-pressed", "false");
    messageButton.setAttribute("aria-label", state.messageHeard
      ? "Play message again"
      : messageAudio.currentTime < .05 ? "Play unheard message" : "Resume message");
    neuralField.classList.remove("receiving");
    if (soundOn && ambientAudio) fadeMedia(ambientAudio, .18, 480);
    updateMessageState();
  });
  messageAudio.addEventListener("ended", () => {
    state.messageHeard = true;
    saveState();
    messageButton.classList.add("heard");
    messageButton.setAttribute("aria-label", "Play message again");
    messageState.textContent = "heard";
    pulseNeuralField();
  });
  $(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    const target = currentRoom === "threshold" ? $("#threshold-title") : $("#room-title");
    focusHeading(target);
    target.scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
  addEventListener("hashchange", route);
  addEventListener("beforeunload", () => { stopRoomTone(); stopAmbient(); });

  if (state.messageHeard) {
    messageButton.classList.add("heard");
    messageState.textContent = "heard";
    messageButton.setAttribute("aria-label", "Play message again");
  }

  route();
})();
