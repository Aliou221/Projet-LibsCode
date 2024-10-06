// MENUE BURGER
let menuBurger = document.querySelector('.nav-menue');
let navLinks = document.querySelector('.navlinks');
let barHaut =document.querySelector('.bar-haut');
let barMi =document.querySelector('.bar-mi');
let barBas =document.querySelector('.bar-bas');

menuBurger.addEventListener('click',()=>{
   navLinks.classList.toggle('nav-active');

   if(navLinks.classList.contains('nav-active')){
     navLinks.style.transform = 'translate(0)'
     navLinks.style.transition = '.3s ease'

     barHaut.style.rotate = '45deg'
     barHaut.style.transform = 'translate(0)'
     barHaut.style.transition = '.3s ease'

     barMi.style.opacity = '0'
     barMi.style.transition = '.3s ease'

     barBas.style.rotate = '-46deg'
     barBas.style.transform = 'translate(3px, -2px)'
     barBas.style.transition = '.3s ease'

   }else{
     navLinks.style.transform = 'translateX(-100%)'
     navLinks.style.transition = '.3s ease'

     barHaut.style.rotate = '180deg'
     barHaut.style.transform = 'translateY(-10px)'
     barHaut.style.transition = '.3s ease'

     barMi.style.opacity = '1'
     barMi.style.transition = '.3s ease'

     barBas.style.rotate = '180deg'
     barBas.style.transform = 'translateY(10px)'
     barBas.style.transition = '.3s ease'

   }
});