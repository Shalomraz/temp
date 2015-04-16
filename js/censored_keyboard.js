var field = document.querySelector("input");

field.addEventListener("keydown", BlockKey, false);

function BlockKey(event) {
  if ((event.keyCode == 87) || (event.keyCode == 81) || (event.keyCode == 88)) {
    // Cancel the event
    event.preventDefault();
  }  
}