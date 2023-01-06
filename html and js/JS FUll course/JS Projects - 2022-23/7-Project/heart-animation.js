const bodyE = document.querySelector('body');



bodyE.addEventListener('mousemove',(event)=>{
    // console.log('moused moving...')
    const xPos = event.offsetX
    const yPos = event.offsetY

    const spanE = document.createElement('span')

    spanE.style.left = xPos + "px"
    spanE.style.top = yPos + "px"

    const randomSpan = Math.random()*100
    spanE.style.width =randomSpan + "px"
    spanE.style.height = randomSpan + "px"

    bodyE.appendChild(spanE)

    setTimeout(()=>{
        spanE.remove()
    },3000)


})