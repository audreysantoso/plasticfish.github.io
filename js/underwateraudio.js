var audio = document.getElementById("underwatersound");

function playaudio(){
    audio.play();
    document.getElementById("soundplay").style.display = "inline";
    document.getElementById("soundpause").style.display = "none";
}

function pauseaudio(){
    audio.pause();
    document.getElementById("soundpause").style.display = "inline";
    document.getElementById("soundplay").style.display = "none";
}

function hideaudiobtn(){
    document.getElementById("soundpause").style.display = "none";
    document.getElementById("soundplay").style.display = "none";
}

function showaudiobtn(){
    document.getElementById("soundpause").style.display = "none";
    document.getElementById("soundplay").style.display = "block";
}