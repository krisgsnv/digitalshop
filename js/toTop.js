const toTop = (e) => {
  const el = e.target;

  if (el.classList.contains('to-top')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

const toTopShow = () => {
  const el = document.querySelector('.to-top');

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 20 ? el.classList.remove('to-top_hide') : el.classList.add('to-top_hide');
};

document.body.addEventListener('click', toTop);
window.addEventListener('scroll', toTopShow);
