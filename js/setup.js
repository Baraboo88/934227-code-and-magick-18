'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var WIZARD_COUNT = 4;
  var wizardsList = window.util.getListOfWizards(WIZARD_COUNT);
  window.renderWizards(similarListElement, wizardsList);
  window.activatePopup();
})();
