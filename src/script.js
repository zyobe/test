$(document).ready(function () {

  const $navigation = $('.navigation');
  const $header = $('.header');
  const navigationActive = 'navigation--active';
  const headerActiveNavigation = 'header--active-navigation'

  function navToggle(navSelector, headerSelector, navClass, headerClass) {
    navSelector.toggleClass(navClass);
    headerSelector.toggleClass(headerClass);
  }

  $('.js-navigation-button-open, .js-navigation-button-close').on('click', function() {
    navToggle(
      $navigation,
      $header,
      navigationActive,
      headerActiveNavigation
    );
  });

});