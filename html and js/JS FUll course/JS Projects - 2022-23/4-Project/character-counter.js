const textE = document.querySelector('.textarea')
const totalE = document.querySelector('#total-counter')
const remainE = document.querySelector('#remaing-counter')


textE.addEventListener('keyup',()=>{
    updateCount()
})

updateCount()


function updateCount(){
    totalE.innerText=textE.value.length
    // console.log('key pressed...')
    remainE.innerText =  textE.getAttribute('maxlength') - textE.value.length

}