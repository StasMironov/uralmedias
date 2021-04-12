"use strict";

jQuery.fn.exists = function () {
  return $(this).length;
};

var projectFunc = {
  showBlogPopup: function showBlogPopup(element) {
    var blogPopup = $(element).find('.blog__popup');
    var blogText = $(element).find('.blog__txt');
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
  },
  hiddenTabs: function hiddenTabs(index) {
    if ($('.include--app').exists()) {
      try {
        var includeBloc = document.querySelector('.include--app'),
            tabsEl = includeBloc.querySelectorAll('.include__item'),
            btnTab = includeBloc.querySelectorAll('.include__btn');
        tabsEl.forEach(function (element, i) {
          if (i != index) {
            element.classList.remove('mf-show');
            btnTab[i].classList.remove('mf-active');
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  showTabs: function showTabs(index) {
    if ($('.include--app').exists()) {
      try {
        var includeBloc = document.querySelector('.include--app'),
            tabsEl = includeBloc.querySelectorAll('.include__item');
        tabsEl[index].classList.add('mf-show');
      } catch (err) {
        console.log(err);
      }
    }
  },
  getScrollbarWidth: function getScrollbarWidth() {
    var div,
        width = projectFunc.getScrollbarWidth.width;

    if (width === undefined) {
      div = document.createElement('div');
      div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
      div = div.firstChild;
      document.body.appendChild(div);
      width = projectFunc.getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
    }

    return width;
  }
};
window.addEventListener('load', function () {
  var locked = document.querySelector('html');
  locked.style.setProperty('--wScroll', projectFunc.getScrollbarWidth() + 'px');
});

if ($('.include__btn').exists()) {
  try {
    var includeBloc = document.querySelector('.include--app'),
        btnTab = includeBloc.querySelectorAll('.include__btn');
    projectFunc.hiddenTabs(0);
    btnTab.forEach(function (element, index) {
      element.addEventListener('click', function () {
        this.classList.add('mf-active');
        projectFunc.showTabs(index);
        projectFunc.hiddenTabs(index);
      });
    });
  } catch (err) {
    console.log(err);
  }
}

setTimeout(function () {
  $('.contacts__grid').css('opacity', '1');
}, 500); //===========Accordion=============

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
} //=======Accordion-Contacts===========


if ($('.js-ac-contacts').exists()) {
  try {
    var _accordions = document.querySelectorAll(".contacts__panel");

    $(window).on('resize load', function () {
      if ($(this).width() > 620) {
        _accordions.forEach(function (element, index) {
          var content = element.nextElementSibling;

          if (!content.style.maxHeight) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = null;
          }
        });
      } else {
        _accordions.forEach(function (element, index) {
          var content = element.nextElementSibling;

          if (!content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    });

    for (var i = 0; i < _accordions.length; i++) {
      _accordions[i].onclick = function () {
        this.classList.toggle('is-open');
        $(this).find('.contacts__pic').toggleClass('contacts__pic--active');
        var content = this.nextElementSibling;

        if (!content.style.maxHeight) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      };
    }
  } catch (err) {
    console.log(err);
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

$(window).scroll(function () {
  if ($(this).scrollTop() > 79) {
    $(".header__inner").addClass("header--scroll");
  } else {
    $(".header__inner").removeClass("header--scroll");
  }
});

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

if ($('.js-rate').exists()) {
  //  constructor(init, name, view, space, column, ratio, pagination = false, arrow = false, effect = '', custom = false, loop = true, direction = 'horizontal') {
  var rateSlider = new Slider(true, '.js-rate', 3, 40, 1, false, true, false, '', false, false);
  rateSlider.createSlider();
  $(window).on('resize load', function () {
    if ($(this).width() <= 1300) {
      rateSlider.updateSlider('space', 20);
      rateSlider.updateSlider('view', 2);
      rateSlider.updateSlider('ratio', true);
    }

    if ($(this).width() <= 1024) {
      rateSlider.updateSlider('space', 20);
    }

    if ($(this).width() <= 800) {
      rateSlider.updateSlider('view', 1);
    } else {//  rateSlider.updateSlider('view', 3);
    }
  });
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

if ($('.js-slider-partners').exists()) {
  var partnerSlider = new Slider(false, '.js-slider-partners', 4, 82, 8, false, false, false);
  partnerSlider.createSlider();
  $(window).on('resize load', function () {
    if ($(this).width() <= 1300) {
      partnerSlider.updateSlider('space', 50);
    }

    if ($(this).width() <= 1023) {
      partnerSlider.updateSlider('space', 40);
      partnerSlider.updateSlider('view', 3);
    }

    if ($(this).width() <= 500) {
      partnerSlider.updateSlider('space', 20);
      partnerSlider.updateSlider('view', 2);
    }
  });
}

if ($('.works').exists()) {
  var workSlider = new Slider(true, '.js-slider', 2, 40, 1, true, true, true);
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
  }); // barba.init({
  //     debug: true,
  //     transitions: [{
  //         name: 'index',
  //         to: {
  //             namespace: ['index']
  //         },
  //         async leave() {
  //             await loaderIn();
  //         },
  //         enter() {
  //             checkPage();
  //             loaderAway();
  //             animateBildboard();
  //         }
  //     },
  //     {
  //         name: 'blog',
  //         to: {
  //             namespace: ['blog']
  //         },
  //         async leave() {
  //             await loaderIn();
  //         },
  //         enter() {
  //             checkPage();
  //             loaderAway();
  //             animateBildboard();
  //         }
  //     },
  //     {
  //         name: 'about',
  //         to: {
  //             namespace: ['about']
  //         },
  //         async leave() {
  //             await loaderIn();
  //         },
  //         enter() {
  //             checkPage();
  //             loaderAway();
  //             animateBildboard();
  //         }
  //     },
  //     ]
  // })
}

function checkPage() {
  var pagesArr = ['/', '/index.html'];
  pagesArr.filter(function (s) {
    if (s.indexOf(window.location.pathname) === 0) {
      $('.header').removeClass('mf-style');
    } else {
      $('.header').addClass('mf-style');
    }
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
  var btnSpecial = document.querySelectorAll('.btn--special');
  btnSpecial.forEach(function (element, _) {
    var widthhEl = $(element).find('.btn__text').innerWidth();
    console.log(widthhEl);
    $(element).css({
      'width': widthhEl + 39 + 'px'
    });
  });
}

$('#certificate').lightGallery();
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
$(window).on('resize load', function () {
  if ($(this).width() <= 1100 && $(this).width() > 620) {
    if ($('.progress__cover').exists()) {
      try {
        Scrollbar.init(document.querySelector('#progress-scrollbar'), {
          damping: 0.3,
          alwaysShowTracks: false
        });
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    Scrollbar.destroy(document.querySelector('#progress-scrollbar'));
  }
});
$(function () {
  $('a').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

      if ($target.length) {
        var targetOffset = $target.offset().top - 140;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 500); //скорость прокрутки

        return false;
      }
    }
  });
});

if ($('.burger').exists()) {
  try {
    var header = document.querySelector('.header');
    var burgerBtn = header.querySelector('.burger');
    var panelEl = header.querySelector('.js-nav');
    var panelHideTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.6
      }
    });
    var panelShowTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.6
      }
    });
    panelHideTl.to(panelEl, {
      autoAlpha: 0,
      xPercent: 100,
      ease: Cubic.easeOut
    });
    panelShowTl.fromTo(panelEl, {
      autoAlpha: 0,
      xPercent: 100
    }, {
      autoAlpha: 1,
      xPercent: 0,
      ease: Cubic.easeOut
    });
    burgerBtn.addEventListener('click', function () {
      this.classList.toggle('opened');
      this.setAttribute('aria-expanded', this.classList.contains('opened'));

      if (this.classList.contains('opened')) {
        panelHideTl.reverse();
        panelShowTl.play();
        lockedDOM(true);
      } else {
        panelShowTl.reverse();
        panelHideTl.play();
        lockedDOM(false);
      }
    });
    $(window).on('resize load', function () {
      changeHeightPage();

      if ($(this).width() > 1024) {
        if (burgerBtn.classList.contains('opened')) {
          burgerBtn.classList.remove('opened');
          hideMenu('.js-dropMenu');
          panelShowTl.reverse();
          panelHideTl.play();
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
} // this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))


var getHeight = function getHeight(elem) {
  var heightRes = $(elem).outerHeight();
  return heightRes;
};

var showMenu = function showMenu(element, heightEl) {
  var menutl = new TimelineMax({
    defaults: {
      duration: 0.3
    }
  });
  menutl.to(element, {
    height: heightEl,
    ease: "power1.out"
  }).to(element, {
    autoAlpha: 1
  }, '-=0.1');
};

var hideMenu = function hideMenu(element) {
  var menutl = new TimelineMax({
    defaults: {
      duration: 0.3
    }
  });
  menutl.to(element, {
    autoAlpha: 0
  }).to(element, {
    height: 0,
    ease: "power1.out"
  }, '-=0.1');
};

if ($('.js-list').exists()) {
  var navPanel = document.querySelector('.header__nav--tablet');
  var btnList = navPanel.querySelector('.js-list');
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

var lockedDOM = function lockedDOM(status) {
  if (status) {
    $('html').css('overflow', 'hidden');
  } else {
    $('html').css('overflow', 'auto');
  }
};

var stateObject = function stateObject(status) {
  if (status == 'start') {
    formShow('.js-form-request', true);
    lockedDOM(true);
  } else {
    formShow('.js-form-request', false);
    lockedDOM(false);
  }
};

var showOverlay = function showOverlay(status) {
  if ($('.js-overlay').exists()) {
    var overlayEl = document.querySelector('.js-overlay');
    var showOvTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.6
      },
      onComplete: stateObject,
      onCompleteParams: ['start']
    });
    var hideOvTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.3
      },
      onStart: stateObject,
      onStartParams: ['end']
    });
    showOvTl.to(overlayEl, {
      autoAlpha: 1,
      ease: "power2.out"
    });
    hideOvTl.to(overlayEl, {
      autoAlpha: 0,
      ease: "power2.out"
    }, '+=0.6');

    if (status) {
      showOvTl.reverse();
      showOvTl.play();
    } else {
      hideOvTl.reverse();
      hideOvTl.play();
    }
  }
};

var formShow = function formShow(element, status) {
  if ($(element).exists()) {
    var _element = document.querySelector('.js-form-request');

    var formShowTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.5
      }
    });
    var formHideTl = new TimelineMax({
      reversed: true,
      paused: true,
      defaults: {
        duration: 0.8
      }
    });
    formHideTl.fromTo(_element, {
      yPercent: -50,
      xPercent: -50,
      autoAlpha: 1
    }, {
      yPercent: -200,
      ease: "power2.out"
    }).to(_element, {
      autoAlpha: 0
    });
    formShowTl.fromTo(_element, {
      yPercent: -100,
      xPercent: -50,
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      yPercent: -50,
      ease: "power2.out"
    }, '-=0.2');

    if (status) {
      formHideTl.reverse();
      formShowTl.play();
    } else {
      formShowTl.reverse();
      formHideTl.play();
    }
  }
};

