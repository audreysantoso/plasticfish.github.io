function addtoms(whatiwannadd) {
    if (whatiwannadd === null) {

    } else {
    var existing = localStorage.getItem("mystorage");
        if (existing === null){
            var addnew = whatiwannadd;
        }
        else{
      var addnew = existing + ',' + whatiwannadd;
    }
  localStorage.setItem("mystorage", addnew);
    }
}

