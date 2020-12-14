"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var loader = document.querySelector('.loader'); // reset position of the loading screen

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
  } // do something before the transition starts


  barba.hooks.before(function () {
    document.querySelector('html').classList.add('is-transitioning');
    barba.wrapper.classList.add('is-animating');
  }); // do something after the transition finishes

  barba.hooks.after(function () {
    document.querySelector('html').classList.remove('is-transitioning');
    barba.wrapper.classList.remove('is-animating');
  }); // scroll to the top of the page

  barba.hooks.enter(function () {
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
      beforeOnce: function beforeOnce() {
        console.log('beforeOnce');
      },
      once: function once() {
        console.log('once');
      },
      afterOnce: function afterOnce() {
        console.log('aftereOnce');
      }
    }, {
      name: 'blog',
      to: {
        namespace: ['blog']
      },
      leave: function leave() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return loaderIn();

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      enter: function enter() {
        loaderAway();
      }
    }]
  });
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
  onRepeat: function onRepeat() {
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
}); // yellow circle

$(".link").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});
$(".link").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});