const mobileMenuToggleActive = () => {
  const burger = document.querySelector('.burger');
  const burgerLine = document.querySelector('.burger__line');
  const headerMenu = document.querySelector('.header-menu');

  burger.classList.toggle('burger_active');
  burgerLine.classList.toggle('burger__line_active');
  headerMenu.classList.toggle('header-menu_active');
  document.body.classList.toggle('no-scroll');

  if (burger.classList.contains('burger_active')) {
    burger.setAttribute('title', 'Закрыть меню');
  } else {
    burger.setAttribute('title', 'Открыть меню');
  }
};

const mobileMenuHandler = (e) => {
  const el = e.target;

  if (el.classList.contains('burger') || el.classList.contains('burger__line')) {
    mobileMenuToggleActive();
  }

  if (el.classList.contains('header-menu__link')) {
    e.preventDefault();
    scrollToElem(el);
    if (window.innerWidth <= 576) {
      mobileMenuToggleActive();
    }
  }

  if (el.classList.contains('footer-menu__link')) {
    e.preventDefault();
    scrollToElem(el);
  }
};

document.body.addEventListener('click', mobileMenuHandler);
