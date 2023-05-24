const root = document.getElementById('root');

const products = [
  {
    categoryName: 'Платья',
    categoryId: 'dresses',
    items: [
      {
        id: 1,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '23.05.2023',
      },
      {
        id: 2,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '15.12.2021',
      },
      {
        id: 3,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '7.05.2023',
      },
      {
        id: 4,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '7.05.2023',
      },
    ],
  },

  {
    categoryName: 'Юбки',
    categoryId: 'skirts',
    items: [
      {
        id: 1,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '23.05.2023',
      },
      {
        id: 2,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '15.12.2021',
      },
      {
        id: 3,
        title: 'Юбка',
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0QCIC_19271702_1_v1.jpeg',
        date: '7.05.2023',
      },
    ],
  },
];

const renderProduct = (product) => {
  const productBlock = document.createElement('div');
  productBlock.classList.add('product');
  productBlock.id = product.id;

  const img = document.createElement('img');
  img.classList.add('product__img');
  img.alt = product.title;
  img.src = product.img;

  const date = document.createElement('span');
  date.classList.add('product__date');
  date.textContent = getDayInfo(product.date);

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product__title');
  productTitle.textContent = product.title;

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.classList.add('product__btn');
  btn.textContent = 'Купить';

  productBlock.append(img, date, productTitle, btn);
  return productBlock;
};

const renderCategory = (category) => {
  const categorySection = document.createElement('section');
  categorySection.classList.add('category');
  categorySection.id = category.categoryId;

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('category__title');
  categoryTitle.textContent = category.categoryName;

  const productsBlock = document.createElement('div');
  productsBlock.classList.add('products');

  category.items.forEach((product) => {
    productsBlock.append(renderProduct(product));
  });

  categorySection.append(categoryTitle, productsBlock);
  return categorySection;
};

document.addEventListener('DOMContentLoaded', () => {
  products.forEach((category) => {
    root.append(renderCategory(category));
  });
});
