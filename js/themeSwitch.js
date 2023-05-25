const themeSwitchHandler = (e) => {
  const el = e.target;

  if (el.classList.contains('theme-switch__slider')) {
    const themeSwitchSlider = document.querySelector('.theme-switch__slider');
    const themeLink = document.querySelector('#theme-link');

    if (themeLink.getAttribute('href') == './css/light-theme.css') {
      themeSwitchSlider.classList.add('theme-switch__slider_active');
      themeLink.setAttribute('href', './css/dark-theme.css');
    } else {
      themeSwitchSlider.classList.remove('theme-switch__slider_active');
      themeLink.setAttribute('href', './css/light-theme.css');
    }
  }
};

document.body.addEventListener('click', themeSwitchHandler);