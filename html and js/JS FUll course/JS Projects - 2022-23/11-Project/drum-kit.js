const kits = ['snare', 'kick', 'crash', 'tom']

const containerE = document.querySelector('.container')

kits.forEach((kit) => {
    const btnE = document.createElement('button')
    // containerE.appendChild(btnE)
    btnE.classList.add('btn')
    btnE.innerText = kit
    btnE.style.backgroundImage = "url(img/" + kit + ".png)"
    containerE.appendChild(btnE)

    const audioE = document.createElement('audio')
    audioE.src = 'audio/' + kit + '.mp3'
    containerE.appendChild(audioE)

    btnE.addEventListener('click',()=>{
        audioE.play()
    })

    window.addEventListener('keydown',(event)=>{
        if(event.key === kit.slice(0,1)){
            audioE.play()
            btnE.style.transform = 'scale(0.9)'

            setTimeout(()=>{
                btnE.style.transform = 'scale(1)'
            },100)
        }
    })


})