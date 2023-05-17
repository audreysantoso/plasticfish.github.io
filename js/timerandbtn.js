// Set the initial timer value
let timerValue = 20;
let timerInterval;

// Get the timer element
const timerElement = document.getElementById('timer');

// Function to update the timer display
function updateTimer() {
  timerElement.textContent = timerValue;
  timerValue--;

  // Check if timer has reached 0
  if (timerValue < 0) {
    // Display the hidden div
    const end = document.getElementById('end');
    end.classList.remove('hiddenEnd');

    const pausebtn = document.getElementById('playpausepause');
    pausebtn.classList.add('hidething');
    const playbtn = document.getElementById('playpauseplay');
    playbtn.classList.add('hidething');

    const soundpausebtn = document.getElementById('soundpause');
    soundpausebtn.classList.add('hidething');
    soundpausebtn.style.display="none";
    const soundplaybtn = document.getElementById('soundplay');
    soundplaybtn.classList.add('hidething');
    soundplaybtn.style.display="none";

    const x = localStorage.getItem("mystorage");
    if (x.includes("bag") == true) {
        document.getElementById('bag_disp').style.opacity="1";
    }
    if (x.includes("scrub") == true) {
        document.getElementById('scrub_disp').style.opacity="1";
    }
    if (x.includes("gloves") == true) {
        document.getElementById('gloves_disp').style.opacity="1";
    }
    if (x.includes("mask") == true) {
        document.getElementById('mask_disp').style.opacity="1";
    }
    if (x.includes("cans") == true) {
        document.getElementById('cans_disp').style.opacity="1";
    }
    if (x.includes("toothpaste") == true) {
        document.getElementById('toothpaste_disp').style.opacity="1";
    }
    if (x.includes("net") == true) {
        document.getElementById('net_disp').style.opacity="1";
    }
    if (x.includes("straw") == true) {
        document.getElementById('straw_disp').style.opacity="1";
    }
    if (x.includes("bottle") == true) {
        document.getElementById('bottle_disp').style.opacity="1";
    }
    if (x.includes("sponge") == true) {
        document.getElementById('sponge_disp').style.opacity="1";
    }
    if (x.includes("bangle") == true) {
        document.getElementById('bangle_disp').style.opacity="1";
    }
    if (x.includes("folders") == true) {
        document.getElementById('folders_disp').style.opacity="1";
    }
    if (x.includes("clothes") == true) {
        document.getElementById('clothes_disp').style.opacity="1";
    }
    if (x.includes("container") == true) {
        document.getElementById('container_disp').style.opacity="1";
    }
    if (x.includes("sheets") == true) {
        document.getElementById('sheets_disp').style.opacity="1";
    }
    if (x.includes("pellets") == true) {
        document.getElementById('pellet_disp').style.opacity="1";
    }
    if (x.includes("yarn") == true) {
        document.getElementById('yarn_disp').style.opacity="1";
    }
    if (x.includes("glass") == true) {
        document.getElementById('glass_disp').style.opacity="1";
    }
    if (x.includes("hanger") == true) {
        document.getElementById('hanger_disp').style.opacity="1";
    }
    if (x.includes("cd") == true) {
        document.getElementById('cd_disp').style.opacity="1";
    }
    if (x.includes("snack") == true) {
        document.getElementById('snack_disp').style.opacity="1";
    }
    if (x.includes("nail") == true) {
        document.getElementById('nail_disp').style.opacity="1";
    }
    if (x.includes("film") == true) {
        document.getElementById('film_disp').style.opacity="1";
    }
    if (x.includes("tire") == true) {
        document.getElementById('tire_disp').style.opacity="1";
    }
    if (x.includes("tape") == true) {
        document.getElementById('tape_disp').style.opacity="1";
    }
    if (x.includes("cutleries") == true) {
        document.getElementById('cutleries_disp').style.opacity="1";
    }
    if (x.includes("paint") == true) {
        document.getElementById('paint_disp').style.opacity="1";
    }
    if (x.includes("toothbrush") == true) {
        document.getElementById('toothbrush_disp').style.opacity="1";
    }
    if (x.includes("toys") == true) {
        document.getElementById('toys_disp').style.opacity="1";
    }
    if (x.includes("makeup") == true) {
        document.getElementById('makeup_disp').style.opacity="1";
    }
    
    clearInterval(timerInterval);
    }
}

