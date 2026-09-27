// Field Notes players: muted previews play only while in view; a click opens the full video with sound and captions.
(() => {
  const players = document.querySelectorAll('[data-fn-video]');
  if (!players.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection && navigator.connection.saveData;
  const previews = [];

  // Previews: load and play only when on screen.
  if ('IntersectionObserver' in window && !saveData) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting && !reduceMotion.matches && !dialog?.open) {
          if (!target.src) target.src = target.dataset.src;
          target.play().catch(() => {});
        } else if (!target.paused) {
          target.pause();
        }
      });
    }, { rootMargin: '120px 0px', threshold: .25 });

    players.forEach((player) => {
      const preview = player.querySelector('.fn-preview');
      if (!preview) return;
      preview.addEventListener('playing', () => preview.classList.add('is-live'));
      previews.push(preview);
      observer.observe(preview);
    });

    reduceMotion.addEventListener?.('change', () => {
      if (reduceMotion.matches) previews.forEach((preview) => preview.pause());
    });
  }

  // Full video dialog, created once.
  let dialog = null;
  let video = null;
  let title = null;

  const buildDialog = () => {
    dialog = document.createElement('dialog');
    dialog.className = 'fn-dialog';
    dialog.setAttribute('aria-label', 'Field notes video');
    dialog.innerHTML = '<div class="fn-dialog-bar"><p class="fn-dialog-title"></p><button class="fn-close" type="button">close <span aria-hidden="true">×</span></button></div><video controls playsinline preload="none"></video>';
    document.body.append(dialog);
    video = dialog.querySelector('video');
    title = dialog.querySelector('.fn-dialog-title');

    dialog.querySelector('.fn-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      video.pause();
      video.removeAttribute('src');
      video.querySelectorAll('track').forEach((track) => track.remove());
      video.load();
      previews.forEach((preview) => {
        const box = preview.getBoundingClientRect();
        if (preview.src && !reduceMotion.matches && box.bottom > 0 && box.top < window.innerHeight) preview.play().catch(() => {});
      });
    });
  };

  const pickSource = (base) => {
    const wide = window.innerWidth * (window.devicePixelRatio || 1) >= 1700;
    return `${base}-${wide && !saveData ? '1440' : '1080'}.mp4`;
  };

  players.forEach((player) => {
    const link = player.querySelector('.fn-frame');
    link.addEventListener('click', (event) => {
      if (typeof HTMLDialogElement !== 'function') return; // fall back to opening the file directly
      event.preventDefault();
      if (!dialog) buildDialog();
      previews.forEach((preview) => preview.pause());

      const base = player.dataset.fnVideo;
      title.innerHTML = `<b>Field notes · No. ${player.dataset.fnNo}</b> · ${player.dataset.fnTitle}`;
      video.poster = player.querySelector('img').currentSrc;
      video.src = pickSource(base);
      const track = document.createElement('track');
      Object.assign(track, { kind: 'captions', srclang: 'en', label: 'English', src: `${base}.en.vtt`, default: true });
      video.append(track);
      dialog.showModal();
      track.track.mode = 'showing';
      video.play().catch(() => {});
    });
  });
})();
