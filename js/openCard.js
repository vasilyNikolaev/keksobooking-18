'use strict';

(function () {
  window.renderCard = function (dataPin) {
    var fragment = document.createDocumentFragment();
    var mapFilters = document.querySelector('.map__filters-container');
    for (var i = 0; i <= dataPin.length - 1; i++) {
      fragment.appendChild(renderPopup(dataPin[i]))
    }
    mapFilters.before(fragment);

    var pins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    var cards = document.querySelectorAll('.map__card');
    var popupsClose = document.querySelectorAll('.popup__close');

    for (var k = 0; k < pins.length; k++) {
      window.openCardForPin(pins[k], cards[k]);
      window.closeCard(popupsClose[k], cards[k]);
    }
  };
})();
