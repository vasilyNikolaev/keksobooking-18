'use strict';

(function () {

window.mark.addEventListener ('mousedown', function(evt) {

  window.mapActive();
  window.activePage(false);

  var inputAddress = document.querySelector('#address');

  var activatorMapTrigger = window.mark;
  var tagOffsetX = 32;
  var tagOffsetY = 95;

  var currentX = activatorMapTrigger.offsetLeft - tagOffsetX;
  var currentY = activatorMapTrigger.offsetTop - tagOffsetY;

  inputAddress.value = 'x: ' + currentX + ' ' + 'y: ' + currentY;
});

})();
