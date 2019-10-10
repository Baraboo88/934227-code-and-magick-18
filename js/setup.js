'use strict';

(function () {


  function onErrorLoadResponse(msg) {
    var footerElement = document.querySelector('footer');
    var element = document.createElement('DIV');
    element.textContent = 'Что-то пошло не так :) - Маги не загрузились. ' + msg;
    footerElement.appendChild(element);
  }

  window.backend.load(window.wizardsRender.loadWizards, onErrorLoadResponse);
  window.dialog.activatePopup();
})();
