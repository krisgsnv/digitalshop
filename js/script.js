const headerMenuLink = document.querySelector('.header-menu__link');

const scrollToElem = (e) => {
  e.preventDefault();
  let href = e.target.getAttribute('href').substring(1);

  const scrollTarget = document.getElementById(href);
  const topOffset = document.querySelector('.header').offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};


document.body.addEventListener('click', (e) => {
  const el = e.target;
  if (el == headerMenuLink) {
    scrollToElem(e);
    if (window.innerWidth <= 576) {
      mobileMenuToggleActive();
    }
  }
});