/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-28 12:12:15
 * @version $Id$
 */

;(function($){
  $(function(){

    var timer = null;
    var x = 0;
    var num = 0;
    $(".slide-box table").find("td").eq(0).clone().appendTo(".tab-slide");
    $(".slide-icon a:eq(0)").css({opacity:1});

    slideAni();
    // 清定时器
    $(".slide-box").on("mouseenter",function(){
      clearInterval(timer);
    });
    // 重启定时器
    $(".slide-box").on("mouseleave",function(){
      slideAni();
    });

    // 按钮控制
    $(".slide-icon a").on("mouseover",function(){
      console.log($(this).index());
      $(".slide-box table").stop().animate({marginLeft:-340*($(this).index())});
       $(".slide-icon a:eq("+$(this).index()+")").css({opacity:1}).siblings().css({opacity:".6"});
      num = $(this).index();
    });

    // 无缝轮播
    function slideAni(){
      timer = setInterval(function(){
        x++;
        $(".slide-box table").animate({marginLeft:-340*x},500,function(){
          if(x > $(".slide-box table").find("td").length - 2){
            $(".slide-box table").css({marginLeft:0});
            x = 0;
          }
        });
        num++;
        if(num > 3){
          num = 0;
        }
        $(".slide-icon a:eq("+num+")").css({opacity:1}).siblings().css({opacity:".6"});
      },2000);
    }

  });
}(jQuery));

;(function($){
  $(function(){
    var x = 0;
    var timer = null;

    // 自动播放
    bannerAni();
    $(".banner-box").find("p").eq(0).clone().appendTo(".banner-box");

    // 清除定时器
    $(".banner-box").on("mouseover",function(){
      clearInterval(timer);
    });

    // 重启定时器
    $(".banner-box").on("mouseout",function(){      
      bannerAni();
    });

    function bannerAni(){
      timer = setInterval(function(){
        x++;
        $(".banner-box").animate({marginLeft:-340*x},500,function(){
          if(x > $(".banner-box p").length - 2){
            $(".banner-box").css({marginLeft:0});
            x=0;
          }
        });
      },1500);
    }

  });
}(jQuery));

