let btnInscrir = document.querySelectorAll('.btn-inscris');
let btnClose = document.querySelector('.close-btn');
let blogInscription = document.querySelector('.inscription-events')
let overlay = document.querySelector('.overlay');

btnInscrir.forEach(btn => {
    btn.addEventListener('click', ()=>{

        overlay.classList.add('visible');
        blogInscription.classList.add('visible');
    });
    
});

btnClose.addEventListener('click', ()=>{
    overlay.classList.remove('visible');
    blogInscription.classList.remove('visible');
})