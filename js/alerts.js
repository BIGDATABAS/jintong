function find(renson,alerts,close,button,texts,mains){
    texts.click(function (e) {
        e.stopPropagation();
        texts.each(function () {
            $(this).children().eq(1).css("display","none");
        });
        $(this).children().eq(1).css("display","block");
        let main=$(this).children().children().eq(1).html();

        mains.text(main);
    });
    renson.click(function () {
        alerts.slideDown();
    });
    close.click(function () {
        alerts.slideUp();
    });
    button.click(function () {
        alerts.slideUp();
    });
}
function upload(camera) {
    camera.click(function () {
        $(this).prev().click();
        console.log($(this).prev());
    });
}
