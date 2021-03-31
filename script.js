
const sounds = document.querySelectorAll("audio");
const buttonsContainer = document.querySelector("#buttons");
let prevSound;

function stopSounds(sound){
    if(prevSound){
        prevSound.pause();
        prevSound.currentTime = 0;
    }
    prevSound = sound;
}

sounds.forEach((sound) => {
    let btn = document.createElement("button");
    btn.innerHTML = sound.id;
    btn.classList.add("btn");

    btn.addEventListener("click", (e) => {
        stopSounds(sound);
        
        sound.play();
    })

    buttonsContainer.appendChild(btn);
});

