let userName = document.querySelector('#name');
let userEmail = document.querySelector('#mail');
let userPass = document.querySelector('#pass');
let userPassConfirm = document.querySelector('#passConfirm');

let myForm = document.querySelector('#form-inscription');

let mess = document.querySelector('.message');
let messUserExist =  document.querySelector('.messuser');
let messMailExist =  document.querySelector('.messemail');

let recuperer = JSON.parse(localStorage.getItem('user')) || []; //Recuperation des information saisis par l'utilisateur lors de l'inscription

myForm.addEventListener('submit', (e)=>{

    e.preventDefault();

    for(let element of recuperer){

        let newUserName = element.name; //On initialise notre nouveau nom d'utilisateur recuperer au niveau de notre tableau
        let newUserEmail = element.email; //On initialise notre nouveau mail recuperer au niveau de notre tableau

        //On fait une verification si les informations existe deja dans notre tableau

        if(
            userName.value === newUserName && 
            userEmail.value === newUserEmail ){

                messUserExist.innerHTML = "Nom d'utilisateur existe déja !";
                messUserExist.style.color = 'red';
                messUserExist.style.textAlign = 'center';
                messUserExist.style.display = 'block';
                
                messMailExist.innerHTML = "Email existe déja !";
                messMailExist.style.color = 'red';
                messMailExist.style.textAlign = 'center';
                messMailExist.style.display = 'block';

                return;

        }

        //Verification si l'email existe deja

        if(
            userEmail.value === newUserEmail && 
            userName.value !== newUserName){

                messMailExist.innerHTML = "Email existe déja !";
                messMailExist.style.color = 'red';
                messMailExist.style.textAlign = 'center';
                messMailExist.style.display = 'block';
                
                messUserExist.innerHTML = "";
                messUserExist.style.display = 'none';


                return;

        }

        //Verification si le nom d'utilisateur existe deja
        
        if(
            userEmail.value !== newUserEmail && 
            userName.value === newUserName){

            messMailExist.innerHTML = "";
            messMailExist.style.display = 'none';

            messUserExist.innerHTML = "Nom d'utilisateur existe déja !";
            messUserExist.style.color = 'red';
            messUserExist.style.textAlign = 'center';
            messUserExist.style.display = 'block';

            return;
        }
    }

    //Verification si les deux mots de passe sont identique ou non

    if(userPass.value !== userPassConfirm.value){

        mess.innerHTML = "les deux mot de passe ne sont pas identique !"
        mess.style.color = 'red';
        mess.style.textAlign = 'center';

        return;
    }

    //Ondeclare notre object Pour les information des utilisateurs

    let userInfo = {
        
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
        passConfirm: userPassConfirm.value
        
    };
    
    recuperer.push(userInfo); //Apres chaque inscription valide on ajoute les infos dans notre tableau

    sauveDonnee(recuperer);//Sauvegarde les infos dans le localStorage

    //Mets touts les autre champs et les contenue vide 

    mess.innerHTML = '';
    userName.value = '';
    userEmail.value = '';
    userPass.value = '';
    userPassConfirm.value = '';

    messUserExist.innerHTML = '';
    messUserExist.style.display = 'none';

    messMailExist.innerHTML  = '';
    messMailExist.style.display = 'none';


    //Pour signaler l'utilisateur que l'inscription est bien reussi et de lui proposer de se connecter
    let reussi = document.querySelector('.inscription-reussi');
    let btn = document.querySelector('.inscription-reussi button');

    reussi.style.display = 'flex';

    btn.addEventListener('click', ()=>{
        reussi.style.display = 'none';
    })

    setTimeout(() => {
        reussi.style.display = 'none';
    }, 5000);//au bout de 5 seocnde le message vas disparaitre

})

//Sauvegarde des informations des utilisateur au  niveau de localStorage

let sauveDonnee = function(user){
    localStorage.setItem('user', JSON.stringify(user))
}

//fonction de recupreation des information sous forme de tableau

let showStorage = function(){
    JSON.parse(localStorage.getItem('user'))||[];
}

showStorage();



