'use strict';

(function () {
  window.filter = function (data) {
    window.typePin = document.querySelector('#type');
    typePin.addEventListener('input', function (evt) {
      deletPin(data);
      var dataN = data.
        filter(function (dataO) {
          return dataO.offer.type === typePin.value;
        }).
        map(function (dataO) {
          return dataO
        });
        for (var i = 0; i <= dataN.length - 1; i++) {
          var filteredAuthor = dataN[i].author;
          var filteredOffer = dataN[i].offer;
          var filteredLocation = dataN[i].location;
          dataOutput(filteredAuthor, filteredOffer, filteredLocation);
        }
        var cards = document.querySelectorAll('.map__card');
        if (cards) {
          // console.log(cards);
          for (var i = 0; i <= cards.length - 1; i++) {
            var mapCardDelete = cards[i];
              mapCardDelete.parentNode.removeChild(mapCardDelete);
          }
        }
        console.log(dataN);
        renderCard(dataN);
    });
  };
  window.deletPin = function (data) {
    var map = document.querySelector('.map__pins');
    var mapChild = map.children;
    for (var i = mapChild.length - 1; i > 1; i--) {
      var mapChildDelete = mapChild[i];
        mapChildDelete.parentNode.removeChild(mapChildDelete);
      }
  };

})();
