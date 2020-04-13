"use strict";

function loadDoc(callback) {
    let url = `https://jsonplaceholder.typicode.com/comments`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",url, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(xhttp.responseText));
        };
    };
};


function getTen(param) {
console.log(param.length)
    let commentPageCount = 0;
     let ourTen = [];
     document.querySelector('#page-number').innerHTML = `Page ${commentPageCount/10 + 1}`;
for (let i = commentPageCount; i < commentPageCount +10; i++) {
    ourTen.push('<br> email - ' + param[i].email + "<br>  name - " + param[i].name + "<br> comment - " + param[i].body)
    results.innerHTML = ourTen ;
};

next.onclick = () => {
    if (commentPageCount < param.length - 10 ) {
    commentPageCount += 10;
    ourTen.splice(0,10);
    document.querySelector('#page-number').innerHTML = `Page ${commentPageCount/10 + 1}`;
    for (let i = commentPageCount; i < commentPageCount +10; i++) {
        ourTen.push('<br> email - ' + param[i].email + "<br>  name - " + param[i].name + "<br> comment - " + param[i].body)
        results.innerHTML = ourTen ;
    };}else{
    document.querySelector('#page-number').innerHTML = `This was the last page`;}
    }; 
  };


begin.onclick  = () => {
    let ourSolve = document.querySelector(".solve");
    ourSolve.style.display = "block";
     loadDoc(getTen);
    };
