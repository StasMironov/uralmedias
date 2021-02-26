jQuery.fn.exists = function () {
    return $(this).length;
}

const projectFunc = {
    hidePopup: function () {
        console.log(1);
    },
    showBlogPopup: function (element) {
        let blogPopup = $(element).find('.blog__popup');
        let blogText = $(element).find('.blog__txt');

        console.log(blogPopup);

        const popupBlog = gsap.timeline({
            paused: true
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
            paused: true
        });

        popupBlog
            .to(blogPopup, {
                xPercent: -100,
                duration: 1,
                ease: "power2.out"
            })
            .to(blogText, {
                autoAlpha: 0,
                y: -20,
                ease: "power2.out"
            });

        popupBlog.play();
    }
};

//===========Accordion=============
if ($('.accordion__panel').exists()) {
    var accordions = document.getElementsByClassName("accordion__panel");

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function () {
            this.classList.toggle('is-open');
            $(this).find('.accordion__pic').toggleClass('accordion__pic--active');


            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}

if ($('.blog__item').exists()) {

    gsap.to(
        '.blog__item', {
        autoAlpha: 1,
        stagger: 1,
        duration: 1
    }
    )
    $('.blog__item').each(function () {
        $(this).on('mouseenter', function () {
            projectFunc.showBlogPopup(this);
        });

        $(this).on('mouseleave', function () {
            projectFunc.hideBlogPopup(this);
        });
    });
}

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

checkPage();

class Slider {
    constructor(init, name, view, space, column, ratio, pagination = false, arrow = false, effect = '', custom = false) {
        this.init = init;
        this.name = name;
        this.view = view;
        this.space = space;
        this.column = column;
        this.ratio = ratio;
        this.pagination = pagination;
        this.arrow = arrow;
        this.slider = '';
        this.effect = effect;
        this.custom = custom;
    }

    createSlider() {
        if (this.pagination || this.arrow) {
            let pagEl = $(this.name).find('.pagination');
            let arrowNext = $(this.name).find('.arrow__link--next');
            let arrowPrev = $(this.name).find('.arrow__link--prev');

            let settings = {
                slidesPerView: this.view,
                spaceBetween: this.space,
                slidesPerColumn: this.column,
                slidesPerColumnFill: 'row',
                touchRatio: this.ratio,
                effect: this.effect,
                navigation: {
                    nextEl: arrowNext,
                    prevEl: arrowPrev,
                },
                pagination: {
                    el: pagEl,
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        let i = current ? current : 0;
                        return `${("0" + i).slice(-2)} / ${("0" + total).slice(-2)}`;
                    }
                },
            };

            if (this.custom === true) {
                console.log(this.custom);
                this.slider = new Swiper(this.name, settings);
            }
            else {
                this.slider = new Swiper(this.name, {
                    slidesPerView: this.view,
                    spaceBetween: this.space,
                    slidesPerColumn: this.column,
                    slidesPerColumnFill: 'row',
                    touchRatio: this.ratio,
                    effect: this.effect,
                    pagination: {
                        el: pagEl,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: arrowNext,
                        prevEl: arrowPrev,
                    },
                });
            }
        } else {
            this.slider = new Swiper(this.name, {
                slidesPerView: this.view,
                spaceBetween: this.space,
                slidesPerColumn: this.column,
                slidesPerColumnFill: 'row',
                touchRatio: this.ratio,
            });
        }
        return this.slider;
    }

    updateSlider(props, res = '') {
        switch (props) {
            case 'space':
                this.slider.params.spaceBetween = res;
                this.slider.update();
                break;
            case 'view':
                this.slider.params.slidesPerView = res;
                this.slider.update();
                break;
        }
    }
}


if ($('.js-rate').exists()) {
    let rateSlider = new Slider(true, '.js-rate', 3, 40, 1, false, false, false);
    rateSlider.createSlider();
}

if ($('.js-info-slider').exists()) {
    var infoSlider = new Slider(true, '.js-info-slider', 1, 10, 1, true, true, true, 'fade', true);
    infoSlider.createSlider();

    if ($('.js-graph-slider').exists()) {
        let graphSlider = new Slider(true, '.js-graph-slider', 1, 10, 1, true, false, true, 'fade', false);
        graphSlider.createSlider();

        graphSlider.slider.controller.control = infoSlider.slider;
        infoSlider.slider.controller.control = graphSlider.slider;
    }
}


