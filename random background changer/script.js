var colorSelect;
var BgChanger = setTimeout(changeBg, 1000);
function changeBg () {
  colorSelect = Math.floor(Math.random() * 6) + 1;
  console.log(colorSelect);
}
