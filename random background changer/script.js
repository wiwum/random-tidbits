var BgChanger = setInterval(changeBg, 1000);
function changeBg () {
  var colorSelect = Math.floor(Math.random() * 6) + 1;
  if (colorSelect == 1) {
    document.body.style.backgroundColor = "red";
  }
  if (colorSelect == 2) {
    document.body.style.backgroundColor = "yellow";
  }
  if (colorSelect == 3) {
    document.body.style.backgroundColor = "green";
  }
  if (colorSelect == 4) {
    document.body.style.backgroundColor = "purple";
  }
  if (colorSelect == 5) {
    document.body.style.backgroundColor = "white";
  }
  if (colorSelect == 6) {
    document.body.style.backgroundColor = "blue";
  }
  console.log("hello");
}
