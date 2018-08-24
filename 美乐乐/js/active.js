/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-23 09:09:31
 * @version $Id$
 */
// 规则内容
var rule={"one":{"name":"满减细则","cont":"1.活动截止时间：8月26日;<br>2.自营本站价满5000减500、满10000减1200、满20000减2800、满足差额再满减，上不封顶；<br>3.促销价，特价、团购、秒杀、拍卖、体验馆特卖、门类商品、强化地板、特卖惠品牌以及第三方配送产品不参加满减活动；<br>4.如订单使用红包，红包抵扣金额部分，不参加满减；<br>5.如订单发生退货、退款，按最终商品金额重新计算，多退少补；<br>6.未尽事宜，如有疑问，请咨询在线客服或致电400-0098666。<br>五包截止时间:8月26日<br>自营商品扣除红包后满5000元，可享受五包到家服务；<br>关于配送：1.体验馆特卖、秒杀、团购、拍卖、门类商品、第三方配送商品不享受五包，强化地板不参与五包优惠；<br>2. 满足五包的商品，体验馆服务费最多优惠金额不超过商品总额的15%，超出部分没有达到当地最低标准服务费的，按最低服务费标准收取，家具上楼具体费用请咨询下单门店。<br>3.不在体验馆服务区的订单，五包仅享受包物流、包退换服务。物流费并按照送达对应城市物流点的实际运费给予用户补贴，按体积算补贴最高为180元/m3，按重量计算补贴最高为0.2元/kg。<br>关于安装：1.美乐乐自营建材商品可享受包物流、包送货、包退换服务，具体安装及大件物品上楼费用，请咨询下单门店；<br>2.购买灯饰商品满3000元可享受免费安装（注：如使用红包，需扣除红包金额后满3000元才可享受免费安装），购买浴室柜满3000元可享受免费安装。（购买部分灯饰算入订单价格但不包安装：台灯、天花射灯、筒灯厨卫灯等）。<br>"},"two":{"name":"抢购细则","cont":"1.抢购时间仅限1小时，时间到点，此产品团购结束；如若1小时未到，产品数量抢完，此产品团购结束；<br>2.本专区“团购”商品需付全款，提交订单后30分钟内付款且到账，逾期该订单自动取消；配套商品8.25-8.26同时段限时促销；<br>3.团购商品对每个用户ID存在数量上限，具体限制数量以团购商品页面限购提示为准;<br>4.团购商品包送安装，但不再参与满减、红包、预约验证码等活动；<br>5.未尽事宜如有疑问，请咨询400-0098666。<br>"},"three":{"name":"抽奖规则","cont":"1、每位客户限抽奖1次（用户名ID、收货人、收货地址、电话号码、E-mail、网银或支付宝账号，以上任何信息重复均视为同一客户，具体情况由体验馆工作人员核定）；<br />2、实物奖品发放：抽中实物奖品，我们会将商品抵扣劵，以短信的形式，发送到抽奖人的手机上，请到就近门店由导购协助下单领取；<br />3、红包奖品发放：抽中红包后，红包序列号将以短信形式发送至手机，到店订购自营商品满额即可使用；<br />4、红包使用条件：红包不能抵扣快递、物流或服务费；1000元红包订单金额满6000元可使用，500元红包订单金额满3000元可使用，50元红包订单金额满1000元可使用，体验馆特卖、团购、拍卖、秒杀产品及第三方配送产品除外。每个订单只能使用一个红包，本红包不能与其他红包/预约券/抵扣券/优惠码同时使用；<br />5、红包使用截止时间：2018年8月26日；<br />6、红包注意事项：此红包仅限抽奖获得，不找零、不折现，限一次性使用完，红包金额部分不参加满减、五包；如使用后发生退款，红包金额不作为退款款项；<br />"}}
	console.log(rule)
$(".btn").click(function(){
	$(".content").append('<div id="mask"></div>'
					+'<div class="rule">'
						+'<div class="in">'
							+'<div class="htmls">'
								+'<div class="r-title">'
									+'<b>'+rule.one.name+'</b>'
								+'</div>'
								+'<div class="r-cont">'
									+'<p>'+rule.one.cont+'</p>'
								+'</div>'
						+'</div>'
						+'<div class="btns">'
							+'<a href="javascript:;">確定</a>'
						+'</div>'
					+'</div>');
})

