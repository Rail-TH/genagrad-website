$(document).ready(function() {
  if ($('img').length > 0) {
    $('img').each(function() {
      $(this).click(function() {
        $('#modal').css('display', 'block');
        $('#modalImage').attr('src', $(this).attr('src'))
      })
    });
  };
  $('.close').click(function() {
    $('#modal').css('display', 'none');
  });
  $(window).click(function(event) {
    if ($(event.target).is($('#modal'))) {
      $('#modal').css('display', 'none');
    }
  });
  $('#burger-toggle').prop('checked', false);
})