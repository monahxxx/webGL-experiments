document.addEventListener("DOMContentLoaded", function(event) {
    var isCanavasScrolled = false;

    var switchScroll = function () {
        if(isCanavasScrolled){
            $("#canvas").addClass("scrolled");
        }else{
            $("#canvas").removeClass("scrolled");
        }
        console.log(isCanavasScrolled);
    };

    $(window).on('keydown ', function (e) {
        if(e.keyCode === 91){
            isCanavasScrolled = true;
            switchScroll();
        }
    });

    $(window).on('keyup ', function (e) {
        if(isCanavasScrolled){
            isCanavasScrolled = false;
            switchScroll();
        }
    });
});