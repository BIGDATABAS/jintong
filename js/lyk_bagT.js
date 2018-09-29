$(function () {
    $(".sel .selIn li").click(function () {
        $(this).addClass("hot");
        $(this).siblings().removeClass("hot");

        let date=$(this).children().eq(1).children().eq(1).text();
        let dates=parseFloat(date).toFixed(1);
        $("input").val(dates);
    })
})