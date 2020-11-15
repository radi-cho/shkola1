var name = prompt("What's your name?");
var element1 = document.getElementById("playerDetails");
element1.innerHTML = "Your name is: <b>" + name + "</b>";

var element2 = document.getElementById("score");
// element2.style.background = "yellow";

var sq1 = document.getElementById("sq1");
var topSize = 0;

setInterval(function () {
    sq1.style.top = topSize + "px";
    topSize += 10;
}, 100);