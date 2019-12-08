'use strict';

(function () {
  window.onError = function (message) {
    console.error(message);
    var template = document.querySelector('#error').content.querySelector('.error');
    document.body.insertAdjacentElement('afterbegin', template);
  };


  window.onSuccess = function (data) {
    for (var i = 0; i <= data.length - 1; i++) {
      var author = data[i].author;
      var offer = data[i].offer;
      var location = data[i].location;
      dataOutput(author, offer, location);
    }
    filter(data);
    // createPopup(data)

    window.popupTemplate = document.querySelector('#card').content.querySelector('.map__card');
    window.renderPopup = function (dataPopupPin) {
      var dataElement = popupTemplate.cloneNode(true);
      dataElement.querySelector('.popup__title').textContent = dataPopupPin.offer.title;
      dataElement.querySelector('.popup__text--address').textContent = dataPopupPin.offer.address;
      dataElement.querySelector('.popup__text--price').textContent = dataPopupPin.offer.price + ' ₽/ночь';
      var typeHousing = function (type) {
        switch (type) {
          case 'flat':
            return 'Квартира'
            break;
          case 'bungalo':
            return 'Бунгало'
            break;
          case 'house':
            return 'Дом'
            break;
          case 'palace':
            return 'Дворец'
            break;
        };
      };
      dataElement.querySelector('.popup__type').textContent = typeHousing(dataPopupPin.offer.type);
      dataElement.querySelector('.popup__text--capacity').textContent = dataPopupPin.offer.rooms + ' комнаты для ' + dataPopupPin.offer.guests;
      dataElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + dataPopupPin.offer.checkin + ', выезд до ' + dataPopupPin.offer.checkout;
      //
      dataElement.querySelector('.popup__description').textContent = dataPopupPin.offer.description;
      dataElement.querySelector('.popup__photo').src = dataPopupPin.offer.photos;
      dataElement.querySelector('.popup__avatar').src = dataPopupPin.author.avatar;

      dataElement.classList.add('hidden');
      return dataElement;
    };
    renderCard(data);
  };
  window.dataOutput = function (aut, off, loca) {
    window.template = document.querySelector('#pin').content.querySelector('.map__pin');
    window.pinElement = template.cloneNode(true);
    window.map = document.querySelector('.map__pins');
    pinElement.style.left = loca.x + 'px';
    pinElement.style.top = loca.y + 'px';
    pinElement.children[0].src = aut.avatar;
    pinElement.children[0].alt = off.title;
    map.appendChild(pinElement);
    }

})();