if ($('.partners').exists()) {
    let partnerSlider = new Slider(false, '.partners', 4, 82, 3, false, false, false);
    partnerSlider.createSlider();
}

if ($('.works').exists()) {
    let workSlider = new Slider(true, '.js-works', 2, 48, 1, true, true, true);
    workSlider.createSlider();

    $(window).on('resize load', function () {
        if ($(this).width() <= 1300) {
            workSlider.updateSlider('space', 30);
        }
        if ($(this).width() <= 1024) {
            workSlider.updateSlider('space', 20);
        }
        if ($(this).width() <= 620) {
            workSlider.updateSlider('view', 1);
        }
        else {
            workSlider.updateSlider('view', 2);
        }
    });
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

    function loaderTl() {
        return animateBildboard();
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        debug: true,
        transitions: [{
            name: 'index',
            to: {
                namespace: ['index']
            },

            async leave() {
                await loaderIn();

            },
            enter() {
                checkPage();
                loaderAway();
                animateBildboard();
            }
        },
        {
            name: 'blog',
            to: {
                namespace: ['blog']
            },

            async leave() {
                await loaderIn();

            },
            enter() {
                checkPage();
                loaderAway();
                animateBildboard();
            }

        },
        {
            name: 'about',
            to: {
                namespace: ['about']
            },

            async leave() {
                await loaderIn();

            },
            enter() {
                checkPage();
                loaderAway();
                animateBildboard();
            }

        },
        ]
    })

}

function checkPage() {
    // if (window.location.pathname == '/') {
    //     $('.header').removeClass('mf-style');
    // }
    // else {
    //     $('.header').addClass('mf-style');
    // }
}

window.addEventListener('load', function () {
    init();
});




var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".link").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});



gsap.set(
    ['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'], {
    autoAlpha: 0
}
);

gsap.set(
    '.bildboard__text', {
    y: -20
}
);
gsap.set(
    '.bildboard__title', {
    x: -70
}
);

gsap.set(
    '.bildboard__quote', {
    y: -20
}
);

function animateBildboard() {
    let bildboardTL = new TimelineMax({});

    if ($('.bildboard__video').exists()) {
        let video = document.querySelector('.bildboard__video');
        video.currentTime = 0;
        video.load();
    }



    bildboardTL
        .set(
            ['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'], {
            autoAlpha: 0
        }
        )
        .set(
            '.bildboard__text', {
            y: -20
        }
        )
        .set(
            '.bildboard__title', {
            x: -70
        }
        )

        .set(
            '.bildboard__quote', {
            y: -20
        }
        )
        .to(
            '.bildboard__video', {
            autoAlpha: 1,
            duration: 4,
            ease: "power2.out",
        },
            "+=1"
        )
        .to(
            '.header__container', {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
        },
            "-=3"
        )
        .to(
            '.bildboard__container', {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
        },
            "-=3"
        )
        .to(
            '.bildboard__text', {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
        },
            "-=2.5"
        )
        .to(
            '.bildboard__title', {
            autoAlpha: 1,
            x: 0,
            ease: "power2.out",
            duration: 1,
        },
            "-=2"
        )
        .to(
            '.bildboard__quote', {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
        },
            "-=1"
        );

}

animateBildboard();

gsap.set('.bildboard__video', {
    yPercent: 0
})

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

//portfolio__item
gsap.set('.portfolio__item', {
    yPercent: -7,
    autoAlpha: 0
});

const itemW = gsap.timeline({
    paused: true
});

itemW
    .to('.portfolio__item', {
        yPercent: 0,
        autoAlpha: 1,
        stagger: 1
    });

ScrollTrigger.create({
    trigger: '.portfolio',
    start: 'top-=40% top',
    end: 'bottom-=40%',
    animation: itemW,
    scrub: true,
});

if ($('.btn--special').exists()) {
    let widthhEl = $('.btn__text').width();
    $('.btn--special').css({
        'max-width': widthhEl + 94 + 'px'
    });
    console.log(widthhEl);
}




$('#certificate').lightGallery();

var partners = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

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

//place

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
    start: 'top-=80% top',
    end: 'bottom',
    animation: call,
});



// if ($('.request-popup__close').exists()) {
//     $('.request-popup__close').on('click', function () {
//         projectFunc.hidePopup();
//     });
// }


$(window).on('load', function () {
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
                    iconImageHref: '/img/icon/marker.svg',
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
        }
    }
});

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





