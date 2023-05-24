const scrollToElem = (el) => {
  const href = el.getAttribute('href').substring(1);

  const header = document.querySelector('.header');
  const scrollTarget = document.getElementById(href);
  const topOffset = header.offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};