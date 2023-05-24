const renderModalContent = (product) => {
  const productImg = document.querySelector('.modal-form__product-img');
  const productTitle = document.querySelector('.modal-form__product-title');
  const colors = document.querySelector('.modal-form__colors');

  productImg.src = product.img;
  productTitle.textContent = product.title;
  colors.innerHTML = '';

  product.colors.forEach(color => {
    const label = document.createElement('label');
    label.classList.add('modal-form__label');

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'color');
    input.setAttribute('value', color);

    label.textContent = capitalizeString(color);
    label.prepend(input);
    colors.prepend(label);
  });

};

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

    if (product) {
      renderModalContent(product);
    }
  }

  if (el.classList.contains('modal-form__submit')) {
    e.preventDefault();
    alert('Заказ оформлен!');
  }

  if (el.classList.contains('modal-overlay') || el.classList.contains('modal-form__btn')) {
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