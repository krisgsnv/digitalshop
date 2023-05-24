const modalHandler = (e) => {
  const el = e.target;
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (el.classList.contains('product__btn')) {
    modalOverlay.classList.add('modal-overlay_active');
    modal.classList.add('modal_active');

    const categoryId = el.closest('.category').id;
    const productId = el.closest('.product').id;
    const product = findProduct(categoryId, productId);
  }

  if (el.classList.contains('modal-overlay')) {
    modalOverlay.classList.remove('modal-overlay_active');
    modal.classList.remove('modal_active');
  }
};

const findProduct = (categoryId, productId) => {
  const category = products.find((category) => category.categoryId == categoryId);
    if (category) {
      const product = category.items.find((product) => product.id == productId);
      return product ? product : 'Не найдено';
    }
};

document.body.addEventListener('click', modalHandler);
