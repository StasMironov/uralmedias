

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
        return gsap.fromTo(loader,
            {
                rotation: 10,
                scaleX: 0,
                xPercent: -5
            },
            {
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
                loaderAway();
                animateBildboard();
            }

        },
        ]
    })

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
    ['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'],
    {
        autoAlpha: 0
    }
);

gsap.set(
    '.bildboard__text',
    {
        y: -20
    }
);
gsap.set(
    '.bildboard__title',
    {
        x: -70
    }
);

gsap.set(
    '.bildboard__quote',
    {
        y: -20
    }
);

function animateBildboard() {
    let bildboardTL = new TimelineMax({
    });

    let video = document.querySelector('.bildboard__video');
    video.currentTime = 0;
    video.load();

    bildboardTL
        .set(
            ['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'],
            {
                autoAlpha: 0
            }
        )
        .set(
            '.bildboard__text',
            {
                y: -20
            }
        )
        .set(
            '.bildboard__title',
            {
                x: -70
            }
        )

        .set(
            '.bildboard__quote',
            {
                y: -20
            }
        )
        .to(
            '.bildboard__video',
            {
                autoAlpha: 1,
                duration: 4,
                ease: "power2.out",
            },
            "+=1"
        )
        .to(
            '.header__container',
            {
                autoAlpha: 1,
                duration: 1,
                ease: "power2.out",
            },
            "-=3"
        )
        .to(
            '.bildboard__container',
            {
                autoAlpha: 1,
                duration: 1,
                ease: "power2.out",
            },
            "-=3"
        )
        .to(
            '.bildboard__text',
            {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
            },
            "-=2.5"
        )
        .to(
            '.bildboard__title',
            {
                autoAlpha: 1,
                x: 0,
                ease: "power2.out",
                duration: 1,
            },
            "-=2"
        )
        .to(
            '.bildboard__quote',
            {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                duration: 1,
            },
            "-=1"
        );

}

animateBildboard();

gsap.set('.bildboard__video', { yPercent: 0 })

const uncover = gsap.timeline({ paused: true });

uncover
    .to('.bildboard__video', { yPercent: 50, ease: 'none' });

ScrollTrigger.create({
    trigger: '.bildboard',
    start: 'top top',
    end: 'bottom',
    animation: uncover,
    scrub: true,
});

//portfolio__item
gsap.set('.portfolio__item', { yPercent: -7, autoAlpha: 0 });

const itemW = gsap.timeline({ paused: true });

itemW
    .to('.portfolio__item', { yPercent: 0, autoAlpha: 1, stagger: 1 });

ScrollTrigger.create({
    trigger: '.portfolio',
    start: 'top-=40% top',
    end: 'bottom-=40%',
    animation: itemW,
    scrub: true,
    markers: true
});
