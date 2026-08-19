(() => {
  'use strict';

  const STORAGE_KEY = 'gus-signal-bench-v1';
  const ORDER = ['audio', 'cortex', 'classroom', 'model'];
  const CLEAR_NAME = 'GUS HALWANI, PHD';
  const CLEAR_EMAIL = 'gushalwani[at]alum[dot]mit[dot]edu';
  const GLYPHS = '0123456789ABCDEF∆◇#?/[]';
  const TRANSCRIPTS = {
    entry: 'If you’re hearing this, that means you’re close to getting in.\n\nYou don’t need to know me yet, but you need to know this:\n\nI started by listening. Then, that took me into the human brain. Then, I learned how to reach other people’s brains. And now, I connect the real brains to artificial ones.\n\nPut the four stages in that order. When the phases align, access will be granted.\n\nI’ll see you on the other side.\n\nEnd of transmission.',
    map: 'You solved it. You are in.\n\nEither you notice patterns unusually well, or you refuse to leave mysterious buttons alone. Both are qualities I appreciate more than is probably reasonable.\n\nHi, I’m Gus. I started in biological neural nets and ended up in artificial ones—though I still think carbon builds better networks.\n\nThis is my brain map. Now that you’ve found the signal, poke around. Follow the nodes. See where you end up.\n\nEnd of transmission.'
  };
  const ENTRY_CAPTIONS = [
    'If you’re hearing this, that means you’re close to getting in.',
    'You don’t need to know me yet, but you need to know this:',
    'I started by listening.',
    'Then, that took me into the human brain.',
    'Then, I learned how to reach other people’s brains.',
    'And now, I connect the real brains to artificial ones.',
    'Put the four stages in that order.',
    'When the phases align, access will be granted.',
    'I’ll see you on the other side.',
    'End of transmission.'
  ];
  const TRACKS = {
    entry: 'assets/audio/message-entry.mp3?v=2',
    map: 'assets/audio/message-map.mp3?v=1'
  };
  const FX = {
    wake: 'elsewhere/assets/audio/threshold-wake.mp3',
    axon: 'elsewhere/assets/audio/axon-pulse.mp3',
    found: 'elsewhere/assets/audio/frequency-found.mp3',
    tapeStart: 'elsewhere/assets/audio/tape-machine-start.mp3',
    tapeStop: 'elsewhere/assets/audio/tape-machine-stop.mp3'
  };
  const MAP_SWITCHES = ['foyer','listening','tunnel','whiteboard','lab','pitlane','engine','shore','kitchen','watch','quiet-center','field-notes','strange-loop'];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const body = document.body;
  const bench = $('#signal-bench');
  const landing = $('#landing');
  const phaseLock = $('#phase-lock');
  const status = $('#bench-status');
  const coherence = $('#coherence-readout');
  const cables = $('#patch-cables');
  const identity = $('#identity-block');
  const identityName = $('#identity-name');
  const identityEmail = $('#identity-email');
  const messageButton = $('#message-player');
  const messageState = $('#message-state');
  const messageAudio = $('#message-audio');
  const ambient = $('#ambient-audio');
  const soundToggle = $('#sound-toggle');
  const entryCaptions = $('#entry-captions');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  let saved = load();
  let solved = Boolean(saved.solved);
  let musicOn = saved.musicOn !== false;
  let selected = [];
  let messageTrack = solved ? 'map' : 'entry';
  let cipherTimer = 0;
  let audioActivated = false;
  let lastMapFx = -1;
  let pendingArrivalTrack = null;

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (_) { return {}; }
  }
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      solved,
      musicOn,
      entryHeard: Boolean(saved.entryHeard),
      mapHeard: Boolean(saved.mapHeard)
    }));
  }
  function cipher(source, chance = .16) {
    return [...source].map(char => {
      if (char === ' ') return Math.random() < .55 ? ' ' : '/';
      if ('[],'.includes(char)) return Math.random() < .38 ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      return Math.random() < chance ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }).join('');
  }
  function startCipher() {
    clearInterval(cipherTimer);
    if (reducedMotion.matches) {
      identityName.textContent = '6U5 H4LW4N1, ?H∆';
      identityEmail.textContent = '6U5#4LW4N1[∆T]4LU?/D0T/M1T';
      return;
    }
    cipherTimer = setInterval(() => {
      identityName.textContent = cipher(CLEAR_NAME, .14);
      identityEmail.textContent = cipher(CLEAR_EMAIL, .12);
    }, 92);
  }
  function resolveIdentity() {
    clearInterval(cipherTimer);
    identityName.textContent = CLEAR_NAME;
    identityEmail.textContent = CLEAR_EMAIL;
    identity.classList.remove('identity-unstable');
    identity.classList.add('identity-resolved');
    identity.setAttribute('aria-label', 'Gus Halwani, PhD. Copy email address.');
  }
  function playFx(name, volume = .45) {
    if (!musicOn || !FX[name]) return;
    const audio = new Audio(FX[name]);
    audio.volume = volume;
    audio.play().catch(() => {});
  }
  function fadeAudio(audio, target, duration = 700) {
    const from = audio.volume;
    const began = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - began) / duration);
      audio.volume = from + (target - from) * t;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  function activateAudio() {
    audioActivated = true;
    if (!musicOn) return;
    ambient.loop = true;
    ambient.volume = messageAudio.paused ? .16 : .055;
    ambient.play().catch(() => {});
  }
  function setStableAmbient() {
    const source = 'assets/audio/signal-resolved-ambient.mp3?v=1';
    if (ambient.getAttribute('src')?.includes('signal-resolved')) return;
    const wasPlaying = !ambient.paused;
    fadeAudio(ambient, 0, 420);
    setTimeout(() => {
      ambient.src = source;
      ambient.loop = true;
      ambient.volume = .12;
      if (musicOn && (audioActivated || wasPlaying)) ambient.play().catch(() => {});
    }, 440);
  }
  function updateMusicUi() {
    soundToggle.textContent = `Music: ${musicOn ? 'on' : 'off'}`;
    soundToggle.setAttribute('aria-pressed', String(musicOn));
  }
  function isHeard(track = messageTrack) { return Boolean(saved[`${track}Heard`]); }
  function selectTrack(track) {
    messageTrack = track;
    messageAudio.pause();
    messageAudio.src = TRACKS[track];
    messageAudio.load();
    syncMessageUi();
    hideCaptions();
  }
  function syncMessageUi() {
    const playing = !messageAudio.paused;
    messageButton.classList.toggle('playing', playing);
    messageButton.classList.toggle('heard', isHeard());
    messageButton.setAttribute('aria-pressed', String(playing));
    messageButton.querySelector('strong').textContent = isHeard() ? 'MESSAGE' : 'NEW MESSAGE';
    messageState.textContent = playing ? 'PLAYING' : isHeard() ? 'REPLAY' : 'PLAY';
  }
  function playMessage() {
    activateAudio();
    if (messageAudio.ended) messageAudio.currentTime = 0;
    messageAudio.volume = .54;
    fadeAudio(ambient, .055, 300);
    return messageAudio.play().then(() => {
      pendingArrivalTrack = null;
      playFx('tapeStart', .5);
    }).catch(() => {
      pendingArrivalTrack = isHeard() ? null : messageTrack;
      messageState.textContent = 'TAP TO PLAY';
    });
  }
  function toggleMessage() {
    if (!messageAudio.paused) {
      messageAudio.pause();
      playFx('tapeStop', .52);
      return;
    }
    playMessage();
  }
  function attemptArrivalPlayback(track = messageTrack) {
    activateAudio();
    if (track !== messageTrack || isHeard(track)) return;
    pendingArrivalTrack = track;
    playMessage();
  }
  function unlockAudioOnFirstInteraction() {
    activateAudio();
    if (pendingArrivalTrack === messageTrack && !isHeard()) playMessage();
  }
  function hideCaptions() {
    entryCaptions.hidden = true;
    entryCaptions.textContent = '';
  }
  function updateCaptions() {
    if (messageTrack !== 'entry' || messageAudio.paused || !Number.isFinite(messageAudio.duration) || messageAudio.duration <= 0) {
      hideCaptions();
      return;
    }
    const weights = ENTRY_CAPTIONS.map(line => Math.max(3, line.split(/\s+/).length));
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    const position = Math.min(.999, messageAudio.currentTime / messageAudio.duration) * total;
    let cursor = 0;
    let index = 0;
    for (; index < weights.length - 1; index += 1) {
      cursor += weights[index];
      if (position < cursor) break;
    }
    entryCaptions.textContent = ENTRY_CAPTIONS[index];
    entryCaptions.hidden = false;
  }
  function resetSelection() {
    selected = [];
    $$('.signal-module').forEach(module => module.classList.remove('connected', 'wrong'));
    $('#human-out').classList.remove('connected');
    cables.innerHTML = '';
    coherence.textContent = '00.0%';
    status.textContent = 'SELECT THE FIRST STAGE';
  }
  function centerOf(target, panelRect) {
    const rect = target.getBoundingClientRect();
    return { x: rect.left - panelRect.left + rect.width / 2, y: rect.top - panelRect.top + rect.height / 2 };
  }
  function drawCables() {
    const panelRect = $('#patch-panel').getBoundingClientRect();
    cables.setAttribute('viewBox', `0 0 ${panelRect.width} ${panelRect.height}`);
    cables.innerHTML = '';
    const points = selected.map(stage => centerOf($(`.signal-module[data-stage="${stage}"] i`), panelRect));
    if (selected.length === ORDER.length) points.push(centerOf($('#human-out i'), panelRect));
    points.slice(0, -1).forEach((point, index) => {
      const next = points[index + 1];
      const bend = Math.max(35, Math.abs(next.x - point.x) * .45);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', `patch-cable${selected.length === ORDER.length ? ' complete' : ''}`);
      path.setAttribute('pathLength', '1');
      path.setAttribute('d', `M${point.x},${point.y} C${point.x + bend},${point.y} ${next.x - bend},${next.y} ${next.x},${next.y}`);
      cables.appendChild(path);
    });
  }
  function chooseStage(button) {
    if (solved || button.classList.contains('connected')) return;
    activateAudio();
    const expected = ORDER[selected.length];
    const chosen = button.dataset.stage;
    if (chosen !== expected) {
      button.classList.add('wrong');
      status.textContent = 'PHASE DRIFT // SIGNAL PATH CLEARED';
      coherence.textContent = `${Math.max(0, selected.length * 25 - 7)}.3%`;
      playFx('axon', .34);
      body.classList.add('signal-fault');
      setTimeout(() => { body.classList.remove('signal-fault'); resetSelection(); }, 620);
      return;
    }
    selected.push(chosen);
    button.classList.add('connected');
    coherence.textContent = `${selected.length * 25}.0%`;
    status.textContent = selected.length < ORDER.length ? `CARRIER ${selected.length} LOCKED // SELECT NEXT STAGE` : 'SIGNAL PATH COMPLETE // HUMAN OUT';
    playFx(selected.length === ORDER.length ? 'found' : 'axon', selected.length === ORDER.length ? .58 : .28);
    drawCables();
    if (selected.length === ORDER.length) {
      $('#human-out').classList.add('connected');
      setTimeout(solve, reducedMotion.matches ? 100 : 650);
    }
  }
  function solve() {
    solved = true;
    saved.solved = true;
    save();
    bench.hidden = true;
    phaseLock.hidden = false;
    body.dataset.signalState = 'locking';
    playFx('wake', .7);
    setTimeout(() => { $('#lock-reading').textContent = 'Δφ 0.0000 RAD // COHERENCE 100.0%'; $('#lock-status').textContent = 'PHASE LOCK // SIGNAL STABLE'; }, reducedMotion.matches ? 20 : 1900);
    setTimeout(() => {
      phaseLock.hidden = true;
      body.dataset.signalState = 'solved';
      resolveIdentity();
      setStableAmbient();
      landing.classList.remove('hidden');
      $('#articles-btn').classList.remove('is-hidden');
      selectTrack('map');
      attemptArrivalPlayback('map');
      messageButton.focus();
    }, reducedMotion.matches ? 120 : 2850);
  }
  function showPersistedSolvedState() {
    bench.hidden = true;
    phaseLock.hidden = true;
    const requestedMap = new URLSearchParams(location.search).get('view') === 'map';
    landing.classList.toggle('hidden', requestedMap);
    body.dataset.signalState = requestedMap ? 'map' : 'solved';
    resolveIdentity();
    ambient.src = 'assets/audio/signal-resolved-ambient.mp3?v=1';
    $('#articles-btn').classList.remove('is-hidden');
  }
  function playMapFx(kind = 'switch') {
    if (!musicOn) return;
    let index = Math.floor(Math.random() * MAP_SWITCHES.length);
    if (index === lastMapFx) index = (index + 1) % MAP_SWITCHES.length;
    lastMapFx = index;
    const folder = kind === 'open' ? 'resolves' : 'switches';
    const audio = new Audio(`elsewhere/assets/audio/${folder}/${MAP_SWITCHES[index]}.mp3`);
    audio.volume = kind === 'open' ? .27 : .13;
    audio.play().catch(() => {});
  }
  function onReturnHome() {
    if (!solved) return;
    body.dataset.signalState = 'solved';
    landing.classList.remove('hidden');
    selectTrack('map');
  }

  $$('.signal-module').forEach(button => button.addEventListener('click', () => chooseStage(button)));
  addEventListener('resize', () => { if (selected.length) drawCables(); });
  messageButton.addEventListener('click', toggleMessage);
  messageAudio.addEventListener('play', () => { syncMessageUi(); updateCaptions(); });
  messageAudio.addEventListener('timeupdate', updateCaptions);
  messageAudio.addEventListener('pause', () => { syncMessageUi(); hideCaptions(); if (musicOn) fadeAudio(ambient, solved ? .12 : .16, 380); });
  messageAudio.addEventListener('ended', () => {
    saved[`${messageTrack}Heard`] = true;
    save();
    syncMessageUi();
    playFx('tapeStop', .46);
    hideCaptions();
    if (musicOn) fadeAudio(ambient, solved ? .12 : .16, 420);
  });
  soundToggle.addEventListener('click', () => {
    musicOn = !musicOn;
    save();
    updateMusicUi();
    if (musicOn) activateAudio(); else { ambient.pause(); messageAudio.pause(); }
  });
  $('#reset-puzzle').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    location.href = location.pathname;
  });
  identity.addEventListener('click', async () => {
    if (!solved) return;
    try { await navigator.clipboard.writeText('gushalwani@alum.mit.edu'); identityEmail.textContent = 'EMAIL COPIED'; setTimeout(() => identityEmail.textContent = CLEAR_EMAIL, 1200); } catch (_) {}
  });
  $('#copy-email').addEventListener('click', () => identity.click());
  addEventListener('pointerdown', unlockAudioOnFirstInteraction, { once: true, passive: true });
  addEventListener('keydown', unlockAudioOnFirstInteraction, { once: true });

  ambient.loop = true;
  ambient.volume = solved ? .12 : .16;
  updateMusicUi();
  if (solved) showPersistedSolvedState(); else startCipher();
  selectTrack(messageTrack);
  attemptArrivalPlayback(messageTrack);

  window.SignalBench = { isSolved: () => solved, sound: playMapFx, onReturnHome, activateAudio };
})();
