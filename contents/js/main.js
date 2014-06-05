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

  $(document).on('click', '#our-solutions .solutions .solution header', function(e) {
    var anim_delay = 400;
    var $solution  = $(this).parents('.solution');
    var $compacted = $solution.find('.solution-compacted');
    var $expanded  = $solution.find('.solution-expanded');
    $solution.toggleClass('expanded');

    if ($solution.hasClass('expanded')) {
      $expanded.show();
    }
    else {
      setTimeout(function() { $expanded.hide(); }, anim_delay);
    }
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
