$(function() {
    $(".topt .topt-xx").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})
