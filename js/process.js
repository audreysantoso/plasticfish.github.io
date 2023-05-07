function processnext1(){
    document.getElementById('processpopupp').innerHTML = "Watch the video and click back button to see other videos";
    document.getElementById('processintrodemo').style.backgroundImage = "url('images/processtut2.gif')";
    document.getElementById('processnext1').style.display="none";
    document.getElementById('processnext2').style.display="block";
    document.getElementById('processprev2').style.display="block";
    document.getElementById('processdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('processdots2').style.backgroundColor="#FFC700";
}
function processprev2(){
    document.getElementById('processpopupp').innerHTML = "First, choose a video title you want to watch";
    document.getElementById('processintrodemo').style.backgroundImage = "url('images/processtut1.gif')";
    document.getElementById('processnext2').style.display="none";
    document.getElementById('processnext1').style.display="block";
    document.getElementById('processprev2').style.display="none";
    document.getElementById('processdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('processdots1').style.backgroundColor="#FFC700";
}

function processnext1id(){
    document.getElementById('processpopupp').innerHTML = "Tonton videonya dan klik tombol kembali untuk menonton video lain";
    document.getElementById('processintrodemo').style.backgroundImage = "url('images/processtut2.gif')";
    document.getElementById('processnext1').style.display="none";
    document.getElementById('processnext2').style.display="block";
    document.getElementById('processprev2').style.display="block";
    document.getElementById('processdots1').style.backgroundColor="#E7E7E7";
    document.getElementById('processdots2').style.backgroundColor="#FFC700";
}
function processprev2id(){
    document.getElementById('processpopupp').innerHTML = "Pertama, pilih video yang mau kamu tonton";
    document.getElementById('processintrodemo').style.backgroundImage = "url('images/processtut1.gif')";
    document.getElementById('processnext2').style.display="none";
    document.getElementById('processnext1').style.display="block";
    document.getElementById('processprev2').style.display="none";
    document.getElementById('processdots2').style.backgroundColor="#E7E7E7";
    document.getElementById('processdots1').style.backgroundColor="#FFC700";
}

function closeProcessPop() {
    document.getElementById("introprocesspopup").style.display = "none";
    document.getElementById("processcoverbg").style.display = "none";
}

function hidebackpopup(popup, videopr){
    document.getElementById(popup).style.display ="none";
    document.getElementById(videopr).play();
    document.getElementById("processcoverbg").style.display = "none";
    document.getElementById("processcoverbg").style.zIndex = "-100000";
}

function showbackpopup(popup, videopr){
    document.getElementById(popup).style.display ="block";
    document.getElementById(popup).style.zIndex = "10000000";
    document.getElementById("processcoverbg").style.display = "block";
    document.getElementById(videopr).pause();
    document.getElementById("processcoverbg").style.zIndex = "100000";
}
function playProcessVideo(videopr, videoprother1, videoprother2, backbutton) {
    document.getElementById("processvideo").style.display = "block";
    document.getElementById("processvideo").style.backgroundColor = "black";
    document.getElementById(videopr).style.display = "block";
    document.getElementById(videopr).play();
    document.getElementById(backbutton).style.display = "block";
    document.getElementById(videoprother1).style.display = "none";
    document.getElementById(videoprother2).style.display = "none";
    document.getElementById("processnav").style.display = "none";
    document.getElementById("solutionbtn").style.display = "none";
}

function backbuttonvid(popup, vidname, backbuttonvid) {
    document.getElementById(popup).style.display ="none";
    document.getElementById("processvideo").style.display = "none";
    document.getElementById(vidname).style.display = "none";
    document.getElementById(backbuttonvid).style.display = "none";
    document.getElementById("processcoverbg").style.display = "none";
    document.getElementById("processcoverbg").style.zIndex = "-100000";
    document.getElementById("processnav").style.display = "block";
    document.getElementById("solutionbtn").style.display = "block";
}

var vidconsumption = document.getElementById("consumption");
vidconsumption.onended = function() {
    document.getElementById("processvideo").style.display = "none";
    document.getElementById("consumption").style.display = "none";
    document.getElementById("backbuttonvidconsumption").style.display = "none";
};

var vidconfusion = document.getElementById("confusion");
vidconfusion.onended = function() {
    document.getElementById("processvideo").style.display = "none";
    document.getElementById("confusion").style.display = "none";
    document.getElementById("backbuttonvidconfusion").style.display = "none";
};

var vidaccidental = document.getElementById("accidental");
vidaccidental.onended = function() {
    document.getElementById("processvideo").style.display = "none";
    document.getElementById("accidental").style.display = "none";
    document.getElementById("backbuttonvidaccidental").style.display = "none";
};