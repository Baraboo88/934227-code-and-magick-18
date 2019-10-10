'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');

  var wizards = [];

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

  function getRank(wizardParam) {
    var wizardEyes = document.querySelector('[name=eyes-color]').value;
    var wizardCoat = document.querySelector('[name=coat-color]').value;
    var rank = 0;

    if (wizardParam.colorCoat === wizardCoat) {

      rank += 2;
    }

    if (wizardParam.colorEyes === wizardEyes) {
      rank++;
    }
    return rank;
  }


  function renderWizards() {

    var documentFragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    wizards
      .sort(function (left, right) {
        return getRank(right) - getRank(left);
      })
      .slice(0, 4)
      .forEach(function (element) {
        documentFragment.appendChild(renderWizard(element));
      });

    similarListElement.appendChild(documentFragment);
  }

  function getWizards(elementsArray) {
    wizards = Array.from(elementsArray);
    renderWizards();
  }

  window.wizardsRender = {
    getWizards: getWizards,
    renderWizards: renderWizards,
  };
})();
