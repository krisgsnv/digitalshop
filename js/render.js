window.addEventListener('load', () => {
  const preloader =  document.querySelector('.preloader');
  preloader.classList.add('preloader_hide');
  setTimeout(() => {
    preloader.classList.add('preloader_remove');;
  }, 1000);
});

const root = document.getElementById('root');

const products = [
  {
    categoryName: 'Платья',
    categoryId: 'dresses',
    items: [
      {
        id: 1,
        title: 'Платье Love Republic',
        img: './img/dresses/1.webp',
        date: '01.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 2,
        title: 'Платье Spirit of Katana',
        img: './img/dresses/2.webp',
        date: '07.03.2023',
        colors: ['белый', 'черный', 'красный']
      },
      {
        id: 3,
        title: 'Платье Sugar Brand',
        img: './img/dresses/3.webp',
        date: '08.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 4,
        title: 'Платье Francessca Perreti',
        img: './img/dresses/4.webp',
        date: '12.03.2023',
        colors: ['бежевый', 'черный', 'красный']
      },
      {
        id: 5,
        title: 'Платье Moscovita',
        img: './img/dresses/5.webp',
        date: '14.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 6,
        title: 'Платье Fadjo',
        img: './img/dresses/6.webp',
        date: '16.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 7,
        title: 'Платье Lipinskaya',
        img: './img/dresses/7.webp',
        date: '18.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 8,
        title: 'Платье Avenue',
        img: './img/dresses/8.webp',
        date: '20.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 9,
        title: 'Платье Suara',
        img: './img/dresses/9.webp',
        date: '22.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 10,
        title: 'Платье Charuel',
        img: './img/dresses/10.webp',
        date: '24.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 11,
        title: 'Платье Viviarte',
        img: './img/dresses/11.webp',
        date: '28.03.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
    ],
  },

  {
    categoryName: 'Пиджаки',
    categoryId: 'jackets',
    items: [
      {
        id: 21,
        title: 'Пиджак Mango',
        img: './img/jackets/1.webp',
        date: '01.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 22,
        title: 'Пиджак Sela',
        img: './img/jackets/2.webp',
        date: '02.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 23,
        title: 'Пиджак Vicci',
        img: './img/jackets/3.webp',
        date: '04.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 24,
        title: 'Пиджак Sinar',
        img: './img/jackets/4.webp',
        date: '07.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 25,
        title: 'Пиджак Koton',
        img: './img/jackets/5.webp',
        date: '11.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 26,
        title: 'Пиджак Molly',
        img: './img/jackets/6.webp',
        date: '14.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 27,
        title: 'Пиджак Zara',
        img: './img/jackets/7.webp',
        date: '17.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 28,
        title: 'Пиджак Figi',
        img: './img/jackets/8.webp',
        date: '20.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 29,
        title: 'Пиджак Markey',
        img: './img/jackets/9.webp',
        date: '23.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 210,
        title: 'Пиджак Marlet',
        img: './img/jackets/10.webp',
        date: '25.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 211,
        title: 'Пиджак Zarina',
        img: './img/jackets/11.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 212,
        title: 'Пиджак Jessie',
        img: './img/jackets/12.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
    ],
  },
  {
    categoryName: 'Рубашки',
    categoryId: 'shirts',
    items: [
      {
        id: 31,
        title: 'Рубашка Befree',
        img: './img/shirts/1.webp',
        date: '01.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 32,
        title: 'Рубашка Sela',
        img: './img/shirts/2.webp',
        date: '02.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 33,
        title: 'Рубашка Vicci',
        img: './img/shirts/3.webp',
        date: '04.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 34,
        title: 'Рубашка Sinar',
        img: './img/shirts/4.webp',
        date: '07.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 35,
        title: 'Рубашка Koton',
        img: './img/shirts/5.webp',
        date: '11.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 36,
        title: 'Рубашка Molly',
        img: './img/shirts/6.webp',
        date: '14.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 37,
        title: 'Рубашка Zara',
        img: './img/shirts/7.webp',
        date: '17.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 38,
        title: 'Рубашка Figi',
        img: './img/shirts/8.webp',
        date: '20.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 39,
        title: 'Рубашка Markey',
        img: './img/shirts/9.webp',
        date: '23.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 310,
        title: 'Рубашка Marlet',
        img: './img/shirts/10.webp',
        date: '25.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 311,
        title: 'Рубашка Zarina',
        img: './img/shirts/11.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 312,
        title: 'Рубашка Jessie',
        img: './img/shirts/12.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 313,
        title: 'Рубашка Jordan',
        img: './img/shirts/13.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
    ],
  },
  {
    categoryName: 'Юбки',
    categoryId: 'skirts',
    items: [
      {
        id: 41,
        title: 'Юбка Befree',
        img: './img/skirts/1.webp',
        date: '01.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 42,
        title: 'Юбка Sela',
        img: './img/skirts/2.webp',
        date: '02.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 43,
        title: 'Юбка Vicci',
        img: './img/skirts/3.webp',
        date: '04.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 44,
        title: 'Юбка Sinar',
        img: './img/skirts/4.webp',
        date: '07.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 45,
        title: 'Юбка Koton',
        img: './img/skirts/5.webp',
        date: '11.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 46,
        title: 'Юбка Molly',
        img: './img/skirts/6.webp',
        date: '14.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 47,
        title: 'Юбка Zara',
        img: './img/skirts/7.webp',
        date: '17.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 48,
        title: 'Юбка Figi',
        img: './img/skirts/8.webp',
        date: '20.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 49,
        title: 'Юбка Markey',
        img: './img/skirts/9.webp',
        date: '23.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 410,
        title: 'Юбка Marlet',
        img: './img/skirts/10.webp',
        date: '25.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 411,
        title: 'Юбка Zarina',
        img: './img/skirts/11.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 412,
        title: 'Юбка Jessie',
        img: './img/skirts/12.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 413,
        title: 'Юбка Jordan',
        img: './img/skirts/13.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
      },
      {
        id: 414,
        title: 'Юбка Jordan',
        img: './img/skirts/14.webp',
        date: '28.02.2023',
        colors: ['зеленый', 'черный', 'красный']
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
