const mobileMenu = {
  el: document.querySelector('.burger'),

  addListener() {
    this.el.addEventListener('click', () => {
      this.el.classList.toggle('burger_active');
      document.querySelector('.burger__line').classList.toggle('burger__line_active');
      document.querySelector('.header-menu').classList.toggle('header-menu_active');
      document.body.classList.toggle('no-scroll');

      if (this.el.classList.contains('burger_active')) {
        this.el.setAttribute('title', 'Закрыть меню');
      }
    });
  },
};

mobileMenu.addListener();
