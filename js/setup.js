'use strict';

(function () {

  function error(errorArg) {
    window.dialog.onErrorResponse(errorArg);
  }

  window.backend.load(window.renderWizards, error);
  window.dialog.activatePopup();
})();
