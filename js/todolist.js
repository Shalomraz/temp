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
    var text = todo.textContent;
    var storageItem = localStorage.getItem(todosKey);
    var storageLength = JSON.parse(storageItem).list.length;

    if(!text) {
      for (var i = 0; i < storageLength; i++) {
        if(JSON.parse(storageItem).list[i].value === '') {
          console.log('no value');
          localStorage.removeItem(storageItem.list[i]);
        }
      }
    }

    var todosObj = JSON.parse(localStorage.getItem(todosKey));
    var newLi = document.querySelector('li').cloneNode(); 
    var li = document.querySelector('li');
    var ul = document.querySelector('.todos');
    
    if(ul.lastChild.innerText === '') {
      todosObj.list.push({value: text, done: false});
      ul.removeChild(ul.lastChild);
      ul.insertBefore(newLi, li);
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
