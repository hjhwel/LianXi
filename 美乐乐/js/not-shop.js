(function($,window){
    $(function(){

        // 隐藏广告
        $(".zx-jam").click(function(){
            $(".zx-ad").hide()
        })
        

        


        

        // 点击搜索
        
        $(".search-form .submit-btn").click(function(){
            
            // console.log($(".search-form .search-input").val());

            $(".zx-history .h-search").append("<h5><a herf='###' class='reda'>"+$(".search-form .search-input").val()+"</a></h5>")
        })




        // // 输入框获取焦点
        $(".search-input").focus(function(){
            $(".zx-history").css({display:"block"})
        })

        // 输入框失去焦点
        $(".search-input").blur(function(){
            $(this).attr("placeholder","11周年庆每满5000减500，爆品齐放价>>>")
            $(".zx-history").css({display:"none"})
        })
        
    })
})($,window)

