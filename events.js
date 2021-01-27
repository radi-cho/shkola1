var obj = document.getElementById("player");

var x = 0;
var y = 0;
var size = 50;

function moveObj(event) {
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
