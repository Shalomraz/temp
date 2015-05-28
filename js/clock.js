/**
 ** implement a simple clock using the setInterval
 **/

var myClock = (function() {

  // The timer reference

  var
          clockId,
          domNodes;

  // Start the ticking...
  function startClock() {
    if(!clockId) {
        clockId = setTimeout(updateClock, 1000);
    }
  }

  /* Stop the ticker */
  function stopClock() {
    clearInterval(clockId);
    clockId = undefined;
  }

  /** Flush the ticker on screen */
  function updateClock() {
    console.log('update');
    var currentTime = new Date();

    // Get the current Time
    domNodes[0].innerHTML = currentTime.getHours();
    domNodes[1].innerHTML = currentTime.getMinutes();
    domNodes[2].innerHTML = currentTime.getSeconds();

    clockId = setTimeout(updateClock, 1000);
  }

  // The init
  function init() {

    // cache domNodes
    if (!domNodes) {
      domNodes = [];
      domNodes.push(document.querySelector('#h'));
      domNodes.push(document.querySelector('#m'));
      domNodes.push(document.querySelector('#s'));
    }

  }

  init();

  return {
    startClock: startClock,
    stopClock: stopClock
  };

})();

myClock.startClock();
