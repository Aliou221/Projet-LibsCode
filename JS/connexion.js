let mailConnect = document.querySelector('#mail');//notre email a connecter
let passConnect = document.querySelector('#pass');//notre mot de passe a connecter
let myForm = document.querySelector('.form');//notre formulaire

let messMailError = document.querySelector('.messmail');//message qui indique l'erreur pour l'email enterer
let messPassError = document.querySelector('.messpass');// message qui indique l'erreur pour le mot de passe entrer

let recuperer = JSON.parse(localStorage.getItem('user'))||[];//On recupre les infos d'utilisateur stocker dans le localstorage lors de l'inscription

let arr = JSON.parse(localStorage.getItem('donne'))||[];//on recupere les information de connexion pour un utilisateur stocker dans le localstorage

myForm.addEventListener('submit', (e)=>{

    if(recuperer.length === 0){ //Apres inscription si la taille de notre tableau d'infos utilisateur est de 0 alors 

        messMailError.innerHTML = "email incorecte ! veuillez verifier";
        messMailError.style.color = "red";
        messMailError.style.textAlign = "center";
        messMailError.style.display = "block";

        messPassError.innerHTML = "mot de passe incorecte ! veuillez verifier";
        messPassError.style.color = "red";
        messPassError.style.textAlign = "center";
        messPassError.style.display = "block";
        
        e.preventDefault(); //Empeche notre navigateur de se charger
        return; //on quitte la fontion

    }else if(recuperer.length > 0){
        //sinon s'il est supperieur a 0

        for(let ele = 0 ; ele < recuperer.length ; ele++){//On parcoure notre tableau 
            
            if(
                mailConnect.value === recuperer[ele].email && 
                passConnect.value === recuperer[ele].password){
                
                //Apres avoirs verifier si les infos entrer sont correcte on fait une alert pour montrer a l'utilisateur que tout se passe bien
                alert("connection reussi !");

                //ici on ajoute les infos de connexion dans notre tableau 

                arr = [

                    {
                        usermail: recuperer[ele].email,
                        username: recuperer[ele].name
                    }   
                ] 
                
                enregistre(arr);//Fonction d'enregistrement des information de connexion dans le localstorage
                return;//Quitte la fonction
            }

        }

        for(let ele = 0 ; ele < recuperer.length ; ele++){ //Apres le parcour de notre tableau 

            //verification si le mail et celui de mot de passe est incorrecte
            if(mailConnect.value !== recuperer[ele].email && passConnect.value !== recuperer[ele].password){
                
                messMailError.innerHTML = "email incorecte ! veuillez verifier";
                messMailError.style.color = "red";
                messMailError.style.textAlign = "center";
                messMailError.style.display = "block";

                messPassError.innerHTML = "mot de passe incorecte ! veuillez verifier";
                messPassError.style.color = "red";
                messPassError.style.textAlign = "center";
                messPassError.style.display = "block";
    
                e.preventDefault();//Empeche la page de se charger 
                return; //quitte la fontion 
            }
            
            //Verification si le mail est incorrecte et le mot de passe correcte
            if(mailConnect.value !== recuperer[ele].email && passConnect.value === recuperer[ele].password){
                
                messMailError.innerHTML = "email incorecte ! veuillez verifier";
                messMailError.style.color = "red";
                messMailError.style.textAlign = "center";
                messMailError.style.display = "block";

                messPassError.innerHTML = "";
                messPassError.style.display = "none";
    
                e.preventDefault();//Empeche la page de se charger 
                return;//quitte la fonction
            }
            
            //Verification si le mail est correcte et le mot de passe incorrecte
            if(passConnect.value !== recuperer[ele].password && mailConnect.value === recuperer[ele].email){
                
                messPassError.innerHTML = "mot de passe incorecte ! veuillez verifier";
                messPassError.style.color = "red";
                messPassError.style.textAlign = "center";
                messPassError.style.display = "block";

                messMailError.innerHTML = "";
                messMailError.style.display = "none";

                e.preventDefault();//Empeche la page de se charger 
                return;//On quitte la fonction 
            }
        }


    }

    //Apres tout ca on met notre contenue de message invisible
    messMailError.innerHTML = ""; 
    messMailError.style.display = "none";

    messPassError.innerHTML = "";
    messPassError.style.display = "none";
});


//Fontion qui enregistre nos information de connexion dans le localStorage 
let enregistre = function(destination){
    localStorage.setItem('donne',JSON.stringify(destination));
}

//Fonction qui recupere nos information dans le localStorage
let getDonnee = function(){
    JSON.parse(localStorage.getItem('donne'))||[];
}

getDonnee();


