'use strict';

var WIZARD_COUNT = 4;


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarListElement = document.querySelector('.setup-similar-list');

var setupElement = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var isSetupUserNameFocused = false;
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var setupWizard = document.querySelector('.setup-wizard');


var wizardsList = getListOfWizards(WIZARD_COUNT);

function WizardConstructor() {
  this.name = getRandomItem(names) + ' ' + getRandomItem(surnames);
  this.coatColor = getRandomItem(coatColors);
  this.eyesColor = getRandomItem(eyesColors);
}

function makeWizard() {
  return new WizardConstructor();
}

function getListOfWizards(numberOfWizards) {
  return new Array(numberOfWizards).fill('').map(makeWizard);
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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

function renderWizards(block, elementsArray) {
  var documentFragment = document.createDocumentFragment();
  elementsArray.forEach(function (element) {
    documentFragment.appendChild(renderWizard(element));
  });
  block.appendChild(documentFragment);
}

function init() {
  setupOpen.addEventListener('click', openSetupPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openSetupPopup();
    }
  });

  setupClose.addEventListener('click', closeSetupPopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closeSetupPopup();
    }
  });

  document.querySelector('.setup-similar').classList.remove('hidden');


}

function onPopupEscPress(evt) {
  if (evt.keyCode === 27 && !isSetupUserNameFocused) {
    closeSetupPopup();
  }
}

function openSetupPopup() {
  setupElement.classList.remove('hidden');
  setupUserName.addEventListener('focus', function () {
    isSetupUserNameFocused = true;
  });
  setupUserName.addEventListener('blur', function () {
    isSetupUserNameFocused = false;
  });
  document.addEventListener('keydown', onPopupEscPress);
  setupWizard.addEventListener('click', function (evt) {
    if (evt.target.classList.contains(('wizard-eyes'))) {
      var randomEyesColor = getRandomItem(eyesColors);
      evt.target.style.fill = randomEyesColor;
      document.getElementsByName('eyes-color')[0].value = randomEyesColor;
    }
    if (evt.target.classList.contains(('wizard-coat'))) {
      var randomCoatColor = getRandomItem(coatColors);
      evt.target.style.fill = randomCoatColor;
      document.getElementsByName('coat-color')[0].value = randomCoatColor;
    }
  });

  setupFireballWrap.addEventListener('click', function () {
    var randomFireballColor = getRandomItem(fireBallColors);
    setupFireballWrap.style.backgroundColor = randomFireballColor;
    document.getElementsByName('fireball-color')[0].value = randomFireballColor;
  });

}

function closeSetupPopup() {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}


renderWizards(similarListElement, wizardsList);

init();
