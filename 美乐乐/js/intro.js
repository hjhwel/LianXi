/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-26 17:19:29
 * @version $Id$
 */
 $(".main-right").css("display","none")
$(".list").click(function(){

	$(this).addClass('active').parent().siblings().find('.list').removeClass('active')
	var index=$(this).parent().index()
	console.log(index)
	$(".main-right").eq(index).css({
		"display":"block"
	}).siblings(".main-right").css({
		"display":"none"
	})
	$(".main-right1").css("display","none")
	$("title").text($(this).attr("title"))
})
