/*
Ex. todoList

On each todo value change, `todoHandler` is called
On page load, `initTodos` is called
When "Clear All" is clicked, `clearHandler` is called

Requirements:
- Save the todo's values using localStorage
- If there is previous data saved, setup the todo elements with that data (use `initTodos`)
- Make sure to check if `localStorage` is available for use (Modernizr is loaded)
- Pressing `clear` should remove all todos (UI and localStorage)

Hint:
- Use only 1 key (`todosKey`)
- Serielize the data using `JSON.stringify()`
- Parse the data with `JSON.parse()`
*/

/* globals UTILS, Modernizr */
(function () {
  var todos = UTILS.qs('.todos'),
      clearBtn = UTILS.qs('#clearBtn'),
      initTodos,
      todoHandler,
      clearHandler,
      todosKey = 'todos';
      localData = [];

  // Setup the todos if there is data saved in localStorage
  initTodos = function () {
    var storageItem = localStorage.getItem(todosKey);
   
    if(storageItem) {
      var storageLength = JSON.parse(storageItem).list.length;
      var i;
      var frag = document.createDocumentFragment();
      var ul = document.querySelector('.todos');
     
      for (i = 0; i < storageLength; i++) {
        var li = document.querySelector('li').cloneNode();
        li.innerText = JSON.parse(storageItem).list[i].value;
        frag.appendChild(li); 
      }

      ul.appendChild(frag);
    } else {
      localStorage.setItem(todosKey, JSON.stringify({list:[]}));
    }
  };

  // On each todo text change
  todoHandler = function (todo) {
  	console.log("todo: " + todo + '\n' +
  		         "todos: " + todos);
    var text = todo.textContent;
    var storageItem = localStorage.getItem(todosKey);
    var storageLength = JSON.parse(storageItem).list.length + 1;
    var todosObj = JSON.parse(localStorage.getItem(todosKey));
    var newLi = document.querySelector('li').cloneNode(); 
    //var li = document.querySelector('li');
    var ul = document.querySelector('.todos');
    var frag = document.createDocumentFragment();

    // If there's no input text, remove it from the localstorage
    // and don't add another li child element
    if(!text) {
      for (var i = 0; i < storageLength; i++) {
        if(!todosObj.list[i]) {
          localStorage.removeItem(todosKey);
          ul.removeChild(ul.lastChild);
          li.focus();
        }
      }
    } 
    
    // Arrange the li list in real time so the inserted value
    // will be the last li element shown
    if(ul.lastChild.innerText === '') {
      // Push the inserted value into the localstorage
      console.log(ul.children.length + '\n' + storageLength)
      if(ul.children.length !== storageLength) {
      	todosObj.list.push({value: text});
      }
      // Remove the last li child element, which is an empty one
      //ul.removeChild(ul.lastChild);
      //debugger;
      while(ul.hasChildNodes()) {
	  	ul.removeChild(ul.lastChild); 
	  }
	  ul.appendChild(newLi);    
	  

      for (var i = 0; i < storageLength; i++) {
      	var li = document.querySelector('li').cloneNode();
      	li.innerText = todosObj.list[i].value;
        frag.appendChild(li);
      }
      ul.appendChild(frag);

      /*
      // Insert an empty li element (newLi) before the inserted one
      ul.insertBefore(newLi, li);
      // Store the inserted li child element value (the second li element)
      var secondChild = ul.children[1];
      // Remove the inserted value which is the second li child element
      ul.removeChild(secondChild);
      // Apply the removed li child element so it'll be the last one
      ul.appendChild(secondChild);
      */
      // Give focus to the first li field
      newLi.focus();
    }
    
    localStorage.setItem(todosKey, JSON.stringify(todosObj));  
  };
  
  // Handle clear button
  clearHandler = function () {
    if(localStorage) {
      localStorage.clear();
    }
    
    var li = document.querySelector('li').cloneNode();
    var ulLength = document.querySelector('.todos').children.length;
    var ul = document.querySelector('.todos');
    
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    ul.appendChild(li);
    ul.querySelector('li').focus();
    localStorage.setItem(todosKey, JSON.stringify({list:[]}));
  };

  //-------------------------------------------------
  // Do not touch the code below
  //-------------------------------------------------

  UTILS.addEvent(todos, 'input keydown', function (e) {
    var target = e.target,
      type = e.type,
      keyCode = e.keyCode,
      newTodo;

    if (target.nodeName.toUpperCase() === 'LI') {
      // Handle keys
      if (type.indexOf('keydown') > -1) {
        // Handle Enter key
        if (keyCode === 13 && !e.shiftKey) {
          e.preventDefault();

          newTodo = target.cloneNode(true);
          newTodo.innerHTML = '';
          todos.appendChild(newTodo);
          newTodo.focus();
          todoHandler(target);
        }
      }

      if (type.indexOf('input') > -1) {
        
      }
    }
  });

  // Handle clear button
  UTILS.addEvent(clearBtn, 'click', clearHandler);

  initTodos();
  // Focus on first todo
  todos.querySelector('.todos li').focus();
}());
