//轮播图部分

var index =0;
$(".btn").click(function(){
    index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".content-zl-vew-photo").eq(index).fadeIn(500).siblings().fadeOut();  
});
var time = setInterval(function(){
    index++;
    $(".content-zl-vew-photo").eq(index).fadeIn(600).siblings().fadeOut();
    if(index==0){
        $(".content-zl-background").css("background-color","rgb(219,212,181)");
    }else if(index==1){
        $(".content-zl-background").css("background-color","rgb(186, 179, 163)");
    }else if(index==2){
        $(".content-zl-background").css("background-color","rgb(219, 219, 219)");
    }else if(index>2){
        index = 0
        $(".content-zl-background").css("background-color","rgb(219,212,181)");
    }
     
    $(".content-zl-vew-photo").eq(index).fadeIn(600).siblings().fadeOut();
    $(".btn").eq(index).addClass("active").siblings().removeClass("active");
},2000);

//热图精选部分

$(".show-slide").mouseenter(function(){

    $(this).find(".show-slide-title").css("right","-180px");
    $(this).find(".to-slide").stop(true,true).fadeIn();

})
$(".show-slide").mouseleave(function(){
    $(".show-slide-title").css("right","0px");
    $(".to-slide").stop(true,true).fadeOut(); 
});
//鼠标移入照片显示
$(".content-zl-hot-right li").mouseover(function(){ 
    var i=$(this).index();
    console.log(i)
    $(this).find(".ranks-list").css("display","block")
    $(this).siblings().find(".ranks-list").css("display","none")
    $(this).find(".ranks-list-1").addClass("active-a")
    $(this).siblings().find(".ranks-list-1").removeClass("active-a")



    for (var j =0; j<$(".content-zl-hot-right li").length; j++) {
        $(".content-zl-hot-right li").find('.ranks-list-1').eq(j).css({
            "backgroundPositionY": -(( j*60))
        })
    };



    $(this).find('.ranks-list-1').css({"backgroundPositionY": -((i*60)+24)})

});

////鼠标移出照片隐藏
// $(".content-zl-hot-right li").mouseout(function(){
//    $(this).find(".ranks-list").css("display","none");     
// });
//鼠标悬浮时改变类名，序号变大
// $(".content-zl-hot-right li").hover(function(){

//     $(this).find(".ranks-list-1").addClass("active");
//     $(this).find(".ranks-list-2").addClass("ranks-list-2-1");
//     // $(this).find(".ranks-list-2").addClass("active").css("background","-122px","-85px");
//     $(this).find(".ranks-list-3").addClass("ranks-list-3-1");
//     $(this).find(".ranks-list-4").addClass("ranks-list-4-1");
//     $(this).find(".ranks-list-5").addClass("ranks-list-5-1");
//     $(this).find(".ranks-list-6").addClass("ranks-list-6-1");
//     $(this).find(".ranks-list-7").addClass("ranks-list-7-1");

//     },function(){
//     $(this).find(".ranks-list-1").removeClass("active");
//     $(this).find(".ranks-list-2").removeClass("ranks-list-2-1");
//     $(this).find(".ranks-list-3").removeClass("ranks-list-3-1");
//     $(this).find(".ranks-list-4").removeClass("ranks-list-4-1");
//     $(this).find(".ranks-list-5").removeClass("ranks-list-5-1");
//     $(this).find(".ranks-list-6").removeClass("ranks-list-6-1");
//     $(this).find(".ranks-list-7").removeClass("ranks-list-7-1");
//     // $(this).find(".ranks-list-2").removeClass("active").css("background","-122px","-85px");

// });