'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupLeftInitial = setupElement.style.left;
  var setupTopInitial = setupElement.style.top;

  var ENTER_CODE = 13;
  var ESC_CODE = 27;

  function clickEsc(evt, action) {
    var setupUserName = document.querySelector('.setup-user-name');
    var eventNumber = evt.keyCode;
    if (eventNumber === ESC_CODE && document.activeElement !== setupUserName) {
      action();
    }
  }

  function clickEnter(evt, action) {
    var eventNumber = evt.keyCode;
    if (eventNumber === ENTER_CODE) {
      action();
    }
  }

  function onSetupCloseKeydown(evt) {
    clickEnter(evt, closeWindow);
  }

  function onSetupOpenKeydown(evt) {
    clickEnter(evt, openSetupPopup);
  }

  function onCloseSetup() {
    closeWindow();
  }

  function onOpenSetup() {
    openSetupPopup();
  }

  function onDocumentKeydown(evt) {
    clickEsc(evt, closeWindow);
  }

  function onClickEyesChange() {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var randomEyesColor = window.util.getRandomItem(window.data.eyesColors);
    wizardEyes.style.fill = randomEyesColor;
    document.querySelector('[name=eyes-color]').value = randomEyesColor;
  }

  function onClickCoatChange() {
    var wizardCoat = document.querySelector('.wizard-coat');
    var randomCoatColor = window.util.getRandomItem(window.data.coatColors);
    wizardCoat.style.fill = randomCoatColor;
    document.querySelector('[name=coat-color]').value = randomCoatColor;
  }


  function onChangeFireballColors() {
    var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
    var randomFireballColor = window.util.getRandomItem(window.data.fireBallColors);
    setupFireballWrap.style.backgroundColor = randomFireballColor;
    document.querySelector('[name=fireball-color]').value = randomFireballColor;
  }


  function openSetupPopup() {
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardCoat = document.querySelector('.wizard-coat');
    var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
    var dialogElement = setupElement.querySelector('.upload');
    dialogElement.addEventListener('mousedown', onClickMove);
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    wizardEyes.addEventListener('click', onClickEyesChange);
    wizardCoat.addEventListener('click', onClickCoatChange);
    setupFireballWrap.addEventListener('click', onChangeFireballColors);
  }

  function closeWindow() {
    setupElement.classList.add('hidden');
    setupElement.style.left = setupLeftInitial;
    setupElement.style.top = setupTopInitial;
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function onClickMove(evt) {
    var dialogElement = setupElement.querySelector('.upload');
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    function onClickPreventDefault(evtDef) {
      evtDef.preventDefault();
      dialogElement.removeEventListener('click', onClickPreventDefault);
    }

    function onMouseMove(moveEvt) {
      evt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      if (shift.x || shift.y) {
        dragged = true;
      }

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        dialogElement.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  }

  window.activatePopup = function () {
    var setupClose = document.querySelector('.setup-close');
    var setupOpen = document.querySelector('.setup-open');
    setupOpen.addEventListener('click', onOpenSetup);
    setupOpen.addEventListener('keydown', onSetupOpenKeydown);
    setupClose.addEventListener('click', onCloseSetup);
    setupClose.addEventListener('keydown', onSetupCloseKeydown);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };


})();
