//variables
var item = document.getElementById('moveItem');

item.innerHTML = "O";
item.style.paddingLeft = "400px";
/*
window.onkeypress = keyPressDetector

function keyPressDetector (k) {
  if (k.keyCode == 39) {
    console.log("hello");
  }
}
*/
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
    }
    else if (e.keyCode == '39') {
       // right arrow
       console.log("hello");
    }

}
