let recuperer = JSON.parse(localStorage.getItem('user'))||[];
let module = JSON.parse(localStorage.getItem('module-name'));
let donnee = JSON.parse(localStorage.getItem('donne'))||[];

let userName = document.querySelector('.username');
let userEmail = document.querySelector('.email');
let moduleName = document.querySelector('.modulename');

userName.innerHTML = donnee[0].username;//Vas prendre le nom de l'utilisateur apres connexion 
userEmail.innerHTML = donnee[0].usermail;//Vas prendre le email de l'utilisateur apres connexion
moduleName.innerHTML = module.Module;