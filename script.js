
//Events///
//pegando composicao e transformando em array para tocar 
document.querySelector('.btn-play').addEventListener('click', ()=>{
    let composition = document.querySelector('.composition').value;
    if(composition != '') {
        let compositionArray = composition.split('');
        playComposition(compositionArray);
    } 
});
//pegando tecla digitada e mandando para fucao que vai tocar
document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLocaleLowerCase());
});

// Functions ///
// Funcao para tocar 
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

// Funcao para tocar composicao 
function playComposition(compositionArray) {
    wait = 0;
    for(let songItem of compositionArray){
        
        setTimeout(()=>{
            playSound(`numpad${songItem}`);

            
        }, wait);
        wait += 250;
    }
}