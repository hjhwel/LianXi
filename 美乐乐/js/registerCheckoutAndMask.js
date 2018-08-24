       ;(function($){
            $(function(){
                $('.footer-help').remove();
                //校验部分
                /* input框页面加载后为第一个input为focus状态 */
                $(".register_input").eq(0).focus().css({backgroundColor:"rgb(253,253,243)",outline:"#d7d7d7"});
                /* 清除focus，被点击input状态为focus */
                $(".register_input").on("focus",function(){
                    $(this).css({backgroundColor:"rgb(253,253,243)",outline:"#d7d7d7"}).parent().siblings("p").children("input").css({backgroundColor:"#fff"})
                })
                /* 手机号校验 */
                $.validator.addMethod("resPhone",function(value,element,params){
                    var patt=/^1[35789]\d{9}$/;
                    var flag=patt.test(value);
                    return this.optional(element)||flag;
                },
                $.validator.format("请输入正确的手机号码"));

                /*用户名校验 */
                $.validator.addMethod("resName",function(value,element,params){
                    var patt=/^[\u4E00-\u9FA5A-Za-z0-9_]{4,20}$/;
                    var flag=patt.test(value);
                    return this.optional(element)||flag;
                },
                $.validator.format("用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字"));
                /*密码校验 */
                $.validator.addMethod("resPassword",function(value,element,params){
                    var patt=/^[A-Za-z0-9\+[_^%&'.#@!^&,;=?$]{6,20}$/;
                    var flag=patt.test(value);
                    return this.optional(element)||flag;
                },
                $.validator.format("用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字"));
                /*插件validate校验信息与规则*/
                $("#register_form").validate({
                    rules:{
                        username:{
                            required:true,
                            minlength:4,
                            maxlength:20,
                            resName:true,
                        },
                        password:{
                            required:true,
                            minlength:6,
                            maxlength:20,
                            resPassword:true,
                        },
                        confirm_password:{
                            required:true,
                            minlength:6,
                            maxlength:20,
                            equalTo:"#password"
                        },
                        phone:{
                            required:true,
                            rangelength:[11,11],
                            resPhone:true,
                        }
                    },
                    messages:{
                        username:{
                            required:"用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字",
                            minlength:"用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字",
                            maxlength:"用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字",
                        },
                        password:{
                            required:"6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号",
                            minlength:"6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号",
                            maxlength:"6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号",
                        },
                        confirm_password:{
                            required:"请确保两次输入的密码一致",
                            minlength:"两次输入的密码不一致",
                            maxlength:"请确保两次输入的密码一致",
                            equalTo:"请确保两次输入的密码一致",
                        },
                        phone:{
                            required:"请输入正确的手机号码",
                            rangelength:"请输入正确的手机号码",
                        }
                    },
                   errorPlacement:function(err,el){
                    el.parent().append(err);
                    $("[class='error']").prev("label").remove();
                   },

                    success:function(label){
                        $("[class='error']").parent().children(".success").remove()
                        $("[class='error']").parent().append("<label class='success'></label>")
                        $("[class='success']").prev("label").remove();
                        $("[class='error']").parent().children(".error").remove()
                    },
                })
                //判断是提交或蒙版提示
                var $userName=$("[name='username']")
                var $passWord=$("#password")
                var $telPhone=$("[name='phone']")
                $(".regi_btn").on("click",function(){
                    var status=$(".readed").children("input").prop("checked");
                    var username=$userName.val();
                    var password=$passWord.val();
                    var phone=$telPhone.val();
                    console.log(username,password,phone);
                    if(status){
                        console.log(status)
                        if(username&&password&&phone){
                            $.post('.php/add.php',{username,password,phone},function(data){
                                console.log(data)
                            })
                        }
                    }else{
                            $(".protocol_mask").show();
                            $(".register_protocol").show()
                        }
                })
                //关闭蒙版
                $(".register_protocol").on("click",".close_mask",function(){
                    $(".protocol_mask").hide();
                    $(".register_protocol").hide();

                })
                // //手机号如果是11位，就会插入短信验证的消息
                $("[name='phone']").on("change",function(){
                    var phoneValue=$("[name='phone']").attr("value");
                    if(phoneValue.length==11){
                        $(".readed").before('<p class="phone_code"><label class="tips"><span class="red">*</span>短信验证码：</label><input type="text" name="phone_code"class="register_input"><input type="button" name="get_phone_code"class="get_phone_code" value="获取短信验证码"></p>')
                        $(".phone_code").next(".phone_code").remove();
                    }else{
                        $(".phone_code").remove();
                    }
                })



            })
        }(jQuery))