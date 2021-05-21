import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import Slider from './class/Slider.js';

jQuery.fn.exists = function () {
    return $(this).length;
}


class ModalPlugin extends ScrollbarPlugin {
    static pluginName = 'modal';

    static defaultOptions = {
        open: false,
    };

    transformDelta(delta) {
        return this.options.open ? { x: 0, y: 0 } : delta;
    }
}

Scrollbar.use(ModalPlugin, /* OverscrollPlugin */);


const projectFunc = {
    showBlogPopup: function (element) {
        let blogPopup = $(element).find('.blog__popup');
        let blogText = $(element).find('.blog__txt');

        const popupBlog = gsap.timeline({
            paused: true,
            reversed: true
        });

        popupBlog
            .to(blogPopup, {
                x: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.out"
            })
            .to(blogText, {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                delay: -0.2
            });

        popupBlog.play();
    },
    hideBlogPopup: function (element) {
        let blogPopup = $(element).find('.blog__popup');
        let blogText = $(element).find('.blog__txt');


        const popupBlog = gsap.timeline({
            paused: true,
            reversed: true
        });

        popupBlog
            .to(blogPopup, {
                xPercent: -100,
                duration: 1,
                ease: "power2.out"
            })
            .to(blogText,
                {
                    autoAlpha: 0,
                    y: -20,
                    ease: "power2.out"
                },
                '-=1');

        popupBlog.play();
    },
    hiddenTabs: function (index) {
        if ($('.include--app').exists()) {
            try {
                let includeBloc = document.querySelector('.include--app'),
                    tabsEl = includeBloc.querySelectorAll('.include__item'),
                    btnTab = includeBloc.querySelectorAll('.include__btn');

                tabsEl.forEach((element, i) => {
                    if (i != index) {
                        element.classList.remove('mf-show');
                        btnTab[i].classList.remove('mf-active');
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    showTabs: function (index) {
        if ($('.include--app').exists()) {
            try {
                let includeBloc = document.querySelector('.include--app'),
                    tabsEl = includeBloc.querySelectorAll('.include__item');
                tabsEl[index].classList.add('mf-show');
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    getScrollbarWidth: function () {
        let div, width = projectFunc.getScrollbarWidth.width;
        if (width === undefined) {
            div = document.createElement('div');
            div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
            div = div.firstChild;
            document.body.appendChild(div);

            width = projectFunc.getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
        }
        return width;
    },
    setSlider: function () {
        // if ($('.js-rate').exists()) {
        //     //  constructor(init, name, view, space, column, ratio, pagination = false, arrow = false, effect = '', custom = false, loop = true, direction = 'horizontal') {
        //     let rateSlider = new Slider(true, '.js-rate', 3, 40, 1, false, true, false, '', false, false);
        //     rateSlider.createSlider();

        //     $(window).on('resize load', function () {
        //         if ($(this).width() <= 1300) {
        //             rateSlider.updateSlider('space', 20);
        //             rateSlider.updateSlider('view', 2);
        //             rateSlider.updateSlider('ratio', true);
        //         }
        //         if ($(this).width() <= 1024) {
        //             rateSlider.updateSlider('space', 20);
        //         }
        //         if ($(this).width() <= 700) {
        //             rateSlider.updateSlider('view', 1);
        //         }
        //     }).resize();
        // }

        if ($('.client__slider').exists()) {
            if ($('.client__slider').exists()) {
                const SliderObj = new Slider('.js-slider-client', 5, 36);
                SliderObj.createSlider();

                $(window).resize(function () {
                    if ($(this).width() <= 1024 && $(this).width() >= 768) {
                        SliderObj.updateSlider('space', 20);
                    }
                    if ($(this).width() <= 768 && $(this).width() >= 621) {
                        SliderObj.updateSlider('pagination');
                        SliderObj.updateSlider('view', 4);
                        SliderObj.updateSlider('space', 20);
                    }
                    if ($(this).width() <= 620 && $(this).width() >= 501) {
                        SliderObj.updateSlider('pagination');
                        SliderObj.updateSlider('view', 3);
                        SliderObj.updateSlider('space', 20);
                    }
                    if ($(this).width() <= 500) {
                        SliderObj.updateSlider('pagination');
                        SliderObj.updateSlider('view', 2);
                        SliderObj.updateSlider('space', 20);
                    }
                }).resize();
            }
        }

        // if ($('.js-info-slider').exists()) {
        //     var infoSlider = new Slider(true, '.js-info-slider', 1, 10, 1, true, true, true, 'fade', true);
        //     infoSlider.createSlider();

        //     if ($('.js-graph-slider').exists()) {
        //         let graphSlider = new Slider(true, '.js-graph-slider', 1, 10, 1, true, false, true, 'fade', false);
        //         graphSlider.createSlider();

        //         graphSlider.slider.controller.control = infoSlider.slider;
        //         infoSlider.slider.controller.control = graphSlider.slider;
        //     }
        // }

        // if ($('.js-slider-partners').exists()) {
        //     let partnerSlider = new Slider(false, '.js-slider-partners', 4, 82, 8, false, false, false);
        //     partnerSlider.createSlider();

        //     if (window.matchMedia("(min-width: 1300px)").matches) {
        //         partnerSlider.updateSlider('space', 50);
        //     }
        //     if (window.matchMedia("(max-width: 1024px)").matches && window.matchMedia("(min-width: 501px)").matches) {
        //         partnerSlider.updateSlider('space', 30);
        //         partnerSlider.updateSlider('view', 3);
        //     }
        //     if (window.matchMedia("(max-width: 500px)").matches && window.matchMedia("(min-width: 319px)").matches) {
        //         partnerSlider.updateSlider('space', 20);
        //         partnerSlider.updateSlider('view', 2);
        //     }
        // }

        if ($('.works').exists()) {
            let SliderObj = new Slider('.js-work-slider', 2, 40);
            SliderObj.createSlider();
            SliderObj.updateSlider('pagination');
            SliderObj.updateSlider('arrow');

            $(window).resize(function () {
                if ($(this).width() <= 1300 && $(this).width() >= 1025) {
                    SliderObj.updateSlider('space', 30);
                }
                if ($(this).width() <= 1024 && $(this).width() >= 621) {
                    SliderObj.updateSlider('space', 20);
                }
                if ($(this).width() <= 620 && $(this).width() >= 320) {
                    SliderObj.updateSlider('view', 1);
                }
                else {
                    SliderObj.updateSlider('view', 2);
                }
            }).resize();
        }

        if ($('.blog__slider').exists()) {
            let SliderObj = new Slider('.js-blog-slider', 3, 40);
            SliderObj.createSlider();
            SliderObj.updateSlider('pagination');
            SliderObj.updateSlider('arrow');

            $(window).resize(function () {
                if ($(this).width() <= 1024 && $(this).width() >= 621) {
                    SliderObj.updateSlider('space', 20);
                    SliderObj.updateSlider('view', 2);
                }
                if ($(this).width() <= 700 && $(this).width() >= 320) {
                    SliderObj.updateSlider('view', 1);
                }
                else {
                    SliderObj.updateSlider('view', 2);
                }
            }).resize();
        }

        if ($('.case__slider--1').exists()) {
            try {
                var caseSlider1 = new Swiper('.case__slider--1', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    breakpoints: {
                        1200: {
                            spaceBetween: 65,
                        }
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }

        if ($('.case__slider--2').exists()) {
            try {
                var caseSlider2 = new Swiper('.case__slider--2', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    breakpoints: {
                        1200: {
                            spaceBetween: 65,
                        }
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }


        if ($('.case__slider--3').exists()) {
            try {
                var caseSlider3 = new Swiper('.case__slider--3', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    breakpoints: {
                        1200: {
                            spaceBetween: 65,
                        }
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};

window.addEventListener('load', () => {
    let locked = document.querySelector('html');
    locked.style.setProperty('--wScroll', projectFunc.getScrollbarWidth() + 'px');
});

const setTabs = () => {
    if ($('.include__btn').exists()) {
        try {
            let includeBloc = document.querySelector('.include--app'),
                btnTab = includeBloc.querySelectorAll('.include__btn');

            projectFunc.hiddenTabs(0);

            btnTab.forEach((element, index) => {
                element.addEventListener('click', function () {
                    this.classList.add('mf-active');
                    projectFunc.showTabs(index);
                    projectFunc.hiddenTabs(index);
                });
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}


const setAccordion = () => {
    //=======Accordion-Contacts===========
    if ($('.js-ac-contacts').exists()) {

        $('.contacts__item').each(function () {
            const accordionHead = $(this).find($('.contacts__panel'));
            const accordionBody = $(this).find($('.contacts__list'));
            const accordionIcon = $(this).find($('.contacts__pic'));
            accordionHead.click(function () {

                this.classList.toggle('is-open');
                $(this).find('.contacts__pic').toggleClass('contacts__pic--active');

                let content = this.nextElementSibling;

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }

    //===========Accordion=============
    if ($('.accordion__panel').exists()) {
        let accordions = document.getElementsByClassName("accordion__panel");

        for (var i = 0; i < accordions.length; i++) {
            accordions[i].onclick = function () {
                this.classList.toggle('is-open');
                $(this).find('.accordion__pic').toggleClass('accordion__pic--active');


                let content = this.nextElementSibling;

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        }
    }

    setTimeout(() => {
        $('.contacts__grid').css('opacity', '1');
    }, 500);
}


/*if ($('.blog__item').exists()) {

    const blogItem = gsap.utils.toArray('.blog__item');

    const hoverEffectBlog = (state, element) => {
        const overlay = element.querySelector('.blog__popup');
        const info = element.querySelector('.blog__txt');

        const showInfo = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.6 },
            ease: Sine.easeInOut
        })

        const hideInfo = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.6 }
        })

        if (state) {

            showInfo
                .to(
                    overlay,
                    {
                        x: 0,
                        xPercent: 0,
                        ease: Sine.easeInOut
                    }
                )
                .to(
                    info,
                    0.3,
                    {
                        autoAlpha: 1,
                        ease: Sine.easeInOut
                    })

            hideInfo.reverse();
            showInfo.play();
        }
        else {
            hideInfo
                .to(
                    overlay,
                    {
                        //x: -100,
                        xPercent: -100,
                        ease: Sine.easeInOut
                    }
                )
                .to(
                    info, 0.5,
                    {
                        autoAlpha: 0,
                        ease: Sine.easeInOut,
                        duration: 0.3
                    })

            showInfo.reverse();
            hideInfo.play();
        }
    }

    blogItem.forEach(element => {
        element.addEventListener('mouseenter', () => {
            hoverEffectBlog(true, element);
        });

        element.addEventListener('mouseleave', () => {
            hoverEffectBlog(false, element);
        });
    })
}*/

if ($('.header__inner').exists) {
    try {
        let $window = $(window),
            $target = $(".header__inner"),
            $h = $target.offset().top;
        $window.on('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > $h) {
                $target.addClass("mf-fixed");
                return;
            } else {
                $target.removeClass("mf-fixed");
            }
            return;
        });
    } catch (err) {
        console.log(err);
    }
}





function init() {

    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0,
        rotation: 10,
        xPercent: -5,
        yPercent: -50,
        transformOrigin: 'left center',
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, {
            rotation: 10,
            scaleX: 0,
            xPercent: -5
        }, {
            duration: 0.8,
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'Power4.inOut',
            transformOrigin: 'left center'
        });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, {
            duration: 0.8,
            scaleX: 0,
            xPercent: 5,
            rotation: -10,
            transformOrigin: 'right center',
            ease: 'Power4.inOut'
        });
    }

    // barba.hooks.enter(() => {
    //     setTimeout(() => {
    //         ScrollTrigger.update();
    //         ScrollTrigger.refresh(true);
    //         checkPage();
    //         animateBildboard();
    //         initContent();
    //         initSmoothScrollBar(true);
    //     }, 10);
    // });


    // barba.init({
    //     transitions: [
    //         {
    //             name: 'page',
    //             to: {
    //                 namespace: ['page']
    //             },
    //             async leave() {
    //                 await loaderIn();
    //             },
    //             async enter() {
    //                 loaderAway();
    //             },
    //         }
    //     ]
    // });

    initContent();

}
animateBildboard();

function checkPage() {

    let body = $('body');
    let header = body.find('header');
    let page = body.find('.b-page--no-bildboard');

    if (page.exists()) {
        header.addClass('mf-transparent mf-style');
    }
}

checkPage();

window.addEventListener('load', function () {
    init();

});

const setCursor = () => {
    const $bigCircle = document.querySelector('.cursor__circle--big');
    const $smallCircle = document.querySelector('.cursor__circle--small');
    const $smallPlus = document.querySelector('.cursor__plus');
    const $smallPlusArea = document.querySelector('.cursor__plus--area')
    const $hoverables = document.querySelectorAll('.link');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover);
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
        gsap.to($bigCircle, .5, {
            x: e.clientX,
            y: e.clientY
        })
        gsap.to($smallCircle, 0.01, {
            x: e.clientX,
            y: e.clientY
        })
        gsap.to($smallPlus, .1, {
            x: e.clientX,
            y: e.clientY
        })
    }

    // Hover an element
    function onMouseHover() {
        gsap.to('#bigCircle', {
            attr: {
                r: 20,
                fill: 'white'
            }
        });

        gsap.to('#smallCircle', {
            attr: {
                r: 3,
            }
        });
    }

    function onMouseHoverOut() {
        gsap.to('#bigCircle', {
            attr: {
                r: 15,
                fill: 'transparent'
            }
        });

        gsap.to('#smallCircle', {
            attr: {
                r: 3,
            }
        });
    }

    // Hover img an element
    function onMouseHoverArea() {
        gsap.to($bigCircle, .3, {
            fill: '#212121',
            mixBlendMode: 'normal'
        })
        gsap.to($smallCircle, .3, {
            fill: 'transparent'
        })
        gsap.to($smallPlusArea, 0.3, {
            stroke: '#DEDEDE'
        })
    }
    function onMouseHoverAreaOut() {
        gsap.to($bigCircle, 0.3, {
            fill: 'transparent',
            mixBlendMode: 'difference'
        })
        gsap.to($smallCircle, 0.3, {
            fill: '#DEDEDE'
        })
        gsap.to($smallPlusArea, 0.3, {
            stroke: 'transparent'
        })
    }
}

function onAnimationComplete(link) {

}

function animateBildboard() {
    let bildboardTL = new TimelineMax({
        ease: "power2.out",
        defaults: { duration: 1 }
    });

    gsap.set(
        ['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container', '.rating'], {
        autoAlpha: 0
    }
    );

    gsap.set(
        '.bildboard__title', {
        x: -70
    }
    );

    gsap.set(
        ['.bildboard__quote', '.rating', '.bildboard__text'], {
        y: -20
    }
    );

    gsap.set(
        ['.rating'], {
        y: 20
    }
    );



    if ($('.bildboard__video').exists()) {
        let video = document.querySelector('.bildboard__video');
        video.currentTime = 0;
        video.load();
    }

    bildboardTL
        .to(
            '.bildboard__video',
            {
                duration: 1.5,
                autoAlpha: 1,

            },
            "+=0.7"
        )
        .to(
            '.header__container', {
            autoAlpha: 1,
            duration: 1,
        },
            "-=1"
        )
        .to(
            '.bildboard__text', {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
        },
            "-=0.5"
        )
        .to(
            '.bildboard__title', {
            autoAlpha: 1,
            x: 0,
        },
            "-=1"
        )
        .to(
            '.bildboard__quote', {
            autoAlpha: 1,
            y: 0,
        },
            "-=0.7"
        )
        .to(
            '.rating',
            {
                autoAlpha: 1,
                y: 0

            },
            "-=0.3"
        )



}

const setWidthBtn = () => {
    if ($('.btn--special').exists()) {

        let btnSpecial = document.querySelectorAll('.btn--special');


        btnSpecial.forEach((element, _) => {
            let widthhEl = $(element).find('.btn__text').innerWidth();
            $(element).css({
                'width': widthhEl + 39 + 'px'
            });
        });
    }
}

function setGallery() {
    if ($('#certificate').exists()) {
        $('#certificate').lightGallery();
    }
}

const showPlace = () => {
    gsap.set('.place__bg', {
        yPercent: 0,
        transformOrigin: 'left center',
    });

    const place = gsap.timeline({
        paused: true
    });

    const placeContent = gsap.timeline({
        paused: true
    });

    gsap.set('.place__title', {
        yPercent: -40,
        autoAlpha: 0
    });

    gsap.set('.place__text', {
        autoAlpha: 0
    })


    placeContent
        .to('.place__title', {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1
        })
        .to('.place__text', {
            autoAlpha: 1
        });

    ScrollTrigger.create({
        trigger: '.place',
        start: 'top-=150% top',
        end: 'bottom-=80',
        animation: placeContent,
    });
}

const showService = () => {
    gsap.set('.services__item', {
        xPercent: -5,
        autoAlpha: 0
    });

    const service = gsap.timeline({
        paused: true
    });

    service
        .to('.services__item', {
            xPercent: 0,
            autoAlpha: 1,
            stagger: 0.3,
            duration: 0.5

        });

    ScrollTrigger.create({
        trigger: '.services__items',
        start: 'top-=230% top',
        end: 'bottom',
        animation: service,
        // scrub: true,
    });

    const serviceHover = (element, state) => {
        const contentText = $(element).find('.services__content');
        const serviceBg = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.5 }
        });

        const serviceBgLeave = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.5 }
        });

        serviceBg
            .to(
                element,
                {
                    backgroundColor: "#00A4AD",
                    color: 'white',
                    ease: Back.easeOut.config(1.7)
                }
            )
            .to(
                contentText,
                {
                    color: 'white',
                    ease: Back.easeOut.config(1.7)
                },
                '-=0.5'
            )

        serviceBgLeave
            .to(
                element,
                {
                    backgroundColor: "transparent",
                    color: 'white',
                    ease: Back.easeOut.config(1.7)
                }
            )
            .to(
                contentText,
                {
                    color: '#676767',
                    ease: Back.easeOut.config(1.7)
                },
                '-=0.5'
            )


        if (state) {
            serviceBg.play();
            serviceBgLeave.reverse();
        }
        else {
            serviceBgLeave.play();
            serviceBg.reverse();
        }




    }

    gsap.utils.toArray('.services__item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            serviceHover(this, true);
        });

        item.addEventListener('mouseleave', function () {
            serviceHover(this, false);
        });
    });
}

const showCallForm = () => {
    gsap.set('.call__grid', {
        xPercent: -100,
        autoAlpha: 0,
        duration: 1
    });

    const call = gsap.timeline({
        paused: true
    });

    call
        .to('.call__grid', {
            xPercent: 0,
            autoAlpha: 1,
            duration: 2,
            ease: Back.easeOut.config(1.7)
        });

    ScrollTrigger.create({
        trigger: '.call',
        start: 'top-=130% top',
        end: 'bottom',
        animation: call,
    });
}

const setMap = (draw) => {
    if ($('#map').exists()) {
        ymaps.ready(init);

        function init() {

            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                center: [53.377146, 58.985573],
                zoom: 17,
                controls: []
            }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '/images/icons/marker.svg',
                    // Размеры метки.
                    iconImageSize: [48, 64],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -64],
                    openBalloonOnClick: false,
                    hasHint: false,
                    hasBalloon: false,
                    cursor: 'INHERIT'
                });

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');

            if (draw) {
                myMap.container.fitToViewport();
            }
        }
    }


}

$(window).on('resize load', function () {
    if ($(this).width() <= 500) {
        if ($('.seo-result__items').exists()) {
            $(function () {
                var csObj = new Object();
                csObj.axis = "x";
                csObj.theme = "my-theme";
                csObj.advanced = {
                    autoExpandHorizontalScroll: true
                };
                csObj.scrollButtons = {
                    scrollType: "pixels",
                    scrollAmount: 300
                };
                csObj.mouseWheel = {
                    invert: true
                };
                $(".seo-result__items").mCustomScrollbar(csObj);
            });
        }
    }
    else {
        $(".seo-result__items").mCustomScrollbar('destroy');
    }
});


const getHeight = (elem) => {
    const heightRes = $(elem).outerHeight();
    return heightRes;
}

const showMenu = (element, heightEl) => {
    const menutl = new TimelineMax({
        defaults: { duration: 0.3 }
    });

    menutl
        .to(
            element,
            {
                height: heightEl,
                ease: "power1.out",
            }
        )
        .to(
            element,
            {
                autoAlpha: 1,
            },
            '-=0.1'
        )
}

const hideMenu = (element) => {
    const menutl = new TimelineMax({
        defaults: { duration: 0.3 }
    });

    menutl
        .to(
            element,
            {
                autoAlpha: 0,
            }
        )
        .to(
            element,
            {
                height: 0,
                ease: "power1.out",
            },
            '-=0.1'
        )
}

if ($('.js-list').exists()) {
    const navPanel = document.querySelector('.header__nav--tablet');
    const btnList = navPanel.querySelector('.js-list');

    btnList.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        $('.js-dropMenu').toggle(400);
    });
}

if ($('.include-menu').exists()) {
    var menu = $('.include-menu__menu');
    var btn = $('.js-menuBtn');

    btn.click(function () {
        $(this).toggleClass('active');
        menu.toggleClass('active');
    });
}

const lockedDOM = (status) => {
    if (status) {
        $('html').css('overflow', 'hidden');
    }
    else {
        $('html').css('overflow', 'auto');
    }
}

const stateObject = (status) => {
    if (status == 'start') {
        formShow('.js-form-request', true);
    }
    else {
        formShow('.js-form-request', false);
    }
}

const showOverlay = (status) => {
    if ($('.js-overlay').exists()) {

        const overlayEl = document.querySelector('.js-overlay');

        const showOvTl = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.6 },
            onStart: lockedDOM,
            onStartParams: [true],
            onComplete: stateObject,
            onCompleteParams: ['start'],
        });

        const hideOvTl = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.3 },
            onStart: stateObject,
            onStartParams: ['end'],
            onComplete: lockedDOM,
            onCompleteParams: [false]
        });

        showOvTl
            .to(
                overlayEl,
                {
                    autoAlpha: 1,
                    ease: "power2.out"
                }
            )

        hideOvTl
            .to(
                overlayEl,
                {
                    autoAlpha: 0,
                    ease: "power2.out"
                },
                '+=0.6'
            )

        if (status) {
            showOvTl.reverse();
            showOvTl.play();
        }
        else {
            hideOvTl.reverse();
            hideOvTl.play();
        }
    }
}

const formShow = (element, status) => {

    if ($(element).exists()) {
        const element = document.querySelector('.js-form-request');
        const formShowTl = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.5 }
        });

        const formHideTl = new TimelineMax({
            reversed: true,
            paused: true,
            defaults: { duration: 0.5 }
        });

        formHideTl
            .to(
                element,
                {
                    autoAlpha: 0,
                    yPercent: -100,
                    xPercent: -50,
                    ease: "power2.out"
                }
            )

        formShowTl
            .set(
                element, {
                yPercent: -100,
                xPercent: -50,
            }
            )
            .to(
                element,
                {
                    autoAlpha: 1,
                    yPercent: -50,
                    //xPercent: -50,
                    ease: "power2.out"
                }
            )

        if (status) {
            formHideTl.reverse();
            formShowTl.play();
        }
        else {
            formShowTl.reverse();
            formHideTl.play();
        }
    }
}







