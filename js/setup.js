'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var wizardsList = getListOfWizards(WIZARD_COUNT);

  function getListOfWizards(numberOfWizards) {
    return new Array(numberOfWizards).fill('').map(window.makeWizard);
  }

  function error(errorArg) {
    console.log(errorArg);
  }

  window.backend.load(window.renderWizards, error);
  window.activatePopup();
})();
