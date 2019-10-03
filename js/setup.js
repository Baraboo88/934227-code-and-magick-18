'use strict';

(function () {
  var WIZARD_COUNT = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsList = getListOfWizards(WIZARD_COUNT);
  function getListOfWizards(numberOfWizards) {
    return new Array(numberOfWizards).fill('').map(window.makeWizard);
  }
  window.renderWizards(similarListElement, wizardsList);
  window.activatePopup();
})();
