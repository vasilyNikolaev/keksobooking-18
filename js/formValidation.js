'use strict';

(function () {

var guests = document.querySelector('#room_number');
var rooms = document.querySelector('#capacity');

guests.addEventListener('change', function (evt) {
  rooms.disabled = true;
  rooms.value = guests.value;
});

})();
