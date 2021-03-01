"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

jQuery.fn.exists = function () {
  return $(this).length;
};

var projectFunc = {
  hidePopup: function hidePopup() {
    console.log(1);
  },
  showBlogPopup: function showBlogPopup(element) {
    var blogPopup = $(element).find('.blog__popup');
    var blogText = $(element).find('.blog__txt');
    console.log(blogPopup);
    var popupBlog = gsap.timeline({
      paused: true
    });
    popupBlog.to(blogPopup, {
      x: 0,
      xPercent: 0,
      duration: 1,
      ease: "power2.out"
    }).to(blogText, {
      autoAlpha: 1,
      y: 0,
      ease: "power2.out",
      delay: -0.2
    });
    popupBlog.play();
  },
  hideBlogPopup: function hideBlogPopup(element) {
    var blogPopup = $(element).find('.blog__popup');
    var blogText = $(element).find('.blog__txt');
    var popupBlog = gsap.timeline({
      paused: true
    });
    popupBlog.to(blogPopup, {
      xPercent: -100,
      duration: 1,
      ease: "power2.out"
    }).to(blogText, {
      autoAlpha: 0,
      y: -20,
      ease: "power2.out"
    });
    popupBlog.play();
  }
}; //===========Accordion=============

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
    };
  }
}

if ($('.blog__item').exists()) {
  gsap.to('.blog__item', {
    autoAlpha: 1,
    stagger: 1,
    duration: 1
  });
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
    var $window = $(window),
        $target = $(".header__inner"),
        $h = $target.offset().top;
    $window.on('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

var Slider =
/*#__PURE__*/
function () {
  function Slider(init, name, view, space, column, ratio) {
    var pagination = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var arrow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var effect = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
    var custom = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

    _classCallCheck(this, Slider);

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

  _createClass(Slider, [{
    key: "createSlider",
    value: function createSlider() {
      if (this.pagination || this.arrow) {
        var pagEl = $(this.name).find('.pagination');
        var arrowNext = $(this.name).find('.arrow__link--next');
        var arrowPrev = $(this.name).find('.arrow__link--prev');
        var settings = {
          slidesPerView: this.view,
          spaceBetween: this.space,
          slidesPerColumn: this.column,
          slidesPerColumnFill: 'row',
          touchRatio: this.ratio,
          effect: this.effect,
          navigation: {
            nextEl: arrowNext,
            prevEl: arrowPrev
          },
          pagination: {
            el: pagEl,
            type: "custom",
            renderCustom: function renderCustom(swiper, current, total) {
              var i = current ? current : 0;
              return "".concat(("0" + i).slice(-2), " / ").concat(("0" + total).slice(-2));
            }
          }
        };

        if (this.custom === true) {
          console.log(this.custom);
          this.slider = new Swiper(this.name, settings);
        } else {
          this.slider = new Swiper(this.name, {
            slidesPerView: this.view,
            spaceBetween: this.space,
            slidesPerColumn: this.column,
            slidesPerColumnFill: 'row',
            touchRatio: this.ratio,
            effect: this.effect,
            pagination: {
              el: pagEl,
              clickable: true
            },
            navigation: {
              nextEl: arrowNext,
              prevEl: arrowPrev
            }
          });
        }
      } else {
        this.slider = new Swiper(this.name, {
          slidesPerView: this.view,
          spaceBetween: this.space,
          slidesPerColumn: this.column,
          slidesPerColumnFill: 'row',
          touchRatio: this.ratio
        });
      }

      return this.slider;
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(props) {
      var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

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
  }]);

  return Slider;
}();

if ($('.js-rate').exists()) {
  var rateSlider = new Slider(true, '.js-rate', 3, 40, 1, false, false, false);
  rateSlider.createSlider();
}

if ($('.js-info-slider').exists()) {
  var infoSlider = new Slider(true, '.js-info-slider', 1, 10, 1, true, true, true, 'fade', true);
  infoSlider.createSlider();

  if ($('.js-graph-slider').exists()) {
    var graphSlider = new Slider(true, '.js-graph-slider', 1, 10, 1, true, false, true, 'fade', false);
    graphSlider.createSlider();
    graphSlider.slider.controller.control = infoSlider.slider;
    infoSlider.slider.controller.control = graphSlider.slider;
  }
}

if ($('.partners').exists()) {
  var partnerSlider = new Slider(false, '.partners', 4, 82, 3, false, false, false);
  partnerSlider.createSlider();
}

if ($('.works').exists()) {
  var workSlider = new Slider(true, '.js-works', 2, 48, 1, true, true, true);
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
    } else {
      workSlider.updateSlider('view', 2);
    }
  });
}

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
  }

  function loaderTl() {
    return animateBildboard();
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
    debug: true,
    transitions: [{
      name: 'index',
      to: {
        namespace: ['index']
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
        checkPage();
        loaderAway();
        animateBildboard();
      }
    }, {
      name: 'blog',
      to: {
        namespace: ['blog']
      },
      leave: function leave() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return loaderIn();

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      enter: function enter() {
        checkPage();
        loaderAway();
        animateBildboard();
      }
    }, {
      name: 'about',
      to: {
        namespace: ['about']
      },
      leave: function leave() {
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return loaderIn();

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      enter: function enter() {
        checkPage();
        loaderAway();
        animateBildboard();
      }
    }]
  });
}

