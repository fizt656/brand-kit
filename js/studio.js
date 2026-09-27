// Studio pages: Inquire links build the mail address on click; the floating Inquire shows between the header and the closing block.
(() => {
  document.querySelectorAll('[data-mail]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const user = ['gus', 'halwani'].join('');
      const host = ['alum', 'mit', 'edu'].join('.');
      window.location.href = 'mailto:' + user + '@' + host + '?subject=' + encodeURIComponent(link.dataset.mail || 'Project inquiry');
    });
  });

  const floater = document.querySelector('.float-cta');
  const header = document.querySelector('.detail-header');
  const closing = document.getElementById('work-with-me');
  if (!floater || !header || !closing || !('IntersectionObserver' in window)) return;

  let headerVisible = true;
  let closingVisible = false;
  const update = () => floater.classList.toggle('is-shown', !headerVisible && !closingVisible);
  new IntersectionObserver(([entry]) => { headerVisible = entry.isIntersecting; update(); }).observe(header);
  new IntersectionObserver(([entry]) => { closingVisible = entry.isIntersecting; update(); }, { rootMargin: '0px 0px 25% 0px' }).observe(closing);
})();
