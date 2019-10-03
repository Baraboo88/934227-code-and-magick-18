'use strict';

(function () {
  function renderWizard(obj) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var clonedElement = similarWizardTemplate.cloneNode(true);
    clonedElement.querySelector('.setup-similar-label').textContent = obj.name;
    clonedElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
    clonedElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
    return clonedElement;
  }

  window.renderWizards = function (block, elementsArray) {
    var documentFragment = document.createDocumentFragment();
    elementsArray.forEach(function (element) {
      documentFragment.appendChild(renderWizard(element));
    });
    block.appendChild(documentFragment);
  };
})();
