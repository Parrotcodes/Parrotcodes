const ripE = document.querySelector('#btn');
const btnE = document.querySelector('button');

ripE.addEventListener("mouseover", (event) => {
    const x = event.pageX - ripE.offsetLeft
    const y = event.pageY - ripE.offsetTop

    ripE.style.setProperty("--xPos", x + "px")
    ripE.style.setProperty("--yPos", y + "px")
})

btnE.addEventListener("mouseover", (event) => {
    x = event.pageX - btnE.offsetLeft
    y = event.pageY - btnE.offsetTop

    btnE.style.setProperty("--xPos", x + "px")
    btnE.style.setProperty("--yPos", y + "px")
})