/**
** What is the output of the following:
**
** Clicking on Button 3
** Clicking on Button 1
**/
var nodes   = document.getElementsByTagName('button'),
    message = document.querySelector('.js-message'),
    nodesArr = Array.prototype.slice.call(nodes);

for (var i=0; i< nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
     var j=i;
     message.innerHTML = 'My name is: <b>' + this.name + '</b> , ' + 
      'My index is : #' + i + '<br/>';
  });
}