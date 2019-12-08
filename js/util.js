'use strict';

(function () {

var fieldset = document.querySelectorAll('fieldset');
var select = document.querySelectorAll('select');

window.activePage = function (value) {
  var fieldActivation = function (element) {
    for (var i = 0; i <= element.length - 1; i++) {
      element[i].disabled = value;
    };
  }
  fieldActivation(fieldset);
  fieldActivation(select);
};
window.activePage(true);
window.mark = document.querySelector('.map__pin--main');

})();
