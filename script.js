var nav = document.querySelector('nav');
var wrapper = document.querySelector('.wrapper');
var menu = document.querySelector('.search-bar li');
var buttons = document.querySelectorAll('button');
var links = document.querySelectorAll('li');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    e.preventDefault();
  });
}

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    e.preventDefault();
  }, true);
}

menu.addEventListener('click', function(e) {
  if(nav.style.display === 'none') {
    wrapper.style.display = 'grid';
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    wrapper.style.display = 'block';
  }
});
