const containerE = document.querySelector(".container")


for (let index = 0; index < 30; index++) {
    const colorcontainerE = document.createElement("div")
    colorcontainerE.classList.add("color-container")

    containerE.appendChild(colorcontainerE)

}
const allcolorContainerEl = document.querySelectorAll('.color-container')

generateColor()

function generateColor() {
    allcolorContainerEl.forEach((colorcontainerE) => {
        const newColorCode = colorgenerator()
        colorcontainerE.style.backgroundColor = "#" + newColorCode
        colorcontainerE.innerText = "#" + newColorCode
    })
}


function colorgenerator() {
    const chars = "0123456789abcdef"
    const colotextlength = 6
    let colorCode = ""

    for (let index = 0; index < colotextlength; index++) {
        const randomColor = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomColor, randomColor + 1)

    }

    return colorCode

}
