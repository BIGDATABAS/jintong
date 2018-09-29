$(function() {
    $(".sele ul li").click(function () {
        $(this).addClass("col");
        $(this).siblings().removeClass("col");
    })
    $(".sele ul li").eq(0).click(function () {
        $(".using").css("display","block");
        $(".using").siblings().css("display","none");
    })
    $(".sele ul li").eq(1).click(function () {
        $(".used").css("display","block");
        $(".used").siblings().css("display","none");
    })
    $(".sele ul li").eq(2).click(function () {
        $(".dateBack").css("display","block");
        $(".dateBack").siblings().css("display","none");
    })
})