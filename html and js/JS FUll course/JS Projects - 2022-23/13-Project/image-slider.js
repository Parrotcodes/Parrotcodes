const imgcontainerE = document.querySelector('.img-container')
const imagesE = document.querySelectorAll('img')
const nextbtn = document.querySelector('.next')
const prevbtn = document.querySelector('.prev')

let currentImg = 1
let timout;

updateImage()

nextbtn.addEventListener('click', () => {
    currentImg++
    clearTimeout(timout)
    updateImage()
})

prevbtn.addEventListener('click', () => {
    currentImg--
    clearTimeout(timout)
    updateImage()
})

function updateImage() {
    if (currentImg > imagesE.length) {
        currentImg = 1
    } else if (currentImg < 1) {
        currentImg = imagesE.length
    }
    imgcontainerE.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    timout = setTimeout(()=>{
       currentImg++
       updateImage()
    },3000)

}