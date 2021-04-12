"use strict";jQuery.fn.exists=function(){return $(this).length};var projectFunc={showBlogPopup:function(e){var t=$(e).find(".blog__popup"),o=$(e).find(".blog__txt"),i=gsap.timeline({paused:!0});i.to(t,{x:0,xPercent:0,duration:1,ease:"power2.out"}).to(o,{autoAlpha:1,y:0,ease:"power2.out",delay:-.2}),i.play()},hideBlogPopup:function(e){var t=$(e).find(".blog__popup"),o=$(e).find(".blog__txt"),i=gsap.timeline({paused:!0});i.to(t,{xPercent:-100,duration:1,ease:"power2.out"}).to(o,{autoAlpha:0,y:-20,ease:"power2.out"}),i.play()},hiddenTabs:function(e){if($(".include--app").exists())try{var t=document.querySelector(".include--app"),o=t.querySelectorAll(".include__item"),i=t.querySelectorAll(".include__btn");o.forEach(function(t,o){o!=e&&(t.classList.remove("mf-show"),i[o].classList.remove("mf-active"))})}catch(e){console.log(e)}},showTabs:function(e){if($(".include--app").exists())try{document.querySelector(".include--app").querySelectorAll(".include__item")[e].classList.add("mf-show")}catch(e){console.log(e)}},getScrollbarWidth:function(){var e,t=projectFunc.getScrollbarWidth.width;return void 0===t&&((e=document.createElement("div")).innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',e=e.firstChild,document.body.appendChild(e),t=projectFunc.getScrollbarWidth.width=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t}};if(window.addEventListener("load",function(){document.querySelector("html").style.setProperty("--wScroll",projectFunc.getScrollbarWidth()+"px")}),$(".include__btn").exists())try{var includeBloc=document.querySelector(".include--app"),btnTab=includeBloc.querySelectorAll(".include__btn");projectFunc.hiddenTabs(0),btnTab.forEach(function(e,t){e.addEventListener("click",function(){this.classList.add("mf-active"),projectFunc.showTabs(t),projectFunc.hiddenTabs(t)})})}catch(e){console.log(e)}if(setTimeout(function(){$(".contacts__grid").css("opacity","1")},500),$(".accordion__panel").exists())for(var accordions=document.getElementsByClassName("accordion__panel"),i=0;i<accordions.length;i++)accordions[i].onclick=function(){this.classList.toggle("is-open"),$(this).find(".accordion__pic").toggleClass("accordion__pic--active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};if($(".js-ac-contacts").exists())try{var _accordions=document.querySelectorAll(".contacts__panel");$(window).on("resize load",function(){$(this).width()>620?_accordions.forEach(function(e,t){var o=e.nextElementSibling;o.style.maxHeight?o.style.maxHeight=null:o.style.maxHeight=o.scrollHeight+"px"}):_accordions.forEach(function(e,t){var o=e.nextElementSibling;o.style.maxHeight?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=null})});for(i=0;i<_accordions.length;i++)_accordions[i].onclick=function(){this.classList.toggle("is-open"),$(this).find(".contacts__pic").toggleClass("contacts__pic--active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}}catch(e){console.log(e)}if($(".blog__item").exists()&&(gsap.to(".blog__item",{autoAlpha:1,stagger:1,duration:1}),$(".blog__item").each(function(){$(this).on("mouseenter",function(){projectFunc.showBlogPopup(this)}),$(this).on("mouseleave",function(){projectFunc.hideBlogPopup(this)})})),$(window).scroll(function(){$(this).scrollTop()>79?$(".header__inner").addClass("header--scroll"):$(".header__inner").removeClass("header--scroll")}),$(".header__inner").exists)try{var $window=$(window),$target=$(".header__inner"),$h=$target.offset().top;$window.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>$h?$target.addClass("mf-fixed"):$target.removeClass("mf-fixed")})}catch(e){console.log(e)}if(checkPage(),$(".js-rate").exists()){var rateSlider=new Slider(!0,".js-rate",3,40,1,!1,!0,!1,"",!1,!1);rateSlider.createSlider(),$(window).on("resize load",function(){$(this).width()<=1300&&(rateSlider.updateSlider("space",20),rateSlider.updateSlider("view",2),rateSlider.updateSlider("ratio",!0)),$(this).width()<=1024&&rateSlider.updateSlider("space",20),$(this).width()<=800&&rateSlider.updateSlider("view",1)})}if($(".js-info-slider").exists()){var infoSlider=new Slider(!0,".js-info-slider",1,10,1,!0,!0,!0,"fade",!0);if(infoSlider.createSlider(),$(".js-graph-slider").exists()){var graphSlider=new Slider(!0,".js-graph-slider",1,10,1,!0,!1,!0,"fade",!1);graphSlider.createSlider(),graphSlider.slider.controller.control=infoSlider.slider,infoSlider.slider.controller.control=graphSlider.slider}}if($(".js-slider-partners").exists()){var partnerSlider=new Slider(!1,".js-slider-partners",4,82,8,!1,!1,!1);partnerSlider.createSlider(),$(window).on("resize load",function(){$(this).width()<=1300&&partnerSlider.updateSlider("space",50),$(this).width()<=1023&&(partnerSlider.updateSlider("space",40),partnerSlider.updateSlider("view",3)),$(this).width()<=500&&(partnerSlider.updateSlider("space",20),partnerSlider.updateSlider("view",2))})}if($(".works").exists()){var workSlider=new Slider(!0,".js-slider",2,40,1,!0,!0,!0);workSlider.createSlider(),$(window).on("resize load",function(){$(this).width()<=1300&&workSlider.updateSlider("space",30),$(this).width()<=1024&&workSlider.updateSlider("space",20),$(this).width()<=620?workSlider.updateSlider("view",1):workSlider.updateSlider("view",2)})}function init(){var e=document.querySelector(".loader");gsap.set(e,{scaleX:0,rotation:10,xPercent:-5,yPercent:-50,transformOrigin:"left center",autoAlpha:1}),barba.hooks.before(function(){document.querySelector("html").classList.add("is-transitioning"),barba.wrapper.classList.add("is-animating")}),barba.hooks.after(function(){document.querySelector("html").classList.remove("is-transitioning"),barba.wrapper.classList.remove("is-animating")}),barba.hooks.enter(function(){window.scrollTo(0,0)})}function checkPage(){["/","/index.html"].filter(function(e){0===e.indexOf(window.location.pathname)?$(".header").removeClass("mf-style"):$(".header").addClass("mf-style")})}window.addEventListener("load",function(){init()});var cursor=$(".cursor"),follower=$(".cursor-follower"),posX=0,posY=0,mouseX=0,mouseY=0;function animateBildboard(){var e=new TimelineMax({});if($(".bildboard__video").exists()){var t=document.querySelector(".bildboard__video");t.currentTime=0,t.load()}e.set([".bildboard__video",".bildboard__text",".bildboard__title",".bildboard__quote",".header__container"],{autoAlpha:0}).set(".bildboard__text",{y:-20}).set(".bildboard__title",{x:-70}).set(".bildboard__quote",{y:-20}).to(".bildboard__video",{autoAlpha:1,duration:4,ease:"power2.out"},"+=1").to(".header__container",{autoAlpha:1,duration:1,ease:"power2.out"},"-=3").to(".bildboard__container",{autoAlpha:1,duration:1,ease:"power2.out"},"-=3").to(".bildboard__text",{autoAlpha:1,y:0,ease:"power2.out"},"-=2.5").to(".bildboard__title",{autoAlpha:1,x:0,ease:"power2.out",duration:1},"-=2").to(".bildboard__quote",{autoAlpha:1,y:0,ease:"power2.out",duration:1},"-=1")}TweenMax.to({},.016,{repeat:-1,onRepeat:function(){posX+=(mouseX-posX)/9,posY+=(mouseY-posY)/9,TweenMax.set(follower,{css:{left:posX-12,top:posY-12}}),TweenMax.set(cursor,{css:{left:mouseX,top:mouseY}})}}),$(document).on("mousemove",function(e){mouseX=e.clientX,mouseY=e.clientY}),$(".link").on("mouseenter",function(){cursor.addClass("active"),follower.addClass("active")}),$(".link").on("mouseleave",function(){cursor.removeClass("active"),follower.removeClass("active")}),gsap.set([".bildboard__video",".bildboard__text",".bildboard__title",".bildboard__quote",".header__container"],{autoAlpha:0}),gsap.set(".bildboard__text",{y:-20}),gsap.set(".bildboard__title",{x:-70}),gsap.set(".bildboard__quote",{y:-20}),animateBildboard(),gsap.set(".bildboard__video",{yPercent:0});var uncover=gsap.timeline({paused:!0});uncover.to(".bildboard__video",{yPercent:50,ease:"none"}),ScrollTrigger.create({trigger:".bildboard",start:"top top",end:"bottom",animation:uncover,scrub:!0}),gsap.set(".portfolio__item",{yPercent:-7,autoAlpha:0});var itemW=gsap.timeline({paused:!0});if(itemW.to(".portfolio__item",{yPercent:0,autoAlpha:1,stagger:1}),ScrollTrigger.create({trigger:".portfolio",start:"top-=40% top",end:"bottom-=40%",animation:itemW,scrub:!0}),$(".btn--special").exists()){var btnSpecial=document.querySelectorAll(".btn--special");btnSpecial.forEach(function(e,t){var o=$(e).find(".btn__text").innerWidth();console.log(o),$(e).css({width:o+39+"px"})})}$("#certificate").lightGallery(),gsap.set(".place__bg",{yPercent:0,transformOrigin:"left center"});var place=gsap.timeline({paused:!0}),placeContent=gsap.timeline({paused:!0});gsap.set(".place__title",{yPercent:-40,autoAlpha:0}),gsap.set(".place__text",{autoAlpha:0}),placeContent.to(".place__title",{yPercent:0,autoAlpha:1,duration:1}).to(".place__text",{autoAlpha:1}),ScrollTrigger.create({trigger:".place",start:"top-=150% top",end:"bottom-=80",animation:placeContent}),gsap.set(".services__item",{xPercent:-5,autoAlpha:0});var service=gsap.timeline({paused:!0});service.to(".services__item",{xPercent:0,autoAlpha:1,stagger:.3,duration:.5}),ScrollTrigger.create({trigger:".services__items",start:"top-=230% top",end:"bottom",animation:service}),gsap.set(".call__grid",{xPercent:-100,autoAlpha:0,duration:1});var call=gsap.timeline({paused:!0});if(call.to(".call__grid",{xPercent:0,autoAlpha:1,duration:2,ease:Back.easeOut.config(1.7)}),ScrollTrigger.create({trigger:".call",start:"top-=80% top",end:"bottom",animation:call}),$(window).on("load",function(){if($("#map").exists()){ymaps.ready(function(){var e=new ymaps.Map("map",{center:[53.377146,58.985573],zoom:17,controls:[]}),t=new ymaps.Placemark(e.getCenter(),{},{iconLayout:"default#image",iconImageHref:"/images/icons/marker.svg",iconImageSize:[48,64],iconImageOffset:[-24,-64],openBalloonOnClick:!1,hasHint:!1,hasBalloon:!1,cursor:"INHERIT"});e.geoObjects.add(t),e.behaviors.disable("scrollZoom"),e.behaviors.disable("drag")})}}),$(window).on("resize load",function(){$(this).width()<=500?$(".seo-result__items").exists()&&$(function(){var e=new Object;e.axis="x",e.theme="my-theme",e.advanced={autoExpandHorizontalScroll:!0},e.scrollButtons={scrollType:"pixels",scrollAmount:300},e.mouseWheel={invert:!0},$(".seo-result__items").mCustomScrollbar(e)}):$(".seo-result__items").mCustomScrollbar("destroy")}),$(window).on("resize load",function(){if($(this).width()<=1024&&$(".reach__cover").exists())try{Scrollbar.init(document.querySelector("#inner-scrollbar"),{damping:.3,alwaysShowTracks:!1})}catch(e){console.log(e)}}),$(window).on("resize load",function(){if($(this).width()<=1100&&$(this).width()>620){if($(".progress__cover").exists())try{Scrollbar.init(document.querySelector("#progress-scrollbar"),{damping:.3,alwaysShowTracks:!1})}catch(e){console.log(e)}}else Scrollbar.destroy(document.querySelector("#progress-scrollbar"))}),$(function(){$("a").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var t=e.offset().top-140;return $("html,body").animate({scrollTop:t},500),!1}}})}),$(".burger").exists())try{var header=document.querySelector(".header"),burgerBtn=header.querySelector(".burger"),panelEl=header.querySelector(".js-nav"),panelHideTl=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6}}),panelShowTl=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6}});panelHideTl.to(panelEl,{autoAlpha:0,xPercent:100,ease:Cubic.easeOut}),panelShowTl.fromTo(panelEl,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0,ease:Cubic.easeOut}),burgerBtn.addEventListener("click",function(){this.classList.toggle("opened"),this.setAttribute("aria-expanded",this.classList.contains("opened")),this.classList.contains("opened")?(panelHideTl.reverse(),panelShowTl.play(),lockedDOM(!0)):(panelShowTl.reverse(),panelHideTl.play(),lockedDOM(!1))}),$(window).on("resize load",function(){changeHeightPage(),$(this).width()>1024&&burgerBtn.classList.contains("opened")&&(burgerBtn.classList.remove("opened"),hideMenu(".js-dropMenu"),panelShowTl.reverse(),panelHideTl.play())})}catch(e){console.log(e)}var getHeight=function(e){return $(e).outerHeight()},showMenu=function(e,t){new TimelineMax({defaults:{duration:.3}}).to(e,{height:t,ease:"power1.out"}).to(e,{autoAlpha:1},"-=0.1")},hideMenu=function(e){new TimelineMax({defaults:{duration:.3}}).to(e,{autoAlpha:0}).to(e,{height:0,ease:"power1.out"},"-=0.1")};if($(".js-list").exists()){var navPanel=document.querySelector(".header__nav--tablet"),btnList=navPanel.querySelector(".js-list");btnList.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),$(".js-dropMenu").toggle(400)})}if($(".include-menu").exists()){var menu=$(".include-menu__menu"),btn=$(".js-menuBtn");btn.click(function(){$(this).toggleClass("active"),menu.toggleClass("active")})}var lockedDOM=function(e){e?$("html").css("overflow","hidden"):$("html").css("overflow","auto")},stateObject=function(e){"start"==e?(formShow(".js-form-request",!0),lockedDOM(!0)):(formShow(".js-form-request",!1),lockedDOM(!1))},showOverlay=function(e){if($(".js-overlay").exists()){var t=document.querySelector(".js-overlay"),o=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6},onComplete:stateObject,onCompleteParams:["start"]}),i=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.3},onStart:stateObject,onStartParams:["end"]});o.to(t,{autoAlpha:1,ease:"power2.out"}),i.to(t,{autoAlpha:0,ease:"power2.out"},"+=0.6"),e?(o.reverse(),o.play()):(i.reverse(),i.play())}},formShow=function(e,t){if($(e).exists()){var o=document.querySelector(".js-form-request"),i=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.5}}),r=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.8}});r.fromTo(o,{yPercent:-50,xPercent:-50,autoAlpha:1},{yPercent:-200,ease:"power2.out"}).to(o,{autoAlpha:0}),i.fromTo(o,{yPercent:-100,xPercent:-50,autoAlpha:0},{autoAlpha:1,yPercent:-50,ease:"power2.out"},"-=0.2"),t?(r.reverse(),i.play()):(i.reverse(),r.play())}};$(".js-form-call").exists()&&$(".js-form-call").on("click",function(e){e.preventDefault(),showOverlay(!0)}),$(".js-overlay").exists()&&$(".js-overlay").on("click",function(){if(showOverlay(!1),$(".request-popup__wrapper").exists())try{$(".request-popup__wrapper").removeClass("active")}catch(e){console.log(e)}}),$(".js-close-form").exists()&&$(".js-close-form").on("click",function(){showOverlay(!1)});var changeHeightPage=function(){var e,t,o;e=document.querySelector(".footer").offsetHeight,t=(o=document.documentElement.clientHeight)-(o-e),$(".b-page").css("padding-bottom",t)};if($("#request").exists())try{$('a[href^="#"]').each(function(){$(this).on("click",function(e){e.preventDefault();var t=$(this).attr("href");return void 0!==t&&""!==t&&$("html").animate({scrollTop:$(t).offset().top-130},{duration:1e3,easing:"linear"}),!1})})}catch(e){console.log(e)}if($(".js-form-request").exists()&&function(){for(var e=document.querySelector(".js-form-request"),t=e.querySelector(".js-drop-btn"),o=e.querySelector(".request-popup__wrapper"),i=e.querySelectorAll(".request-popup__link input"),r=e.querySelectorAll(".request-popup__link"),a=e.querySelector(".js-rp-txt"),s=function(e){r[e].addEventListener("click",function(){$(this).addClass("active").siblings().removeClass("active"),i[e].checked&&(a.textContent=r[e].querySelector("span").textContent)})},l=0;l<r.length;l++)s(l);t.addEventListener("click",function(){o.classList.toggle("active")}),$(".request-popup").mouseup(function(e){var t=$(".request-popup__wrapper");0===t.has(e.target).length&&t.removeClass("active")})}(),$(".js-phone-mask").exists())for(var phoneEl=document.querySelectorAll(".js-phone-mask"),_i2=0;_i2<phoneEl.length;_i2++)$(phoneEl[_i2]).mask("+7(999) 999-99-99");var caseSlider1=new Swiper(".case__slider--1",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}}),caseSlider2=new Swiper(".case__slider--2",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}}),caseSlider3=new Swiper(".case__slider--3",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}});function checkPacket(){$(".rate__item").exists()&&$(".rate__item").each(function(){$(this).find(".switch").is(":checked")?$(this).find(".rate__right").addClass("rate__right--active"):$(this).find(".rate__right").removeClass("rate__right--active")})}checkPacket(),$(".rate__item .switch").on("click",function(){checkPacket()}),$(function(){$('input[type="file"]').change(function(){var e=$(".file .file__label");if(void 0!==this.files)if(0==this.files.length)e.removeClass("withFile").text(e.data("default"));else{var t=this.files[0].name;e.addClass("withFile").text(t)}else{var o=this.value.split("\\");e.addClass("withFile").text(o[o.length-1])}return!1})}),$(".js-example-basic-single").exists()&&$(".js-example-basic-single").select2({minimumResultsForSearch:1/0}).on("select2:open",function(){$(".select2-results__options").niceScroll({scrollspeed:60,mousescrollstep:10,cursorcolor:"#00A4AD"})});