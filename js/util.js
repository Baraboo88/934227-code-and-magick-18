'use strict';

(function () {
  var ENTER_CODE = 13;
  var ESC_CODE = 27;

  window.util = {
    escEvent: function (evt, action) {
      var setupUserName = document.querySelector('.setup-user-name');
      var eventNumber = evt.keyCode;
      if (eventNumber === ESC_CODE && document.activeElement !== setupUserName) {
        action();
      }
    },
    enterEvent: function (evt, action) {
      var eventNumber = evt.keyCode;
      if (eventNumber === ENTER_CODE) {
        action();
      }
    },
    getRandomItem: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    getListOfWizards: function getListOfWizards(numberOfWizards) {
      return new Array(numberOfWizards).fill('').map(window.makeWizard);
    },
  };
})();
