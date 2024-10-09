let recuperer = JSON.parse(localStorage.getItem('user'))||[];
let module = JSON.parse(localStorage.getItem('module-name'));
let donnee = JSON.parse(localStorage.getItem('donne'))||[];

let userName = document.querySelector('.username');
let userEmail = document.querySelector('.email');
let moduleName = document.querySelector('.modulename');

let imgProfile = document.querySelector('.img-profile');
let changeProfile = document.querySelector('#profile');


if(donnee !== null && module !== null){

        for(let ele of donnee){
            if(ele.username === compare.username){

                userName.innerHTML = ele.username;//Vas prendre le nom de l'utilisateur apres connexion 
                imgProfile.src = ele.img || "../img/user.png";
                userEmail.innerHTML = ele.usermail;//Vas prendre le email de l'utilisateur apres connexion
            }
    
        }

    moduleName.innerHTML = module.Module;

}

changeProfile.addEventListener('change' , ()=>{

    let reader = new FileReader();
    let file = changeProfile.files[0];

    reader.addEventListener('loadend', ()=>{
        
        imgProfile.src = reader.result;

        for(let i = 0 ; i < donnee.length ; i++){

           if(donnee[i].username === compare.username){
                donnee[i].img = imgProfile.src;
                localStorage.setItem('donne',JSON.stringify(donnee));
                break;
           }

        }
    })
    
    reader.readAsDataURL(file);

})

// Récupérer et définir l'image de profil de l'utilisateur au chargement
function setUserProfile() {
    let userData = donnee.find(user => user.username === compare.username);
        
    if (userData) {
        imgProfile.src = userData.img || "../img/user.png"; // Utiliser l'image stockée ou l'image par défaut
    } else {
        imgProfile.src = "../img/user.png"; // Photo de profil par défaut
    }
}

// Appel de la fonction pour définir le profil
setUserProfile();
