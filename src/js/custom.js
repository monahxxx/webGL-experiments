document.addEventListener("DOMContentLoaded", function(event) {
    // -----------
    // Paralax Class
    // -----------
    // var Paralax = function (sections) {
    //     var self = this,
    //         currentScrollPosition,
    //         clientWidth = document.documentElement.clientWidth,
    //         offset = clientWidth,
    //         isPauseMode = false,
    //         activeClass = "active_section",
    //         animationClass = "start_animation",
    //         sectionsArray = sections,
    //         previousScrollPos = 0,
    //         scrollDirection = true; // true - to bottom, false - to top
    //
    //     var scrollConfig = {
    //         startPosition:1000,
    //         pauseScroll:400,
    //         scrollDuration: offset * 2
    //     };
    //
    //
    //     var setScrollDirection = function (currentScroll) {
    //         if(currentScroll > previousScrollPos){
    //             scrollDirection = true;
    //         }else{
    //             scrollDirection = false;
    //         }
    //         previousScrollPos = currentScroll;
    //     };
    //
    //     var getCurrentSection = function (currentScroll) {
    //         var currentSection;
    //
    //         currentSection = Math.floor((currentScroll - scrollConfig.startPosition) / scrollConfig.scrollDuration);
    //         return currentSection;
    //     };
    //
    //     var setPosition = function (sectionId, position) {
    //         var currentElem = sectionsArray[sectionId].getSectionsConfig().elem,
    //             currentElemRight = currentElem.querySelector('.right .title');
    //
    //         removeActiveState();
    //         addActiveClass(sectionId);
    //
    //         currentElemRight.style.transform = "translateX("+ position +"px)";
    //     }
    //
    //     var startAnimation = function (sectionId) {
    //         if (sectionId < sectionsArray.length) {
    //             var positionValue = - currentScrollPosition
    //                                 + scrollConfig.startPosition
    //                                 + offset
    //                                 + scrollConfig.scrollDuration * sectionId;
    //
    //             if(scrollDirection){
    //                 if (currentScrollPosition - scrollConfig.startPosition > offset + scrollConfig.scrollDuration * sectionId) {
    //                     isPauseMode = true;
    //                 }
    //                 if (currentScrollPosition - scrollConfig.startPosition > offset + scrollConfig.pauseScroll + scrollConfig.scrollDuration * sectionId) {
    //                     isPauseMode = false;
    //                     // positionValue += scrollConfig.pauseScroll;
    //                 }
    //
    //                 // if (!isPauseMode) {
    //                     setPosition(sectionId, positionValue);
    //                 // }
    //
    //             }else{
    //                 if (currentScrollPosition - scrollConfig.startPosition < offset + scrollConfig.scrollDuration * sectionId) {
    //                     isPauseMode = true;
    //                 }
    //                 if (currentScrollPosition - scrollConfig.startPosition < offset - scrollConfig.pauseScroll + scrollConfig.scrollDuration * sectionId) {
    //                     isPauseMode = false;
    //                     // positionValue -= scrollConfig.pauseScroll;
    //                 }
    //
    //                 // if (!isPauseMode) {
    //                     setPosition(sectionId, positionValue);
    //                 // }
    //             }
    //         }
    //     };
    //
    //     var resetAnimation = function () {
    //         $('.section').removeClass("active_section");
    //         isPauseMode = false;
    //     };
    //
    //     var removeActiveState = function () {
    //         sectionsArray.forEach(function (section) {
    //             var elem = section.getSectionsConfig().elem;
    //             if(elem.classList.contains(activeClass) ){
    //                 elem.classList.remove(activeClass);
    //                 elem.classList.remove(animationClass);
    //             }
    //         });
    //     };
    //
    //     var addActiveClass = function (sectionId) {
    //         var currentElem = sectionsArray[sectionId].getSectionsConfig().elem;
    //
    //         if(currentElem.className.indexOf(activeClass) === -1){
    //             currentElem.className += ' ' + activeClass;
    //         }
    //     };
    //
    //     var addAnimateClass = function (sectionId) {
    //         var currentElem = sectionsArray[sectionId].getSectionsConfig().elem;
    //
    //         if(currentElem.className.indexOf(animationClass) === -1){
    //             currentElem.className += ' ' + animationClass;
    //         }
    //     };
    //
    //     self.sectionsAnimate = function (scrollPosition) {
    //         if (scrollPosition < scrollConfig.startPosition) {
    //             resetAnimation();
    //         }else if (scrollPosition > scrollConfig.startPosition) {
    //             startAnimation(getCurrentSection(scrollPosition));
    //         }
    //         currentScrollPosition = scrollPosition;
    //
    //         setScrollDirection(scrollPosition);
    //     };
    // };
    //
    //
    //
    // var AnimeteSection = function (section, id) {
    //     var self = this;
    //
    //     var sectionOption = {
    //             elem: section,
    //             id:id,
    //             className:section.className,
    //             animate: function () {}
    //         };
    //
    //
    //     var createSection = function (sectionElem) {
    //         if (sectionElem) {
    //             sectionElem.setAttribute("data-id", sectionOption.id);
    //             sectionOption.elem = sectionElem;
    //         }else{
    //             console.error("You have to pass elem to createSection function!");
    //         }
    //     };
    //     createSection(section);
    //
    //
    //     self.getSectionsConfig = function () {
    //         return sectionOption;
    //     };
    //
    //     self.getAnimate = function () {
    //         return sectionOption.animate;
    //     };
    //
    //     self.setAnimate = function (animationFun) {
    //         if(animationFun && typeof animationFun === 'function'){
    //             sectionOption.animate = animationFun;
    //         }else{
    //             console.error("You have to pass functtion to setAnimate function!");
    //         }
    //     }
    // };


    // var sectionsArray = [];
    // document.querySelectorAll(".section").forEach(function (item, index) {
    //     var section = new AnimeteSection(item, index);
    //     sectionsArray.push(section);
    // });
    //
    // sectionsArray[0].setAnimate(function () {
    //     alert("asfasf");
    // });



    // var sections = new Paralax(sectionsArray); // create section

    // -----------
    // spaceship navigation
    // -----------
    // var SpaceNavigation = function () {
    //     var self =  this,
    //         clientWidth = document.documentElement.clientWidth,
    //         documentHeight = document.querySelector("body").offsetHeight,
    //         positionWidth = document.querySelector(".fill_wrapper").offsetWidth,
    //         spaceIcons = document.querySelector("#space_shatle"),
    //         positionBlock = document.querySelector(".fill_block");
    //
    //     self.setPositionNav = function(currentScroll) {
    //         var currentPersentage = currentScroll / documentHeight * 100,
    //             navPosition = -100 + currentPersentage;
    //
    //         positionBlock.style.transform = "translateX(" + navPosition + "%)";
    //         spaceIcons.style.transform = "translateX(" + positionWidth*currentPersentage/100 + "px) rotate(90deg)";
    //     }
    //
    // };
    // var spaceNav = new SpaceNavigation();


    // -----------
    // header animation
    // -----------
    // var headerBlocks = {
    //     self: document.querySelector("#header"),
    //     top: document.querySelector(".top"),
    //     title: document.querySelector(".evo"),
    //     bottom: document.querySelector(".bigest"),
    //     caption: document.querySelector(".caption"),
    //     copyright: document.querySelector(".copyright")
    // };
    // function headerAnimate(scrollPosition) {
    //     if(scrollPosition < 1550){
    //         headerBlocks.caption.style.opacity = 1 - scrollPosition / 200;
    //         headerBlocks.title.style.opacity = 1 - scrollPosition / 500;
    //         headerBlocks.copyright.style.transform = "translateY(" + -scrollPosition / 8 + "px)";
    //
    //         headerBlocks.copyright.style.opacity = 1 - scrollPosition / 1500;
    //
    //
    //         headerBlocks.top.style.transform = "translateX(" + scrollPosition + "px)";
    //         headerBlocks.bottom.style.transform = "translateX(" + -scrollPosition + "px)";
    //     }else{
    //         return
    //     }
    // };


    // -----------
    // scroll function
    // -----------
    // (function onScrollAnimation() {
    //     var scro;
    //     $(window).scroll(function () {
    //         scro = $(this).scrollTop();
    //
    //         sections.sectionsAnimate(scro * 0.7);
    //         headerAnimate(scro);
    //         spaceNav.setPositionNav(scro);
    //     });
    // })();


    // -----------
    // bkg animate
    // -----------
    (function bkgAnimation() {
        var image = document.querySelector("#image"),
            imageSmall = document.querySelector("#image_small");

        $(window).mousemove(function (e) {
            requestAnimationFrame(function () {
                var xDirection = 1, yDirection = 1;

                image.style.transform =
                    "translateX("+ -e.screenX/300 * xDirection+"px) translateY("+e.screenY/100 * yDirection+"px)";
                imageSmall.style.transform =
                    "translateX("+ e.screenX/200 * xDirection +"px) translateY("+ - e.screenY/200 * yDirection+"px)";
            });
        });

	    var vid = document.getElementById("audio");
	    vid.volume = 0.1;
    })();
});