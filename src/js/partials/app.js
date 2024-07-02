
var uikit = {
    lg: '1450',
    md: '1200',
    sm: '992',
    xs: '640',
    xxs: '480',
	controller: new ScrollMagic.Controller(),
    ww: function(){
        return $(window).width();
    },

    wh: function(){
        return $(window).height();
    },

    dottedAnim: function () {
		var opacity = 1;
		var anim = setInterval(() => {
			$('.js-dotted').each(function(){ 
				opacity = !opacity;
				$(this).css('transform', 'translate(' + Math.ceil(Math.random() * 70) + 'px, ' + Math.ceil(Math.random() * 70) + 'px)').css('opacity',  opacity);
			});
		}, 4000);
		
	},

	animThree: function () {
		//var scene = document.querySelector(".js-three-section");
		var threeHeight = this.wh(); //1250;
		var sun = document.getElementsByClassName('js-three-sun');
		var city = document.getElementsByClassName('js-three-city');
		var heroCenter = document.getElementsByClassName('js-three-hero-center');
		var heroLeft = document.getElementsByClassName('js-three-hero-left');
		var heroRight = document.getElementsByClassName('js-three-hero-right');

		var tweenSun = new TimelineMax()
			.to(sun, 1, {top: '-100px', transform: 'translateX(-50%) scale(1)'});
		var tweenCity = new TimelineMax()
			.to(city, 1, {top: '0%'});
		
		var tweenHeroCenter = new TimelineMax()
			.to(heroCenter, 1, {top: '400px'});
		var tweenHeroLeft = new TimelineMax()
			.to(heroLeft, 1, {transform: 'translateX(0)'});
		var tweenHeroRight = new TimelineMax()
			.to(heroRight, 1, {transform: 'translateX(0)'});

		var sceneThreeCity = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: (threeHeight * 1), offset: 0, triggerHook: 0.5})
			//.setPin(".three-section__container")
			.setTween(tweenCity)
			.addIndicators({name: "three-city"})
			.addTo(this.controller);

		var sceneThreeSun = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: (threeHeight * 0.5), offset: 0, triggerHook: 0.3})
			//.setPin(".js-three-section")
			.setTween(tweenSun)
			.addIndicators({name: "three-sun"})
			.addTo(this.controller);

		var sceneThreeHeroCenter = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: (threeHeight * 0.5), offset: 300, triggerHook: 0.8})
			//.setPin(".js-three-section")
			.setTween(tweenHeroCenter)
			.addIndicators({name: "three-hero-center"})
			.addTo(this.controller);

		var sceneThreeHeroLeft = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: (threeHeight * 0.5), offset: 400, triggerHook: 0.8})
			//.setPin(".js-three-section")
			.setTween(tweenHeroLeft)
			.addIndicators({name: "three-hero-left"})
			.addTo(this.controller);

		var sceneThreeHeroRight = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: (threeHeight * 0.5), offset: 400, triggerHook: 0.8})
			//.setPin(".js-three-section")
			.setTween(tweenHeroRight)
			.addIndicators({name: "three-hero-right"})
			.addTo(this.controller);
	},

    mainInit: function () {
        this.dottedAnim();
        this.animThree();
    }
};

$(document).ready(function() {
    var maxHeight = 178; // Максимальная высота изображения в пикселях
    var images = $('img');
    var loadedImages = 0;

    function updateProgress() {
        var totalImages = images.length;
        var pageLoadPercentage = (loadedImages / totalImages) * 100;
        var heightInPixels = (pageLoadPercentage / 100) * maxHeight;
        $('.js-loader-img').css('max-height', heightInPixels + 'px');
    }

    images.each(function() {
        if (this.complete) {
            loadedImages++;
            updateProgress();
        } else {
            $(this).on('load', function() {
                loadedImages++;
                updateProgress();
            }).on('error', function() {
                loadedImages++;
                updateProgress();
            });
        }
    });

    $(window).on('load', function() {
		//Принудительная прокрутка вверх
		//!$('html, body').animate({scrollTop: 0}, 'fast');
        // Все элементы страницы полностью загружены

        $('.js-loader').fadeOut(400);
		$('.js-first-section').addClass('is-first-anim');
		$('.js-two-section').addClass('is-first-anim');

		setTimeout(()=>{
			$('.js-first-section').removeClass('is-first-anim');
			$('.js-two-section').removeClass('is-first-anim');
			$('body, html').removeClass('is-overflow');
		}, 4000);
    });
});

$(document).ready(function () {

    uikit.mainInit();

});

var clrTimeOut;
$(window).on('load', function (e) {
    clearTimeout(clrTimeOut);
    clrTimeOut = setTimeout(function () {
        
    }, 200);
});

$(window).resize(function () {
    clearTimeout(clrTimeOut);
    clrTimeOut = setTimeout(function () {
        
    }, 200);

});

$(window).scroll(function () {
    
});
