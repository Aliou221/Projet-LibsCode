let recuperer = JSON.parse(localStorage.getItem('user'))||[];
let module = JSON.parse(localStorage.getItem('module-name'));
let donnee = JSON.parse(localStorage.getItem('donne'))||[];

let userName = document.querySelector('.username');
let userEmail = document.querySelector('.email');
let moduleName = document.querySelector('.modulename');

let imgProfile = document.querySelector('.img-profile');
let changeProfile = document.querySelector('#profile');


if(donnee !== null && module !== null){

    userName.innerHTML = donnee[0].username;//Vas prendre le nom de l'utilisateur apres connexion 
    userEmail.innerHTML = donnee[0].usermail;//Vas prendre le email de l'utilisateur apres connexion
    moduleName.innerHTML = module.Module;
}

changeProfile.addEventListener('change' , ()=>{
    
    let reader = new FileReader();
    let file = changeProfile.files[0];

    reader.addEventListener('loadend', ()=>{
        
        imgProfile.src = reader.result;

        localStorage.setItem('img', reader.result);
    })
    
    reader.readAsDataURL(file);

})

let locale = localStorage.getItem('img');

if(locale !== null){
    imgProfile.src = locale;
}else{
    imgProfile.src = "../img/user.png"
}
