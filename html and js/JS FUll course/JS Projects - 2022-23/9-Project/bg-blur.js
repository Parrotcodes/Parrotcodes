const clickbtnE = document.querySelector('.click-here')
const containerEl = document.querySelector('.container')
const popupcontainerE = document.querySelector('.popup-container')
const closeiconE = document.querySelector('.close-icon')

clickbtnE.addEventListener('click',()=>{
    containerEl.classList.add('active')
    popupcontainerE.classList.remove('active')
})

closeiconE.addEventListener('click',()=>{
    containerEl.classList.remove('active')
    popupcontainerE.classList.add('active')
})
