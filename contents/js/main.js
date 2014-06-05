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
    var anim_delay = 400,
        $solution  = $(this).parents('.solution'),
        $compacted = $solution.find('.solution-compacted'),
        $expanded  = $solution.find('.solution-expanded');

    $solution.toggleClass('expanded');

    if ($solution.hasClass('expanded')) {
      $solution.find('header .expand').text('COLLAPSE');
      $expanded.show();
    }
    else {
      setTimeout(function() { $expanded.hide(); }, anim_delay);
      $solution.find('header .expand').text('EXPAND');
    }
  });

});
