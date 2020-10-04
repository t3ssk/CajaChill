var options = {
    "animate": true,
    "patternWidth": 20.81,
    "patternHeight": 58.63,
    "grainOpacity": 0.04,
    "grainDensity": 1,
    "grainWidth": 1,
    "grainHeight": 1
  }

grained('#main',options)
const menuOn = document.querySelector('.navinic')
const menu = document.querySelector('.menuOnClick')
const menuClose = document.querySelector('#close')

menuOn.addEventListener('click', function(){
  menu.classList.add('active')
})
menuClose.addEventListener('click', function(){
  menu.classList.remove('active')
})


//Photos animated in on scroll 
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(slideIn));
const imgs = document.querySelectorAll('.images');
function slideIn(e){
  if(e){
    imgs.forEach(image=>{
      const slideInAt = (window.scrollY+window.innerHeight) - (image.height/2);
      const isShown = slideInAt > image.offsetTop;
      if(isShown){
        image.classList.add('active')
      }
    })
  }
}