$(".btn4").click(function(){
	$(".content").append('<div id="mask"></div>'
					+'<div class="rule">'
						+'<div class="in">'
							+'<div class="htmls">'
								+'<div class="r-title">'
									+'<b>'+rule.two.name+'</b>'
								+'</div>'
								+'<div class="r-cont">'
									+'<p>'+rule.two.cont+'</p>'
								+'</div>'
						+'</div>'
						+'<div class="btns">'
							+'<a href="javascript:;">確定</a>'
						+'</div>'
					+'</div>');
})
$(".btn5").click(function(){
	$(".content").append('<div id="mask"></div>'
					+'<div class="rule">'
						+'<div class="in">'
							+'<div class="htmls">'
								+'<div class="r-title">'
									+'<b>'+rule.three.name+'</b>'
								+'</div>'
								+'<div class="r-cont">'
									+'<p>'+rule.three.cont+'</p>'
								+'</div>'
						+'</div>'
						+'<div class="btns">'
							+'<a href="javascript:;">確定</a>'
						+'</div>'
					+'</div>');
})
$("body").on("click",".btns",function(){
	$(".content").find("#mask").remove()
	$(".content").find(".rule").remove()
})
// 初始值
$(".item1").addClass('bag1')
$(".pm").css({"display":"none"})
// 低价秒杀tab切换
$(".item1").click(function(){
	$(this).addClass('bag1').siblings().removeClass('bag2')
	$(".am").css({"display":"block"}).siblings(".pm").css({"display":"none"})
})

$(".item2").click(function(){
	$(this).addClass('bag2').siblings().removeClass('bag1')
	$(".pm").css({"display":"block"}).siblings(".am").css({"display":"none"})
})


$(".goods-pic").mouseover(function(){
	$(this).parents(".lis").css({
			"top":"-3px",
			"bottom":"7px"
		})
})
$(".goods-pic").mouseout(function(){
	$(this).parents(".lis").css({
			"top":"",
			"bottom":""
		})
})

 
 $(window).scroll(function(){
 	var ot=$("#img-5").offset().top
 	var so = $(window).scrollTop()
 	if (so>=ot-100) {
 		$(".menu-right").addClass('show')
 		$(".menu-left").addClass('show')
 	}else {
 		$(".menu-right").removeClass('show')
 		$(".menu-left").removeClass('show')
 	}
 })
  $(window).scroll(function(){
 	var ot=$(".back5").offset().top
 	var so = $(window).scrollTop()
 	if (so>=ot) {
 		$(".menu-top").css({
 			"display":"block"
 		})
 	}else {
 		$(".menu-top").css({
 			"display":"none"
 		})
 	}
 })
 $(".top-con").on("click",".js-btn",function(){
 	$(this).addClass('active').siblings().removeClass('active')
 	var index=$(this).index()
	var height=$(".code1").eq(index).offset().top;
	$("html,body").animate({scrollTop:height+"px"},1000)
 })
 $(".menu-left").on("click",".mask-menu",function(){
 	var index=$(this).index()
	var height=$(".code").eq(index).offset().top;
	$("html,body").animate({scrollTop:height+"px"},1000)
 })
 $(window).scroll(function(){
	var st=$("html").scrollTop()||$("body").scrollTop();

	for(var i=0;i<$(".code1").length;i++){
		var ot=$(".code1").eq(i).offset().top;
		if(ot>=st&&ot<st+400){
			$(".js-btn").eq(i).addClass('active').siblings().removeClass('active')
		}
	}
})

$(function(){
	var x=0;
	setInterval(function(){
		x+=0.7;
		if(x>360){
			x=0;
		}
		$(".middle-mask img").css({transform:"rotate("+x+"deg)"})
	},15)
}) 


var timer = null;
var x=0
timer = setInterval(function(){
	x++;
	$(".prize li:eq(0)").clone(true,true).appendTo($(".prize"))
	$(".prize li:eq(0)").remove()
	$(".prize").animate({"top":-39*x},"500",function(){
		if(x > $(".prize li").length-10){
            $(".prize").css({
            	top:0
            })
            x=0
          }
	})
},3000);

