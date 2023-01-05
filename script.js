document.querySelector('.btn-play').addEventListener('click', ()=>{
    let composition = document.querySelector('.composition').value;
    if(composition != '') {
        let compositionArray = composition.split('');
        playComposition(compositionArray);
    } 
});

document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLocaleLowerCase());
});




// Functions 
function playSound(sound) {
    let audio = document.querySelector(`#s_${sound}`);
    let key = document.querySelector(` div [data-key="${sound}"]`);

    if(audio) {
        audio.currentTime= 0;
        audio.play();
    }

    if(key) {
        key.classList.add('active');
        setTimeout(()=>{
            key.classList.remove('active');
        }, 300);
    }
}

function playComposition(compositionArray) {
    wait = 0;
    for(let songItem of compositionArray){
        
        setTimeout(()=>{
            playSound(`numpad${songItem}`);

            
        }, wait);
        wait += 250;
    }
}