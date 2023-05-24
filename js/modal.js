const modal = {
  el: document.querySelector('.modal'),
  overlay: document.querySelector('.modal-overlay'),
  product: {},

  addListener() {
    document.body.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('product__btn')) {
        this.overlay.classList.toggle('modal-overlay_active');
        document.body.classList.toggle('no-scroll');

        const product = target.closest('.product');
        this.product.img = product.querySelector('.product__img').src;
        this.product.title = product.querySelector('.product__title').textContent;
      
        this.el.classList.toggle('modal_active');

      }
    });
  },
};

modal.addListener();
