(() => {
  "use strict";

  const STORAGE_KEY = "gus-other-map-v1";
  const ROOM_IDS = ["foyer", "listening", "tunnel", "whiteboard", "lab", "pitlane", "engine", "shore", "kitchen", "watch", "quiet-center", "field-notes", "strange-loop"];
  const STORY_PATH = [...ROOM_IDS];
  const ARC_PHASES = [
    { through: 2, number: "I", name: "ATTUNE", instruction: "notice what the noise is hiding" },
    { through: 4, number: "II", name: "TRANSLATE", instruction: "make the signal usable" },
    { through: 9, number: "III", name: "CARE", instruction: "let attention become practice" },
    { through: 12, number: "IV", name: "RETURN", instruction: "find what the instruments were carrying" }
  ];
  const PUZZLE_SYMBOLS = ["○", "△", "□", "◇"];
  const AMBIENT_LOOP_OFFSET = 0.08;
  const IDENTITY_NAME = "GUS HALWANI,";
  const IDENTITY_DEGREE = "PHD";
  const IDENTITY_GLYPHS = "0123456789ABCDEF∆◇#?/";
  const AUDIO = {
    ambient: "assets/audio/carrier-thirteen.mp3?v=2",
    threshold: "assets/audio/threshold-wake.mp3",
    axon: "assets/audio/axon-pulse.mp3",
    found: "assets/audio/frequency-found.mp3",
    tapeStart: "assets/audio/tape-machine-start.mp3",
    tapeStop: "assets/audio/tape-machine-stop.mp3",
    switches: "assets/audio/switches",
    resolves: "assets/audio/resolves"
  };
  const GLITCH_LINES = [
    "SYNC ERROR // CARRIER DRIFT",
    "0x13 :: SIGNAL PARTIAL",
    "ASCII HANDSHAKE FAILED",
    "TRACKING... TRACKING...",
    "PERSONA CACHE / UNSTABLE",
    "THE MAP IS LISTENING"
  ];
  const GLITCH_MODES = ["glitch-chroma", "glitch-roll", "glitch-tracking"];

  const ROOMS = {
    foyer: {
      index: "UNNUMBERED",
      title: "FOUND\nWITHOUT\nA MAP",
      fragment: "the first instrument was not the first.",
      theme: "bone",
      tone: [49, 147],
      terminalLabel: "SUBJECT INDEX // SIGNAL-BOUND GENERALIST",
      terminal: "The instruments kept changing: console, cortex, classroom, model. The operation underneath did not. Find a signal, remove what hides it, return it to another human in usable form.",
      ascii: ["o---o---[?]", " \\  |  /", "  [GUS]"],
      nodes: ["AUDIO SIGNAL", "NEURAL SIGNAL", "DATA SIGNAL", "SAME HAND", "NEW INSTRUMENT", "GUS"],
      puzzle: { labels: ["HEAR", "TRACE", "TRANSLATE", "RETURN"], solution: [0, 1, 2], clue: "Reception comes first. Follow it inward. Make it portable.", shape: 0 },
      story: "Gus started in audio, moved into neuroscience and education, and now helps people use AI thoughtfully. He keeps following the same question: how do you find the signal, understand it, and make it useful to someone else?",
      doors: [["listening", "hiss"], ["engine", "heat"], ["shore", "west"]]
    },
    listening: {
      index: "ROOM TONE",
      title: "BEFORE\nMEANING",
      fragment: "room / music / ghost",
      theme: "paper",
      tone: [55, 110],
      terminalLabel: "CHANNEL 01 // AUDIO",
      terminal: "Before the lab and before the classroom, there was a room full of pressure waves. The first discipline was not making things louder. It was learning which part of the room was already speaking.",
      ascii: ["~~~~|\u00b7|~~~~", "  [ REC ]", "< room_tone >"],
      nodes: ["ROOM TONE", "GAIN", "FEEDBACK", "BEFORE MEANING", "MIX", "EAR"],
      puzzle: { labels: ["ROOM", "SOURCE", "NOISE", "MEANING"], solution: [0, 2, 3], clue: "Hear the whole field. Name the interference. Meaning comes last.", shape: 1 },
      story: "Gus learned to listen in studios: to the source, the room, and the space between them. That habit still shapes how he works—pay attention first, then decide what needs changing.",
      doors: [["tunnel", "inside"], ["kitchen", "slow"], ["foyer", "back"]]
    },
    tunnel: {
      index: "LIVING CABLE",
      title: "THE PATH\nIS ALIVE",
      fragment: "use changes the route.",
      theme: "ash",
      tone: [80, 160],
      terminalLabel: "CHANNEL 02 // NEURAL SYSTEMS",
      terminal: "The wire was never only wire. Every passage altered the next passage; repetition became structure. He followed sound inward until listening turned into plasticity, behavior, and the machinery of learning.",
      ascii: ["o---o    o", "    \\--o--o", "use => route"],
      nodes: ["NEURON", "PLASTICITY", "USE", "PATH", "SENSE", "BRAIN"],
      puzzle: { labels: ["SENSE", "SYNAPSE", "ROUTE", "USE"], solution: [0, 1, 3], clue: "The world arrives. A connection changes. Repetition leaves the mark.", shape: 2 },
      story: "Neuroscience gave Gus a closer look at how people learn and change. He was drawn to plasticity: the quiet fact that repeated experience can reshape the path.",
      doors: [["lab", "below"], ["whiteboard", "translate"], ["listening", "echo"]]
    },
    whiteboard: {
      index: "PARTIAL ERASURE",
      title: "ASK\nTHE USEFUL\nQUESTION",
      fragment: "not what the machine can do.",
      theme: "bone",
      tone: [64, 192],
      terminalLabel: "CHANNEL 03 // EDUCATION",
      terminal: "A tool is only the beginning. Build it around the people doing the work, then design the learning with them: immersive practice, shared problems, and hackathons where the room can change the thing it is learning to use.",
      ascii: ["[?]--[ctx]", "       \\ ", "      [you]"],
      nodes: ["QUESTION", "CONTEXT", "PERSON", "MODEL", "TRANSLATE", "DFCI"],
      puzzle: { labels: ["CAPABILITY", "QUESTION", "CONTEXT", "PERSON"], solution: [1, 2, 3], clue: "Do not begin with the tool. Ask. Situate. Return to the human.", shape: 3 },
      story: "At Dana-Farber, Gus builds practical AI tools for people, then co-designs immersive training and hackathons with them. The point is not just to explain the technology, but to make something useful together and learn from what happens in the room.",
      doors: [["lab", "test"], ["quiet-center", "why"], ["field-notes", "scraps"]]
    },
    lab: {
      index: "BELOW",
      title: "THREE\nMACHINES\nHUM",
      fragment: "the model is one instrument.",
      theme: "black",
      tone: [43, 86],
      terminalLabel: "CHANNEL 04 // AI ENABLEMENT",
      terminal: "The visible model is only the loudest component. Data enters from one wall, workflow from another, and human consequence through a door nobody labels. Close all three before calling it a system.",
      ascii: ["[M] [D] [W]", " \\   |   /", "  < HUMAN >"],
      nodes: ["MODEL", "DATA", "WORKFLOW", "GUARDRAIL", "HUMAN", "ENABLE"],
      puzzle: { labels: ["MODEL", "DATA", "WORKFLOW", "DEMO"], solution: [1, 2, 3], clue: "The loud component is not the system. Begin with what feeds it, place it in the work, then prove it in use.", shape: 4 },
      story: "Gus spends a lot of time looking past the model itself. He is curious about how data, workflow, policy, and people fit together—and what has to be true for AI to actually help.",
      doors: [["pitlane", "margin"], ["tunnel", "carbon"], ["quiet-center", "dim"]]
    },
    pitlane: {
      index: "MISSING TIME",
      title: "0.017",
      fragment: "the corner begins before it appears.",
      theme: "paper",
      tone: [61, 122],
      terminalLabel: "CHANNEL 05 // MOTION",
      terminal: "The fast line is assembled early. Brake before fear, look beyond the visible corner, turn once, and leave the machine enough margin to tell you what the surface knows.",
      ascii: ["----\\__", "      ) )", "0.017 sec"],
      nodes: ["0.017", "LOOK AHEAD", "BRAKE", "TURN", "MARGIN", "FEEL"],
      puzzle: { labels: ["BRAKE", "LOOK", "TURN", "POWER"], solution: [0, 1, 2], clue: "Speed is decided before the corner: create margin, move the eyes, commit once.", shape: 5 },
      story: "On track, Gus likes the small decisions that make a lap feel right: where to look, when to brake, and when to trust the car. Speed is part of it, but attention is the better part.",
      doors: [["engine", "hot"], ["watch", "late"], ["lab", "readout"]]
    },
    engine: {
      index: "WARM FIRST",
      title: "THE NARRATOR\nGOES QUIET",
      fragment: "hold until the metal changes its mind.",
      theme: "rust",
      tone: [50, 101],
      terminalLabel: "CHANNEL 06 // MECHANICAL CARE",
      terminal: "An old machine is not a disposable object. Cold oil, tired rubber, one unexplained vibration: each asks for patience before force. Warm it, hear it, keep what has earned a history.",
      ascii: ["[cold]..[warm]", "   \u03a9 / rpm", "KEEP / REPAIR"],
      nodes: ["OLD CARS", "WARM FIRST", "PATINA", "TORQUE", "CARE", "KEEP"],
      puzzle: { labels: ["COLD", "WAIT", "WARM", "REV"], solution: [0, 1, 2], clue: "Name the condition. Give the metal time. Proceed only after it changes.", shape: 6 },
      story: "Gus likes old cars and old things: objects with history, quirks, and something left to teach. He would usually rather understand and repair a good old thing than replace it, with patience, research, busted knuckles, and highly specific profanity.",
      doors: [["pitlane", "cut"], ["shore", "coast"], ["foyer", "off"]]
    },
    shore: {
      index: "WEST",
      title: "WEST\nOF MEMORY",
      fragment: "shape yields. heading holds.",
      theme: "ash",
      tone: [52, 104],
      terminalLabel: "CHANNEL 07 // MIGRATION",
      terminal: "Beirut remained in the coordinate system after the body moved west at seventeen. War altered the coastline; migration altered the scale. The heading survived both transformations.",
      ascii: ["BEY ~~~> WEST", " 17 / bearing", "home != place"],
      nodes: ["BEIRUT", "17", "WEST", "HEADING", "MIGRATION", "RETURN"],
      puzzle: { labels: ["BEIRUT", "WEST", "HOME", "RETURN"], solution: [0, 1, 2], clue: "The origin remains. The body moves. The carried place changes meaning.", shape: 0 },
      story: "Gus grew up in Beirut and moved to the United States at seventeen. Lebanon still shows up in his ear, humor, food, family, and the way he reads a room.",
      doors: [["kitchen", "carry"], ["watch", "drift"], ["foyer", "orient"]]
    },
    kitchen: {
      index: "LOW HEAT",
      title: "NO SHORTCUT\nFOUND",
      fragment: "water, then what remembers.",
      theme: "paper",
      tone: [65, 130],
      terminalLabel: "CHANNEL 08 // FAMILY",
      terminal: "The most important system has no dashboard. It runs on showing up, remembering what each person needs, keeping the heat low, and making a table where Maria, Cleo-Mayyada, and the unfinished day can land.",
      ascii: ["  (  steam  )", "[time]+[care]", "  => TABLE"],
      nodes: ["MARIA", "CLEO-MAYYADA", "LOW HEAT", "TABLE", "FAMILY", "TIME"],
      puzzle: { labels: ["WATER", "TIME", "TASTE", "SERVE"], solution: [0, 1, 3], clue: "Begin with what sustains. Refuse the shortcut. End at the table.", shape: 1 },
      story: "Maria and Cleo-Mayyada come before any job title. The workbench and laptop can run late, but home is where the important signal lives.",
      doors: [["quiet-center", "keep"], ["listening", "mix"], ["shore", "salt"]]
    },
    watch: {
      index: "ACCUMULATED ERROR",
      title: "+2 SEC\nPER DAY",
      fragment: "accuracy accumulates.",
      theme: "bone",
      tone: [72, 144],
      terminalLabel: "CHANNEL 09 // CRAFT",
      terminal: "Two seconds is nothing until it repeats. Observe the drift, touch only what moved, measure again. The pleasure is not perfection; it is the patient conversation between hand and mechanism.",
      ascii: ["+2 +2 +2", "   /|", "[adjust]"],
      nodes: ["+2 SEC", "MEASURE", "ADJUST", "CRAFT", "PATIENT", "KEEP"],
      puzzle: { labels: ["OBSERVE", "ADJUST", "MEASURE", "KEEP"], solution: [0, 1, 2], clue: "Attention before intervention. Touch only what moved. Ask the mechanism again.", shape: 2 },
      story: "Gus likes mechanisms that answer back: watches, cars, audio gear, and code. He learns by observing, making one careful adjustment, and seeing what changed.",
      doors: [["pitlane", "time"], ["shore", "tide"], ["quiet-center", "keep"]]
    },
    "quiet-center": {
      index: "—",
      title: "NOTHING\nTO MEASURE",
      fragment: "leave the lamp.",
      theme: "paper",
      tone: [48, 96],
      terminalLabel: "CHANNEL 10 // INHERITANCE",
      terminal: "Some signals are not problems to solve. Maz and Baz remain in the objects that carried the family, in practical hands, in the lamp left on for whoever comes home late. Do not optimize this channel.",
      ascii: ["MAZ     BAZ", "   \\ | /", "    (*)"],
      nodes: ["MAZ", "BAZ", "LAMP", "LINEAGE", "CARRIED", "STILL HERE"],
      puzzle: { labels: ["LAMP", "NAME", "SILENCE", "KEEP"], solution: [0, 2, 3], clue: "Leave the light. Do not fill the room. Carry what remains.", shape: 3 },
      story: "Maz and Baz taught Gus a practical kind of love: show up, fix what matters, and keep the light on. Their humor, hands, and ways of caring are still part of how he moves through the world.",
      doors: [["strange-loop", "continue"], ["field-notes", "paper"], ["foyer", "lamp"]]
    },
    "field-notes": {
      index: "LOOSE PAGES",
      title: "PAGES THAT\nESCAPED",
      fragment: "not all fragments want to return.",
      theme: "ash",
      tone: [58, 174],
      terminalLabel: "CHANNEL 11 // WRITING + SPEAKING",
      terminal: "A thought becomes useful when it survives outside the skull. Notes become frameworks; frameworks become rooms other people can enter. Publish before certainty sands off the living edge.",
      ascii: ["[notice]", "   | write", "   v publish"],
      nodes: ["SIGNAL THREAD", "HARNESS", "FIRST PRINCIPLES", "TEACH", "WRITE", "SPEAK"],
      puzzle: { labels: ["NOTICE", "WRITE", "PUBLISH", "FORGET"], solution: [0, 1, 2], clue: "Catch the living edge. Give it structure. Release it before certainty arrives.", shape: 4 },
      story: "Gus writes and speaks to make ideas easier to examine with other people. He is happiest when a rough observation becomes something useful enough to test, question, or build on.",
      links: [["HARNESS / I", "/articles/harness-part-1.html"], ["FIRST PRINCIPLES", "/articles/first-principles.html"], ["ATTACK SURFACE", "/articles/agents-attack-surface.html"]],
      doors: [["whiteboard", "return"], ["strange-loop", "fold"], ["foyer", "file"]]
    },
    "strange-loop": {
      index: "ORIGIN MOVING",
      title: "THE ROUTE\nLOOKS BACK",
      fragment: "origin: moving",
      theme: "black",
      tone: [47, 141],
      terminalLabel: "CHANNEL 12 // INTEGRATION",
      terminal: "The map refuses a center because the same operation is distributed everywhere. Sound trains the ear. Brains explain change. Teaching makes it transferable. Machines extend reach. Family decides why any of it matters.",
      ascii: ["SOUND -> BRAIN", "  ^       |", "MACHINE <- TEACH"],
      nodes: ["SOUND", "BRAIN", "LEARNING", "MACHINE", "FAMILY", "RETURN"],
      puzzle: { labels: ["SOUND", "BRAIN", "TEACH", "MACHINE"], solution: [0, 1, 2, 3], clue: "The first ear leads inward. Learning returns outward. The newest instrument waits last.", shape: 5 },
      story: "Sound, neuroscience, education, and AI are all parts of Gus's route. He is still following the signal, still learning what carries across, and still curious about where it leads next.",
      doors: [["foyer", "again"], ["listening", "hear"], ["quiet-center", "rest"]]
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const threshold = $("#threshold");
  const thresholdCopy = $(".threshold-copy");
  const perceptionGate = $("#perception-gate");
  const labyrinth = $("#labyrinth");
  const room = $("#room");
  const roomArtifact = $("#room-artifact");
  const response = $("#room-response");
  const terminalLabel = $("#room-terminal-label");
  const terminalCopy = $("#room-terminal-copy");
  const terminalAscii = $("#room-terminal-ascii");
  const storyTerminal = $("#story-terminal");
  const storyCopy = $("#story-copy");
  const storyLinks = $("#story-links");
  const roomProgress = $("#room-progress");
  const roomMission = $("#room-mission");
  const resolution = $("#resolution");
  const doors = $("#doors");
  const neuralField = $("#neural-field");
  const transmissionCode = $("#transmission-code");
  const hackCelebration = $("#hack-celebration");
  const hackCode = $("#hack-code");
  const hackAscii = $("#hack-ascii");
  const hackStatus = $("#hack-status");
  const fragmentReveal = $("#fragment-reveal");
  const fragmentRevealCode = $("#fragment-reveal-code");
  const fragmentRevealCopy = $("#fragment-reveal-copy");
  const fragmentRevealClose = $("#fragment-reveal-close");
  const messageAudio = $("#message-audio");
  const messageButton = $("#message-player");
  const messageState = $("#message-state");
  const identity = $(".wordmark");
  const identityName = $("#identity-name");
  const identityDegree = $("#identity-degree");
  const phaseTelemetry = $("#phase-telemetry");
  const phaseAttempt = $("#phase-attempt");
  const phaseScope = $("#phase-scope");
  const phaseMeterFill = $("#phase-meter-fill");
  const phaseMarker = $("#phase-marker");
  const phaseReading = $("#phase-reading");
  const phaseStatus = $("#phase-status");
  const contactLink = $("#contact-link");
  let currentRoom = "threshold";
  let soundOn = false;
  let musicOn = true;
  let autoAudioStarted = false;
  let audioContext = null;
  let activeTone = [];
  let interactionCleanup = null;
  let ambientAudio = null;
  let ambientFade = 0;
  let messageSource = null;
  let messageCarrier = null;
  let responseTimer = 0;
  let glitchTimer = 0;
  let glitchRelease = 0;
  let powerFaultTimer = 0;
  let celebrationTimer = 0;
  let messageStartTimer = 0;
  let identityTimer = 0;
  let phaseTimer = 0;
  let phaseAttemptCount = 0;
  let ambientLooping = false;
  let fragmentResolutionPending = false;
  const switchAudio = new Map();
  const resolveAudio = new Map();

  const saved = loadState();
  const state = {
    visited: new Set(Array.isArray(saved.visited) ? saved.visited : []),
    frequencies: new Set(Array.isArray(saved.frequencies) ? saved.frequencies : []),
    solved: new Set(Array.isArray(saved.solved) ? saved.solved : []),
    gateUnlocked: Boolean(saved.gateUnlocked),
    resolutionSeen: Boolean(saved.resolutionSeen),
    messageHeard: Boolean(saved.messageHeard),
    musicOn: saved.musicOn !== false
  };
  musicOn = state.musicOn;

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
        solved: [...state.solved],
        gateUnlocked: state.gateUnlocked,
        resolutionSeen: state.resolutionSeen,
        messageHeard: state.messageHeard,
        musicOn
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

  function cipherIdentityPart(source, revealChance) {
    return [...source].map((character) => {
      if (character === " ") return Math.random() < .48 ? " " : "/";
      if (character === ",") return Math.random() < .42 ? "," : ":";
      if (Math.random() < revealChance) return character;
      return IDENTITY_GLYPHS[Math.floor(Math.random() * IDENTITY_GLYPHS.length)];
    }).join("");
  }

  function scrambleIdentity() {
    clearTimeout(identityTimer);
    if (!identity.classList.contains("identity-unstable")) return;
    if (reducedMotion.matches) {
      identityName.textContent = "6U5 H4LW4N1,";
      identityDegree.textContent = "?H∆";
      identity.dataset.ghost = "6U5 H4LW4N1, ?H∆";
      return;
    }
    const name = cipherIdentityPart(IDENTITY_NAME, .2 + Math.random() * .18);
    const degree = cipherIdentityPart(IDENTITY_DEGREE, .14 + Math.random() * .16);
    identityName.textContent = name;
    identityDegree.textContent = degree;
    identity.dataset.ghost = `${name} ${degree}`;
    identityTimer = window.setTimeout(scrambleIdentity, 72 + Math.random() * 118);
  }

  function syncIdentitySignal() {
    clearTimeout(identityTimer);
    const resolved = state.resolutionSeen || state.solved.size === ROOM_IDS.length;
    document.body.classList.toggle("phase-complete", resolved);
    contactLink.hidden = !resolved;
    identity.classList.toggle("identity-unstable", !resolved);
    identity.classList.toggle("identity-resolved", resolved);
    if (resolved) {
      identityName.textContent = "Gus Halwani,";
      identityDegree.textContent = "PhD";
      identity.dataset.ghost = "Gus Halwani, PhD";
      syncPhaseTelemetry(true);
      return;
    }
    scrambleIdentity();
    syncPhaseTelemetry(false);
  }

  function phaseScopeFrame(progress, failed = false) {
    const lead = Math.max(1, Math.min(11, Math.round(progress / 9)));
    const upper = Array.from({ length: 13 }, (_, index) => index < lead ? "━" : index === lead ? "╮" : "·").join("");
    const lower = Array.from({ length: 13 }, (_, index) => index < lead - 1 ? "━" : index === lead - 1 ? "╯" : index === lead + 1 && failed ? "×" : "·").join("");
    return `${upper}\n${lower}`;
  }

  function syncPhaseTelemetry(locked = state.solved.size === ROOM_IDS.length) {
    clearTimeout(phaseTimer);
    if (locked) {
      phaseTelemetry.classList.add("locked");
      phaseAttempt.textContent = "LOCK 13:13";
      phaseScope.textContent = "━━━━━━━━━━━━━\n━━━━━━━━━━━━━";
      phaseMeterFill.style.width = "100%";
      phaseMarker.style.left = "100%";
      phaseReading.textContent = "COHERENCE 100.0%";
      phaseStatus.textContent = "LOCKED";
      return;
    }
    phaseTelemetry.classList.remove("locked");
    let cycle = 0;
    const tick = () => {
      const solvedRatio = state.solved.size / ROOM_IDS.length;
      const rise = cycle < 8 ? cycle / 8 : Math.max(0, 1 - (cycle - 8) / 3);
      const ceiling = 76 + solvedRatio * 22.7 + Math.random() * 1.2;
      const coherence = Math.min(99.4, 28 + rise * (ceiling - 28));
      const failed = cycle >= 8;
      if (cycle === 0) phaseAttemptCount += 1;
      phaseAttempt.textContent = `TRY ${String(phaseAttemptCount).padStart(3, "0")}`;
      phaseScope.textContent = phaseScopeFrame(coherence, failed);
      phaseMeterFill.style.width = `${coherence}%`;
      phaseMarker.style.left = `${Math.min(99, coherence)}%`;
      phaseReading.textContent = `COHERENCE ${coherence.toFixed(1)}%`;
      phaseStatus.textContent = failed ? "DRIFT // RETRY" : coherence > 88 ? "NEAR LOCK" : "ACQUIRING";
      cycle = (cycle + 1) % 12;
      phaseTimer = window.setTimeout(tick, reducedMotion.matches ? 1600 : 420 + Math.random() * 180);
    };
    tick();
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
    if (requested === "threshold" || !state.gateUnlocked) showThreshold();
    else renderRoom(ROOMS[requested] ? requested : "foyer");
  }

  function showThreshold() {
    const shouldMoveFocus = document.activeElement && document.activeElement !== document.body;
    currentRoom = "threshold";
    document.body.dataset.room = "threshold";
    setTheme("paper");
    threshold.hidden = false;
    thresholdCopy.hidden = false;
    perceptionGate.hidden = true;
    threshold.classList.remove("tearing");
    labyrinth.hidden = true;
    resolution.hidden = true;
    $(".skip-link").href = "#threshold-title";
    cleanupInteraction();
    stopRoomTone();
    renderNeuralField("threshold");
    const beginButton = $("#begin-gate");
    beginButton.lastChild.textContent = state.gateUnlocked ? " to return elsewhere" : " to attempt entry";
    $(".pointer-action", beginButton).textContent = matchMedia("(pointer: coarse)").matches ? "tap" : "click";
    window.scrollTo({ top: 0, behavior: "auto" });
    if (shouldMoveFocus) focusHeading($("#threshold-title"));
  }

  function enterLabyrinth() {
    const openFoyer = () => {
      if (requestedRoom() === "foyer") renderRoom("foyer");
      else location.hash = "foyer";
    };
    if (reducedMotion.matches) {
      openFoyer();
      return;
    }
    threshold.classList.add("tearing");
    setTimeout(openFoyer, 420);
  }

  function maskXor(...masks) {
    return masks.reduce((result, mask) => result ^ mask, 0);
  }

  function rotateMask(mask) {
    let rotated = 0;
    for (let row = 0; row < 4; row += 1) {
      for (let column = 0; column < 4; column += 1) {
        const source = row * 4 + column;
        const target = column * 4 + (3 - row);
        if (mask & (1 << source)) rotated |= 1 << target;
      }
    }
    return rotated;
  }

  function maskMarkup(mask, missing = false) {
    if (missing) return `<span class="matrix-missing" aria-hidden="true">?</span><span class="sr-only">missing grid</span>`;
    const cells = Array.from({ length: 16 }, (_, index) => `<i class="${mask & (1 << index) ? "on" : ""}"></i>`).join("");
    return `<span class="mini-grid" aria-hidden="true">${cells}</span><span class="sr-only">patterned four by four grid</span>`;
  }

  function renderGatePuzzle() {
    $("#carrier-outlines").innerHTML = STORY_PATH.map((_, index) => routeGlyph(index)).join("");
    const a = 0b1000010000100001;
    const b = 0b0010010110100100;
    const c = 0b0110100110010110;
    const d = 0b0001111001111000;
    const target = maskXor(a, b, c, d);
    const matrix = [a, b, maskXor(a, b), c, d, maskXor(c, d), maskXor(a, c), maskXor(b, d), null];
    $("#gate-matrix").innerHTML = matrix.map((mask, index) => `<div class="matrix-tile${mask === null ? " missing" : ""}" aria-label="${mask === null ? "missing ninth pattern" : `pattern ${index + 1}`}">${maskMarkup(mask || 0, mask === null)}</div>`).join("");

    const candidates = [
      maskXor(a, d),
      target,
      target ^ (1 << 5) ^ (1 << 10),
      rotateMask(target),
      maskXor(b, c),
      target ^ (1 << 3) ^ (1 << 12)
    ];
    const options = $("#gate-options");
    options.innerHTML = candidates.map((mask, index) => `<button type="button" class="gate-option" data-answer="${mask === target}" aria-label="Option ${String.fromCharCode(65 + index)}"><span>${String.fromCharCode(65 + index)}</span>${maskMarkup(mask)}</button>`).join("");
    $("#gate-readout").textContent = "OBSERVE BEFORE OPERATING.";
    options.querySelectorAll(".gate-option").forEach((option) => option.addEventListener("click", () => {
      options.querySelectorAll(".gate-option").forEach((candidate) => candidate.classList.remove("wrong"));
      if (option.dataset.answer !== "true") {
        option.classList.add("wrong");
        $("#gate-readout").textContent = "NO. OVERLAP CANCELS; DIFFERENCE REMAINS.";
        triggerPowerFault("PERCEPTION GATE REJECTED");
        playClick(71, .035);
        return;
      }
      state.gateUnlocked = true;
      saveState();
      option.classList.add("correct");
      perceptionGate.classList.add("admitted");
      $("#gate-readout").textContent = "PATTERN ACCEPTED // THE DOOR REMEMBERS YOU.";
      playAsset("threshold", .52);
      triggerHackCelebration("ACCESS", "PERCEPTION GATE PWNED", 0);
      window.setTimeout(enterLabyrinth, reducedMotion.matches ? 80 : 1750);
    }));
  }

  function openGate() {
    if (state.gateUnlocked) {
      enterLabyrinth();
      return;
    }
    thresholdCopy.hidden = true;
    perceptionGate.hidden = false;
    perceptionGate.classList.remove("admitted");
    renderGatePuzzle();
    focusHeading($("#gate-title"));
  }

  function leaveGate() {
    perceptionGate.hidden = true;
    thresholdCopy.hidden = false;
    focusHeading($("#threshold-title"));
  }

  function renderRoom(id) {
    const shouldMoveFocus = document.activeElement && document.activeElement !== document.body;
    const data = ROOMS[id];
    currentRoom = id;
    document.body.dataset.room = id;
    setTheme(data.theme);
    threshold.hidden = true;
    labyrinth.hidden = false;
    resolution.hidden = true;
    $(".skip-link").href = "#room-title";
    state.visited.add(id);
    saveState();

    room.className = `room room-${id}`;
    $("#room-index").textContent = data.index;
    const pathIndex = STORY_PATH.indexOf(id);
    const phase = ARC_PHASES.find((candidate) => pathIndex <= candidate.through) || ARC_PHASES.at(-1);
    $("#room-arc").textContent = `ACT ${phase.number} // ${phase.name} // ${phase.instruction}`;
    $("#room-title").textContent = data.title;
    $("#room-fragment").textContent = data.fragment;
    terminalLabel.textContent = data.terminalLabel;
    terminalCopy.textContent = data.terminal;
    terminalAscii.textContent = data.ascii.join("\n");
    response.textContent = "";
    response.classList.remove("visible");
    roomArtifact.innerHTML = artifactMarkup(id, data);
    renderStory(id, data);
    renderProgress();
    renderDoors();
    renderNeuralField(id);
    cleanupInteraction();
    setupInteraction(id, data);

    if (soundOn) {
      startRoomTone(data.tone);
      playAsset("axon", .38);
    }
    labyrinth.classList.remove("room-entering");
    void labyrinth.offsetWidth;
    labyrinth.classList.add("room-entering");
    triggerTransmissionGlitch(`CARRIER ${String(pathIndex + 1).padStart(2, "0")}`, 260);
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

    const learned = Math.min(nodes.length, 2 + state.visited.size + state.solved.size * 2);
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
    const labelSource = ROOMS[id]?.nodes || ["UNLISTED", "SIGNAL", "MAP", "CARRIER", "MEMORY", "ENTER"];
    const labelNodes = [2, 5, 8, 11, 14, 17];
    const labels = labelSource.map((label, index) => {
      const node = nodes[labelNodes[index]];
      const anchor = node.x > 760 ? "end" : node.x < 240 ? "start" : "middle";
      const dx = anchor === "end" ? -12 : anchor === "start" ? 12 : 0;
      const dy = node.y < 120 ? 18 : -12;
      return `<text class="neural-label" style="--delay:${(.48 + index * .11).toFixed(2)}s" x="${(node.x + dx).toFixed(1)}" y="${(node.y + dy).toFixed(1)}" text-anchor="${anchor}">${label}</text>`;
    }).join("");
    const origin = nodes[0];
    const cellTurn = (hashRoom(id) % 52) - 26;
    const cellScale = .72 + (hashRoom(`${id}-cell`) % 28) / 100;
    room.style.setProperty("--origin-x", `${(origin.x / 10).toFixed(2)}%`);
    room.style.setProperty("--origin-y", `${(origin.y / 7).toFixed(2)}%`);
    neuralField.classList.remove("awake", "remembering");
    neuralField.innerHTML = `<g class="neural-edges">${paths}</g><g class="neural-nodes">${points}</g><g class="neural-labels">${labels}</g>
      <g class="neural-cell" transform="translate(${origin.x.toFixed(1)} ${origin.y.toFixed(1)}) rotate(${cellTurn}) scale(${cellScale.toFixed(2)})">
        <path class="neural-cell-branches" d="M-18-11C-71-30-87-76-143-87M-27 8c-59 8-82 47-137 56M8-27C18-77 2-103 25-148M22-12c52-28 79-67 143-71M28 12c61 11 85 51 145 66M18 25c25 53 61 66 118 83"/>
        <path class="neural-cell-soma" d="M-23-25C2-45 35-30 42-2 50 29 18 49-12 39-43 28-49-6-23-25Z"/>
        <path class="neural-cell-glitch" d="M-38-5h82M-31 9h66M-19 23h42"/>
      </g>
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

  function triggerTransmissionGlitch(label = "", duration = 420) {
    if (reducedMotion.matches || document.hidden || document.body.dataset.room === "resolution") return;
    clearTimeout(glitchRelease);
    document.body.classList.remove("signal-glitch", ...GLITCH_MODES);
    transmissionCode.textContent = `${label || GLITCH_LINES[Math.floor(Math.random() * GLITCH_LINES.length)]}\n${Math.random().toString(2).slice(2, 18)} // ${Math.random().toString(16).slice(2, 10).toUpperCase()}`;
    document.documentElement.style.setProperty("--tear-y", `${12 + Math.random() * 70}%`);
    document.documentElement.style.setProperty("--tear-shift", `${Math.round(7 + Math.random() * 17)}px`);
    void document.body.offsetWidth;
    const mode = GLITCH_MODES[Math.floor(Math.random() * GLITCH_MODES.length)];
    document.body.classList.add("signal-glitch", mode);
    glitchRelease = window.setTimeout(() => document.body.classList.remove("signal-glitch", ...GLITCH_MODES), duration);
  }

  function triggerPowerFault(label = "CHECKSUM MISMATCH") {
    clearTimeout(powerFaultTimer);
    document.body.classList.remove("power-fault");
    void document.body.offsetWidth;
    document.body.classList.add("power-fault");
    triggerTransmissionGlitch(`VOLTAGE DROP // ${label}`, 760);
    if (ambientAudio && musicOn && !ambientAudio.paused) {
      fadeMedia(ambientAudio, .015, 80);
      window.setTimeout(() => {
        if (musicOn && ambientAudio) fadeMedia(ambientAudio, .26, messageAudio.paused ? 420 : 180);
      }, 520);
    }
    powerFaultTimer = window.setTimeout(() => document.body.classList.remove("power-fault"), reducedMotion.matches ? 100 : 820);
  }

  function scheduleTransmissionGlitch() {
    clearTimeout(glitchTimer);
    if (reducedMotion.matches || document.hidden || document.body.dataset.room === "resolution") return;
    const delay = 3200 + Math.random() * 5000;
    glitchTimer = window.setTimeout(() => {
      triggerTransmissionGlitch("", 420 + Math.random() * 320);
      if (Math.random() < .3) {
        window.setTimeout(() => triggerTransmissionGlitch("PACKET ECHO // BAD COPY", 260), 150);
      }
      scheduleTransmissionGlitch();
    }, delay);
  }

  function triggerHackCelebration(code, label, solvedCount) {
    clearTimeout(celebrationTimer);
    hackCelebration.hidden = false;
    hackCode.textContent = `0x${String(code).toUpperCase()} // ROOT HANDSHAKE`;
    hackStatus.textContent = solvedCount
      ? `${label} // ${String(solvedCount).padStart(2, "0")} OF ${ROOM_IDS.length} CARRIERS OWNED`
      : label;
    hackAscii.textContent = [
      "+----------------------------------+",
      "|  █▀█ █░█░█ █▄░█ █▀▀ █▀▄        |",
      "|  █▀▀ ▀▄▀▄▀ █░▀█ ██▄ █▄▀        |",
      "|        SIGNAL ACCEPTED          |",
      "+----------------------------------+"
    ].join("\n");
    hackCelebration.classList.remove("active");
    void hackCelebration.offsetWidth;
    hackCelebration.classList.add("active");
    triggerTransmissionGlitch("PRIVILEGE ESCALATION", 620);
    celebrationTimer = window.setTimeout(() => {
      hackCelebration.classList.remove("active");
      hackCelebration.hidden = true;
    }, reducedMotion.matches ? 120 : 1650);
  }

  function showFragmentReveal(id, data, opensResolution = false) {
    fragmentResolutionPending = opensResolution;
    fragmentRevealCode.textContent = `CARRIER ${String(STORY_PATH.indexOf(id) + 1).padStart(2, "0")} // PERSONA CACHE RESTORED`;
    fragmentRevealCopy.textContent = data.story;
    fragmentReveal.hidden = false;
    document.body.classList.add("fragment-open");
    window.setTimeout(() => fragmentRevealClose.focus({ preventScroll: true }), 40);
  }

  function closeFragmentReveal() {
    if (fragmentReveal.hidden) return;
    fragmentReveal.hidden = true;
    document.body.classList.remove("fragment-open");
    if (fragmentResolutionPending) {
      fragmentResolutionPending = false;
      openResolution();
      return;
    }
    const circuit = $(".circuit-switch", roomArtifact);
    if (circuit) circuit.focus({ preventScroll: true });
  }

  function polygonPoints(sides, radius, center = 300, turn = -Math.PI / 2) {
    return Array.from({ length: sides }, (_, point) => {
      const angle = turn + point * Math.PI * 2 / sides;
      return `${(center + Math.cos(angle) * radius).toFixed(1)},${(center + Math.sin(angle) * radius).toFixed(1)}`;
    }).join(" ");
  }

  function puzzleGeometry(variant) {
    const sides = 3 + (variant % 6);
    const turn = -Math.PI / 2 + (variant % 2 ? Math.PI / sides : 0);
    const outer = polygonPoints(sides, 198, 300, turn);
    const inner = polygonPoints(sides, 126, 300, turn + (variant % 3) * .12);
    const orbit = 58 + (variant % 4) * 13;
    return `<polygon points="${outer}"/><polygon points="${inner}"/><circle cx="300" cy="300" r="${orbit}"/><path d="M300 102 300 498M102 300 498 300" transform="rotate(${(variant * 17) % 90} 300 300)"/>`;
  }

  function artifactMarkup(id, data) {
    const keys = data.puzzle.labels.map((label, index) => `<button class="signal-key signal-key-${index}" type="button" data-key="${index}" aria-label="Route ${label}"><span class="key-glyph" aria-hidden="true">${PUZZLE_SYMBOLS[index]}</span><span class="key-word">${label}</span></button>`).join("");
    const variant = STORY_PATH.indexOf(id);
    const shapeRotation = variant * 7;
    return `<div class="signal-console" data-shape="${data.puzzle.shape}" data-variant="${variant}" style="--shape-rotation:${shapeRotation}deg">
      <svg class="switch-geometry" viewBox="0 0 600 600" aria-hidden="true">
        ${defs(50 + data.puzzle.shape)}
        <g class="geometry-faint">
          <circle cx="300" cy="300" r="236"/><circle cx="300" cy="300" r="174"/><circle cx="300" cy="300" r="104"/>
          <path d="M300 64v132M300 404v132M64 300h132M404 300h132"/>
          <path class="geometry-diagonal" d="m133 133 93 93m148 148 93 93m0-334-93 93M226 374l-93 93"/>
        </g>
        <g class="geometry-live" filter="url(#rough-${50 + data.puzzle.shape})">
          ${puzzleGeometry(variant)}
        </g>
        <g class="geometry-marks"><path d="M300 51v30M549 300h-30M300 549v-30M51 300h30"/><circle cx="300" cy="300" r="47"/></g>
      </svg>
      <p class="puzzle-clue">${data.puzzle.clue}</p>
      <div class="signal-keys">${keys}</div>
      <button class="circuit-switch" type="button" aria-label="Close this ${data.title.replace(/\n/g, " ").toLowerCase()} circuit">
        <span class="switch-core" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="switch-caption">CLOSE</span>
      </button>
      <p class="puzzle-readout" aria-live="polite">ROUTE EMPTY :: SELECT NODES</p>
      <span class="console-noise" aria-hidden="true">+--[0x${hashRoom(id).toString(16).slice(0, 4).toUpperCase()}]--+</span>
    </div>`;
  }

  function routeGlyph(index) {
    const sides = 3 + (index % 6);
    const points = Array.from({ length: sides }, (_, point) => {
      const angle = -Math.PI / 2 + point * Math.PI * 2 / sides;
      const radius = point % 2 && sides > 5 ? 13 : 17;
      return `${(20 + Math.cos(angle) * radius).toFixed(1)},${(20 + Math.sin(angle) * radius).toFixed(1)}`;
    }).join(" ");
    const turn = (index * 17) % 90;
    return `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18"></circle><polygon points="${points}"></polygon><path d="M20 7v26M7 20h26" transform="rotate(${turn} 20 20)"></path></svg>`;
  }

  function renderDoors() {
    const solvedCount = ROOM_IDS.filter((id) => state.solved.has(id)).length;
    const currentIndex = STORY_PATH.indexOf(currentRoom);
    const nodes = STORY_PATH.map((id, index) => {
      const data = ROOMS[id];
      const solved = state.solved.has(id);
      const visited = state.visited.has(id);
      const current = id === currentRoom;
      const next = index === currentIndex + 1;
      const final = index === STORY_PATH.length - 1;
      const classes = ["route-node", solved && "pwned", visited && "visited", current && "current", next && "next", final && "final-node"].filter(Boolean).join(" ");
      const status = solved ? "pwned" : current ? "current carrier" : final ? "final carrier, unread" : visited ? "visited, circuit open" : "unread carrier";
      return `<a class="${classes}" href="#${id}" data-label="${data.title.replace(/\n/g, " ")}" aria-label="Carrier ${index + 1} of ${ROOM_IDS.length}: ${data.title.replace(/\n/g, " ")}; ${status}">
        <span class="route-number">${String(index + 1).padStart(2, "0")}</span>${routeGlyph(index)}<span class="route-state">${solved ? "PWN" : current ? "YOU" : final ? "Ω" : ""}</span>
      </a>`;
    }).join("");
    doors.classList.toggle("route-complete", solvedCount === ROOM_IDS.length);
    doors.innerHTML = `<div class="route-heading"><span>THE OTHER MAP</span><strong>${String(solvedCount).padStart(2, "0")} / ${ROOM_IDS.length} PWNED</strong><small>CLOSE EACH CIRCUIT</small></div><div class="route-track">${nodes}</div>`;
  }

  function cleanupInteraction() {
    if (interactionCleanup) interactionCleanup();
    interactionCleanup = null;
  }

  function setResponse(text) {
    clearTimeout(responseTimer);
    response.textContent = text;
    response.classList.toggle("visible", Boolean(text));
    if (text) responseTimer = window.setTimeout(() => response.classList.remove("visible"), 2600);
  }

  function renderStory(id, data) {
    const solved = state.solved.has(id);
    storyTerminal.hidden = !solved;
    storyCopy.textContent = solved ? data.story : "";
    storyLinks.innerHTML = solved && Array.isArray(data.links)
      ? data.links.map(([label, href]) => `<a href="${href}">${label}<span aria-hidden="true">↗</span></a>`).join("")
      : "";
    if (solved && state.solved.size === ROOM_IDS.length) {
      storyLinks.insertAdjacentHTML("beforeend", `<button class="final-transmission" type="button">FINAL TRANSMISSION <span aria-hidden="true">↗</span></button>`);
      $(".final-transmission", storyLinks).addEventListener("click", openResolution);
    }
    room.classList.toggle("room-solved", solved);
  }

  function renderProgress() {
    const solved = ROOM_IDS.filter((id) => state.solved.has(id)).length;
    const position = Math.max(0, STORY_PATH.indexOf(currentRoom)) + 1;
    const closed = state.solved.has(currentRoom);
    roomProgress.textContent = `CARRIER ${String(position).padStart(2, "0")} OF ${ROOM_IDS.length} // ${String(solved).padStart(2, "0")} PWNED`;
    roomMission.textContent = closed
      ? "CIRCUIT PWNED // PERSONA FRAGMENT DECRYPTED"
      : "READ THE CLUE // TOUCH THE NODES IN ORDER // CLOSE THE CIRCUIT";
  }

  function openResolution() {
    cleanupInteraction();
    clearTimeout(glitchTimer);
    clearTimeout(glitchRelease);
    document.body.classList.remove("signal-glitch", ...GLITCH_MODES, "power-fault");
    labyrinth.hidden = true;
    resolution.hidden = false;
    document.body.dataset.room = "resolution";
    setTheme("black");
    syncIdentitySignal();
    stopRoomTone();
    window.scrollTo({ top: 0, behavior: "auto" });
    focusHeading($("#resolution-title"));
  }

  function closeResolution() {
    resolution.hidden = true;
    renderRoom(currentRoom === "resolution" || !ROOMS[currentRoom] ? "strange-loop" : currentRoom);
    scheduleTransmissionGlitch();
  }

  function setupInteraction(id, data) {
    const consoleElement = $(".signal-console", roomArtifact);
    const keys = $$(".signal-key", roomArtifact);
    const circuitSwitch = $(".circuit-switch", roomArtifact);
    const switchCaption = $(".switch-caption", circuitSwitch);
    const readout = $(".puzzle-readout", roomArtifact);
    const solution = data.puzzle.solution;
    let entered = [];
    let faultTimer = 0;

    const drawRoute = () => {
      keys.forEach((key, index) => {
        const order = entered.indexOf(index);
        key.classList.toggle("armed", order !== -1);
        key.dataset.order = order === -1 ? "" : String(order + 1);
      });
      readout.textContent = entered.length
        ? `ROUTE :: ${entered.map((key) => data.puzzle.labels[key]).join(" > ")}`
        : "ROUTE EMPTY :: SELECT NODES";
    };

    const markResolved = () => {
      consoleElement.classList.add("resolved");
      keys.forEach((key, index) => key.classList.toggle("accepted", solution.includes(index)));
      switchCaption.textContent = "REPLAY LOCK";
      circuitSwitch.setAttribute("aria-label", `Replay the ${data.title.replace(/\n/g, " ").toLowerCase()} resolve cue`);
      readout.textContent = "CIRCUIT CLOSED :: FRAGMENT AVAILABLE";
    };

    if (state.solved.has(id)) markResolved();
    preloadSwitchCue(id);
    preloadResolveCue(id);

    keys.forEach((key) => key.addEventListener("click", () => {
      if (state.solved.has(id)) return;
      clearTimeout(faultTimer);
      consoleElement.classList.remove("fault");
      const value = Number(key.dataset.key);
      if (entered.length >= solution.length || entered.includes(value)) entered = [];
      entered.push(value);
      drawRoute();
      playClick(118 + value * 52, .022);
    }));

    circuitSwitch.addEventListener("click", () => {
      if (state.solved.has(id)) {
        consoleElement.classList.remove("switching");
        void consoleElement.offsetWidth;
        consoleElement.classList.add("switching");
        playSwitchCue(id);
        pulseNeuralField();
        return;
      }

      const correct = entered.length === solution.length && entered.every((value, index) => value === solution[index]);
      if (correct) {
        state.solved.add(id);
        state.resolutionSeen = state.solved.size === ROOM_IDS.length;
        saveState();
        syncIdentitySignal();
        markResolved();
        renderStory(id, data);
        renderProgress();
        renderDoors();
        setResponse("CIRCUIT CLOSED // PERSONA FRAGMENT DECRYPTED");
        consoleElement.classList.add("switching");
        playResolveCue(id);
        pulseNeuralField();
        triggerHackCelebration(String(STORY_PATH.indexOf(id) + 1).padStart(2, "0"), `${data.title.replace(/\n/g, " ")} // PWNED`, state.solved.size);
        window.setTimeout(
          () => showFragmentReveal(id, data, state.resolutionSeen),
          reducedMotion.matches ? 140 : 1720
        );
        return;
      }

      consoleElement.classList.remove("fault");
      void consoleElement.offsetWidth;
      consoleElement.classList.add("fault");
      setResponse("CHECKSUM MISMATCH // ROUTE CLEARED");
      triggerPowerFault("CIRCUIT REJECTED");
      playClick(67, .035);
      entered = [];
      faultTimer = window.setTimeout(() => {
        consoleElement.classList.remove("fault");
        drawRoute();
      }, 720);
    });

    interactionCleanup = () => clearTimeout(faultTimer);
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
      setupMessageProcessing(audioContext);
    }
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  }

  function setupMessageProcessing(context) {
    if (messageSource) return;
    messageSource = context.createMediaElementSource(messageAudio);
    const highpass = context.createBiquadFilter();
    const lowpass = context.createBiquadFilter();
    const presence = context.createBiquadFilter();
    const distortion = context.createWaveShaper();
    const tapeDelay = context.createDelay(.04);
    const compressor = context.createDynamicsCompressor();
    const output = context.createGain();
    highpass.type = "highpass";
    highpass.frequency.value = 310;
    lowpass.type = "lowpass";
    lowpass.frequency.value = 2450;
    presence.type = "peaking";
    presence.frequency.value = 1650;
    presence.Q.value = 1.1;
    presence.gain.value = 3.2;
    const curve = new Float32Array(512);
    for (let index = 0; index < curve.length; index += 1) {
      const value = index * 2 / (curve.length - 1) - 1;
      curve[index] = Math.tanh(value * 2.35);
    }
    distortion.curve = curve;
    distortion.oversample = "none";
    tapeDelay.delayTime.value = .006;
    compressor.threshold.value = -26;
    compressor.knee.value = 13;
    compressor.ratio.value = 4.5;
    compressor.attack.value = .004;
    compressor.release.value = .16;
    output.gain.value = .34;
    const wow = context.createOscillator();
    const wowDepth = context.createGain();
    const flutter = context.createOscillator();
    const flutterDepth = context.createGain();
    wow.type = "sine";
    wow.frequency.value = .43;
    wowDepth.gain.value = .0028;
    flutter.type = "triangle";
    flutter.frequency.value = 5.7;
    flutterDepth.gain.value = .00032;
    wow.connect(wowDepth).connect(tapeDelay.delayTime);
    flutter.connect(flutterDepth).connect(tapeDelay.delayTime);
    wow.start();
    flutter.start();
    messageSource.connect(highpass).connect(lowpass).connect(presence).connect(distortion).connect(tapeDelay).connect(compressor).connect(output).connect(context.destination);
  }

  function startMessageCarrier() {
    stopMessageCarrier();
    const context = ensureAudio();
    if (!context) return;
    const duration = 4;
    const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
    const channel = buffer.getChannelData(0);
    let pop = 0;
    for (let index = 0; index < channel.length; index += 1) {
      if (Math.random() < .00028) pop = (Math.random() * 2 - 1) * (.45 + Math.random() * .4);
      channel[index] = (Math.random() * 2 - 1) * .13 + pop;
      pop *= .955;
    }
    const source = context.createBufferSource();
    const bandpass = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = buffer;
    source.loop = true;
    bandpass.type = "bandpass";
    bandpass.frequency.value = 2200;
    bandpass.Q.value = .48;
    gain.gain.value = .018;
    source.connect(bandpass).connect(gain).connect(context.destination);
    source.start();
    messageCarrier = source;
  }

  function stopMessageCarrier() {
    if (!messageCarrier) return;
    try { messageCarrier.stop(); } catch (_) { /* already stopped */ }
    messageCarrier.disconnect();
    messageCarrier = null;
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
    setMusicState(!musicOn);
  }

  function activateAudio(quietStart = false) {
    soundOn = true;
    ensureAudio();
    if (musicOn) startAmbient();
    if (ROOMS[currentRoom]) startRoomTone(ROOMS[currentRoom].tone);
    else if (!quietStart) playAsset("threshold", .52);
  }

  function setMusicState(enabled) {
    musicOn = enabled;
    state.musicOn = enabled;
    saveState();
    updateMusicButton();
    activateAudio(true);
    if (musicOn) {
      startAmbient();
    } else {
      stopAmbient();
    }
  }

  function updateMusicButton() {
    const button = $("#sound-toggle");
    button.textContent = musicOn ? "music: on" : "music: off";
    button.setAttribute("aria-pressed", String(musicOn));
    button.setAttribute("aria-label", musicOn ? "Turn background music off" : "Turn background music on");
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
    if (!musicOn) return;
    if (!ambientAudio) {
      ambientAudio = new Audio(AUDIO.ambient);
      ambientAudio.loop = false;
      ambientAudio.preload = "auto";
      ambientAudio.volume = 0;
      ambientAudio.addEventListener("timeupdate", () => {
        if (ambientLooping || !musicOn || !Number.isFinite(ambientAudio.duration)) return;
        if (ambientAudio.duration - ambientAudio.currentTime > .32) return;
        ambientLooping = true;
        ambientAudio.currentTime = AMBIENT_LOOP_OFFSET;
        ambientAudio.play().catch(() => {});
        window.setTimeout(() => { ambientLooping = false; }, 260);
      });
      ambientAudio.addEventListener("ended", () => {
        if (!musicOn) return;
        ambientAudio.currentTime = AMBIENT_LOOP_OFFSET;
        ambientAudio.play().catch(() => {});
      });
    }
    ambientAudio.play().then(() => fadeMedia(ambientAudio, .26, 1100)).catch(() => {});
  }

  function stopAmbient() {
    if (!ambientAudio) return;
    fadeMedia(ambientAudio, 0, 220);
    window.setTimeout(() => {
      if (!musicOn && ambientAudio) ambientAudio.pause();
    }, 250);
  }

  function playAsset(name, volume = .5) {
    if (!soundOn || !AUDIO[name]) return;
    const cue = new Audio(AUDIO[name]);
    cue.volume = volume;
    cue.play().catch(() => {});
  }

  function preloadSwitchCue(id) {
    if (switchAudio.has(id)) return switchAudio.get(id);
    const cue = new Audio(`${AUDIO.switches}/${id}.mp3`);
    cue.preload = "auto";
    cue.volume = .64;
    switchAudio.set(id, cue);
    return cue;
  }

  function playSwitchCue(id) {
    if (!soundOn) return;
    const cue = preloadSwitchCue(id);
    cue.currentTime = 0;
    cue.play().catch(() => {});
  }

  function preloadResolveCue(id) {
    if (resolveAudio.has(id)) return resolveAudio.get(id);
    const cue = new Audio(`${AUDIO.resolves}/${id}.mp3`);
    cue.preload = "auto";
    cue.volume = 1;
    resolveAudio.set(id, cue);
    return cue;
  }

  function playResolveCue(id) {
    if (!soundOn) return;
    const cue = preloadResolveCue(id);
    cue.currentTime = 0;
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
    clearTimeout(messageStartTimer);
    if (!messageAudio.paused) {
      messageAudio.pause();
      playAsset("tapeStop", .9);
      return;
    }
    if (messageAudio.ended || messageAudio.currentTime >= (messageAudio.duration || 24) - .15) messageAudio.currentTime = 0;
    activateAudio(true);
    playAsset("tapeStart", .9);
    messageState.textContent = "loading";
    messageStartTimer = window.setTimeout(() => {
      messageAudio.play().catch(() => {
        messageState.textContent = "blocked";
      });
    }, 260);
  }

  function eraseRoute(force = false) {
    if (!force && !confirm("Erase all 13 solved carriers and replay from the locked door?")) return;
    state.visited.clear();
    state.frequencies.clear();
    state.solved.clear();
    state.gateUnlocked = false;
    state.resolutionSeen = false;
    state.messageHeard = false;
    phaseAttemptCount = 0;
    syncIdentitySignal();
    saveState();
    clearTimeout(messageStartTimer);
    messageAudio.pause();
    messageAudio.currentTime = 0;
    messageButton.classList.remove("heard", "playing");
    messageButton.setAttribute("aria-pressed", "false");
    messageButton.setAttribute("aria-label", "Play unheard message");
    messageState.textContent = formatTime(messageAudio.duration || 32);
    if (location.hash === "#threshold") showThreshold();
    else location.hash = "threshold";
  }

  $("#begin-gate").addEventListener("click", openGate);
  $("#threshold-object").addEventListener("click", openGate);
  $("#leave-gate").addEventListener("click", leaveGate);
  $("#close-resolution").addEventListener("click", closeResolution);
  $("#replay-experience").addEventListener("click", () => {
    if (!confirm("Replay Elsewhere from the locked door? This clears all 13 PWN states on this browser.")) return;
    resolution.hidden = true;
    eraseRoute(true);
  });
  contactLink.addEventListener("click", () => {
    if (document.body.dataset.room === "resolution") {
      $("#signal-form").scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "auto" : "smooth" });
      $("#signal-message").focus({ preventScroll: true });
      return;
    }
    openResolution();
  });
  fragmentRevealClose.addEventListener("click", closeFragmentReveal);
  fragmentReveal.addEventListener("click", (event) => {
    if (event.target === fragmentReveal) closeFragmentReveal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !fragmentReveal.hidden) closeFragmentReveal();
  });
  $("#signal-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const reply = String(data.get("reply") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!message) return;
    const body = [
      message,
      "",
      "— transmitted from Elsewhere",
      name ? `Name: ${name}` : "",
      reply ? `Return address: ${reply}` : ""
    ].filter(Boolean).join("\n");
    location.href = `mailto:grander.iron7t@icloud.com?subject=${encodeURIComponent("Signal received from Elsewhere")}&body=${encodeURIComponent(body)}`;
  });
  $("#sound-toggle").addEventListener("click", toggleSound);
  $("#erase-route").addEventListener("click", () => eraseRoute(false));
  messageButton.addEventListener("click", toggleMessage);
  messageAudio.addEventListener("play", () => {
    messageButton.classList.add("playing");
    messageButton.setAttribute("aria-pressed", "true");
    messageButton.setAttribute("aria-label", "Pause message");
    neuralField.classList.add("receiving");
    startMessageCarrier();
    updateMessageState();
  });
  messageAudio.addEventListener("timeupdate", updateMessageState);
  messageAudio.addEventListener("loadedmetadata", updateMessageState);
  messageAudio.addEventListener("pause", () => {
    messageButton.classList.remove("playing");
    messageButton.setAttribute("aria-pressed", "false");
    messageButton.setAttribute("aria-label", state.messageHeard
      ? "Play message again"
      : messageAudio.currentTime < .05 ? "Play unheard message" : "Resume message");
    neuralField.classList.remove("receiving");
    stopMessageCarrier();
    if (musicOn && ambientAudio) fadeMedia(ambientAudio, .26, 480);
    updateMessageState();
  });
  messageAudio.addEventListener("ended", () => {
    state.messageHeard = true;
    saveState();
    messageButton.classList.add("heard");
    messageButton.setAttribute("aria-label", "Play message again");
    messageState.textContent = "heard";
    pulseNeuralField();
    playAsset("tapeStop", .9);
    stopMessageCarrier();
    if (musicOn && ambientAudio) window.setTimeout(() => fadeMedia(ambientAudio, .26, 420), 300);
  });
  $(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    const target = currentRoom === "threshold" ? $("#threshold-title") : $("#room-title");
    focusHeading(target);
    target.scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
  addEventListener("hashchange", route);
  addEventListener("beforeunload", () => { clearTimeout(identityTimer); clearTimeout(phaseTimer); stopRoomTone(); stopAmbient(); });
  document.addEventListener("visibilitychange", () => {
    scheduleTransmissionGlitch();
    if (!ambientAudio || !musicOn) return;
    if (document.hidden) ambientAudio.pause();
    else startAmbient();
  });

  function startFirstVisitAudio(event) {
    if (autoAudioStarted) return;
    if (event.target.closest && event.target.closest("#sound-toggle")) return;
    autoAudioStarted = true;
    document.removeEventListener("pointerdown", startFirstVisitAudio);
    activateAudio(true);
    if (!state.messageHeard && messageAudio.paused && !(event.target.closest && event.target.closest("#message-player"))) {
      toggleMessage();
    }
  }

  document.addEventListener("pointerdown", startFirstVisitAudio);
  reducedMotion.addEventListener("change", syncIdentitySignal);

  if (state.messageHeard) {
    messageButton.classList.add("heard");
    messageState.textContent = "heard";
    messageButton.setAttribute("aria-label", "Play message again");
  }

  updateMusicButton();
  syncIdentitySignal();
  startAmbient();

  scheduleTransmissionGlitch();
  route();
})();
