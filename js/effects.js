function closeEffectsPop() {
    document.getElementById("introeffectspopup").style.display = "none";
    document.getElementById("effectscoverbg").style.display = "none";
}

function effectsnext1(){
    document.getElementById('effectspopupp').innerHTML = "Change the theme by clicking on the theme buttons";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut2.gif')";
    document.getElementById('effectsnext1').style.display="none";
    document.getElementById('effectsnext2').style.display="block";
    document.getElementById('effectsprev2').style.display="block";
    document.getElementById('effectsdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots2').style.backgroundColor="#FFC700";
}
function effectsprev2(){
    document.getElementById('effectspopupp').innerHTML = "Click on the fish/plate you want to explore and click on the same element to go back";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut1.gif')";
    document.getElementById('effectsnext2').style.display="none";
    document.getElementById('effectsnext1').style.display="block";
    document.getElementById('effectsprev2').style.display="none";
    document.getElementById('effectsdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots1').style.backgroundColor="#FFC700";
}

function effectsnext1id(){
    document.getElementById('effectspopupp').innerHTML = "Ganti tema dengan menglik tomobl tema";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut2.gif')";
    document.getElementById('effectsnext1').style.display="none";
    document.getElementById('effectsnext2').style.display="block";
    document.getElementById('effectsprev2').style.display="block";
    document.getElementById('effectsdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots2').style.backgroundColor="#FFC700";
}
function effectsprev2id(){
    document.getElementById('effectspopupp').innerHTML = "Klik ikan/piring yang mau kamu eksplor dan klik elemen yang sama untuk kembali";
    document.getElementById('effectsintrodemo').style.backgroundImage = "url('images/effectstut1.gif')";
    document.getElementById('effectsnext2').style.display="none";
    document.getElementById('effectsnext1').style.display="block";
    document.getElementById('effectsprev2').style.display="none";
    document.getElementById('effectsdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('effectsdots1').style.backgroundColor="#FFC700";
}

function opt(chosenopt,plates) {
    document.getElementById("fishfilm").style.display = "none";
    document.getElementById("fishfragment").style.display = "none";
    document.getElementById("fishfoam").style.display = "none";
    document.getElementById("fishmicrobeads").style.display = "none";
    document.getElementById("fishfilaments").style.display = "none";
    document.getElementById("fishfibre").style.display = "none";
    document.getElementById("plate1").style.display = "none";
    document.getElementById("bodyeffects").style.backgroundSize = "cover";
    document.getElementById("firstplate").style.zIndex = "1000";
    document.getElementById(chosenopt).style.display = "block";
    document.getElementById(chosenopt).style.textAlign = "center";
    document.getElementById(plates).style.display = "block";
}

function exit(big,secondplate){
    document.getElementById("firstplate").style.display = "block";
    document.getElementById("firstplate").style.zIndex = "400";
    document.getElementById(big).style.display = "none";
    document.getElementById(secondplate).style.display = "none";
    document.getElementById("fishfilm").style.display = "block";
    document.getElementById("fishfragment").style.display = "block";
    document.getElementById("fishfoam").style.display = "block";
    document.getElementById("fishmicrobeads").style.display = "block";
    document.getElementById("fishfilaments").style.display = "block";
    document.getElementById("fishfibre").style.display = "block";
    document.getElementById("plate1").style.display = "block";
    document.getElementById("bodyeffects").style.backgroundSize = "cover";
}