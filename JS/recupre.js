let recuperer =  JSON.parse(localStorage.getItem('user'))||[];

let myForm = document.querySelector('#form-recuperation');
let passChange = document.querySelector('#passChange')
let passChangeConfirm = document.querySelector('#passChangeConfirm');
let mail = document.querySelector('#mail');
let mailError = document.querySelector('.messemail');
let passError = document.querySelector('.messpass');


myForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(recuperer.length === 0 || recuperer === null){
        console.log('vide')

        mailError.innerHTML = "Email introuvable !"
        mailError.style.display = 'block';

        if(passChange.value !== passChangeConfirm.value){

            passError.innerHTML = "Les deux mots de passe ne sont pas identique !"
            passError.style.display = 'block';

            return;
        }

        passError.style.display = 'none';

        return;


    }else if(recuperer.length > 0){

        for(let i of recuperer){

            if(mail.value !== i.email && passChange.value !== passChangeConfirm.value){

                mailError.innerHTML = "Email invalide veuillez verifier svp !";
                mailError.style.display = 'block';

                passError.innerHTML = "Les deux mots de passe ne sont pas identique !"
                passError.style.display = 'block';

                return;

            }else
            if(mail.value !== i.email && passChange.value === passChangeConfirm.value){

                mailError.innerHTML = "Email invalide veuillez verifier svp !";
                mailError.style.display = 'block';

                passError.style.display = 'none';

                return;
            }else
            if(mail.value === i.email && passChange.value !== passChangeConfirm.value){

                passError.innerHTML = "Les deux mots de passe ne sont pas identique !"
                passError.style.display = 'block';

                mailError.style.display = 'none';

                return;
            }
            
            else{
                
                i.password = passChange.value;
                i.passConfirm = passChangeConfirm.value;

                localStorage.setItem('user', JSON.stringify(recuperer));
                
                let reussi = document.querySelector('.inscription-reussi');
                let btn = document.querySelector('.inscription-reussi button');
                
                reussi.style.display = 'flex';
                
                btn.addEventListener('click', ()=>{
                    reussi.style.display = 'none';
                })
                
                setTimeout(() => {
                    reussi.style.display = 'none';
                }, 5000);//au bout de 5 seocnde le message vas disparaitre
    
                
                passError.style.display = 'none';
                mailError.style.display = 'none';
                mail.value = '';
                passChange.value = '';
                passChangeConfirm.value = '';
                
                return;
            }
            
        }
       
    }

});
