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
