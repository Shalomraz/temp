function asTabs(node) {
    // Your code here.
  	
  	// Create the UL to hold the tabs
  	var list = create("ul");
  
  	// Get all the tab panels
  	var panels = document.querySelectorAll("[data-tabname]");
  	
  	// Insert the tabs list before the first panel
	  prepend(list, panels[0]);
  
		// Loop through the panels and create a new
  	// tab in the list with the panel name
  	for (var i = 0; i < panels.length; i++) {
      createTab(list, panels[i].getAttribute("data-tabname"));
    }
  
  
  	//////////////////
  	function prepend(newElement, referenceElement) {
      node.insertBefore(newElement, referenceElement)
    }
  
 		function create(tagName) {
      return document.createElement(tagName);
    }
  
  	function append(parent, child) {
      parent.appendChild(child);
    }
  
   	function createTab(tabsList, newTabName) {
      var li = create("li");
      var button = create("button");
      button.textContent = newTabName;
      button.addEventListener("click", showTab, true);
      append(li, button);
      append(tabsList, li);
    }
  
  	function showTab() {
      alert("Hi");
    }
  
  	document.body.addEventListener("click", function () {
      alert("I'm body");
    }, true);
}

// Test code
asTabs(document.querySelector("#wrapper"));