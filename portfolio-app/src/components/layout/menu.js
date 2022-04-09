function displayMenu () {
    const larguraTela = window.innerWidth
    if (larguraTela < 700) {
        console.log('a')
        document.querySelector('.ul-list-mobile').classList.toggle('display-block')
        document.querySelector('.ul-list-mobile').classList.toggle('display-none')
    } 
}

export default displayMenu