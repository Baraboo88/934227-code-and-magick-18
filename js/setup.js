'use strict';

var WIZARD_COUNT = 4;


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');

displayElements();

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

function displayElements() {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
}

renderWizards(similarListElement, getListOfWizards(WIZARD_COUNT));

