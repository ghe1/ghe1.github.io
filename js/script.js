$(document).ready(function() {
  $(".bigtext").addClass("animated slideInDown text-center");
  $(".tagline").addClass("text-center animated fadeInUp");

  $(".navlink").click(function() {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  $(".navlink").hover(function() {
    $(this).css("color", "black");
  }, function() {
    $(this).css("color", "white");
  });
});

$(function() {
    $('.fader img:not(:first)').hide();

    var pause = false;

    function fadeNext(time) {
        $('.fader img').first().fadeOut(time, function() {
          $(this).appendTo($('.fader'));
          $('.fader img').first().fadeIn(time)
        });
    }

    $('.fader img').hover(function() {
        pause = true;
    },function() {
        pause = false;
    });

    function doRotate() {
        if(!pause) {
            fadeNext(1000);
        }
    }

    var rotate = setInterval(doRotate, 5000);

});
