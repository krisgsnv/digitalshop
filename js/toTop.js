const toTop = {
  el: document.querySelector('.to-top'),

  show() {
    this.el.classList.remove('to-top_hide');
  },

  hide() {
    this.el.classList.add('to-top_hide');
  },

  addListeners() {
    this.el.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 20 ? this.show() : this.hide();
    });
  },
};

toTop.addListeners();
