// 返回顶部，包起来
(function ($, window) {
  // 入口函数
  $(function () {
    var $cb_foot = $(".pub-cb .cb-foot");
    // 监控窗口滚动
    $(window).scroll(function () {
      // 当窗口滚动到一定程度显示返回顶部按钮
      if ($(window).scrollTop() >= 500) {
        $cb_foot.css({
          display: "block"
        })
      } else {
        $cb_foot.css({
          display: "none"
        })
      }
    })
    // 监控窗口改变
    $(window).resize(function () {
      var wh = $(this).height();
      // 拿到所有的侧边栏
      var $cebian = $(".pub-cb .cb-cebian li")
      // 遍历所有的li
      $.each($cebian, function () {
        // 取出距离窗口顶部的高度加上本身的高度
        var lh = $(this).offset().top + $(this).outerHeight() - $(window).scrollTop();
        if (lh + 100 > wh) {
          $(this).css({
            opacity: 0
          })
        } else {
          $(this).css({
            opacity: 1
          })
        }
      })
    })
    // 底部友情链接扩展
    $('.footer-link li i').click(function () {
      $(this).css({
        display:"none"
      })
      $(this).parents("li").stop().animate({
        height:110
      })
    })
  })
})($, window)