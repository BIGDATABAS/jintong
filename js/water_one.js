/*
* @Author: wzj1136
* @Date:   2018-09-26 22:43:05
* @Last Modified by:   wzj1136
* @Last Modified time: 2018-09-28 16:15:19
*/
$(function(){
	let top=$(".water_child");
	top.click(function(){
		let i=$(this).index();
		top.removeClass('color');
		$(this).addClass('color');
		$(this).siblings().children(".top_down").css("display","none");
		$(this).children(".top_down").slideToggle("fast");
	});
})