function openhelppopup(cover,help,close){
    document.getElementById(cover).style.display="block";
    document.getElementById(cover).style.zIndex="100000";
    document.getElementById(help).style.display="block";
    document.getElementById(help).style.zIndex="100000000";
    document.getElementById(close).style.display="block";
}

function closehelppopup(cover,help,close){
    document.getElementById(cover).style.display="none";
    document.getElementById(cover).style.zIndex="-100";
    document.getElementById(help).style.display="none";
    document.getElementById(help).style.zIndex="-100";
    document.getElementById(close).style.display="none";
}