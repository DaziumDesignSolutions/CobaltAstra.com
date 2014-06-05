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


  function solutionToggleHandler(e) {
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
  }

  $(document).on('click', '#our-solutions .solutions .solution header', solutionToggleHandler);

  $(document).on('page:update', function(e) {
    console.log('document.location');
    console.log(document.location);
    var sol_hashes = ['#hr-services', '#hr-consulting', '#hr-outsourcing'];

    if (sol_hashes.indexOf(document.location.hash) >= 0) {
      var id = document.location.hash.split('#')[1];
      var $solution = $('body #our-solutions .solution[name='+id+']');
      $solution.addClass('expanded');
      $solution.find('header .expand').text('COLLAPSE');
    }
  });

});
