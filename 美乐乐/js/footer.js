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
    //
    $(".pub-cb  li").on("mouseenter",function () {
      $(this).find('.cb-ann').css({
        display:"block",
        right:100
      }).stop(true,true).animate({
        opacity:1,
        right:80
      })
    })



    $(".pub-cb  li").on("mouseleave",function () {
      $(this).find('.cb-ann').stop(true,true).animate({
        right:100
      },50).fadeOut(50);
    })

    $(".pub-cb  li").eq(1).on("click",function () {
      window.location.href = "mll.html";
    })
    $(".pub-cb  li").eq(2).on("click",function () {
      window.location.href = "not-shoping-car.html";
    })
    $(".pub-cb  li").eq(3).on("click",function () {
      window.location.href = "active.html";
    })
    $(".pub-cb  li").eq(4).on("click",function () {
      window.location.href = "active.html";
    })

    $("floor-box").find('img').on("click",function () {
      alert(1);
      window.location.href = "details.html";
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