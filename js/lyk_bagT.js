$(function () {
    $(".sel .selIn li").click(function () {
        $(this).addClass("hot");
        $(this).siblings().removeClass("hot");
    })
})