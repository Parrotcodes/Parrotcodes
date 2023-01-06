const colseiconE = document.querySelector('.close-icon')
const btnE = document.querySelector('.btn')
const trialarcontainerEl = document.querySelector('.trailar-container')
const videEl = document.querySelector('video')

btnE.addEventListener('click',()=>{
    trialarcontainerEl.classList.remove('active')
})

colseiconE.addEventListener('click',()=>{
    trialarcontainerEl.classList.add('active')
    videEl.pause()
    // videEl.currentTime()
    videEl.currentTime = 0
})