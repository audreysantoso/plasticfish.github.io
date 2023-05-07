function sourcenext1(){
    document.getElementById('sourcepopupp').innerHTML = "See how many fish you've collected at the end";
    document.getElementById('sourceintrodemo').style.backgroundImage = "url('images/sourcetut2.gif')";
    document.getElementById('sourcenext1').style.display="none";
    document.getElementById('sourcenext2').style.display="block";
    document.getElementById('sourceprev2').style.display="block";
    document.getElementById('sourcedots1').style.backgroundColor="#E7E7E7";
    document.getElementById('sourcedots2').style.backgroundColor="#FFC700";
}
function sourceprev2(){
    document.getElementById('sourcepopupp').innerHTML = "Click as many fish with plastic as possible to collect them";
    document.getElementById('sourceintrodemo').style.backgroundImage = "url('images/sourcetut1.gif')";
    document.getElementById('sourcenext2').style.display="none";
    document.getElementById('sourcenext1').style.display="block";
    document.getElementById('sourceprev2').style.display="none";
    document.getElementById('sourcedots2').style.backgroundColor="#E7E7E7";
    document.getElementById('sourcedots1').style.backgroundColor="#FFC700";
}

function sourcenext1id(){
    document.getElementById('sourcepopupp').innerHTML = "Lihat sebarapa banyak ikan yang kamu dapatkan";
    document.getElementById('sourceintrodemo').style.backgroundImage = "url('images/sourcetut2.gif')";
    document.getElementById('sourcenext1').style.display="none";
    document.getElementById('sourcenext2').style.display="block";
    document.getElementById('sourceprev2').style.display="block";
    document.getElementById('sourcedots1').style.backgroundColor="#E7E7E7";
    document.getElementById('sourcedots2').style.backgroundColor="#FFC700";
}
function sourceprev2id(){
    document.getElementById('sourcepopupp').innerHTML = "Klik sebanyak mungkin ikan yang mengandung objek sumber mikroplastik";
    document.getElementById('sourceintrodemo').style.backgroundImage = "url('images/sourcetut1.gif')";
    document.getElementById('sourcenext2').style.display="none";
    document.getElementById('sourcenext1').style.display="block";
    document.getElementById('sourceprev2').style.display="none";
    document.getElementById('sourcedots2').style.backgroundColor="#E7E7E7";
    document.getElementById('sourcedots1').style.backgroundColor="#FFC700";
}

function closeSourcePop() {
    document.getElementById("introsourcepopup").style.display = "none";
    document.getElementById("sourcecoverbg").style.display = "none";
}

function openPausePop() {
    document.getElementById("pausepopup").style.display = "block";
    document.getElementById("coverbg").style.display = "block";
    document.getElementById("coverbg").style.zIndex = "1000";
}
function closePausePop() {
    document.getElementById("pausepopup").style.display = "none";
    document.getElementById("coverbg").style.display = "none";
    document.getElementById("coverbg").style.zIndex = "-100000";
}
function closeEnd() {
    document.getElementById("end").style.display = "none";
}