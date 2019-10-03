'use strict';

(function () {

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  window.util = {
    getRandomItem: getRandomItem,
  };
})();
