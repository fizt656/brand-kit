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

  // Selected work: show each entry as its headline; click the headline to read the detail.
  document.querySelectorAll('.work-history article').forEach((article) => {
    const heading = article.querySelector('h2, h3');
    if (!heading) return;
    const body = [...heading.parentElement.children].filter((el) => el.tagName === 'P' && heading.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);
    if (!body.length) return;
    body.forEach((p) => p.classList.add('collapse-body'));
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'collapse-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    while (heading.firstChild) toggle.appendChild(heading.firstChild);
    heading.appendChild(toggle);
    toggle.addEventListener('click', () => {
      const open = article.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.body.classList.add('js-collapse');
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
