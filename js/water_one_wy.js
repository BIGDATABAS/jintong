
$(function(){
	let top=$(".water_child");
	top.click(function(){
		let i=$(this).index();
		top.removeClass('color');
		top.eq(i).addClass('color');
		$(this).siblings().children(".top_down").css("display","none");
		$(this).children(".top_down").slideToggle("fast");
	});
})