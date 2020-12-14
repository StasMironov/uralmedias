

// barba.init({
//     debug: true,
//     transitions: [{
//         name: 'index',
//         beforeOnce() {
//             console.log('beforeOnce');
//         },
//         once() {
//             console.log('once');
//         },
//         afterOnce() {
//             console.log('aftereOnce');
//         }
//     },
//     {
//         name: 'blog',
//         to: {
//             namespace: ['blog']
//         },

//         leave() { },
//         enter() { },

//     },
//     ]
// });



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
        // transitions: [{
        //     async leave() {
        //         await loaderIn();

        //     },
        //     enter() {
        //         loaderAway();
        //     }
        // }]

        debug: true,
        transitions: [{
            name: 'index',
            beforeOnce() {
                console.log('beforeOnce');
            },
            once() {
                console.log('once');
            },
            afterOnce() {
                console.log('aftereOnce');
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