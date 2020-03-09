window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle');
  if (toggle) toggle.addEventListener('click', change);

  if (!localStorage.getItem('isLight'))
    localStorage.setItem('isLight', 'false');

  if (localStorage.getItem('isLight') === 'true')
    makeLight();
  else makeDark();

  changeModeSign(toggle);
})

function change(e) {
  if (localStorage.getItem('isLight') === 'true') {
    makeDark();
    localStorage.setItem('isLight', 'false');
  } else {
    makeLight();
    localStorage.setItem('isLight', 'true')
  }
  changeModeSign(e.target)
}

function changeModeSign(element) {
  element.innerHTML = localStorage.getItem('isLight') === 'true' ?
    'dark mode' : 'light mode';
}

function makeDark() {
  document.documentElement.style.setProperty('--background', 'rgb(37, 43, 57)');
  document.documentElement.style.setProperty('--accent', 'powderblue');
  document.documentElement.style.setProperty('--lightBackground', 'rgba(176, 224, 230, .4)');
  document.documentElement.style.setProperty('--selectionColor', 'pink');
  document.documentElement.style.setProperty('--bigText', 'white');
  document.documentElement.style.setProperty('--mainText', 'rgba(255, 255, 255, .9)');
  document.documentElement.style.setProperty('--date', 'pink');
  document.documentElement.style.setProperty('--aside', 'lightgrey');
}

function makeLight() {
  document.documentElement.style.setProperty('--background', 'white');
  document.documentElement.style.setProperty('--accent', '#176f9a');
  document.documentElement.style.setProperty('--lightBackground', 'rgba(23, 111, 154, .1)');
  document.documentElement.style.setProperty('--selectionColor', 'rgba(240, 128, 128, .8)');
  document.documentElement.style.setProperty('--bigText', 'black');
  document.documentElement.style.setProperty('--mainText', '#333');
  document.documentElement.style.setProperty('--date', '#176f9a');
  document.documentElement.style.setProperty('--aside', 'darkgrey');

  const mathImages = document.querySelectorAll('.mathimage');
  for (let i = 0; i < mathImages.length; i++)
    mathImages[i].style.background = 'white';
}
