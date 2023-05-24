const themeSwitchHandler = (e) => {
  const el = e.target;

  if (el.classList.contains('theme-switch__slider')) {
    const themeSwitchSlider = document.querySelector('.theme-switch__slider');
    themeSwitchSlider.classList.toggle('theme-switch__slider_active');
  }
};

document.body.addEventListener('click', themeSwitchHandler);