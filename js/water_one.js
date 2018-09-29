/*
* @Author: wzj1136
* @Date:   2018-09-26 22:43:05
* @Last Modified by:   wzj1136
* @Last Modified time: 2018-09-29 15:01:05
*/
$(function(){
	let top=$(".zong");
	top.click(function(){
		let i=$(this).index();
		console.log(i);
		top.removeClass('color');
		$(this).addClass('color');
		$(this).parent().siblings().children('.top_down').slideUp("fast");
		$(this).siblings().slideToggle("fast");
		
		// $(".top_down").eq(i).slideToggle("fast");
	});
})