function ch2close(){
    document.getElementById('popupch2').style.display="block";
    document.getElementById('expcoverbg').style.display="block";
}

// var widths = [0, 1000, 1400];
// var opt = document.getElementById('opt2');

// function ch2resize() {
// 	if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
//         opt.addEventListener("click",ch2close);
//         document.getElementById("opt2").onclick = function() {
//             document.getElementById("opt2").href="#"; 
//             return false;
//           };
// 	} else if (window.innerWidth>=widths[0] && window.innerWidth<widths[2]) {
//         location.replace("file:///Users/audreysantoso/Desktop/RAFFLES/MAR%202023/plasticfish/source.html");
// 	}
// 	}
// window.onresize = ch2resize;
// ch2resize();

function ch2hide(){
    document.getElementById('popupch2').style.display="none";
    document.getElementById('expcoverbg').style.display="none";
}