const changeHeightPage = () => {
    let footerHeight,
        paddingBottom,
        outerHeightEl;

    footerHeight = document.querySelector('.footer').offsetHeight;
    outerHeightEl = document.documentElement.clientHeight;
    paddingBottom = outerHeightEl - (outerHeightEl - footerHeight);

    $('.b-page').css('padding-bottom', paddingBottom);
}

if ($('#request').exists()) {
    try {

        $('a[href^="#"]').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                var el = $(this);
                var dest = el.attr('href'); // получаем направление

                if (dest !== undefined && dest !== '') {
                    // проверяем существование
                    $('html').animate({
                        scrollTop: $(dest).offset().top - 130 // прокручиваем страницу к требуемому элементу

                    }, {
                        duration: 1000,   // по умолчанию «400»
                        easing: "linear" // по умолчанию «swing»
                    }
                    );
                }
                return false;
            });
        });
    }
    catch (err) {
        console.log(err);
    }
}

const setPhoneMask = () => {
    if ($('.js-phone-mask').exists()) {
        let phoneEl = document.querySelectorAll('.js-phone-mask');

        for (let i = 0; i < phoneEl.length; i++) {
            $(phoneEl[i]).mask("+7(999) 999-99-99");
        }
    }
}

function checkPacket() {
    if ($('.rate__item').exists()) {
        $('.rate__item').each(function () {
            if ($(this).find('.switch').is(':checked')) {
                $(this).find('.rate__right').addClass('rate__right--active');
            } else {
                $(this).find('.rate__right').removeClass('rate__right--active');
            }
        });
    }
}

