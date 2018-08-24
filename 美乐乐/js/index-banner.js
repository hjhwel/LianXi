/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-24 09:51:39
 * @version $Id$
 */

;(function($){
  $(function(){

    var timer = null;
    var x = 0;

    bannerAni();

    $(".banner-list").hide().eq(0).show();
    $(".banner-list-box").hide().eq(0).show();
    $(".icon-box span").eq(0).css({backgroundColor:"#fff"});

    $(".icon-box span").on("mouseenter",function(){
      $(".banner-list-box").hide();
      $(".banner-list-box:eq("+$(this).index()+")").show();
      $(".banner-list").stop(true,true).fadeOut(0).animate({marginLeft:-630});
      $(".banner-list:eq("+$(this).index()+")").stop(true,true).fadeIn(1000).animate({marginLeft:-595},1000);
      $(this).siblings().css({backgroundColor:"transparent"});
      $(this).css({backgroundColor:"#fff"});
      x = $(this).index();
    });

    function bannerAni(){
      timer = setInterval(function(){
        x++;
        if(x > $(".icon-box span").length - 1){
          x = 0;
        }
        $(".banner-list-box").hide();
        $(".banner-list-box:eq("+x+")").show();
        $(".banner-list").stop(true,true).fadeOut(0).animate({marginLeft:-630});
        $(".banner-list:eq("+x+")").stop(true,true).fadeIn(1000).animate({marginLeft:-595},1000);
        $(".icon-box span").css({backgroundColor:"transparent"});
        $(".icon-box span").eq(x).css({backgroundColor:"#fff"});
      },3000);
    }

    $(".banner-box").on("mouseenter",function(){
      clearInterval(timer);
    });
    $(".banner-box").on("mouseleave",function(){
      bannerAni();
    });

    // 广告栏侧滑效果
    $(".advert-list").on("mouseenter",function(){
      $(this).find("img").stop(true,true).animate({marginLeft:-8});
    });
    $(".advert-list").on("mouseleave",function(){
      $(this).find("img").stop(true,true).animate({marginLeft:0});
    });

  });
}(jQuery));