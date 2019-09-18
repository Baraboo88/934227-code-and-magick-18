'use strict'

document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardOne = {
  name: getRandomItem(names) + ' ' + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors)
};

var wizardTwo = {
  name: getRandomItem(names) + ' ' + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors)
};

var wizardThree = {
  name: getRandomItem(names) + ' ' + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors)
};

var wizardFour = {
  name: getRandomItem(names) + ' ' + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors)
};

var wizardsList = [wizardOne, wizardTwo, wizardThree, wizardFour];

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function cloneAndAddElement(elementToClone, obj) {
  var clonedElement = elementToClone.cloneNode(true);
  clonedElement.querySelector('.setup-similar-label').textContent = obj.name;
  clonedElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
  clonedElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  return clonedElement;
}

function addElementsToBlock (block, elementsArray, templateElement) {
  var documentFragment = document.createDocumentFragment();
  elementsArray.forEach(function (element) {
    documentFragment.appendChild(cloneAndAddElement(templateElement, element));
  });
  similarListElement.appendChild(documentFragment);
}

addElementsToBlock(similarListElement, wizardsList, similarWizardTemplate);

document.querySelector('.setup-similar').classList.remove('hidden');
