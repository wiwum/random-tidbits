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
    // Listen to keyboard. 
    window.onkeypress = listenToTheKey;
    window.onkeyup = listenToKeyUp;

    /*
        Gets the key pressed and send a request to the associated function
        @input key
    */
    function listenToTheKey(e)
    {
        if (editFlag == 0)
        {
            // If delete key is pressed calls delete
            if (e.keyCode == 46)
                console.log("hello");

            // If insert key is pressed calls add blank
            if (e.keyCode == 45)
                console.log("hello");

            if (e.keyCode == 17)
                console.log("hello");
        }
    }
