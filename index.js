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