if ($('.js-form-call').exists()) {
  $('.js-form-call').on('click', function (event) {
    event.preventDefault();
    showOverlay(true);
  });
}

if ($('.js-overlay').exists()) {
  $('.js-overlay').on('click', function () {
    showOverlay(false);

    if ($('.request-popup__wrapper').exists()) {
      try {
        $('.request-popup__wrapper').removeClass('active');
      } catch (err) {
        console.log(err);
      }
    }
  });
}

if ($('.js-close-form').exists()) {
  $('.js-close-form').on('click', function () {
    showOverlay(false);
  });
}

var changeHeightPage = function changeHeightPage() {
  var footerHeight, paddingBottom, outerHeightEl;
  footerHeight = document.querySelector('.footer').offsetHeight;
  outerHeightEl = document.documentElement.clientHeight;
  paddingBottom = outerHeightEl - (outerHeightEl - footerHeight);
  $('.b-page').css('padding-bottom', paddingBottom);
};

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
            duration: 1000,
            // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 

          });
        }

        return false;
      });
    });
  } catch (err) {
    console.log(err);
  }
}

if ($('.js-form-request').exists()) {
  (function () {
    var popupRequest = document.querySelector('.js-form-request'),
        btnDropMenu = popupRequest.querySelector('.js-drop-btn'),
        menuWrapper = popupRequest.querySelector('.request-popup__wrapper'),
        radioEl = popupRequest.querySelectorAll('.request-popup__link input'),
        labelEl = popupRequest.querySelectorAll('.request-popup__link'),
        labelTxt = '',
        textBtn = popupRequest.querySelector('.js-rp-txt');

    var _loop = function _loop(_i) {
      labelEl[_i].addEventListener('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if (radioEl[_i].checked) {
          textBtn.textContent = labelEl[_i].querySelector('span').textContent;
        }
      });
    };

    for (var _i = 0; _i < labelEl.length; _i++) {
      _loop(_i);
    }

    btnDropMenu.addEventListener('click', function () {
      menuWrapper.classList.toggle('active');
    });
    $('.request-popup').mouseup(function (e) {
      var container = $('.request-popup__wrapper');

      if (container.has(e.target).length === 0) {
        container.removeClass('active');
      }
    });
  })();
}

