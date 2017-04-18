var colorSelect;
var BgChanger = setTimeout(changeBg, 1000);
function changeBg () {
  colorSelect = Math.floor(Math.random() * 6) + 1;
  if (colorSelect == 1) {
    document.body.style.backgroundColor = "red";
  }
  if (colorSelect > 5) {
    document.body.style.backgroundColor = "yellow";
  }
}
