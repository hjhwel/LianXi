/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-24 16:24:05
 * @version $Id$
 */

;(function($) {
    $(function() {

        var x = 0;
        var timer = null;

        for (var i = 0; i < 7; i++) {
            floorAni(i);
            bannerAni(i);
        }

        // 轮播图封装
        function floorAni(num) {

            // 商品栏tab切换
            $(".container-" + num + " .floor-r-box").eq(1).hide();
            $(".floor-nav-" + num + " p").on("mouseover", function() {
                $(this).siblings().removeClass("floor-nav-hover");
                $(this).addClass("floor-nav-hover");
                $(".container-" + num + " .floor-r-box").hide();
                $(".container-" + num + " .floor-r-box:eq(" + $(this).index() + ")").show();
            })

            // 楼层轮播

            $(".r-ani-" + num + " .img").find("a").hide().eq(0).show();
            $(".r-ani-" + num + " .r-banner-desc").hide().eq(0).show();
            $(".r-ani-" + num + " .r-banner-icon").find("a").eq(0).css({
                opacity: 1
            });

            // 方法一
            $(".r-ani-" + num + " .r-banner-icon a").on("mouseover", function() {

                $(this).siblings().css({
                    opacity: 0.6
                });
                $(this).css({
                    opacity: 1
                });
                $(".r-ani-" + num + " .r-banner-desc").stop(true, true).fadeOut();
                $(".r-ani-" + num + " .r-banner-desc:eq(" + $(this).index() + ")").stop(true, true).fadeIn(300);
                $(".r-ani-" + num + " .img a").siblings().stop(true, true).fadeOut();
                $(".r-ani-" + num + " .img a:eq(" + $(this).index() + ")").stop(true, true).fadeIn(300);
                x = $(this).index();

            });

        }

        // 方法二
        // $(".r-banner-box .r-banner-icon a").on("mouseover",function(){
        //   $(this).siblings().css({opacity:0.6});
        //   $(this).css({opacity:1});
        //   $(this).parents(".floor-r-box").hide().eq(0).show();
        //   $(this).parent().siblings(".r-banner-desc").stop(true,true).fadeOut();
        //   $(this).parent().siblings(".r-banner-desc:eq("+$(this).index()+")").stop(true,true).fadeIn(300);
        //   $(this).parent().siblings(".img").find("a").siblings().stop(true,true).fadeOut();
        //   $(this).parent().siblings(".img").find("a:eq("+$(this).index()+")").stop(true,true).fadeIn(300);
        //   // x=$(this).index();
        //   console.log(x);
        // });

        // 楼层轮播自动播放（bug）
        function bannerAni(num) {
            timer = setInterval(function() {
                x++;
                if (x > $(".r-ani-" + num + " .r-banner-icon a").length - 1) {
                    x = 0;
                }

                $(".r-ani-" + num + " .img").find("a").hide().eq(0).show();
                $(".r-ani-" + num + " .r-banner-desc").hide().eq(0).show();
                $(".r-ani-" + num + " .r-banner-icon a").siblings().css({
                    opacity: 0.6
                });
                $(".r-ani-" + num + " .r-banner-icon a:eq(" + x + ")").css({
                    opacity: 1
                });
                $(".r-ani-" + num + " .r-banner-desc").hide();
                $(".r-ani-" + num + " .r-banner-desc:eq(" + x + ")").fadeIn(300);
                $(".r-ani-" + num + " .img a").siblings().hide();
                $(".r-ani-" + num + " .img a:eq(" + x + ")").show();

                // console.log(x)

            }, 2000);
        }

        // 楼层图片偏移
        $(".move").on("mouseenter", function() {
            $(this).find("img").stop(true, true).animate({
                marginLeft: -8
            }, 400);
        });
        $(".move").on("mouseleave", function() {
            $(".move").find("img").stop(true, true).animate({
                marginLeft: 0
            }, 400);
        });

        // 滚动固定导航
        var searchOt = $(".advert-box").offset().top;
        var fixFloor = $(".fix-floor-box").offset().top;
        $(window).on("scroll", function() {
            var st = $("html").scrollTop() || $("body").scrollTop();
            if (searchOt <= st + 100) {
                $(".fix-search-box").css({
                    top: 0
                })
                $(".fix-form").find("input").eq(0).focus();
                $(".fix-floor-list").addClass("show");
            } else {
                $(".fix-search-box").css({
                    top: -50
                })
                $(".fix-floor-list").removeClass("show");
            }
        });

        // 搜索框聚焦
        $(".search-info").focus();

        // 楼层图标效果
        //
        // 鼠标点击
        $(".icon-list").on("click", function() {
            var ot = $(".floor-box").eq($(this).index()).offset().top;
            $("html,body").animate({
                scrollTop: ot - 160
            });
        });

        // 楼层效果
        $(window).scroll(function() {
            var st = $("html").scrollTop() || $("body").scrollTop();
            // console.log(st);
            for (var i = 0; i < $(".floor-box").length; i++) {
                var ot = $(".floor-box").eq(i).offset().top;
                // console.log(ot);
                if (ot >= st && ot < st + 200) {
                    $(".icon-list").eq(i).css({
                        color: "#e62318"
                    });
                    $(".icon-list .icon").css({
                        display: "inline-block"
                    }).eq(i).hide();
                    $(".icon-list .floor-name").hide().eq(i).css({
                        display: "block"
                    });
                }
            }
        });

    });
}(jQuery));
