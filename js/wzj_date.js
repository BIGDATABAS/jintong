/*
* @Author: wzj1136
* @Date:   2018-09-27 11:46:51
* @Last Modified by:   wzj1136
* @Last Modified time: 2018-09-28 15:14:45
*/
$(function(){
	$(".date").click(function(){
		$(".order_timeout").slideDown("fast");
	})
	$(".day_son").click(function(){
		let i=$(this).index();
		$(".day_son").removeClass('bot_solid');
		$(this).addClass('bot_solid');
		$(".day_choose").fadeOut('slow');
		$(".day_choose").eq(i).fadeIn('slow');

		$(".date_before").html($(this).children('.date_after').html());

	})

		$(".day_day").click(function(){
		$(".day_day").removeClass('active');
		$(this).addClass('active');
		$("span.date").html($(this).html());
		})

	$(".close").click(function(){
		$(".order_timeout").slideUp("fast");
	})
	$(".yes").click(function(){
		$(".order_timeout").slideUp("fast");
	});
	
})