if ($('.rate__item .switch').exists()) {
    try {
        $('.rate__item .switch').on('click', function () {
            checkPacket();
        });
    }
    catch (err) {
        console.log(err);
    }
}

const checkInput = () => {
    $('input[type="file"]').change(function () {
        let label = $('.file .file__label');
        if (typeof (this.files) != 'undefined') {
            if (this.files.length == 0) {
                label.removeClass('withFile').text(label.data('default'));
            }
            else {
                let file = this.files[0];
                let name = file.name;
                label.addClass('withFile').text(name);
            }
        }
        else {
            let name = this.value.split("\\");
            label.addClass('withFile').text(name[name.length - 1]);
        }
        return false;
    });
}



function initImageParallax() {

    const getVh = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        return vh;
    }

    // select all sections .with-parallax
    gsap.utils.toArray('.with-parallax').forEach(section => {

        // get the image
        const image = section.querySelector('picture');
        const info = section.querySelector('.portfolio__left');

        // create tween for the image
        gsap.to(image, {
            yPercent: 25,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                scrub: true,
            }
        });

        $(window).resize(function () {
            if ($(this).width() > 620) {
                gsap.to(info, 10, {
                    yPercent: -50,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        scrub: true,
                    }
                });
            }
            if ($(this).width() <= 620) {
                gsap.to(info, 10, {
                    yPercent: -30,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        scrub: true,
                    }
                });
            }
        }).resize();
    });

}

