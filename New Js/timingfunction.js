/*
function Start(){
    setTimeout(function(){
        alert("Welcome Back!");
    },2000)
}
*/


var id = 0;
var message = () => alert("Welcome to Ak Code");

function Start(){
    id = setInterval(message,5000);
}

function Stop(){
    clearTimeout(id);
}


