(function($,window){
    $(function(){
        // 快捷登录
        var _shortcut = $(".zx-login-switch .zx-shortcut");

        //    微信登陆
        var qrcode = $(".zx-login-switch .zx-qrCode");

        //    短信验证
        var ism =$(".zx-input-group .zx-sms-btn");

        // 扫码登录
        var app = $(".zx-other-login .zx-i-app");

        // 账号登录
        var account = $(".zx-other-login .zx-i-account");

        // QQ登录
        var qq = $(".zx-other-login .zx-i-qq");

        //登录父盒子
        var box = $(".zx-login-type");

        //登录注册
        var login = $(".zx-login-form .zx-submit-btn");

        // 定时器
        var timer = null;


        //点击切换微信登陆
        qrcode.click(function(){
            box.animate({top:0,left:0},100)
            $(".zx-error-date").animate({left:"180px"},100)
            $(this).css({color:"#cf000e"})
            _shortcut.css({color:"#888"})
        })

        //点击快捷登录
        _shortcut.click(function(){
            box.animate({top:0,left:"-612px"},100)
            $(".zx-error-date").animate({left:"27px"},100)
            qrcode.css({color:"#888"})
        })

        //点击扫码登录
        app.click(function(){
            box.animate({top:0,left:"-918px"},100)
            $(".zx-login-switch").css({left:"-466px",border:"none"})
            $(".zx-error-date").css({display:"none"})
            $(".zx-safety").css({color:"black"})
            $(this).css({display:"none"})
        })

        //点击账号登录
        account.click(function(){
            box.animate({top:"-5px",left:"-306px"},100)
            $(".zx-login-switch").css({left:"-350px",borderBottom:"none"})
            $(".zx-safety").css({display:"none"})
            $(".zx-error-date").css({display:"none"})
            $(".zx-zh").css({color:"#000"})
            $(this).css({display:"none"})
          
        })


        // 点击返回快捷登录
        $(".zx-getback").click(function(){
            box.animate({top:0,left:"-612px"},100)
            $(".zx-error-date").css({display:"block"})
            $(".zx-login-switch").css({left:"0",borderBottom:"1px solid rgb(187,187,187)"})
            app.css({marginBottom:0})
            app.css({display:"inline-block"})
            account.css({display:"inline-block"})
        })


        // 提交登录注册
        login.click(function(){
            var patt=/^1[3456789]\d{9}$/
            var npt = $(".zx-input-account").val()
            
            if (patt.test(npt)){
                alert("正确")
            }else if(npt===""){
                    $(".zx-login-mobile .zx-error-hint").css({visibility:"visible",margin:"5px 0"})
                    $(".zx-error-text:eq(1)").text("请输入手机号")
            } else{
                    $(".zx-login-mobile .zx-error-hint").css({visibility:"visible",margin:"5px 0"})
                    $(".zx-error-text:eq(1)").text("请输入正确的手机号")

            }
        })

        //输入框聚焦
        $(".zx-input-account").focus(function(){
            $(".zx-login-mobile .zx-error-hint").css({visibility:"hidden",margin:" 0"})
        })

        // 点击隐藏广告
        $(".zx-shut").click(function(){
            $(".zx-right-nav").hide();
        })

        //账号登录
        $(".zx-login-pwd .zx-submit-btn").click(function(){
            clearTimeout(timer)
            var zx_id = $(".zx-login_id .zx_id").val()
            var zx_pwd = $(".zx-login_pwd .zx_pwd").val()
            var zx_text =  $(".zx-login-pwd .zx-error-hint .zx-error-text")

            if (zx_id==="" &&zx_pwd==="") {
                $(".zx-login-pwd .zx-error-hint").css({visibility:"visible",marginTop:" 5px"})
                zx_text.text("请输入账号")
            }else if (zx_id==="") {
                $(".zx-login-pwd .zx-error-hint").css({visibility:"visible",marginTop:" 5px"})
                zx_text.text("请输入账号")
            }else if(zx_pwd===""){
                $(".zx-login-pwd .zx-error-hint").css({visibility:"visible",margin:" 5px"})
                zx_text.text("请输入密码")
            } else if(zx_id!=="" &&zx_pwd!==""){
                // alert(10)

                //    ajax请求
                $.ajax({
                    type:"GET",
                    url:"php/login.php",
                    data:{
                        username:$(".zx-login_id .zx_id").val(),
                        password:$(".zx-login_pwd .zx_pwd").val()
                    },
                    success:function(data){
                        $(".zx-login-pwd .zx-submit-btn").text("正在验证")
                            timer = setTimeout(function(){
                               
                                if (data!=="用户名和密码正确！登陆成功！") {
                                    $(".zx-login-pwd .zx-error-hint").css({visibility:"visible",margin:"5px 0"})
                                    zx_text.text("你输入的密码和账户名不匹配，是否忘记，")
                                    $(".zx-error-text:eq(0)").append("<a href='###' style='color:#4a92f5;'>去找回</a>")
                                }
                            $(".zx-login-pwd .zx-submit-btn").text("登录")

                            },1000)

                       
                    }
                })
            }
            

            //输入框聚焦
            $(".zx-login_id .zx_id").focus(function(){
                $(".zx-login-pwd .zx-error-hint").css({visibility:"hidden",margin:" 0"})
            })
            $(".zx-login_pwd .zx_pwd").focus(function(){
                $(".zx-login-pwd .zx-error-hint").css({visibility:"hidden",margin:" 0"})
            })
          

            
        })
    })
})($,window)