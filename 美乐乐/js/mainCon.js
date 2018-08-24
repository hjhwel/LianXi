/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-22 22:34:49
 * @version $Id$
 */

;(function($){
  $(function(){

    // 列表箭头
    $(".customer-list").on("mouseenter",function(){
      $(".item").css({backgroundPosition:"0 0"})
      $(this).find(".item").css({backgroundPosition:"0 -5px"});
    });
    $(".customer-list").on("mouseleave",function(){
      $(".item").css({backgroundPosition:"0 0"})
    });

    // 滚动新闻
    var timer = null;
    var x = 0;

    headerInfoScroll();
    function headerInfoScroll(){
      timer = setInterval(function(){
        x++;
        $(".customer-scroll-move").animate({marginTop:-30*x},500,function(){
          if(x > $(".customer-scroll-move a").length - 2){
            $(".customer-scroll-move").css({
              marginTop:0
            })
            x=0
          }
        });
      },2000);
    }

    $(".scroll-mask").hide(0);
    $(".customer-scroll-move").on("mouseenter",function(){
      $(".drop-down-adress").show();
      $(".scroll-mask").show(0);
      clearInterval(timer);
    });
    $(".customer-scroll-move").on("mouseleave",function(){
      $(".drop-down-adress").hide();
      $(".scroll-mask").hide(0);
      headerInfoScroll();
    });
    $(".drop-down-adress").on("mouseenter",function(){
      $(".scroll-mask").show(0);
      $(".drop-down-adress").show(0);
    })
    $(".drop-down-adress").on("mouseleave",function(){
      $(".drop-down-adress").hide(0);
      $(".scroll-mask").hide(0);
    })

    // 二级列表
    $(".sub-list-hover").on("mouseenter",function(){
      $(".list-box").css({display:"none"}).stop().animate({paddingLeft:"0"});
      $(this).find(".list-box").css({display:"block"}).stop().animate({paddingLeft:"10px"});
    });

    // // 公共菜单显示隐藏
    // 公共菜单鼠标移入
    // $(".menu-title").on("mouseenter",function(){
    //   // 二级菜单显示
    //   $(".sub-list").stop(true,true).fadeIn(0);
    //   // 二级菜单右侧列表隐藏
    //   $(".list-box").stop(true,true).hide();
    // });  
    // // 公共菜单鼠标移出
    // $(".menu-title").on("mouseleave",function(){
    //   // 二级菜单隐藏
    //   $(".sub-list").stop(true,true).hide(0);
    // });
    // // 二级菜单移入
    // $(".sub-list").on("mouseenter",function(){
    //   // 让自己固定显示
    //   $(".sub-list").stop(true,true).fadeIn(0);
    // });
    
    // 二级菜单移出
    $(".sub-list").on("mouseleave",function(){
      // 让自己隐藏
      $(".list-box").stop(true,true).fadeOut();
    });

  });
}(jQuery));