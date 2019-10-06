'use strict';


(function () {

  var loadUrl = 'https://js.dump.academy/code-and-magick/data';
  var saveUrl = 'https://js.dump.academy/code-and-magick';
  var xhr = new XMLHttpRequest();

  xhr.responseType = 'json';


  function load(onLoad, onError) {
    function onLoadResponse() {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        xhr.removeEventListener('load', onLoadResponse);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }

    }

    function onErrorResponse() {
      onError('Произошла ошибка соединения');
    }

    xhr.addEventListener('error', onErrorResponse);
    xhr.addEventListener('load', onLoadResponse);

    xhr.open('GET', loadUrl);
    xhr.send();

  }


  function save(data, onLoad, onError) {

    function onSendResponse() {
      if (xhr.status === 200) {
        onLoad();
        xhr.removeEventListener('load', onSendResponse);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    }

    function onErrorResponse() {
      onError('Произошла ошибка соединения');
    }


    xhr.addEventListener('load', onSendResponse);
    xhr.addEventListener('error', onErrorResponse);
    xhr.open('POST', saveUrl);
    xhr.send(data);
  }


  window.backend = {
    load: load,
    save: save,
  };
})();
