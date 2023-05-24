const modalHandler = (e) => {
  const el = e.target;
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (el.classList.contains('product__btn')) {
    modal.classList.toggle('modal-overlay_active');
    modalOverlay.classList.toggle('modal_active');
    document.body.classList.toggle('no-scroll');
  }
};

document.body.addEventListener('click', modalHandler);
