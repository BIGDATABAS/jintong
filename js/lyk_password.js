$(function () {
    let i=$("input").index();
    $(".kbord").click(function () {
        $("input").eq(i).addClass("pasw sdow");
        i++;
    })
})