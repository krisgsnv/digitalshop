const mobileMenu = {
  el: document.querySelector('.burger'),

  addListener() {
    this.el.addEventListener('click', () => {
      document.querySelector('.burger__line').classList.toggle('burger__line_active');
      document.querySelector('.header-menu').classList.toggle('header-menu_active');
      document.body.classList.toggle('no-scroll');
    });
  },
};

mobileMenu.addListener();