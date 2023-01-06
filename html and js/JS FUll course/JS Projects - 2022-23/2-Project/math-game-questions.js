// alert('Math game Random questions generating.....')
// var n = Math.random()
// n = n*9
// n= Math.floor(n)+1
// console.log(n)

const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const randNumE = document.querySelector('#question')
const inputE = document.querySelector('#input')
const scoreE = document.querySelector('#score')
const formE = document.querySelector('#form')

// let score =0
let score = JSON.parse(localStorage.getItem("score"))
randNumE.innerHTML = `What is ${num1} multiply by ${num2} ?`

if (!score) {
    score = 0
}

scoreE.innerText=`Score: ${score}`

const correctAns = num1 * num2
// inputE.innerHTML = correctAns

formE.addEventListener('submit', () => {
    const userAns = +inputE.value
    // console.log(userAns,typeof userAns)

    if (userAns === correctAns) {
        score++
        // console.log(score)
        updateScoreLocalStorage()
    } else {
        score--
        // console.log(score)
        updateScoreLocalStorage()
    }

})

function updateScoreLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}



