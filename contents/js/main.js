$(function() {
  // Turbolinks.enableTransitionCache();

  $(document).on('page:before-change', function(e) {
    console.log('page loaded!');
    console.log(e);
    $('body').addClass('fadeout').removeClass('fadein');
  });

  $(document).on('page:update', function(e) {
    console.log('page loaded!');
    console.log(e);

    $('body').find('.content-area').addClass('will-fadein');
  });

  $(document).on('page:load', function(e) {
    console.log('page loaded!');
    console.log(e);

    $('body').removeClass('fadeout').addClass('fadein');

    var fadeInDelay = 150;
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
