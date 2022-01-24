/*global $ */
$(document).ready(function () {
   "use strict";
   $('.header__burger').click(function () {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
});
