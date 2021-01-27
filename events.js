var obj = document.getElementById("player");

var x = 0;
var y = 0;

function moveObj(event) {
    var size = Math.round(window.innerWidth * 0.0822);
    switch(event.keyCode) {
        case 37:
            x -= size;
            obj.style.left = x + "px";
            break;
        case 38:
            y -= size;
            obj.style.top = y + "px";
            break;
        case 39:
            x += size;
            obj.style.left = x + "px";
            break;
        case 40:
            y += size;
            obj.style.top = y + "px";
            break;
        default:
            // Default
    }
}

document.addEventListener('keydown', moveObj);
