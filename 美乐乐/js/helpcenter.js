(function ($, window) {
  $(function () {
    var $a = $(".art_nav section a");
    var $secc = $(".art_right");
    $a.attr("href", "javascript:void(0);")
    $(".art_nav section dd:even a").css({
      backgroundPosition: "0 -31px",
      color: "#444"
    })
    $a.eq(0).css({
      backgroundPosition: "0px -78px",
      color: "#e62318"
    })

    $a.each(function (index, value) {
      $(value).click(function () {
        $secc.css({
          display:"none"
        })
        $secc.eq(index).stop().fadeIn()
      })
    })

    $a.click(function () {
      $(".art_nav section dd:even a").css({
        backgroundPosition: "0 -31px",
        color: "#444"
      })
      $(".art_nav section dd:odd a").css({
        backgroundPosition: "0 -30px",
        color: "#444"
      })
      $(this).css({
        backgroundPosition: "0px -78px",
        color: "#e62318"
      })
      $("title").text($(this).text())
    })
  })
})($, window)