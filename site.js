const nave = document.querySelector('.nave');

const esq =()=>{
    nave.classList.add('movesq');

    setTimeout(()=>{
        nave.classList.remove('movesq');
    }, 500)
}
document.addEventListener('keydown', esq);
