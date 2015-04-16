function asTabs(node) {
    // Create "ul" element
    var ul = document.createElement("ul");
  
    // Get "data-tabname" attribute from all "div" elements
    var attributes = document.querySelectorAll("[data-tabname]");
    
    // Insert "ul" element before the first "data-tabname" attribute
    node.insertBefore(ul, attributes[0])
  
    // Create a new button according to each attribute value
    for (var i = 0; i < attributes.length; i++) {
      var button = document.createElement("button");
      button.textContent = attributes[i].getAttribute("data-tabname");
      button.setAttribute("id", i);

      var li = document.createElement("li");
      ul.appendChild(li);
      li.appendChild(button);
      
      // Hide each "li" bullet and each 
      // element with "data-tabname" attribute
      li.style.listStyleType = "none";
      attributes[i].style.display = "none";     
    }

    // Create a "click" event listener    
    ul.addEventListener("click", displayText, false);

    function displayText(event) {
      if (event.target !== event.currentTarget) {
        var id = event.target.id;

        // Clear from screen all the text with
        // "data-tabname" attribute
        for (var i = 0; i < attributes.length; i++) {
          attributes[i].style.display = "none";
        }

        // Display the text for the current click event
        attributes[id].style.display = "block";
      }

      // Prevent further propagation of the event
      event.stopPropagation();
    }
}

// Test code
asTabs(document.querySelector("#wrapper"));

 