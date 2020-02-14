(function () {
  'use strict';

  // Ease in
  $('body').animate({ opacity: 1 }, 700);

  // Auto scroll
  var up = $('.scroll-up');
  var down = $('.scroll-down');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      up.addClass('show');
    } else {
      up.removeClass('show');
    }
  });

  up.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  down.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 300);
  });

  // =========================================================================================
  $('body').bind('copy', function (e) { e.preventDefault(); return false; });
  $('body').bind('paste', function (e) { e.preventDefault(); return false; });
  $('img').mousedown(function (e) { if (e.button == 2) { return false; } });
  $('a.temp').click(function (e) { e.preventDefault(); });
  $('body').on('contextmenu', 'img', function(e) {
    return false;
  });

}());