// PARTIE COMMENTAIRE

let commentes = document.querySelectorAll('.commente');
let btnCommentes = document.querySelectorAll('.btn-commente');
let paragCommentes = document.querySelectorAll('.parag-commente');
let imgArrows = document.querySelectorAll('.img-arrow');

btnCommentes.forEach((btn , index)=> {
     btn.addEventListener('click', ()=>{

          commentes[index].classList.toggle('my-active-commente')

          if(commentes[index].classList.contains('my-active-commente')){
     
               commentes[index].style.height = `${commentes[index].scrollHeight}px`
               paragCommentes[index].style.opacity = "1";
               paragCommentes[index].style.visibility = "visible";
               paragCommentes[index].style.transitionDelay = ".3s";
               paragCommentes[index].style.transition = 'opacity .3s , visibility .3s'
               imgArrows[index].style.rotate = '360deg'
     
          }else{
               commentes[index].style.height = `50px`
               paragCommentes[index].style.opacity = "0";
               paragCommentes[index].style.visibility = "hidden";
               paragCommentes[index].style.transitionDelay  = "0s";
               paragCommentes[index].style.transition = 'opacity 0s , visibility 0s'
               imgArrows[index].style.rotate = '180deg'
          }
     })
})

//Carousel

let cards = document.querySelectorAll('.w-400');
let btnNext = document.querySelector('#suiv');
let btnPrev = document.querySelector('#prev');

let titleEvents = document.querySelectorAll('.grid-title-evenement h2');
let dateEvents = document.querySelectorAll('.grid-date-evenement h3');
let descriptionEvents= document.querySelectorAll('.grid-evenement-description p');

let events =[

         {
          title : "Atelier",
          date  : "15 janvier 2023",
          description : "Introduction à HTML et CSS"
         },
         {
          title : "Hackathon",
          date  : "20 mars 2023",
          description : "Créez votre première application web"
         },
         {
          title : "Conférence",
          date  : "5 avril 2023",
          description : "Les meilleures pratiques en JavaScript"
         },
         {
          title : "Webinaire",
          date  : "10 mai 2023",
          description : "Découverte de React.js"
         },
         {
          title : "Session de code",
          date  : "25 juin 2023",
          description : "Développez un site responsive"
         },
         {
          title : "Bootcamp",
          date  : "15 août 2023",
          description : "Créer un projet web en équipe"
         },
];

events.forEach((element , index) =>{

     titleEvents[index].innerHTML = element.title;
     dateEvents[index].innerHTML = element.date;
     descriptionEvents[index].innerHTML = element.description;
});

let count = 0;

btnNext.addEventListener('click', ()=>{

     if(count > cards.length - 2){
          count = 0;
     }else{

          count++
     }
     scrol();
})

btnPrev.addEventListener('click', ()=>{
     if(count < 0){
          count = cards.length - 1 ;
     }else{

          count--
     }
     scrol();

})

function scrol(){   
     cards.forEach(card =>{
          card.style.transform = `translate(-${count * 370}px)`;
     })
}