// var name = prompt("What's your name?");
var name = "Radi";
var element1 = document.getElementById("playerDetails");
element1.innerHTML = "Your name is: <b>" + name + "</b>";

var element2 = document.getElementById("score");
// element2.style.background = "yellow";

var sqHeight = 50;
var topSize = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var speeds = [10, 20, 50, 15, 30, 10, 40, 60, 5, 20];

function start(currentSq, i) {
  setInterval(function() {
    if (topSize[i] < window.innerHeight - sqHeight) {
      currentSq.style.top = topSize[i] + "px";
      topSize[i] += speeds[i];
    } else {
      topSize[i] = 0;
    }
  }, 100);
}

for (var i = 0; i < 10; i++) {
  var currentSq = document.getElementById(`sq${i + 1}`);
  start(currentSq, i);
}