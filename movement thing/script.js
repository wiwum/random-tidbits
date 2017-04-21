//variables
var item = document.getElementById('moveItem');

item.innerHTML = "O";
item.style.paddingLeft = "400px";

window.onkeypress = keyPressDetector

function keyPressDetector (k) {
  if (k.keyCode == 39) {
    console.log("hello");
  }
}
