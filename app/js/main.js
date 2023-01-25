$(function () {
  // Arrow bottom locale
  $(".header__local").on("click", function () {
    $(".header__local-item").toggleClass("header__local--active");
  });
});

// Questions list
$(function () {
  $("#questions__list > li").click(function (event) {
    $(this).children("ul").slideToggle();
      event.stopPropagation();
      $('.questions__list-item').click(function(event) {
      $('.questions__list-item').removeClass("questions__list--active");
      $(this).addClass("questions__list--active");
      });
    });
});


