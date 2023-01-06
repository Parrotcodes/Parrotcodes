const navbarE = document.querySelector('.navbar')
const btmcontainerE = document.querySelector('.bottom-container')

// console.log(btmcontainerE.offsetTop);

window.addEventListener('scroll', () => {
    // console.log('scrolling..')
    if (window.scrollY > btmcontainerE.offsetTop - navbarE.offsetHeight - 40) {
        navbarE.classList.add('active')
    } else {
        navbarE.classList.remove('active')
    }
})