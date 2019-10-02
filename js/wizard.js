'use strict';

(function () {

  window.makeWizard = function () {
    return new WizardConstructor();
  };

  function WizardConstructor() {
    this.name = window.util.getRandomItem(window.data.names) + ' ' + window.util.getRandomItem(window.data.surnames);
    this.coatColor = window.util.getRandomItem(window.data.coatColors);
    this.eyesColor = window.util.getRandomItem(window.data.eyesColors);
  }

})();
