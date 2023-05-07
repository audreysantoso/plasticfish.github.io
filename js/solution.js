function openPopSol(cover) {
    document.getElementById("solpopup").style.display = "block";
    document.getElementById(cover).style.display = "block";
    document.getElementById(cover).style.zIndex = "1000";
    document.getElementById("closesolution").style.display = "block";
}
function closePopSol(cover) {
    document.getElementById("solpopup").style.display = "none";
    document.getElementById(cover).style.display = "none";
    document.getElementById(cover).style.zIndex = "-1000";
    document.getElementById("closesolution").style.display = "none";
}