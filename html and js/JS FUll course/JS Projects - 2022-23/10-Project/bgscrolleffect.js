const bgimgE = document.querySelector('.conatiner')

window.addEventListener('scroll',()=>{
    updateImage()
})

function updateImage(){
    bgimgE.style.opacity = 1 - window.pageYOffset / 900
    bgimgE.style.backgroundSize = 160 - window.pageYOffset / 12 +"%"
}