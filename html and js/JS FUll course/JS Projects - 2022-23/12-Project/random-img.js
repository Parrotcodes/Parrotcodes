const imgcontainerE = document.querySelector('.img-container')
const loadbtnE = document.querySelector('.load-more')


loadbtnE.addEventListener('click', () => {
    imgnum = 10
    randomImgenerate()
})

function randomImgenerate() {
    for (let index = 0; index < imgnum; index++) {

        const newImg = document.createElement('img')
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`

        imgcontainerE.appendChild(newImg)

    }
}