function updateBodyColor(color) {
    // gsap.to('.fill-background', { backgroundColor: color, ease: 'none'});
    document.documentElement.style.setProperty('--bcg-fill-color', color);
}

function initPinSteps() {
    const getVh = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        return vh;
    }


    if ($('.js-pin-portfolio').exists()) {
        try {
            gsap.utils.toArray('.portfolio__item').forEach((stage, index) => {

                ScrollTrigger.create({
                    trigger: stage,
                    start: 'top center',
                    end: () => `+=${stage.clientHeight + getVh() / 10}`,
                    onEnter: () => updateBodyColor(stage.dataset.color),
                    onEnterBack: () => updateBodyColor(stage.dataset.color),
                });

            });

            const pWrapper = document.querySelector('.portfolio');

            const pin = ScrollTrigger.create({
                trigger: pWrapper,
                start: 'top center',
                end: 'bottom-=200',
                onEnter: () => {
                    if (gsap.utils.toArray('.portfolio__item').length > 0) {
                        updateBodyColor(gsap.utils.toArray('.portfolio__item')[0].dataset.color);
                    }
                },
                onLeave: () => updateBodyColor(pWrapper.dataset.color),
                onLeaveBack: () => updateBodyColor(pWrapper.dataset.color),
                toggleClass: {
                    targets: '.portfolio',
                    className: 'mf-bg-portfolio'
                },
                pinReparent: true,
                pinSpacing: false,
                // markers: true
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}

function initPinPortfolio() {
    const getVh = () => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        //console.log(vh);
        return vh;
    }


    if ($('.js-pin').exists()) {
        try {
            gsap.utils.toArray('.portfolio__item').forEach((stage, index) => {

                // console.log(stage.clientHeight + getVh() / 10);

                console.log($(stage).offset().top);

                ScrollTrigger.create({
                    trigger: stage,
                    start: () => `top ${$(gsap.utils.toArray('.portfolio__item')[0]).offset().top - 20}`,
                    end: () => `+=${stage.clientHeight + getVh() / 10}`,
                    onEnter: () => updateBodyColor(stage.dataset.color),
                    onEnterBack: () => updateBodyColor(stage.dataset.color),
                    // markers: true
                });

            });

            const pWrapper = document.querySelector('.js-pin');

            const pin = ScrollTrigger.create({
                trigger: pWrapper,
                start: 'top top',
                end: 'bottom-=200',

                onEnter: () => {
                    if (gsap.utils.toArray('.portfolio__item').length > 0) {
                        updateBodyColor(gsap.utils.toArray('.portfolio__item')[0].dataset.color);
                    }
                },
                onLeave: () => updateBodyColor(pWrapper.dataset.color),
                onLeaveBack: () => updateBodyColor(pWrapper.dataset.color),
                toggleClass: {
                    targets: '.portfolio',
                    className: 'mf-bg-portfolio'
                },
                toggleClass: {
                    targets: '.js-pin',
                    className: 'mf-pin-color'
                },
                pinReparent: true,
                pinSpacing: false,
                // markers: true
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}


function initSmoothScrollBar(position) {
    let bodyScrollBar;

    if (window.matchMedia("(max-width:1300px)").matches) {
        if ($('.reach__cover').exists()) {
            try {
                Scrollbar.init(document.querySelector('#inner-scrollbar'), {
                    damping: 0.04,
                    alwaysShowTracks: false
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    if (window.matchMedia("(max-width:1100px)").matches && window.matchMedia("(min-width:620px)").matches) {
        if ($('.progress__cover').exists()) {
            try {
                Scrollbar.init(document.querySelector('#progress-scrollbar'), {
                    damping: 0.3,
                    alwaysShowTracks: false
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    else {
        Scrollbar.destroy(document.querySelector('#progress-scrollbar'));
    }



    $(window).on('resize load', function () {
        if ($(this).width() > 620) {
            bodyScrollBar = Scrollbar.init(document.querySelector('#viewport'), {
                damping: 0.04,
                delegateTo: document,
                renderByPixel: true,
                continuousScrolling: true,
            });
        }

        if ($(this).width() <= 620) {
            bodyScrollBar = Scrollbar.init(document.querySelector('#viewport'), {
                //easing: 'easeInOutQuart',
                damping: 0.1,
                delegateTo: document,
                renderByPixel: true,
                continuousScrolling: true,
            });
        }


    }).resize();



    if ($('.js-form-call').exists()) {
        $('.js-form-call').on('click', (event) => {
            event.preventDefault();
            showOverlay(true);
            bodyScrollBar.updatePluginOptions('modal', { open: true })
        });
    }

    if ($('.js-overlay').exists()) {
        $('.js-overlay').on('click', () => {
            showOverlay(false);
            bodyScrollBar.updatePluginOptions('modal', { open: false })

            if ($('.request-popup__wrapper').exists()) {
                try {
                    $('.request-popup__wrapper').removeClass('active');
                }
                catch (err) {
                    console.log(err);
                }
            }
        });
    }

    if ($('.js-close-form').exists()) {
        $('.js-close-form').on('click', () => {
            showOverlay(false);
            bodyScrollBar.updatePluginOptions('modal', { open: false })
        });
    }

    if ($('.burger').exists()) {
        try {
            let header = document.querySelector('.header');
            const burgerBtn = header.querySelector('.burger');

            const panelEl = header.querySelector('.js-nav');

            const panelHideTl = new TimelineMax({
                reversed: true,
                paused: true,
                defaults: { duration: 0.6 }
            });

            const panelShowTl = new TimelineMax({
                reversed: true,
                paused: true,
                defaults: { duration: 0.6 }
            });

            panelHideTl
                .to(
                    panelEl,
                    {
                        autoAlpha: 0,
                        xPercent: 100,
                        ease: Cubic.easeOut
                    }
                )

            panelShowTl
                .fromTo(
                    panelEl,
                    {
                        autoAlpha: 0,
                        xPercent: 100
                    },
                    {
                        autoAlpha: 1,
                        xPercent: 0,
                        ease: Cubic.easeOut
                    }
                )

            burgerBtn.addEventListener('click', function () {
                this.classList.toggle('opened'); this.setAttribute('aria-expanded', this.classList.contains('opened'));

                if (this.classList.contains('opened')) {
                    panelHideTl.reverse();
                    panelShowTl.play();
                    bodyScrollBar.updatePluginOptions('modal', { open: true })
                }
                else {
                    panelShowTl.reverse();
                    panelHideTl.play();
                    bodyScrollBar.updatePluginOptions('modal', { open: false })
                }
            });

            $(window).on('load resize ', function () {

                if ($(this).width() > 1024) {
                    if (burgerBtn.classList.contains('opened')) {
                        burgerBtn.classList.remove('opened');
                        hideMenu('.js-dropMenu');
                        panelShowTl.reverse();
                        panelHideTl.play();
                    }
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }


    if (position) {
        bodyScrollBar.setPosition(0, 0);
    }

    $('a[href^="#"]').each(function () {
        $(this).on('click', function (event) {
            var el = $(this);
            var dest = el.attr('href').substring(1); // получаем направление
            var elAnchor = $('body').find(`[data - anchor= "${dest}"]`)[0];

            if (dest !== undefined && dest !== '') {

                bodyScrollBar.scrollIntoView(elAnchor, {
                    offsetLeft: 0,
                    offsetRight: 0,
                    alignToTop: true,
                    offsetTop: 130,
                })
            }

            return false;
        });
    });

    bodyScrollBar.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy('#viewport', {
        scrollTop(value) {

            if (bodyScrollBar.scrollTop > 79) {
                $(".header__inner").addClass("header--scroll");
            } else {
                $(".header__inner").removeClass("header--scroll");
            }

            if (arguments.length) {

                bodyScrollBar.scrollTop = value; // setter
            }
            return bodyScrollBar.scrollTop;    // getter
        }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: '#viewport' });

}

const moveMainBildboard = () => {
    gsap.set('.bildboard__video', {
        yPercent: 0
    });

    const uncover = gsap.timeline({
        paused: true
    });

    uncover
        .to('.bildboard__video', {
            yPercent: 50,
            ease: 'none'
        });

    ScrollTrigger.create({
        trigger: '.bildboard',
        start: 'top top',
        end: 'bottom',
        animation: uncover,
        scrub: true,
    });
}

const setSelect = () => {
    if ($('.call .js-example-basic-single').exists()) {
        const dropdownParentEl = $('.call .select');

        $('.call .js-example-basic-single').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: dropdownParentEl,
        }).on("select2:open", function () {

            $('.select2-results__options').niceScroll({
                scrollspeed: 60, // scrolling speed
                mousescrollstep: 10, // scrolling speed with mouse wheel (pixel)
                cursorcolor: "#00A4AD",
                autohidemode: false,
            });
        });
    }

    if ($('.request-popup .js-example-basic-single').exists()) {
        $('.request-popup .js-example-basic-single').select2({
            minimumResultsForSearch: Infinity
        }).on("select2:open", function () {
            $('.select2-results__options').niceScroll({
                scrollspeed: 60, // scrolling speed
                mousescrollstep: 10, // scrolling speed with mouse wheel (pixel)
                cursorcolor: "#00A4AD",
                autohidemode: false,
            });
        });
    }
}

$(window).resize(function () {
    setSelect();
}).resize();

function initContent() {
    changeHeightPage();
    setSelect();
    initSmoothScrollBar();
    initImageParallax();
    initPinSteps();
    initPinPortfolio();
    checkPacket();
    checkInput();
    showCallForm();
    showPlace();
    showService();
    moveMainBildboard();
    setWidthBtn();
    setGallery();
    projectFunc.setSlider();
    setCursor();
    setMap(true);
    setPhoneMask();
    setAccordion();
    setTabs();
    checkPage();
}











