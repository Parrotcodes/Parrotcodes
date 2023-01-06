// alert('Digital clock is Loading.....')

const hour = document.querySelector('#hour')
const minutes = document.querySelector('#min')
const seconds = document.querySelector('#sec')
const ampmE = document.querySelector('#ampm')

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if(h>12){
        h = h-12
        ampm = "PM"
    }

    h = h<10 ? "0"+h :h
    m = m<10 ? "0"+m :m
    s = s<10 ? "0"+s :s

    hour.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    ampmE.innerText = ampm
    
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()