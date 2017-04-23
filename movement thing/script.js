//variables
var item = document.getElementById('moveItem');
var itemX = 400;
var itemY = 400;

item.innerHTML = "O";

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("hello");
        itemY -= 10;
        console.log(itemY);
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("hello");
        itemY += 10;
        dovument.body.innerHTML = "<H1>click arrow keys to move</H1><br><br><br><br><br><br><br><br><thing id='moveItem'>O</thing><script type="text/javascript" src="./script.js"></script>"
        console.log(itemY);
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
    item.style.paddingLeft = itemX + "px";
    item.style.marginTop = itemY + "px";
    item.style.color = "red"
}
