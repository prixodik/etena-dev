
var uikit = {
    lg: '1450',
    md: '1200',
    sm: '992',
    xs: '640',
    xxs: '480',
	disableTriggers: false,
	controller: new ScrollMagic.Controller(),
    ww: function(){
        return $(window).width();
    },

    wh: function(){
        return $(window).height();
    },

    /* dottedAnim: function () {
		var opacity = 1;
		var anim = setInterval(() => {
			$('.js-dotted').each(function(){ 
				var size = $(this).data('size') || 70;
				opacity = !opacity;
				$(this).css('transform', 'translate(' + Math.ceil(Math.random() * 70) + 'px, ' + Math.ceil(Math.random() * size) + 'px)').css('opacity',  opacity);
			});
		}, 4000);
		
	}, */
	dottedAnim: function () {
		var elements = $('.js-dotted'); // Получаем все элементы один раз
		var updateAnimation = function () {
			elements.each(function () {
				var size = $(this).data('size') || 70;
				var x = Math.ceil(Math.random() * 70);
				var y = Math.ceil(Math.random() * size);
				$(this).css({
					transform: `translate3d(${x}px, ${y}px, 0)`, // Используем translate3d для лучшей производительности
					opacity: 1 - $(this).css('opacity') // Переключаем прозрачность между 1 и 0
				});
			});
			setTimeout(updateAnimation, 4000); // Повторяем функцию каждые 4 секунды
		};
		updateAnimation(); // Запускаем анимацию впервые
	},	

	scrollToSection: function(section, speed = 1, offset = 0, ease = "power1.inOut") {
		//var newPos = document.querySelector(section).offsetTop; // Получаем верхнюю границу элемента
		//window.scrollTo({ top: newPos, behavior: 'smooth' }); // Прокрутка к элементу
		var element = document.querySelector(section);
		if (element) {
			var elementRect = element.getBoundingClientRect();
			var absoluteElementTop = elementRect.top + window.pageYOffset;
			//window.scrollTo({ top: absoluteElementTop, behavior: 'smooth' });
			this.controller.scrollTo(function (newpos) {
				gsap.to(window, speed, {scrollTo: {y: newpos + offset}, ease: ease});
			});
			this.controller.scrollTo(absoluteElementTop);
		} else {
			console.log('Элемент не найден:', section);
		}
	},

	animFirst: function(){
		var threeHeight = 10; //1250;
		var firstScene = document.getElementsByClassName('js-first-section');
		var twoSection = document.getElementsByClassName('js-two-section');
		
		var tweenTwoSectionIn = new TimelineMax()
			.to(twoSection, 0.3, {top: '-49vh'});

		var sceneFirst = new ScrollMagic.Scene({triggerElement: ".js-first-section", duration: (threeHeight * 1), offset: 0, triggerHook: 0})
			//.setPin(".js-first-section")
			.addIndicators({name: "first"})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addTo(this.controller);

		/* var sceneTwoSectionIn = new ScrollMagic.Scene({triggerElement: ".js-two-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".three-section__container")
			.setTween(tweenTwoSectionIn)
			.addIndicators({name: "two-section-in"})
			.addTo(this.controller); */
	},

	animThree: function () {
		//var scene = document.querySelector(".js-three-section");
		var threeHeight = 10;//this.wh(); //1250;
		var twoSection = document.getElementsByClassName('js-two-section');
		var sun = document.getElementsByClassName('js-three-sun');
		var city = document.getElementsByClassName('js-three-city');
		var heroCenter = document.getElementsByClassName('js-three-hero-center');
		var heroLeft = document.getElementsByClassName('js-three-hero-left');
		var heroRight = document.getElementsByClassName('js-three-hero-right');

		/* var tweenFirstSectionOut = new TimelineMax()
			.to(twoSection, 0.8, {top: '-92vh'}); */

		var tweenSun = new TimelineMax()
			.to(sun, 1, {top: '-200px', transform: 'translateX(-50%) scale(1)'});
		var tweenCity = new TimelineMax()
			.to(city, 1, {top: '0%'});
		
		var tweenHeroCenter = new TimelineMax()
			.to(heroCenter, 1, {top: '40%'});
		var tweenHeroLeft = new TimelineMax()
			.to(heroLeft, 0.8, {marginLeft: '0'});
		var tweenHeroRight = new TimelineMax()
			.to(heroRight, 0.8, {marginRight: '0'});

		var sceneThree = new ScrollMagic.Scene({triggerElement: ".js-three-section-trigger", duration: (threeHeight * 1), offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.addIndicators({name: "three"})
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-first-section');	
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
				}/* else{
					uikit.scrollToSection('.js-first-section'); // Прокрутка к следующему разделу, если скролим вверх
				} */
			})
			.addTo(this.controller);
		
		/* var sceneFirstSectionOut = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0.7})
			//.setPin(".three-section__container")
			.setTween(tweenFirstSectionOut)
			.addIndicators({name: "first-section-out"})
			.addTo(this.controller); */

		var sceneThreeCity = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 1) */, offset: 0, triggerHook: 0})
			//.setPin(".three-section__container")
			.setTween(tweenCity)
			//.addIndicators({name: "three-city"})
			.addTo(this.controller);

		var sceneThreeSun = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 0.5) */, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenSun)
			//.addIndicators({name: "three-sun"})
			.addTo(this.controller);

		var sceneThreeHeroCenter = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroCenter)
			.addIndicators({name: "three-hero-center"})
			.addTo(this.controller);

		var sceneThreeHeroLeft = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroLeft)
			.addIndicators({name: "three-hero-left"})
			.addTo(this.controller);

		var sceneThreeHeroRight = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroRight)
			.addIndicators({name: "three-hero-right"})
			.addTo(this.controller);
	},

	/* animFour: function () {
		var fourHeight = 7400;//this.wh(); //1250;
		var story = document.getElementsByClassName('js-four-story');
		var img1 = document.getElementsByClassName('js-four-img-1');
		var cloud1 = document.getElementsByClassName('js-four-cloud-1');
		var cloud2 = document.getElementsByClassName('js-four-cloud-2');
		var img2 = document.getElementsByClassName('js-four-img-2');
		var title = document.getElementsByClassName('js-four-title');
		var text1 = document.getElementsByClassName('js-four-text-1');
		var text2 = document.getElementsByClassName('js-four-text-2');
		var subtitle = document.getElementsByClassName('js-four-subtitle');
		var contain1 = document.getElementsByClassName('js-four-contain-1');
		var contain2 = document.getElementsByClassName('js-four-contain-2');
		var contain3 = document.getElementsByClassName('js-four-contain-3');
		var planet1 = document.getElementsByClassName('js-four-planet-1');
		var planet2 = document.getElementsByClassName('js-four-planet-2');
		var planet3 = document.getElementsByClassName('js-four-planet-3');
		
		$('.js-four-subtitle p').each(function(){
			var str = $(this).text();
			var newStr = str.replace(/([^\x00-\x80]|\w|\.|,)/g, "<span class='letter'>$&</span>");
			$(this).html(newStr);
		});

		var tweenStory = new TimelineMax()
			.to(story, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
			
		var tweenCloud1 = new TimelineMax()
			.to(cloud1, 1, {opacity: '1', transform: 'translate3d(0,0,0) scale(1)'});
		var tweenCloud1Move = new TimelineMax()
			.to(cloud1, 1, {opacity: '1', transform: 'translate3d(10%,20%,0) scale(1)'});
		var tweenCloud1Out = new TimelineMax()
			.to(cloud1, 1, {opacity: '0', transform: 'translate3d(10%,-100%,0) scale(1)'});

		var tweenCloud2 = new TimelineMax()
			.to(cloud2, 1, {opacity: '1', transform: 'translate(0,0) scale(1)'});
		var tweenCloud2Move = new TimelineMax()
			.to(cloud2, 1, {opacity: '1', transform: 'translate3d(-10%,-20%,0) scale(1)'});
		var tweenCloud2Out = new TimelineMax()
			.to(cloud2, 1, {opacity: '0', transform: 'translate3d(0,-100%,0) scale(0.8)'});

		var tweenImg1 = new TimelineMax()
			.to(img1, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
		var tweenImg1Out = new TimelineMax()
			.to(img1, 1, {opacity: '0', transform: 'translateY(-100%) scale(0.8)'});
		var tweenImg2 = new TimelineMax()
			.to(img2, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
		var tweenImg2Out = new TimelineMax()
			.to(img2, 1, {opacity: '0', transform: 'translateY(-100%) scale(0.8)'});
		var tweenTitle = new TimelineMax()
			.to(title, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
		var tweenTitleOut = new TimelineMax()
			.to(title, 1, {opacity: '0', transform: 'translateY(-100%) scale(1)'});
		var tweenText1 = new TimelineMax()
			.to(text1, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
		var tweenText1Out = new TimelineMax()
			.to(text1, 1, {opacity: '0', transform: 'translateY(-100%) scale(1)'});
		var tweenText2 = new TimelineMax()
			.to(text2, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
		var tweenText2Out = new TimelineMax()
			.to(text2, 1, {opacity: '0', transform: 'translateY(-100%) scale(1)'});
		var tweenSubtitleOut = new TimelineMax()
			.to(subtitle, 1, {opacity: '0.2', transform: 'translateY(0%) scale(1)'});
		var tweenContain1Out = new TimelineMax()
			.to(contain1, 1, {display: 'none'});
		var tweenContain2Out = new TimelineMax()
			.to(contain2, 1, {display: 'none'});
		var tweenContain3Out = new TimelineMax()
			.to(contain3, 1, {position: 'absolute'});

		var tweenPlanet1 = new TimelineMax()
			.to(planet1, 1, {opacity: '1', transform: 'translateY(0%)'});
		var tweenPlanet1Out = new TimelineMax()
			.to(planet1, 1, {opacity: '0.5', transform: 'translateY(-120%)'});
		var tweenPlanet1Out2 = new TimelineMax()
			.to(planet1, 1, {opacity: '0', transform: 'translateY(-240%)'});

		var tweenPlanet2 = new TimelineMax()
			.to(planet2, 1, {opacity: '1', transform: 'translateY(0%)'});
		var tweenPlanet2Out = new TimelineMax()
			.to(planet2, 1, {opacity: '0.5', transform: 'translateY(-120%)'});

		var tweenPlanet3 = new TimelineMax()
			.to(planet3, 1, {opacity: '1', transform: 'translateY(0%)'});
		//var tweenPlanet3Out = new TimelineMax()
		//	.to(planet3, 1, {opacity: '0.5', transform: 'translateY(-100%)'});

		// Animation for each letter
		var tweenLetters = new TimelineMax();
		$('.js-four-subtitle .letter').each(function(index, element) {
			tweenLetters.to(element, 20, {opacity: 1}, index * 0.1);
		});

		var sceneFour = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: (fourHeight * 1), offset: 0, triggerHook: 0})
			.setPin(".js-four-section")
			.on('leave', function (event) {
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.on('end', function (event) {
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-five-section'); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			//.setTween(tweenStory)
			.addIndicators({name: "four"})
			.addTo(this.controller);
		
		var sceneFourContain1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 100, offset: 0, triggerHook: 0})
			//.setPin(".js-four-section")
			
			.on('end', function (event) {
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-contain-2'); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			//.setTween(tweenStory)
			.addIndicators({name: "four-contain-1"})
			.addTo(this.controller);

		var sceneFourStory = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 0, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenStory)
			.addIndicators({name: "four-story"})
			.addTo(this.controller);

		var sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1)
			.addIndicators({name: "four-cloud-1"})
			.addTo(this.controller);

		var sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 2000, offset: 1350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Move)
			.addIndicators({name: "four-cloud-1-move"})
			.addTo(this.controller);
		
		var sceneFourImg1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 300, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg1)
			.addIndicators({name: "four-img-1"})
			.addTo(this.controller);

		var sceneFourTitle = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 600, triggerHook: 0.7})
			.setTween(tweenTitle)
			.addIndicators({name: "four-title"})
			.addTo(this.controller);

		var sceneFourText1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 900, triggerHook: 0.7})
			.setTween(tweenText1)
			.addIndicators({name: "four-text-1"})
			.addTo(this.controller);
		
		var sceneFourImg1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1800, triggerHook: 0.7})
			.setTween(tweenImg1Out)
			.addIndicators({name: "four-img-1-out"})
			.addTo(this.controller);

		var sceneFourTitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1900, triggerHook: 0.7})
			.setTween(tweenTitleOut)
			.addIndicators({name: "four-title-out"})
			.addTo(this.controller);

		var sceneFourText1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1950, triggerHook: 0.7})
			.setTween(tweenText1Out)
			//.addIndicators({name: "four-text-1-out"})
			.addTo(this.controller);
		
		var sceneFourContain1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2100, triggerHook: 0.7})
			.setTween(tweenContain1Out)
			//.addIndicators({name: "four-contain-1-out"})
			.addTo(this.controller);

		var sceneFourImg2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 2200, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg2)
			//.addIndicators({name: "four-img-2"})
			.addTo(this.controller);

		var sceneFourText2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 2800, triggerHook: 0.7})
			.setTween(tweenText2)
			//.addIndicators({name: "four-text-2"})
			.addTo(this.controller);

		var sceneFourImg2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3300, triggerHook: 0.7})
			.setTween(tweenImg2Out)
			//.addIndicators({name: "four-img-2-out"})
			.addTo(this.controller);

		var sceneFourText2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3450, triggerHook: 0.7})
			.setTween(tweenText2Out)
			//.addIndicators({name: "four-text-2-out"})
			.addTo(this.controller);

		var sceneFourCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 3350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "four-cloud-1-out"})
			.addTo(this.controller);

		var sceneFourContain2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 3700, triggerHook: 0.7})
			.setTween(tweenContain2Out)
			//.addIndicators({name: "four-contain-2-out"})
			.addTo(this.controller);

		var sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 3800, triggerHook: 0.7})
			.setTween(tweenCloud2)
			//.addIndicators({name: "four-cloud-2"})
			.addTo(this.controller);

		var sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4300, triggerHook: 0.7})
			.setTween(tweenCloud2Move)
			//.addIndicators({name: "four-cloud-2-move"})
			.addTo(this.controller);

		var sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 3700, triggerHook: 0.7})
			.setTween(tweenLetters)
			//.addIndicators({name: "four-letters"})
			.addTo(this.controller);
		
		var sceneFourSubtitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 4700, triggerHook: 0.7})
			.setTween(tweenSubtitleOut)
			//.addIndicators({name: "four-subtitle-out"})
			.addTo(this.controller);
		
		var sceneFourCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4700, triggerHook: 0.7})
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "four-cloud-2-out"})
			.addTo(this.controller);

		var sceneFourContain3Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 5000, triggerHook: 0.7})
			.setTween(tweenContain3Out)
			//.addIndicators({name: "four-contain-3-out"})
			.addTo(this.controller);

		var sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 4900, triggerHook: 0.7})
			.setTween(tweenPlanet1)
			//.addIndicators({name: "four-planet-1"})
			.addTo(this.controller);

		var sceneFourPlanet1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out)
			//.addIndicators({name: "four-planet-1-out"})
			.addTo(this.controller);

		var sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet2)
			//.addIndicators({name: "four-planet-2"})
			.addTo(this.controller);

		var sceneFourPlanet1Out2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out2)
			//.addIndicators({name: "four-planet-1-out-2"})
			.addTo(this.controller);

		var sceneFourPlanet2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet2Out)
			//.addIndicators({name: "four-planet-2-out"})
			.addTo(this.controller);

		var sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet3)
			//.addIndicators({name: "four-planet-3"})
			.addTo(this.controller);
	}, */

	animFour: function () {
		var fourHeight = 7400;//this.wh(); //1250;
		var story = document.getElementsByClassName('js-four-story');
		var img1 = document.getElementsByClassName('js-four-img-1');
		var cloud1 = document.getElementsByClassName('js-four-cloud-1');
		var cloud2 = document.getElementsByClassName('js-four-cloud-2');
		var img2 = document.getElementsByClassName('js-four-img-2');
		var title = document.getElementsByClassName('js-four-title');
		var text1 = document.getElementsByClassName('js-four-text-1');
		var text2 = document.getElementsByClassName('js-four-text-2');
		var subtitle = document.getElementsByClassName('js-four-subtitle');
		var contain1 = document.getElementsByClassName('js-four-contain-1');
		var contain2 = document.getElementsByClassName('js-four-contain-2');
		var contain3 = document.getElementsByClassName('js-four-contain-3');
		var planet1 = document.getElementsByClassName('js-four-planet-1');
		var planet2 = document.getElementsByClassName('js-four-planet-2');
		var planet3 = document.getElementsByClassName('js-four-planet-3');
		
		$('.js-four-subtitle p').each(function(){
			var str = $(this).text();
			var newStr = str.replace(/([^\x00-\x80]|\w|\.|,)/g, "<span class='letter'>$&</span>");
			$(this).html(newStr);
		});


		var tweenStory = gsap.timeline()
			.to(story, {duration: 1, opacity: 1, y: '0%', scale: 1});
			//.to(story, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
			
		// Создание анимаций для облаков
		var tweenCloud1 = gsap.timeline();
		tweenCloud1.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});
		var tweenCloud1Move = gsap.timeline();
		tweenCloud1Move.to(cloud1, {duration: 1, opacity: 1, x: '10%', y: '20%', scale: 1});
		var tweenCloud1Out = gsap.timeline();
		tweenCloud1Out.to(cloud1, {duration: 1, opacity: 0, x: '10%', y: '-100%', scale: 1});

		var tweenCloud2 = gsap.timeline();
		tweenCloud2.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});
		var tweenCloud2Move = gsap.timeline();
		tweenCloud2Move.to(cloud2, {duration: 1, opacity: 1, x: '-10%', y: '-20%', scale: 1});
		var tweenCloud2Out = gsap.timeline();
		tweenCloud2Out.to(cloud2, {duration: 1, opacity: 0, x: '0%', y: '-100%', scale: 0.8});

		// Создание анимаций для изображений
		var tweenImg1 = gsap.timeline();
		tweenImg1.to(img1, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenImg1Out = gsap.timeline();
		tweenImg1Out.to(img1, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});

		var tweenImg2 = gsap.timeline();
		tweenImg2.to(img2, {duration: 0.5, opacity: 1, y: '0%', scale: 1});
		var tweenImg2Out = gsap.timeline();
		tweenImg2Out.to(img2, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});

		// Создание анимаций для текстов и заголовков
		var tweenTitle = gsap.timeline();
		tweenTitle.to(title, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenTitleOut = gsap.timeline();
		tweenTitleOut.to(title, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenText1 = gsap.timeline();
		tweenText1.to(text1, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenText1Out = gsap.timeline();
		tweenText1Out.to(text1, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenText2 = gsap.timeline();
		tweenText2.to(text2, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenText2Out = gsap.timeline();
		tweenText2Out.to(text2, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenSubtitleOut = gsap.timeline();
		tweenSubtitleOut.to(subtitle, {duration: 1, opacity: 0.2, y: '0%', scale: 1});

		// Создание анимаций для контейнеров
		var tweenContain1Out = gsap.timeline();
		tweenContain1Out.to(contain1, {duration: 0.1, display: 'none'});
		var tweenContain2Out = gsap.timeline();
		tweenContain2Out.to(contain2, {duration: 0.1, display: 'none'});
		var tweenContain3Out = gsap.timeline();
		tweenContain3Out.to(contain3, {duration: 0.1, position: 'absolute'});

		// Создание анимаций для планет
		var tweenPlanet1 = gsap.timeline();
		tweenPlanet1.to(planet1, {duration: 1, opacity: 1, y: '0%'});
		var tweenPlanet1Out = gsap.timeline();
		tweenPlanet1Out.to(planet1, {duration: 1, opacity: 0.5, y: '-120%'});
		var tweenPlanet1Out2 = gsap.timeline();
		tweenPlanet1Out2.to(planet1, {duration: 1, opacity: 0, y: '-240%'});

		var tweenPlanet2 = gsap.timeline();
		tweenPlanet2.to(planet2, {duration: 1, opacity: 1, y: '0%'});
		var tweenPlanet2Out = gsap.timeline();
		tweenPlanet2Out.to(planet2, {duration: 1, opacity: 0.5, y: '-120%'});

		var tweenPlanet3 = gsap.timeline();
		tweenPlanet3.to(planet3, {duration: 1, opacity: 1, y: '0%'});

		//var tweenPlanet3Out = new TimelineMax()
		//	.to(planet3, 1, {opacity: '0.5', transform: 'translateY(-100%)'});

		// Animation for each letter
		// Создание таймлайна с помощью GSAP 3
		var tweenLetters = gsap.timeline();

		// Применение анимации к каждой букве с задержкой
		tweenLetters.to('.js-four-subtitle .letter', {
			duration: 10, // продолжительность анимации
			opacity: 1,   // конечное значение прозрачности
			stagger: 0.1  // задержка между стартами анимации каждой буквы
		});

		var sceneFour = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: (fourHeight * 1), offset: 0, triggerHook: 0})
			.setPin(".js-four-section")
			/* .on('leave', function (event) {
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 300, 1800); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			//.setTween(tweenStory)
			.addIndicators({name: "four"})
			.addTo(this.controller);

		//?------------------------------------

		var sceneFourTrigger1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 1030, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section-trigger', 2, 1200); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			//.setTween(tweenStory)
			.addIndicators({name: "four-trigger-1"})
			.addTo(this.controller);

		var sceneFourTrigger2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 2450, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1410); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 2, 1320, "linear"); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addIndicators({name: "four-trigger-2"})
			.addTo(this.controller);

		var sceneFourTrigger3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 3790, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 2, -1310, "linear"); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1280); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addIndicators({name: "four-trigger-3"})
			.addTo(this.controller);

		var sceneFourTrigger4 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 5090, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1280); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1100); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addIndicators({name: "four-trigger-4"})
			.addTo(this.controller);

		var sceneFourTrigger5 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 6210, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1100); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1100); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addIndicators({name: "four-trigger-5"})
			.addTo(this.controller);

		var sceneFourTrigger6 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 30, offset: 7330, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1100); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 700); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			.addIndicators({name: "four-trigger-6"})
			.addTo(this.controller);

		//?------------------------------------
		
		var sceneFourContain1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 100, offset: 0, triggerHook: 0})
			//.setPin(".js-four-section")
			
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-contain-2'); // Прокрутка к следующему разделу, если скролим вниз
				}
			})
			//.setTween(tweenStory)
			.addIndicators({name: "four-contain-1"})
			.addTo(this.controller);

		var sceneFourStory = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 0, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenStory)
			.addIndicators({name: "four-story"})
			.addTo(this.controller);

		var sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1)
			.addIndicators({name: "four-cloud-1"})
			.addTo(this.controller);

		var sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 2000, offset: 1350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Move)
			.addIndicators({name: "four-cloud-1-move"})
			.addTo(this.controller);
		
		var sceneFourImg1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 300, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg1)
			.addIndicators({name: "four-img-1"})
			.addTo(this.controller);

		var sceneFourTitle = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 600, triggerHook: 0.7})
			.setTween(tweenTitle)
			.addIndicators({name: "four-title"})
			.addTo(this.controller);

		var sceneFourText1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 900, triggerHook: 0.7})
			.setTween(tweenText1)
			.addIndicators({name: "four-text-1"})
			.addTo(this.controller);
		
		var sceneFourImg1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1800, triggerHook: 0.7})
			.setTween(tweenImg1Out)
			.addIndicators({name: "four-img-1-out"})
			.addTo(this.controller);

		var sceneFourTitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1900, triggerHook: 0.7})
			.setTween(tweenTitleOut)
			.addIndicators({name: "four-title-out"})
			.addTo(this.controller);

		var sceneFourText1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1950, triggerHook: 0.7})
			.setTween(tweenText1Out)
			//.addIndicators({name: "four-text-1-out"})
			.addTo(this.controller);
		
		var sceneFourContain1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2100, triggerHook: 0.7})
			.setTween(tweenContain1Out)
			//.addIndicators({name: "four-contain-1-out"})
			.addTo(this.controller);

		var sceneFourImg2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 2200, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg2)
			//.addIndicators({name: "four-img-2"})
			.addTo(this.controller);

		var sceneFourText2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 2800, triggerHook: 0.7})
			.setTween(tweenText2)
			//.addIndicators({name: "four-text-2"})
			.addTo(this.controller);

		var sceneFourImg2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3300, triggerHook: 0.7})
			.setTween(tweenImg2Out)
			//.addIndicators({name: "four-img-2-out"})
			.addTo(this.controller);

		var sceneFourText2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3450, triggerHook: 0.7})
			.setTween(tweenText2Out)
			//.addIndicators({name: "four-text-2-out"})
			.addTo(this.controller);

		var sceneFourCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 3350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "four-cloud-1-out"})
			.addTo(this.controller);

		var sceneFourContain2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 3700, triggerHook: 0.7})
			.setTween(tweenContain2Out)
			//.addIndicators({name: "four-contain-2-out"})
			.addTo(this.controller);

		var sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 3800, triggerHook: 0.7})
			.setTween(tweenCloud2)
			//.addIndicators({name: "four-cloud-2"})
			.addTo(this.controller);

		var sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4300, triggerHook: 0.7})
			.setTween(tweenCloud2Move)
			//.addIndicators({name: "four-cloud-2-move"})
			.addTo(this.controller);

		var sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 3700, triggerHook: 0.7})
			.setTween(tweenLetters)
			//.addIndicators({name: "four-letters"})
			.addTo(this.controller);
		
		var sceneFourSubtitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 4700, triggerHook: 0.7})
			.setTween(tweenSubtitleOut)
			//.addIndicators({name: "four-subtitle-out"})
			.addTo(this.controller);
		
		var sceneFourCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4700, triggerHook: 0.7})
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "four-cloud-2-out"})
			.addTo(this.controller);

		var sceneFourContain3Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 5000, triggerHook: 0.7})
			.setTween(tweenContain3Out)
			//.addIndicators({name: "four-contain-3-out"})
			.addTo(this.controller);

		var sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 4900, triggerHook: 0.7})
			.setTween(tweenPlanet1)
			//.addIndicators({name: "four-planet-1"})
			.addTo(this.controller);

		var sceneFourPlanet1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out)
			//.addIndicators({name: "four-planet-1-out"})
			.addTo(this.controller);

		var sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet2)
			//.addIndicators({name: "four-planet-2"})
			.addTo(this.controller);

		var sceneFourPlanet1Out2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out2)
			//.addIndicators({name: "four-planet-1-out-2"})
			.addTo(this.controller);

		var sceneFourPlanet2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet2Out)
			//.addIndicators({name: "four-planet-2-out"})
			.addTo(this.controller);

		var sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet3)
			//.addIndicators({name: "four-planet-3"})
			.addTo(this.controller);
	},

	animFive: function () {
		var fiveHeight = this.wh(); //1250;
		var fiveTitle = document.getElementsByClassName('js-five-title');
		var fiveText = document.getElementsByClassName('js-five-text');
		var fiveImg = document.getElementsByClassName('js-five-img');
		

		/* var tweenTitle = new TimelineMax()
			.to(fiveTitle, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});
		var tweenText = new TimelineMax()
			.to(fiveText, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});
		var tweenImg = new TimelineMax()
			.to(fiveImg, 1, { transform: 'translateY(0) scale(1)'}); */
		// Создание таймлайна и анимации для заголовка
		var tweenTitle = gsap.timeline();
		tweenTitle.to(fiveTitle, {duration: 1, opacity: 1, y: '0%', scale: 1});

		// Создание таймлайна и анимации для текста
		var tweenText = gsap.timeline();
		tweenText.to(fiveText, {duration: 1, opacity: 1, y: '0%', scale: 1});

		// Создание таймлайна и анимации для изображения
		var tweenImg = gsap.timeline();
		tweenImg.to(fiveImg, {duration: 1, y: '0%', scale: 1});

		var sceneFiveTrigger = new ScrollMagic.Scene({triggerElement: ".js-five-section-trigger", duration: 30, offset: -450, triggerHook: 0})
			//.setPin(".js-four-section")
			.on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -60); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				// Проверяем, что направление прокрутки вниз
				/* if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-five-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
				} */
			})
			.addIndicators({name: "five-trigger"})
			.addTo(this.controller);


		var sceneFiveTitle = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenTitle)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveText = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 200, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenText)
			//.addIndicators({name: "five-text"})
			.addTo(this.controller);

		var sceneFiveImg = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 0, triggerHook: 1})
			//.setPin(".three-section__container")
			.setTween(tweenImg)
			//.addIndicators({name: "five-img"})
			.addTo(this.controller);
	},

	scrollUp: function () {
		$('.js-scroll-up').click(function(){
			//$('html, body').animate({scrollTop: 0}, 'slow');
			uikit.disableTriggers = true;
			uikit.scrollToSection('.js-first-section', 1, uikit.wh() * -1);
			
			setTimeout(function () {
				uikit.disableTriggers = false;
			},1100);
			return false;
		});
	},

    mainInit: function () {
        this.dottedAnim();
        this.animFirst();
        this.animThree();
		this.animFour();
		this.animFive();
		this.scrollUp();
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
		uikit.disableTriggers = true;
		$('html, body').animate({scrollTop: 0}, 'fast');
		
		//uikit.scrollToSection('.js-first-section',0);
        // Все элементы страницы полностью загружены

		setTimeout(()=>{
			uikit.disableTriggers = false;
			$('.js-loader').fadeOut(400);
			$('.js-first-section').addClass('is-first-anim');
			$('.js-two-section').addClass('is-first-anim');
			uikit.mainInit();
		}, 200);

		setTimeout(()=>{
			$('.js-first-section').removeClass('is-first-anim');
			$('.js-two-section').removeClass('is-first-anim');
			$('body, html').removeClass('is-overflow');
		}, 4200);
    });
});

$(document).ready(function () {

    

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
