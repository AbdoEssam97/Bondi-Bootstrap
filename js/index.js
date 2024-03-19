$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > $(".features").offset().top) {
    $(".navbar").css("backgroundColor", "rgb(0,0,0,0.85)");
    $("#upBtn").show(500);
  } else {
    $(".navbar").css("backgroundColor", "#19283f");
    $("#upBtn").hide(500);
  }
});

$("#upBtn").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$("a[href^='#']").click(function (e) {
  e.preventDefault();
  let target = $(this).attr("href");
  //   let target = $(e.target).attr("href");
  // هتجيب مساحه السكشن من الايدي بتاعه
  let targetPos = $(target).offset().top;
  $("html, body").animate({ scrollTop: targetPos }, 1000);
});
