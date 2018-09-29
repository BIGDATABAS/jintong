let dot_Big = $(".Bathroom li");
let dot_Small = $(".choose li");
let btn_Small = $(".choose li .ch_dot");
let non = $(".choose li .container");

dot_Big.click(function () {
    dot_Big.removeClass("Ba_fire");
    $(this).addClass("Ba_fire");
});
dot_Small.click(function () {
    dot_Small.find("p").removeClass("ch_Deep");
    btn_Small.css("display", "none");
    non.css("display", "none");
    $(this).find("p").addClass("ch_Deep");
    $(this).find("p").next(btn_Small).css("display", "block");
    let i = $(this).index();
    non.eq(i).css("display", "block");
});