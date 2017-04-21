//variables
var item = document.getElementById('moveItem');
var itemX = 400;
var itemY = 400;

item.innerHTML = "O";
item.style.paddingLeft = itemX + "px";

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("hello");
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("hello");
    }
    else if (e.keyCode == '37') {
        // left arrow
        console.log("hello");
        itemX -= 10;
        console.log(itemX);
    }
    else if (e.keyCode == '39') {
        // right arrow
        console.log("hello");
        itemX += 10;
        console.log(itemX);
    }

}
