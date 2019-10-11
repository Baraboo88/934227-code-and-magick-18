'use strict';

(function () {


  var DEBOUNCE_INTERVAL = 500; // ms

  var lastTimeout;

  function debounce(cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);

    }
    lastTimeout = setTimeout(cb, DEBOUNCE_INTERVAL);

  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  window.util = {
    getRandomItem: getRandomItem,
    debounce: debounce
  };
})();
