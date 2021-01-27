var obj = document.getElementById("obj");

var x = 0;
var y = 0;
var size = 50;

function moveObj(event) {
    switch(event.keyCode) {
        case 37:
            x -= size;
            obj.style.left = x;
            break;
        case 38:
            y -= size;
            obj.style.top = y;
            break;
        case 39:
            x += size;
            obj.style.left = x;
            break;
        case 40:
            y += size;
            obj.style.top = y;
            break;
        default:
            // Default
    }
    console.log(event.keyCode);
}

document.addEventListener('keydown', moveObj);
