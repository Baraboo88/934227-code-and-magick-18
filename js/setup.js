'use strict';

var WIZARD_COUNT = 4;
var ENTER_CODE = 13;
var ESC_CODE = 27;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

function onSetupCloseKeydown(evt) {
  var eventNumber = evt.keyCode;
  if (eventNumber === ENTER_CODE) {
    onCloseSetupPopup();
  }
}

function onSetupOpenKeydown(evt) {
  var eventNumber = evt.keyCode;
  if (eventNumber === ENTER_CODE) {
    onOpenSetupPopup();
  }
}


function activatePopup() {
  var setupClose = document.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  setupOpen.addEventListener('click', onOpenSetupPopup);

  setupOpen.addEventListener('keydown', onSetupOpenKeydown);

  setupClose.addEventListener('click', onCloseSetupPopup);

  setupClose.addEventListener('keydown', onSetupCloseKeydown);

  document.querySelector('.setup-similar').classList.remove('hidden');

}

function onDocumentKeydown(evt) {
  var setupUserName = document.querySelector('.setup-user-name');
  var eventNumber = evt.keyCode;
  if (eventNumber === ESC_CODE && document.activeElement !== setupUserName) {
    onCloseSetupPopup();
  }
}

function onClickEyesChange() {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var randomEyesColor = getRandomItem(eyesColors);
  wizardEyes.style.fill = randomEyesColor;
  document.querySelector('[name=eyes-color]').value = randomEyesColor;
}

function onClickCoatChange() {
  var wizardCoat = document.querySelector('.wizard-coat');
  var randomCoatColor = getRandomItem(coatColors);
  wizardCoat.style.fill = randomCoatColor;
  document.querySelector('[name=coat-color]').value = randomCoatColor;
}


function changeFireballColors() {
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var randomFireballColor = getRandomItem(fireBallColors);
  setupFireballWrap.style.backgroundColor = randomFireballColor;
  document.querySelector('[name=fireball-color]').value = randomFireballColor;
}


function onOpenSetupPopup() {
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardCoat = document.querySelector('.wizard-coat');
  var setupElement = document.querySelector('.setup');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  wizardEyes.addEventListener('click', onClickEyesChange);
  wizardCoat.addEventListener('click', onClickCoatChange);
  setupFireballWrap.addEventListener('click', changeFireballColors);
}

function onCloseSetupPopup() {
  var setupElement = document.querySelector('.setup');
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

var similarListElement = document.querySelector('.setup-similar-list');

renderWizards(similarListElement, wizardsList);

activatePopup();