function checkPage() {// if (window.location.pathname == '/') {
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
gsap.set(['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'], {
  autoAlpha: 0
});
gsap.set('.bildboard__text', {
  y: -20
});
gsap.set('.bildboard__title', {
  x: -70
});
gsap.set('.bildboard__quote', {
  y: -20
});

function animateBildboard() {
  var bildboardTL = new TimelineMax({});

  if ($('.bildboard__video').exists()) {
    var video = document.querySelector('.bildboard__video');
    video.currentTime = 0;
    video.load();
  }

  bildboardTL.set(['.bildboard__video', '.bildboard__text', '.bildboard__title', '.bildboard__quote', '.header__container'], {
    autoAlpha: 0
  }).set('.bildboard__text', {
    y: -20
  }).set('.bildboard__title', {
    x: -70
  }).set('.bildboard__quote', {
    y: -20
  }).to('.bildboard__video', {
    autoAlpha: 1,
    duration: 4,
    ease: "power2.out"
  }, "+=1").to('.header__container', {
    autoAlpha: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=3").to('.bildboard__container', {
    autoAlpha: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=3").to('.bildboard__text', {
    autoAlpha: 1,
    y: 0,
    ease: "power2.out"
  }, "-=2.5").to('.bildboard__title', {
    autoAlpha: 1,
    x: 0,
    ease: "power2.out",
    duration: 1
  }, "-=2").to('.bildboard__quote', {
    autoAlpha: 1,
    y: 0,
    ease: "power2.out",
    duration: 1
  }, "-=1");
}

animateBildboard();
gsap.set('.bildboard__video', {
  yPercent: 0
});
var uncover = gsap.timeline({
  paused: true
});
uncover.to('.bildboard__video', {
  yPercent: 50,
  ease: 'none'
});
ScrollTrigger.create({
  trigger: '.bildboard',
  start: 'top top',
  end: 'bottom',
  animation: uncover,
  scrub: true
}); //portfolio__item

gsap.set('.portfolio__item', {
  yPercent: -7,
  autoAlpha: 0
});
var itemW = gsap.timeline({
  paused: true
});
itemW.to('.portfolio__item', {
  yPercent: 0,
  autoAlpha: 1,
  stagger: 1
});
ScrollTrigger.create({
  trigger: '.portfolio',
  start: 'top-=40% top',
  end: 'bottom-=40%',
  animation: itemW,
  scrub: true
});

if ($('.btn--special').exists()) {
  var widthhEl = $('.btn__text').width();
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
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
gsap.set('.place__bg', {
  yPercent: 0,
  transformOrigin: 'left center'
});
var place = gsap.timeline({
  paused: true
});
var placeContent = gsap.timeline({
  paused: true
});
gsap.set('.place__title', {
  yPercent: -40,
  autoAlpha: 0
});
gsap.set('.place__text', {
  autoAlpha: 0
});
placeContent.to('.place__title', {
  yPercent: 0,
  autoAlpha: 1,
  duration: 1
}).to('.place__text', {
  autoAlpha: 1
});
ScrollTrigger.create({
  trigger: '.place',
  start: 'top-=150% top',
  end: 'bottom-=80',
  animation: placeContent
});
gsap.set('.services__item', {
  xPercent: -5,
  autoAlpha: 0
});
var service = gsap.timeline({
  paused: true
});
service.to('.services__item', {
  xPercent: 0,
  autoAlpha: 1,
  stagger: 0.3,
  duration: 0.5
});
ScrollTrigger.create({
  trigger: '.services__items',
  start: 'top-=230% top',
  end: 'bottom',
  animation: service // scrub: true,

}); //place

gsap.set('.call__grid', {
  xPercent: -100,
  autoAlpha: 0,
  duration: 1
});
var call = gsap.timeline({
  paused: true
});
call.to('.call__grid', {
  xPercent: 0,
  autoAlpha: 1,
  duration: 2,
  ease: Back.easeOut.config(1.7)
});
ScrollTrigger.create({
  trigger: '.call',
  start: 'top-=80% top',
  end: 'bottom',
  animation: call
}); // if ($('.request-popup__close').exists()) {
//     $('.request-popup__close').on('click', function () {
//         projectFunc.hidePopup();
//     });
// }

$(window).on('load', function () {
  if ($('#map').exists()) {
    var _init = function _init() {
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
    };

    ymaps.ready(_init);
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
  } else {
    $(".seo-result__items").mCustomScrollbar('destroy');
  }
});
$(window).on('resize load', function () {
  if ($(this).width() <= 1024) {
    if ($('.reach__cover').exists()) {
      try {
        Scrollbar.init(document.querySelector('#inner-scrollbar'), {
          damping: 0.3,
          alwaysShowTracks: false
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});