// Function to start the timer
function startgame() {
    timerValue = 20;
  var fish = document.getElementsByClassName("fish");
    for(var x=0; x < fish.length; x++)
    {
        fish[x].style.animationPlayState="running";
    }
    audio.play();
    localStorage.clear();
    timerInterval = setInterval(updateTimer, 1000);
}

function restartgame() {
    location.reload();
    localStorage.clear();
    document.getElementById('intropopup').style.display="none";
  }

// Function to pause the timer
function pause() {
  clearInterval(timerInterval);
  var fish = document.getElementsByClassName("fish");
    for(var x=0; x < fish.length; x++)
    {
        fish[x].style.animationPlayState="paused";
    }
    document.getElementById('playpausepause').style.display ="none";
    document.getElementById('playpauseplay').style.display ="block";
    document.getElementById('sourcecoverbg').style.display ="block";
}

// Function to resume the timer
function play() {
  var fish = document.getElementsByClassName("fish");
    for(var x=0; x < fish.length; x++)
    {
        fish[x].style.animationPlayState="running";
    }
    document.getElementById('playpausepause').style.display ="block";
    document.getElementById('playpauseplay').style.display ="none";
    document.getElementById('sourcecoverbg').style.display ="none";
    timerInterval = setInterval(updateTimer, 1000);
}

var pop = document.getElementById("popsound");
pop.loop = false;
function playpopsound(){
    pop.load();
    pop.play();
}

function mutepopsound(){
    pop.muted = true;
}

function enablepopsound(){
    pop.muted = false;
}


function hidebag(){
    document.getElementById('bag').style.display="none";
}

function hidescrub(){
    document.getElementById('scrub').style.display="none";
}

function hidegloves(){
    document.getElementById('gloves').style.display="none";
}

function hidemask(){
    document.getElementById('mask').style.display="none";
}

function hidecans(){
    document.getElementById('cans').style.display="none";
}

function hidetoothpaste(){
    document.getElementById('toothpaste').style.display="none";
}

function hidenet(){
    document.getElementById('net').style.display="none";
}

function hidestraw(){
    document.getElementById('straw').style.display="none";
}

function hidebottle(){
    document.getElementById('bottle').style.display="none";
}

function hidesponge(){
    document.getElementById('sponge').style.display="none";
}

function hidebangle(){
    document.getElementById('bangle').style.display="none";
}

function hidefolders(){
    document.getElementById('folders').style.display="none";
}

function hideclothes(){
    document.getElementById('clothes').style.display="none";
}

function hidecontainer(){
    document.getElementById('container').style.display="none";
}

function hidesheets(){
    document.getElementById('sheets').style.display="none";
}

function hidepellets(){
    document.getElementById('pellets').style.display="none";
}

function hideyarn(){
    document.getElementById('yarn').style.display="none";
}

function hideglass(){
    document.getElementById('glass').style.display="none";
}

function hidehanger(){
    document.getElementById('hanger').style.display="none";
}

function hidecd(){
    document.getElementById('cd').style.display="none";
}

function hidesnack(){
    document.getElementById('snack').style.display="none";
}

function hidenail(){
    document.getElementById('nail').style.display="none";
}

function hidefilm(){
    document.getElementById('film').style.display="none";
}

function hidetape(){
    document.getElementById('tape').style.display="none";
}

function hidetire(){
    document.getElementById('tire').style.display="none";
}

function hidecutleries(){
    document.getElementById('cutleries').style.display="none";
}

function hidepaint(){
    document.getElementById('paint').style.display="none";
}

function hidetoothbrush(){
    document.getElementById('toothbrush').style.display="none";
}

function hidetoys(){
    document.getElementById('toys').style.display="none";
}

function hidemakeup(){
    document.getElementById('makeup').style.display="none";
}