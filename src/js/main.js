document.addEventListener("DOMContentLoaded", function(event) {
    var isCanavasScrolled = false;




    var switchScroll = function () {
        if(isCanavasScrolled){
            $("#paralax").addClass("scrolled");
        }else{
            $("#paralax").removeClass("scrolled");
        }
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