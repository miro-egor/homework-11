document.addEventListener('DOMContentLoaded', function () {
   const HEADER_HAMBURGER = document.querySelector('.header__hamburger');
   const MENU = document.querySelector('.header');
   const BODY = document.querySelector('body');

   HEADER_HAMBURGER.addEventListener('click', function () {
      MENU.classList.toggle('active');
      BODY.classList.toggle('lock');
   })
})

$(document).ready(function () {
   $('.works__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '16px',
      mobileFirst: true,
      responsive: [

      ]
   });
});

