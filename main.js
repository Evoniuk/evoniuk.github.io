
window.addEventListener('DOMContentLoaded', function() {
  try {
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('click', change);
  } catch (error) {}

  if (!localStorage.getItem('isLight')) localStorage.setItem('isLight', 'true');
  const light = localStorage.getItem('isLight');
  if (light === 'true') makeLight();
  else makeDark();
})

function change() {
  if (localStorage.getItem('isLight') === 'true') {
    makeDark();
    localStorage.setItem('isLight', 'false')
  } else {
    makeLight();
    localStorage.setItem('isLight', 'true')
  }
}

function makeDark() {
  document.documentElement.style.setProperty('--lmain', 'rgba(0, 128, 128, .2)');
  document.documentElement.style.setProperty('--llink', 'rgba(222, 184, 135, .36)');
  document.documentElement.style.setProperty('--code', 'rgb(200, 200, 200)');
  document.documentElement.style.setProperty('--back', 'rgb(38, 44, 57)');
  document.documentElement.style.setProperty('--text', 'rgb(240, 240, 240)');
  document.documentElement.style.setProperty('--mcode', 'rgb(222, 184, 135)');
  document.documentElement.style.setProperty('--func', 'rgb(200, 100, 100)');
  document.documentElement.style.setProperty('--str', 'rgb(40, 158, 40)');

  try {
    document.querySelector('.mathimage').style.background = "var(--code)";
  } catch (error) {}
}

function makeLight() {
  document.documentElement.style.setProperty('--main', 'rgb(0, 128, 128)');
  document.documentElement.style.setProperty('--lmain', 'rgba(0, 128, 128, .07)');
  document.documentElement.style.setProperty('--link', 'rgb(222, 184, 135)');
  document.documentElement.style.setProperty('--llink', 'rgba(222, 184, 135, .1)');
  document.documentElement.style.setProperty('--alink', 'rgba(222, 184, 135, .6)');
  document.documentElement.style.setProperty('--code', 'rgb(67, 79, 84)');
  document.documentElement.style.setProperty('--back', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--text', 'rgb(0, 0, 0)');
  document.documentElement.style.setProperty('--mcode', 'rgb(0, 128, 128)');
  document.documentElement.style.setProperty('--func', 'rgb(178, 34, 34)');
  document.documentElement.style.setProperty('--str', 'rgb(0, 128, 0)');

  try {
    document.querySelector('.mathimage').style.background = "var(--back)";
  } catch (error) {}
}
