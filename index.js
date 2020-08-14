function closeNav() {
  $("#navbarSupportedContent").collapse("hide");
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 300) {
    $(".fixed-top").css("transition", "1000ms ease");
    $(".fixed-top").css("background", "rgba(247, 246, 244, 0.3)");
  } else {
    $(".fixed-top").css("background", "rgba(247, 246, 244)");
  }
});

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      750
    );
  }
});
