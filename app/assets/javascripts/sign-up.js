$(function() {
  $('.upper-content__right__options__mail-address__link').on('click', function(e) {
    e.preventDefault();
    $('.upper-content__right__login-form').remove();
    $('.upper-content__rignt__options').remove();
  })
})
