$(function() {
  if ($('#solutions-overview')) {
    $('#solutions-overview .solution-overview').each(function(i) {
      var $el = $(this),
          $table = $el.find('table'),
          $headcell = $table.find('thead tr th:first');

      $headcell
        .css('cursor', 'pointer')
        .attr('role', 'button')
        .click(function(e) {
          $table.toggleClass('expanded');
          $table.find('th,td').not($headcell).fadeToggle();
        });

      $table.find('th,td').not($headcell).hide();
    });
  }
});
