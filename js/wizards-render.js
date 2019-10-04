'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  function renderWizard(obj) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var clonedElement = similarWizardTemplate.cloneNode(true);
    clonedElement.querySelector('.setup-similar-label').textContent = obj.name;
    clonedElement.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    clonedElement.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return clonedElement;
  }

  window.renderWizards = function (elementsArray) {
    var documentFragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      documentFragment.appendChild(renderWizard(elementsArray[i]));
    }

    similarListElement.appendChild(documentFragment);
  };
})();
