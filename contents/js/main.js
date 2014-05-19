$(function() {

  $(document).on('page:update', function(e) {
    $('body').find('.content-area').addClass('will-fadein');

    var fadeInDelay = 200;
    $('.will-fadein').each(function(i) {
      var $el = $(this);
      setTimeout(function() {
        $el.removeClass('will-fadein');
      }, fadeInDelay * i);
    });
  });

  $(document).on('click', '#solutions-overview .solution-overview table thead tr th:first-child', function(e) {
    var $headcell = $(this),
        $table = $headcell.parents('table');

    if ($table.hasClass('expanded')) {
      $table.find('th,td').not($headcell).fadeToggle(function() { $table.removeClass('expanded'); });
    }
    else {
      $table.addClass('expanded');
      $table.find('th,td').not($headcell).fadeToggle();
    }
  });
});