if ($('.js-phone-mask').exists()) {
  var phoneEl = document.querySelectorAll('.js-phone-mask');

  for (var _i2 = 0; _i2 < phoneEl.length; _i2++) {
    $(phoneEl[_i2]).mask("+7(999) 999-99-99");
  }
}

var caseSlider1 = new Swiper('.case__slider--1', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 65
    }
  }
});
var caseSlider2 = new Swiper('.case__slider--2', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 65
    }
  }
});
var caseSlider3 = new Swiper('.case__slider--3', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    1200: {
      spaceBetween: 65
    }
  }
});

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

checkPacket();
$('.rate__item .switch').on('click', function () {
  checkPacket();
}); //custom file input

$(function () {
  $('input[type="file"]').change(function () {
    var label = $('.file .file__label');

    if (typeof this.files != 'undefined') {
      if (this.files.length == 0) {
        label.removeClass('withFile').text(label.data('default'));
      } else {
        var file = this.files[0];
        var name = file.name;
        label.addClass('withFile').text(name);
      }
    } else {
      var _name = this.value.split("\\");

      label.addClass('withFile').text(_name[_name.length - 1]);
    }

    return false;
  });
});

if ($('.js-example-basic-single').exists()) {
  $('.js-example-basic-single').select2({
    minimumResultsForSearch: Infinity
  }).on("select2:open", function () {
    $('.select2-results__options').niceScroll({
      scrollspeed: 60,
      // scrolling speed
      mousescrollstep: 10,
      // scrolling speed with mouse wheel (pixel)
      cursorcolor: "#00A4AD"
    });
  });
}