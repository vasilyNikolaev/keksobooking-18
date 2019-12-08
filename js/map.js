'use strict';

(function () {

window.mapActive = function () {
  var statusMap = document.querySelector(".map");
  statusMap.classList.remove("map--faded");
  var statusForm = document.querySelector('.ad-form');
  statusForm.classList.remove('ad-form--disabled');
  window.load('https://js.dump.academy/keksobooking/data', onSuccess, onError);
};

window.mark.addEventListener ('keydown', function(evt) {
  if (evt.keyCode === 13) {

    window.mapActive();
    window.activePage(false);

  }
});

var openPopup = function (card) {
  var previousCard = document.querySelector('.map__card:not(.hidden)');
  if (previousCard) {
    previousCard.classList.add('hidden');
  }
  card.classList.remove('hidden');
};
var closePopup = function (card) {
  card.classList.add('hidden');
};

window.openCardForPin = function (pin, card) {
  pin.addEventListener('click', function () {
    openPopup(card);
  });
};
window.closeCard = function (closeElement, card) {
  closeElement.addEventListener('click', function () {
    closePopup(card);
  });
};

})();
