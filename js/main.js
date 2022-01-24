/*global $ */
$(function () {
   "use strict";
   $('.tiles__item').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 740,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: true
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true
            }
         }
      ]
   });

   $('.tiles__item-footer').slick({
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true
            }
         },
         {
            breakpoint: 740,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               dots: true
            }
         }
      ]
   });

});



