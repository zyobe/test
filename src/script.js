$(document).ready(function () {
  console.log('xxxxx')

  $('.js-navigation-button-open').on('click', function() {
    $('.navigation').addClass('navigation--active');
    $('.header').addClass('header--active-navigation');
  });

  $('.js-navigation-button-close').on('click', function() {
    $('.navigation').removeClass('navigation--active');
    $('.header').removeClass('header--active-navigation');
  });
});