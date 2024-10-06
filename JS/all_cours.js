let inputSearch = document.querySelector('#chearche');
let btnSearch = document.querySelector('#btn-search');
let message = document.querySelector('.message');
let Title = document.querySelectorAll('h2');//recuperation de tous les titres h2
let listes = document.querySelectorAll('li a');


let searcheElement = function(){
    
    
    let textInput = inputSearch.value.toLowerCase();//l'element a rechercher en miniscule
    
    
    Title.forEach(titre =>{ //Parcourir les differentes h2
        
        let texte = titre.textContent.toLowerCase();//Transformation de notre h2 en miniscule 
          
        if(texte.includes(textInput)){ //Verifie si notre h2 contient un caractere rechercher 
              
            titre.parentElement.parentElement.style.display = ''; //si c'est vrai :ici il nous affiche les blog parent du parent de notre titre h2
            
        }else{ 
            
            titre.parentElement.parentElement.style.display = 'none';//si non : les blogs parent de parent de notr titre h2 sera invisible
            
        }
        
    });
      
}

inputSearch.addEventListener('input', searcheElement); //Evenement de recherche 


listes.forEach(liElement =>{
    liElement.addEventListener('click', (e)=>{
        
        let Tab = {
            
            Module : liElement.textContent

        };

        localStorage.setItem('module-name', JSON.stringify(Tab));

        // inputSearch.value = liElement.textContent;// au niveau de notre side bar si on click sur un li on fait directement le cours qu'on veut rehercher 
    });
})

JSON.parse(localStorage.getItem('module-name')); //recuperer le nom du module 

//Mes bars creation des animations de ma menue burger

let menuBurger = document.querySelector('.my-bars');
let myLeft = document.querySelector('.left');
let barHaut =document.querySelector('.bar-haut');
let barMi =document.querySelector('.bar-mi');
let barBas =document.querySelector('.bar-bas');

menuBurger.addEventListener('click',()=>{
   myLeft.classList.toggle('nav-active');//Apres click sur notre menue on (ajoute ou supprime) la classe (nav-active) au niveau de notre section left 

   if(myLeft.classList.contains('nav-active')){ //Si on trouve la classe (nav-active) 
        myLeft.style.transform = 'translate(0)'
        myLeft.style.transition = '.3s ease'

        barHaut.style.rotate = '45deg'
        barHaut.style.transform = 'translate(0)'
        barHaut.style.transition = '.3s ease'

        barMi.style.opacity = '0'
        barMi.style.transition = '.3s ease'

        barBas.style.rotate = '-46deg'
        barBas.style.transform = 'translate(3px, -2px)'
        barBas.style.transition = '.3s ease'

   }else{

    //sinon on met tous par defaut

        myLeft.style.transform = 'translateX(-100%)'
        myLeft.style.transition = '.3s ease'

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
