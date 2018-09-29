$(function() {
    console.log($(".s1"));

    $(".Bathroom .Ba_no").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".Bathroom .Ba_no").eq(0).click(function(){
        $(".s1").css("display","block");
        $(".s1").siblings().css("display","none");
    })
    $(".Bathroom .Ba_no").eq(1).click(function(){
        $(".s2").css("display","block");
        $(".s2").siblings().css("display","none");
    })
    $(".Bathroom .Ba_no").eq(2).click(function(){
        $(".s3").css("display","block");
        $(".s3").siblings().css("display","none");
    })
})



