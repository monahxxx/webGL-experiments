//–––––––––––––––––––––––––––––––––––––––––
document.addEventListener("DOMContentLoaded", function(event) {

    var Paralax = function () {
        var self = this,
            currentScrollPosition,
            createdCounter = 0,
            sectionsConf = [],
            pauseScroll = 300,
            scrollDuration = 2500,
            startPosition = 1000,
            clientWidth = document.documentElement.clientWidth,
            offset = 500,
            pathDuration = (clientWidth + offset - 30) / 2,
            isPauseMode = false;

        // number of pixels for pause

        var getCurrentSection = function (currentScroll) {
            var currentSection;
            currentSection = Math.floor((currentScroll - startPosition) / scrollDuration);
            return currentSection;
        };


        self.sectionAnimate = function (scrollPosition) {
            if (scrollPosition < startPosition) {
                resetAnimation();
            } else if (scrollPosition > startPosition) {
                currentScrollPosition = scrollPosition;
                startAnimation(getCurrentSection(scrollPosition));
            }
        };

        var tempValue = null;
        var startAnimation = function (sectionId) {
            if (sectionId < createdCounter) {
                var currentElem = $("#" + sectionId),
                    currentElemContent = $(".content", currentElem),
                    currentElemTitle = $(".title", currentElem),
                    currentElemImg = $(".image", currentElem),
                    currentElemText = $(".text", currentElem);


                var scrollValue = currentScrollPosition - startPosition - offset - scrollDuration * sectionId,
                    rightScrollValue = -currentScrollPosition + startPosition + offset + scrollDuration * sectionId + 130;


                if (currentScrollPosition - startPosition > pathDuration + scrollDuration * sectionId) {
                    isPauseMode = true;
                }
                if (currentScrollPosition - startPosition > pathDuration + pauseScroll + scrollDuration * sectionId) {
                    isPauseMode = false;
                    scrollValue -= pauseScroll;
                    rightScrollValue += pauseScroll;
                }


                if (sectionId > 0) {
                    $("#" + (sectionId - 1)).removeClass("active");
                }

                if (!isPauseMode) {
                    currentElem.addClass("active");
                    currentElemImg.css({"transform": "translateX(" + scrollValue + "px)"});
                    currentElemContent.css({"transform": "translateX(" + rightScrollValue + "px)"});
                }
            }
        };

        var resetAnimation = function () {
            $('.section').removeClass("active");
        };


        self.createSection = function (config) {
            if (config) {
                config.forEach(function (config) {
                    this.sectionConfig = {
                        title: config.title || "", //title if section
                        text: config.text || "", //text
                        imageUrl: config.imgUrl || "", // URL for section image
                        startPoint: 0 + 1000 * createdCounter, //when show
                        endPoint: this.startPoint + 2000 // when hide
                    }

                    var template =
                        '<div class="section" id="' + createdCounter + '" style="z-index:' + (createdCounter + 10) + '">' +
                        '<div class="content_wrap">' +
                        '<div class="image">' +
                        '<img src="images/palmer.png" height="500" width="auto"/>' +
                        '</div>' +
                        '<div class="content">' +
                        '<div class="title">' +
                        '<h2>' + this.sectionConfig.title + '</h2>' +
                        '</div>' +
                        '<div class="text">' +
                        this.sectionConfig.text +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';


                    $("#paralax").append(template);

                    createdCounter++;
                    sectionsConf.push(config);
                });
            } else {
                return;
            }
        }
    };


    var sections = new Paralax();
    sections.createSection([{
        title: "TEST SECTION",
        text: "TEXT",
        imageUrl: "images/palmer.png"
    }, {
        title: "Second TEST SECTION",
        text: "second TEXT",
        imageUrl: "images/palmer.png"
    }, {
        title: "THIRD TEST SECTION",
        text: "THIRD TEXT",
        imageUrl: "images/palmer.png"
    }]);


    var scro,
        bkg = document.querySelector("#image");


    var headerBlocks = {
        self: document.querySelector("#header"),
        top: document.querySelector(".top"),
        title: document.querySelector(".evo"),
        bottom: document.querySelector(".bigest"),
        caption: document.querySelector(".caption"),
        copyright: document.querySelector(".copyright")
    };


    function headerAnimate() {
        headerBlocks.caption.style.opacity = 1 - scro / 200;
        headerBlocks.title.style.opacity = 1 - scro / 500;
        headerBlocks.copyright.style.transform = "translateY(" + -scro / 8 + "px)";

        if (scro > 1300) {
            headerBlocks.self.style.opacity = 1 - scro / 1900;
        } else {
            headerBlocks.self.style.opacity = 1;
        }

        headerBlocks.top.style.transform = "translateX(" + scro + "px)";
        headerBlocks.bottom.style.transform = "translateX(" + -scro + "px)";

    }

    $(window).scroll(function () {
        scro = $(this).scrollTop();

        // requestAnimationFrame(function () {
            sections.sectionAnimate(scro * 0.5);
            headerAnimate();
        // });
    });

    $(window).mousemove(function (e) {
        // requestAnimationFrame(function () {
        //     bkg.style.transform = "translateX("+e.screenX/50+"px) translateY("+e.screenY/50+"px)";
        // });
    });
});