(() => {
  "use strict";

  const STORAGE_KEY = "gus-other-map-v1";
  const FREQUENCIES = [
    ["audio", "AUDIO / 44.1 kHz"],
    ["neural", "NEURAL / 80 Hz"],
    ["data", "DATA / UNBOUNDED"],
    ["motion", "MOTION / 7,500 rpm"],
    ["craft", "CRAFT / 28,800 vph"],
    ["water", "WATER / TIDAL"],
    ["home", "HOME / ALWAYS ON"]
  ];

  const ROOMS = {
    foyer: {
      number: "00",
      kicker: "RECEIVER HALL / NO SCALE",
      title: "The Signal Cabinet",
      deck: "A cabinet of instruments found tuned to the same impossible source. Nothing is labeled correctly. That has never stopped you before.",
      fragment: "One signal, through different frequencies.",
      coordinate: "42.3601° N / 71.0589° W",
      visual: "receiver",
      tone: [49, 147],
      doors: [
        ["listening", "PLAY", "The quarter-inch gate"],
        ["engine", "TURN", "The amber key"],
        ["shore", "FOLLOW", "The salt-stained compass"]
      ],
      interaction: "cabinet"
    },
    listening: {
      number: "01",
      kicker: "LISTENING ROOM / FIRST INSTRUMENT",
      title: "Before Meaning",
      deck: "Long before the models and the whiteboards, there was gain staging: learning to hear what was actually there, and what the room was adding.",
      fragment: "The signal does not care what instrument carries it.",
      coordinate: "44.1 kHz / −18 dBFS",
      visual: "tape",
      tone: [55, 110],
      doors: [
        ["tunnel", "TRACE", "Where hearing becomes action"],
        ["kitchen", "LAYER", "A slower kind of mix"],
        ["foyer", "RETURN", "The cabinet remembers"]
      ],
      interaction: "mixer"
    },
    tunnel: {
      number: "02",
      kicker: "ARCUATE TUNNEL / BIOLOGICAL ROUTE",
      title: "The Long Fasciculus",
      deck: "Sound enters as vibration. Somewhere inside the dark, perception becomes prediction, language, and movement. The cable was alive all along.",
      fragment: "The map is not the pathway. The pathway changes when it is used.",
      coordinate: "AF-L / 80 Hz / DIRECTIONAL",
      visual: "neural",
      tone: [80, 160],
      doors: [
        ["lab", "DESCEND", "The machines below"],
        ["whiteboard", "TRANSLATE", "A room full of humans"],
        ["listening", "REPLAY", "Return to the source"]
      ],
      interaction: "neural"
    },
    whiteboard: {
      number: "03",
      kicker: "WHITEBOARD CHOIR / MANY VOICES",
      title: "Teaching the Alien Machine",
      deck: "The difficult part is rarely the tool. It is helping smart people form a useful mental model before the tool teaches them the wrong one.",
      fragment: "Compasses over maps. Questions over incantations.",
      coordinate: "HUMAN ↔ MODEL / CONTEXT ACTIVE",
      visual: "whiteboard",
      tone: [64, 192],
      doors: [
        ["lab", "TEST", "The basement answers"],
        ["quiet-center", "ASK WHY", "The room behind the work"],
        ["field-notes", "READ", "Recovered working papers"]
      ],
      interaction: "question"
    },
    lab: {
      number: "04",
      kicker: "BASEMENT LAB / LOCAL WEATHER",
      title: "Machines Humming Below",
      deck: "Models, agents, wires, services, small failures in the night. The useful intelligence is not one machine. It is the architecture that lets the right thing speak at the right moment.",
      fragment: "A guitarist is not an amp. An intelligence is not its model.",
      coordinate: "LOCAL / 3 NODES / SIGNAL NOMINAL",
      visual: "terminal",
      tone: [43, 86],
      doors: [
        ["pitlane", "ROUTE", "The fast decision room"],
        ["tunnel", "RETRACE", "Back through carbon"],
        ["quiet-center", "DIM", "The reason underneath"]
      ],
      interaction: "alignment"
    },
    pitlane: {
      number: "05",
      kicker: "PIT LANE / 05:00 / RAIN POSSIBLE",
      title: "Margins Are Everything",
      deck: "Performance is a chain of tiny decisions made under pressure. The elegant line is built from preparation, feedback, and knowing which corner matters next.",
      fragment: "The apex is not where you turn. It is where every earlier choice becomes visible.",
      coordinate: "SECTOR 3 / DELTA −0.017",
      visual: "pit",
      tone: [61, 122],
      doors: [
        ["engine", "DRIVE", "The mechanical loop"],
        ["watch", "MEASURE", "The patient machine"],
        ["lab", "TELEMETRY", "What the instruments saw"]
      ],
      interaction: "apex"
    },
    engine: {
      number: "06",
      kicker: "ENGINE BAY / S54 / WARM",
      title: "The Mechanical Loop",
      deck: "Input, response, correction. Steering speaks through the hands; the engine answers in harmonics. At the limit, the narrator finally goes quiet.",
      fragment: "Flow is the moment attention stops describing itself.",
      coordinate: "7,500 rpm / OIL 98°C / CLEAR",
      visual: "tach",
      tone: [50, 101],
      doors: [
        ["pitlane", "APEX", "The line under pressure"],
        ["shore", "COAST", "Where control loosens"],
        ["foyer", "PARK", "Back to the cabinet"]
      ],
      interaction: "rev"
    },
    shore: {
      number: "07",
      kicker: "BEIRUT SHORE / WESTWARD CURRENT",
      title: "Water Keeps No Map",
      deck: "A city at the edge of the sea teaches adaptation without announcing the lesson. Currents move around damage. They keep their direction by yielding.",
      fragment: "Water was the first teacher of wayfinding.",
      coordinate: "33.8938° N / 35.5018° E",
      visual: "shore",
      tone: [52, 104],
      doors: [
        ["kitchen", "RETURN", "A ritual carried forward"],
        ["watch", "DRIFT", "Time kept another way"],
        ["foyer", "ORIENT", "Follow the brass line"]
      ],
      interaction: "wave"
    },
    kitchen: {
      number: "08",
      kicker: "SUNDAY KITCHEN / LOW HEAT",
      title: "The Patient Layer",
      deck: "Some systems improve when you stop trying to accelerate them. Water, spice, heat, waiting. Small rituals compound into something that feels like home.",
      fragment: "The recipe is a memory with measurements attached.",
      coordinate: "LOW HEAT / NO SHORTCUT DETECTED",
      visual: "kitchen",
      tone: [65, 130],
      doors: [
        ["quiet-center", "CARRY", "What the ritual protects"],
        ["listening", "MIX", "Return to the first instrument"],
        ["shore", "REMEMBER", "Salt returns to water"]
      ],
      interaction: "ritual"
    },
    watch: {
      number: "09",
      kicker: "WATCHMAKER'S BENCH / HAND-WOUND",
      title: "Accumulated Accuracy",
      deck: "A thousand small surfaces cooperate to keep one promise. Craft is not ornament. It is what remains when shortcuts have had enough time to fail.",
      fragment: "Precision is the floor. Presence is the multiplier.",
      coordinate: "28,800 vph / +2 sec/day",
      visual: "watch",
      tone: [72, 144],
      doors: [
        ["pitlane", "TIME", "Measure the margin"],
        ["shore", "TIDE", "The clock without hands"],
        ["quiet-center", "KEEP", "What outlasts the instrument"]
      ],
      interaction: "gears"
    },
    "quiet-center": {
      number: "10",
      kicker: "QUIET CENTER / INSTRUMENTS AT REST",
      title: "What the Work Is For",
      deck: "Behind the systems, the lessons, the machines, and the midnight experiments: a small warm room where none of them are the point.",
      fragment: "The work should make more room for a life, not quietly become the life.",
      coordinate: "HOME / SIGNAL HELD",
      visual: "quiet",
      tone: [48, 96],
      doors: [
        ["strange-loop", "CONTINUE", "The route folds inward"],
        ["field-notes", "OPEN", "Evidence from outside"],
        ["foyer", "RETURN", "Leave the lamp on"]
      ],
      interaction: "quiet"
    },
    "field-notes": {
      number: "11",
      kicker: "FIELD NOTES / PUBLIC FRAGMENTS",
      title: "Evidence From Outside",
      deck: "Some pages escaped the cabinet and passed as ordinary writing. Their edges still carry the same frequency.",
      fragment: "What if? Let's find out.",
      coordinate: "ARCHIVE / 5 DOCUMENTS RECOVERED",
      visual: "archive",
      tone: [58, 174],
      doors: [
        ["whiteboard", "TEACH", "Return to the choir"],
        ["strange-loop", "SYNTHESIZE", "The route behind the route"],
        ["foyer", "FILE", "Close the drawer"]
      ],
      interaction: "notes"
    },
    "strange-loop": {
      number: "12",
      kicker: "STRANGE LOOP / HEADING RENEWED",
      title: "The Map Looks Back",
      deck: "Sound became neural signal. Neural signal became teaching. Teaching became architecture. Architecture became another instrument for listening.",
      fragment: "A true heading is renewed, not possessed.",
      coordinate: "START = FINISH / ERROR ± LIFE",
      visual: "loop",
      tone: [47, 141],
      doors: [
        ["foyer", "AGAIN", "The objects have changed"],
        ["listening", "HEAR", "Begin before meaning"],
        ["quiet-center", "REST", "Keep the signal held"]
      ],
      interaction: "loop"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const threshold = $("#threshold");
  const labyrinth = $("#labyrinth");
  const roomVisual = $("#room-visual");
  const roomInteraction = $("#room-interaction");
  const doors = $("#doors");
  const compass = $("#compass");
  const frequencyRack = $(".frequency-rack");
  let currentRoom = "threshold";
  let soundOn = false;
  let audioContext = null;
  let activeTone = [];
  let resolutionTimer = null;
  let interactionCleanup = null;

  const saved = loadState();
  const state = {
    visited: new Set(saved.visited || []),
    frequencies: new Set(saved.frequencies || []),
    resolutionSeen: Boolean(saved.resolutionSeen)
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
        resolutionSeen: state.resolutionSeen
      }));
    } catch (_) {
      // The map still works if storage is unavailable; it simply forgets.
    }
  }

  function route() {
    let requested = "threshold";
    try {
      requested = decodeURIComponent(location.hash.slice(1)) || "threshold";
    } catch (_) {
      requested = "foyer";
    }
    if (requested === "threshold") {
      showThreshold();
      return;
    }
    renderRoom(ROOMS[requested] ? requested : "foyer");
  }

  function showThreshold() {
    currentRoom = "threshold";
    document.body.dataset.room = "threshold";
    threshold.hidden = false;
    labyrinth.hidden = true;
    compass.hidden = true;
    frequencyRack.hidden = true;
    $(".skip-link").href = "#threshold-title";
    $("#room-coordinate").textContent = "42.3601° N / 71.0589° W";
    if (interactionCleanup) {
      interactionCleanup();
      interactionCleanup = null;
    }
    stopRoomTone();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderRoom(id) {
    const room = ROOMS[id];
    currentRoom = id;
    document.body.dataset.room = id;
    threshold.hidden = true;
    labyrinth.hidden = false;
    frequencyRack.hidden = false;
    $(".skip-link").href = "#room-title";
    state.visited.add(id);
    saveState();

    $("#room-number").textContent = room.number;
    $("#room-kicker").textContent = room.kicker;
    $("#room-title").textContent = room.title;
    $("#room-deck").textContent = room.deck;
    $("#room-fragment").textContent = room.fragment || "";
    $("#room-coordinate").textContent = room.coordinate;

    roomVisual.className = `room-visual visual-${room.visual}`;
    roomVisual.innerHTML = visualMarkup(room.visual);
    if (interactionCleanup) {
      interactionCleanup();
      interactionCleanup = null;
    }
    roomInteraction.innerHTML = "";
    setupInteraction(room.interaction);
    renderDoors(room.doors);
    updateCompass();
    updateFrequencies();
    if (soundOn) startRoomTone(room.tone);

    labyrinth.classList.remove("room-entering");
    void labyrinth.offsetWidth;
    labyrinth.classList.add("room-entering");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function visualMarkup(type) {
    const labels = {
      receiver: ["MULTIBAND RECEIVER / OBJECT 00", "INPUT: UNKNOWN<br>LOCK: PARTIAL"],
      tape: ["TAPE TRANSPORT / OBJECT 01", "BIAS: WARM<br>WOW: HUMAN"],
      neural: ["TRACTOGRAPH / OBJECT 02", "MYELIN: INTACT<br>DIRECTION: BOTH"],
      whiteboard: ["LEARNING SURFACE / OBJECT 03", "ASSUMPTIONS: VISIBLE<br>JARGON: FALLING"],
      terminal: ["ORCHESTRATION RACK / OBJECT 04", "SERVICES: LISTENING<br>CONTEXT: ROUTED"],
      pit: ["TELEMETRY PLANE / OBJECT 05", "GRIP: VARIABLE<br>MARGIN: 0.017"],
      tach: ["ANALOG FEEDBACK / OBJECT 06", "S54: WARM<br>NARRATOR: QUIET"],
      shore: ["TIDAL COMPASS / OBJECT 07", "CURRENT: WEST<br>MEMORY: SALT"],
      kitchen: ["RITUAL ENGINE / OBJECT 08", "HEAT: LOW<br>TIME: REQUIRED"],
      watch: ["ESCAPEMENT / OBJECT 09", "BEAT: 28,800<br>PROMISE: KEPT"],
      quiet: ["INNER CHAMBER / OBJECT 10", "NO MEASUREMENT<br>NECESSARY"],
      archive: ["PUBLIC EVIDENCE / DRAWER 11", "FRAGMENTS: 5<br>STATUS: LEGIBLE"],
      loop: ["RECURSIVE HEADING / OBJECT 12", "ORIGIN: MOVING<br>RETURN: ALTERED"]
    };
    const [label, reading] = labels[type];
    const frame = (body) => `<span class="visual-label">${label}</span>${body}<span class="visual-reading">${reading}</span>`;
    switch (type) {
      case "receiver": return frame(`<div class="receiver-array"><i class="receiver-ring"></i><i class="receiver-ring"></i><i class="receiver-ring"></i><i class="receiver-line"></i><i class="receiver-core"></i></div>`);
      case "tape": return frame(`<div class="tape-machine"><i class="reel"></i><i class="reel"></i><i class="tape-line"></i></div>`);
      case "neural": return frame(`<div class="neural-field"><i class="axon"></i><i class="axon"></i><i class="axon"></i><i class="synapse"></i><i class="synapse"></i><i class="synapse"></i><i class="synapse"></i></div>`);
      case "whiteboard": return frame(`<div class="whiteboard-plane"><i class="whiteboard-line"></i><i class="whiteboard-line"></i><i class="whiteboard-line"></i><span class="whiteboard-word">HUMAN</span><span class="whiteboard-word">MODEL</span><span class="whiteboard-word">CONTEXT</span></div>`);
      case "terminal":
      case "archive": return frame(`<div class="terminal-stack"><div class="terminal-row"><span>LISTEN</span><i></i><b>91%</b></div><div class="terminal-row"><span>ROUTE</span><i></i><b>78%</b></div><div class="terminal-row"><span>TEACH</span><i></i><b>91%</b></div><div class="terminal-row"><span>DOUBT</span><i></i><b>58%</b></div><i class="terminal-orbit"></i></div>`);
      case "pit": return frame(`<div class="pit-grid"></div><i class="pit-light"></i><i class="pit-light"></i><i class="pit-light"></i><i class="pit-apex"></i>`);
      case "tach": return frame(`<div class="tachometer"><i class="visual-needle"></i></div>`);
      case "shore": return frame(`<i class="shore-horizon"></i><i class="shore-wave"></i><i class="shore-wave"></i><i class="shore-wave"></i><i class="shore-moon"></i>`);
      case "kitchen": return frame(`<div class="kitchen-orbit"><i class="steam"></i><i class="steam"></i><i class="steam"></i></div>`);
      case "watch": return frame(`<div class="watch-face"><i class="watch-gear"></i><i class="watch-gear"></i><i class="watch-gear"></i><i class="watch-hand"></i></div>`);
      case "quiet": return frame(`<i class="quiet-light"></i><i class="quiet-door"></i><i class="quiet-floor"></i>`);
      case "loop": return frame(`<i class="loop-form"></i>`);
      default: return frame("");
    }
  }

  function renderDoors(roomDoors) {
    doors.innerHTML = "";
    const template = $("#door-template");
    roomDoors.forEach(([id, verb, label]) => {
      const fragment = template.content.cloneNode(true);
      const link = $(".door", fragment);
      link.href = `#${id}`;
      $("small", fragment).textContent = verb;
      $("strong", fragment).textContent = label;
      doors.appendChild(fragment);
    });
  }

  function interactionShell(instruction, content) {
    return `<p class="interaction-instruction">${instruction}</p>${content}<p class="interaction-result" role="status"></p>`;
  }

  function setupInteraction(type) {
    switch (type) {
      case "cabinet": setupCabinet(); break;
      case "mixer": setupMixer(); break;
      case "neural": setupNeuralTrace(); break;
      case "alignment": setupAlignment(); break;
      case "rev": setupRev(); break;
      case "wave": setupWave(); break;
      case "ritual": setupRitual(); break;
      case "gears": setupGears(); break;
      case "question": setupQuestion(); break;
      case "apex": setupApex(); break;
      case "quiet": setupQuiet(); break;
      case "notes": setupNotes(); break;
      case "loop": setupLoop(); break;
    }
  }

  function result(text) {
    const el = $(".interaction-result", roomInteraction);
    if (el) el.textContent = text;
  }

  function setupCabinet() {
    roomInteraction.innerHTML = interactionShell("TOUCH THREE UNLABELED OBJECTS", `<div class="cabinet-grid"><button class="cabinet-object" data-note="It remembers rooms you have not entered yet.">BRASS COIL</button><button class="cabinet-object" data-note="The waveform resembles a coastal road.">GLASS NEEDLE</button><button class="cabinet-object" data-note="Warm, despite not being connected to anything.">AMBER KEY</button></div>`);
    const found = new Set();
    $$(".cabinet-object", roomInteraction).forEach((button, index) => button.addEventListener("click", () => {
      found.add(index);
      button.classList.add("revealed");
      button.textContent = button.dataset.note;
      result(found.size === 3 ? "The cabinet unlocks three routes. It does not explain them." : `${found.size} / 3 OBJECTS RESPONDING`);
      playClick(180 + index * 55);
    }));
  }

  function setupMixer() {
    roomInteraction.innerHTML = interactionShell("MOVE ALL THREE FADERS UNTIL THE ROOM APPEARS", `<div class="mixer"><label class="mix-channel"><span>GUITAR</span><input type="range" min="0" max="100" value="22" data-channel="0"><output>22</output></label><label class="mix-channel"><span>ROOM</span><input type="range" min="0" max="100" value="68" data-channel="1"><output>68</output></label><label class="mix-channel"><span>GHOST</span><input type="range" min="0" max="100" value="7" data-channel="2"><output>07</output></label></div>`);
    const touched = new Set();
    $$("input", roomInteraction).forEach((input, index) => input.addEventListener("input", () => {
      touched.add(index);
      input.nextElementSibling.value = String(input.value).padStart(2, "0");
      if (soundOn && audioContext) playClick(100 + Number(input.value) * 2, .025);
      if (touched.size === 3) {
        result("A ROOM TONE EMERGES UNDER THE MUSIC.");
        collectFrequency("audio");
      } else result(`${touched.size} / 3 CHANNELS TOUCHED`);
    }));
  }

  function setupNeuralTrace() {
    roomInteraction.innerHTML = interactionShell("TRACE THE PATH: PERCEIVE → PREDICT → SPEAK → MOVE", `<div class="neural-trace"><button class="neural-node" data-node="0" aria-label="Perceive">P</button><button class="neural-node" data-node="1" aria-label="Predict">R</button><button class="neural-node" data-node="2" aria-label="Speak">S</button><button class="neural-node" data-node="3" aria-label="Move">M</button></div>`);
    let step = 0;
    const sequence = [0, 1, 2, 3];
    $$(".neural-node", roomInteraction).forEach((button) => button.addEventListener("click", () => {
      const value = Number(button.dataset.node);
      if (value === sequence[step]) {
        button.classList.add("active");
        step += 1;
        playClick(170 + step * 60);
        if (step === sequence.length) {
          result("PATHWAY STRENGTHENED BY USE.");
          collectFrequency("neural");
        } else result(`${step} / 4 SYNAPSES FIRING`);
      } else {
        step = 0;
        $$(".neural-node", roomInteraction).forEach((node) => node.classList.remove("active"));
        button.classList.add("wrong");
        setTimeout(() => button.classList.remove("wrong"), 350);
        result("SIGNAL LOST. BEGIN WITH PERCEPTION.");
      }
    }));
  }

  function setupAlignment() {
    roomInteraction.innerHTML = interactionShell("ALIGN THE THREE CONTEXTS", `<div class="alignment-panel"><button class="alignment-switch" data-key="human">HUMAN<br>INTENT</button><button class="alignment-switch" data-key="model">MODEL<br>CAPABILITY</button><button class="alignment-switch" data-key="world">WORLD<br>STATE</button></div>`);
    const active = new Set();
    $$(".alignment-switch", roomInteraction).forEach((button, index) => button.addEventListener("click", () => {
      button.classList.toggle("on");
      button.classList.contains("on") ? active.add(button.dataset.key) : active.delete(button.dataset.key);
      playClick(130 + index * 70);
      if (active.size === 3) {
        result("THE HARNESS HOLDS. THE MODEL IS ONLY ONE INSTRUMENT.");
        collectFrequency("data");
      } else result(`${active.size} / 3 CONTEXTS ALIGNED`);
    }));
  }

  function setupRev() {
    roomInteraction.innerHTML = interactionShell("HOLD, THEN RELEASE INSIDE THE GOLD BAND", `<div class="rev-panel"><button class="rev-button">HOLD TO REV</button><div class="rev-meter" aria-hidden="true"><div class="rev-fill"></div></div></div>`);
    const button = $(".rev-button", roomInteraction);
    const fill = $(".rev-fill", roomInteraction);
    let value = 0;
    let frame = 0;
    let last = 0;
    let holding = false;
    const rise = (time) => {
      if (!holding) return;
      if (!last) last = time;
      value = Math.min(100, value + (time - last) / 22);
      last = time;
      fill.style.width = `${value}%`;
      if (soundOn && activeTone[0]) activeTone[0].frequency.setTargetAtTime(50 + value * 2.2, audioContext.currentTime, .03);
      if (value < 100) frame = requestAnimationFrame(rise); else release();
    };
    const hold = (event) => {
      if (event.type === "keydown" && ![" ", "Enter"].includes(event.key)) return;
      event.preventDefault();
      if (holding) return;
      value = 0; last = 0; holding = true;
      button.classList.add("held");
      frame = requestAnimationFrame(rise);
    };
    const release = (event) => {
      if (event && event.type === "keyup" && ![" ", "Enter"].includes(event.key)) return;
      if (!holding) return;
      holding = false;
      cancelAnimationFrame(frame);
      button.classList.remove("held");
      if (value >= 72 && value <= 84) {
        result(`7,${Math.round(value * 100)} RPM. NARRATOR QUIET.`);
        collectFrequency("motion");
      } else if (value < 72) result("TOO POLITE. THE ENGINE IS STILL WAITING.");
      else result("REDLINE. RESPECT THE WARM-UP.");
      setTimeout(() => { value = 0; fill.style.width = "0"; }, 650);
    };
    button.addEventListener("pointerdown", hold);
    window.addEventListener("pointerup", release);
    button.addEventListener("keydown", hold);
    button.addEventListener("keyup", release);
    interactionCleanup = () => window.removeEventListener("pointerup", release);
  }

  function setupWave() {
    roomInteraction.innerHTML = interactionShell("TOUCH THE SAME WAVE THREE TIMES. IT WILL NOT BE THE SAME WAVE.", `<button class="wave-trace"><span>FOLLOW CURRENT</span></button>`);
    let count = 0;
    $(".wave-trace", roomInteraction).addEventListener("click", () => {
      count += 1;
      playClick(120 - count * 9);
      if (count >= 3) {
        result("DIRECTION HELD. SHAPE CHANGED.");
        collectFrequency("water");
      } else result(`${count} / 3 CURRENTS FOLLOWED`);
    });
  }

  function setupRitual() {
    roomInteraction.innerHTML = interactionShell("ASSEMBLE THE RITUAL IN THE ORDER IT REMEMBERS", `<div class="ritual-panel"><button class="ritual-step" data-step="1">WATER</button><button class="ritual-step" data-step="2">SPICE</button><button class="ritual-step" data-step="3">TIME</button></div>`);
    let next = 1;
    $$(".ritual-step", roomInteraction).forEach((button) => button.addEventListener("click", () => {
      if (Number(button.dataset.step) === next) {
        button.classList.add("done");
        next += 1;
        playClick(140 + next * 35);
        if (next === 4) {
          result("NO SHORTCUT FOUND. NONE NEEDED.");
          collectFrequency("home");
        } else result(`${next - 1} / 3 LAYERS HELD`);
      } else {
        next = 1;
        $$(".ritual-step", roomInteraction).forEach((step) => step.classList.remove("done"));
        result("THE ORDER MATTERS, HABIBI. BEGIN WITH WATER.");
      }
    }));
  }

  function setupGears() {
    roomInteraction.innerHTML = interactionShell("TURN EACH WHEEL UNTIL THE ESCAPEMENT BREATHES", `<div class="gear-panel"><button class="gear-button" data-target="1" data-value="0">A<br>·</button><button class="gear-button" data-target="2" data-value="0">B<br>·</button><button class="gear-button" data-target="1" data-value="0">C<br>·</button></div>`);
    const buttons = $$(".gear-button", roomInteraction);
    buttons.forEach((button, index) => button.addEventListener("click", () => {
      const value = (Number(button.dataset.value) + 1) % 3;
      button.dataset.value = String(value);
      button.style.transform = `rotate(${value * 120}deg)`;
      button.classList.toggle("aligned", value === Number(button.dataset.target));
      playClick(220 + index * 45);
      if (buttons.every((gear) => gear.dataset.value === gear.dataset.target)) {
        result("THE PROMISE ADVANCES ONE SECOND.");
        collectFrequency("craft");
      } else result(`${buttons.filter((gear) => gear.dataset.value === gear.dataset.target).length} / 3 WHEELS ALIGNED`);
    }));
  }

  function setupQuestion() {
    roomInteraction.innerHTML = interactionShell("ASK THE ROOM THE USEFUL QUESTION", `<button class="minor-action reveal-answer">WHAT ARE WE ACTUALLY TRYING TO HELP A HUMAN DO?</button>`);
    $(".reveal-answer", roomInteraction).addEventListener("click", () => {
      result("THE WHITEBOARD STOPS PERFORMING INTELLIGENCE AND STARTS MAKING A PLAN.");
      playClick(196);
    });
  }

  function setupApex() {
    roomInteraction.innerHTML = interactionShell("THE FASTEST LINE IS HIDING IN THE MARGIN", `<button class="minor-action find-apex">FIND 0.017 SECONDS</button>`);
    $(".find-apex", roomInteraction).addEventListener("click", () => {
      result("FOUND: PREPARATION DISGUISED AS INSTINCT.");
      playClick(244);
    });
  }

  function setupQuiet() {
    roomInteraction.innerHTML = interactionShell("ONE CONTROL REMAINS", `<button class="minor-action quiet-button">TURN THE INSTRUMENTS OFF</button>`);
    $(".quiet-button", roomInteraction).addEventListener("click", (event) => {
      stopRoomTone();
      event.currentTarget.textContent = "THEY WERE NEVER THE POINT";
      result("THE SIGNAL CONTINUES WITHOUT BEING MEASURED.");
    });
  }

  function setupNotes() {
    roomInteraction.innerHTML = `<p class="interaction-instruction">PUBLIC FRAGMENTS / OPEN IN THIS WORLD</p><div class="field-notes"><a class="field-note" href="/articles/harness-part-1.html"><span>THE HARNESS / PART I</span><span>READ ↗</span></a><a class="field-note" href="/articles/harness-part-2.html"><span>THE HARNESS / PART II</span><span>READ ↗</span></a><a class="field-note" href="/articles/harness-part-3.html"><span>THE HARNESS / PART III</span><span>READ ↗</span></a><a class="field-note" href="/articles/first-principles.html"><span>FIRST PRINCIPLES</span><span>READ ↗</span></a><a class="field-note" href="/articles/agents-attack-surface.html"><span>THE AGENT'S ATTACK SURFACE</span><span>READ ↗</span></a></div>`;
  }

  function setupLoop() {
    const count = state.frequencies.size;
    roomInteraction.innerHTML = interactionShell("THE INSTRUMENT COMPARES THE ROUTE WITH ITSELF", `<button class="minor-action loop-again">BEGIN AGAIN / KEEP WHAT WAS FOUND</button>`);
    result(count === 7 ? "FULL SPECTRUM HELD. THE THREAD IS VISIBLE." : `${count} / 7 FREQUENCIES HELD. THE LOOP REMAINS OPEN.`);
    $(".loop-again", roomInteraction).addEventListener("click", () => { location.hash = "foyer"; });
  }

  function collectFrequency(id) {
    if (state.frequencies.has(id)) return;
    state.frequencies.add(id);
    saveState();
    updateFrequencies();
    frequencyRack.classList.remove("frequency-acquired");
    void frequencyRack.offsetWidth;
    frequencyRack.classList.add("frequency-acquired");
    playAcquired();
    if (state.frequencies.size === FREQUENCIES.length && !state.resolutionSeen) {
      clearTimeout(resolutionTimer);
      resolutionTimer = setTimeout(() => {
        state.resolutionSeen = true;
        saveState();
        openDialog($("#resolution"));
      }, 1100);
    }
  }

  function updateFrequencies() {
    $("#frequency-count").textContent = `${state.frequencies.size} / ${FREQUENCIES.length}`;
    const list = $("#frequency-list");
    list.innerHTML = "";
    FREQUENCIES.forEach(([id, label]) => {
      const item = document.createElement("li");
      item.textContent = label;
      item.classList.toggle("found", state.frequencies.has(id));
      list.appendChild(item);
    });
  }

  function updateCompass() {
    compass.hidden = state.visited.size < 3;
    const roomList = $("#compass-rooms");
    roomList.innerHTML = "";
    [...state.visited].filter((id) => ROOMS[id]).forEach((id) => {
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.innerHTML = `<span>${ROOMS[id].title}</span><small>${ROOMS[id].number}</small>`;
      roomList.appendChild(link);
    });
  }

  function togglePanel(button, panel) {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  }

  function openDialog(dialog) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDialog(dialog) {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
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
    master.gain.exponentialRampToValueAtTime(.026, context.currentTime + 1.4);
    master.connect(context.destination);
    activeTone = frequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index ? .34 : .65;
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
      master.gain.exponentialRampToValueAtTime(.0001, now + .18);
    }
    activeTone.forEach((oscillator) => {
      try { oscillator.stop(now + .2); } catch (_) { /* already stopped */ }
    });
    activeTone = [];
  }

  function toggleSound() {
    soundOn = !soundOn;
    const button = $("#sound-toggle");
    button.textContent = soundOn ? "SOUND ON" : "SOUND OFF";
    button.setAttribute("aria-pressed", String(soundOn));
    if (soundOn) {
      ensureAudio();
      if (ROOMS[currentRoom]) startRoomTone(ROOMS[currentRoom].tone);
      else playTransmissionTone();
    } else stopRoomTone();
  }

  function playClick(frequency = 180, volume = .04) {
    if (!soundOn) return;
    const context = ensureAudio();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gain.gain.setValueAtTime(volume, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .12);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .13);
  }

  function playAcquired() {
    if (!soundOn) return;
    [220, 330, 495].forEach((frequency, index) => setTimeout(() => playClick(frequency, .045), index * 95));
  }

  function playTransmissionTone() {
    soundOn = true;
    $("#sound-toggle").textContent = "SOUND ON";
    $("#sound-toggle").setAttribute("aria-pressed", "true");
    const notes = [110, 165, 220, 330, 220, 165];
    notes.forEach((frequency, index) => setTimeout(() => playClick(frequency, .035), index * 190));
  }

  function initCanvas() {
    const canvas = $("#signal-field");
    const context = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pointer = { x: -1000, y: -1000 };
    let particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = innerWidth;
      height = innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: Math.min(44, Math.max(22, Math.floor(width / 34))) }, (_, index) => ({
        x: (index * 97) % width,
        y: (index * 193) % height,
        vx: ((index % 5) - 2) * .035,
        vy: ((index % 7) - 3) * .025,
        r: index % 9 === 0 ? 1.6 : .75
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        if (!reduced) {
          particle.x = (particle.x + particle.vx + width) % width;
          particle.y = (particle.y + particle.vy + height) % height;
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 130) {
            particle.x -= dx * .0007;
            particle.y -= dy * .0007;
          }
        }
        context.fillStyle = index % 7 === 0 ? "rgba(184,136,77,.5)" : "rgba(102,175,164,.28)";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const distance = Math.hypot(other.x - particle.x, other.y - particle.y);
          if (distance < 105) {
            context.strokeStyle = `rgba(102,175,164,${(1 - distance / 105) * .08})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      if (!reduced) requestAnimationFrame(draw);
    };

    resize();
    draw();
    addEventListener("resize", resize, { passive: true });
    addEventListener("pointermove", (event) => { pointer = { x: event.clientX, y: event.clientY }; }, { passive: true });
  }

  $("#enter-labyrinth").addEventListener("click", () => { location.hash = "foyer"; });
  $(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    const target = currentRoom === "threshold" ? $("#threshold-title") : $("#room-title");
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
  $("#sound-toggle").addEventListener("click", toggleSound);
  $("#message-button").addEventListener("click", () => openDialog($("#transmission")));
  $("#play-transmission").addEventListener("click", playTransmissionTone);
  $("#compass-toggle").addEventListener("click", () => togglePanel($("#compass-toggle"), $("#compass-panel")));
  $("#frequency-toggle").addEventListener("click", () => togglePanel($("#frequency-toggle"), $("#frequency-panel")));
  $("#forget-route").addEventListener("click", () => {
    if (!confirm("Erase the recovered route and all seven frequencies from this browser?")) return;
    state.visited.clear();
    state.frequencies.clear();
    state.resolutionSeen = false;
    saveState();
    updateCompass();
    updateFrequencies();
    location.hash = "threshold";
  });
  $$(".dialog-close").forEach((button) => button.addEventListener("click", () => closeDialog(button.closest("dialog"))));
  [$("#transmission"), $("#resolution")].forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  }));
  addEventListener("hashchange", route);
  addEventListener("beforeunload", stopRoomTone);

  updateFrequencies();
  initCanvas();
  route();
})();
