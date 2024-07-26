
var uikit = {
    lg: '1450',
    md: '1200',
    sm: '1024',
    sm2: '980',
    xs: '640',
    xxs: '480',
	wwInit: null,
	whInit: null,
	_touchStartY: null,
	_resizing: false,
	scale: function(){
		let ratio = window.devicePixelRatio;
		
		ratio = (ratio >= 2)? 1 : ratio;
		console.log('DevicePixelRatio = '+ratio);
		
		if(ratio > 1 && ratio <= 2){
			return (1 / ratio);
		}else if(this.wwOrigin() <= this.sm){
			return 1.2;
		}else{
			return 1;
		}
	},
	steps: [
		{ // 1
			prev: {},
			next: {
				trigger: '.js-three-section-trigger'
			}
		},
		{ // 2
			prev: {
				trigger: '.js-first-section'
			},
			next: {
				trigger: '.js-four-section',
				offset: 950,
				speed: 2
			}
		},
		{ // 3
			prev: {
				trigger: '.js-three-section-trigger',
				speed: 1.5
			},
			next: {
				trigger: '.js-four-section',
				offset: 1510,
				speed: 1.5
			}
		},
		{ // 4
			prev: {
				trigger: '.js-four-section',
				offset: -1510,
				speed: 1
			},
			next: {
				trigger: '.js-four-section',
				offset: 1340,
				speed: 2,
				ease: 'linear'
			}
		},
		{ // 5
			prev: {
				trigger: '.js-four-section',
				offset: -1310,
				speed: 2,
				ease: 'linear'
			},
			next: {
				trigger: '.js-four-section',
				offset: 1280,
				speed: 1
			}
		},
		{ // 6
			prev: {
				trigger: '.js-four-section',
				offset: -1280,
				speed: 1
			},
			next: {
				trigger: '.js-four-section',
				offset: 1100,
				speed: 1
			}
		},
		{ // 7
			prev: {
				trigger: '.js-four-section',
				offset: -1100,
				speed: 1
			},
			next: {
				trigger: '.js-four-section',
				offset: 1100,
				speed: 1
			}
		},
		{ // 8
			prev: {
				trigger: '.js-four-section',
				offset: -1100,
				speed: 1
			},
			next: {
				trigger: '.js-five-section-trigger',
				offset: 0,
				speed: 1
			}
		},
		{ // 9
			prev: {
				trigger: '.js-four-section',
				offset: -60,
				speed: 1
			},
			next: {
				trigger: '.js-five-img',
				offset: 0,
				speed: 1
			}
		},
		{ // 10
			prev: {
				trigger: '.js-five-section-trigger',
				offset: -100,
				speed: 1
			},
			next: {
				trigger: '.js-footer',
				offset: 0,
				speed: 1.5,
				ease: 'linear'
			}
		},
		{ // 11
			prev: {
				trigger: '.js-five-img',
				offset: -100,
				speed: 1.5,
				ease: 'linear'
			},
			next: {}
		}
	],
	//massCoordinSteps: [],
	lastDirection: 'down',
	currentSlide: 0,
	nextSlide: 1,
	disableTriggers: true,
	controller: new ScrollMagic.Controller(),
    ww: function(){
        return $(window).width() * this.scale();
    },

    wh: function(){
        return $(window).height() * this.scale();
    },
	wwOrigin: function(){
        return $(window).width();
    },

    whOrigin: function(){
        return $(window).height();
    },
	isTouch: function(){
		return 'ontouchstart' in window;
	},

	dottedAnim: function () {
		var elements = $('.js-dotted'); // Получаем все элементы один раз
		var scale = (this.wwOrigin() > this.sm)? 1 : 0.5;
		var updateAnimation = function () {
			elements.each(function () {
				var size = $(this).data('size') || 70;
				var x = Math.ceil(Math.random() * 70);
				var y = Math.ceil(Math.random() * size);
				$(this).css({
					transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`, // Используем translate3d для лучшей производительности
					opacity: 1 - $(this).css('opacity') // Переключаем прозрачность между 1 и 0
				});
			});
			setTimeout(updateAnimation, 4000); // Повторяем функцию каждые 4 секунды
		};
		updateAnimation(); // Запускаем анимацию впервые
	},

	disableScroll: function() {
		console.log("Scrolling disabled");
		window.addEventListener('wheel', uikit.preventScroll, {passive: false});
    	window.addEventListener('touchmove', uikit.preventScroll, {passive: false});
		window.addEventListener('touchstart', uikit.touchStart, { passive: false });
        window.addEventListener('touchend', uikit.touchEnd, { passive: false });
	},
	
	enableScroll: function() {
		console.log("Scrolling enabled");
		window.removeEventListener('wheel', uikit.preventScroll, {passive: false});
    	window.removeEventListener('touchmove', uikit.preventScroll, {passive: false});
		window.removeEventListener('touchstart', uikit.touchStart, { passive: false });
        window.removeEventListener('touchend', uikit.touchEnd, { passive: false });
	},

	scrollNext: function(){
		//console.log('next');
		//console.log(this.steps[this.currentSlide]?.next);
		if(!this.steps[this.currentSlide]?.next?.trigger || this.disableTriggers) return false;

		uikit.scrollToSection(
			this.steps[this.currentSlide].next.trigger,
			this.steps[this.currentSlide].next.speed,
			this.steps[this.currentSlide].next.offset,
			this.steps[this.currentSlide].next.ease
		);
		this.currentSlide = this.currentSlide + 1;
	},
	scrollPrev: function(){
		//console.log('prev');
		//console.log(this.steps[this.currentSlide]?.prev);

		if(!this.steps[this.currentSlide]?.prev?.trigger || this.disableTriggers) return false;

		uikit.scrollToSection(
			this.steps[this.currentSlide].prev.trigger,
			this.steps[this.currentSlide].prev.speed,
			this.steps[this.currentSlide].prev.offset,
			this.steps[this.currentSlide].prev.ease
		);
		this.currentSlide = this.currentSlide - 1;
	},

	touchStart: function(e) {
        if (e.touches.length === 1) {
            uikit._touchStartY = e.touches[0].clientY;
        }
    },

    touchEnd: function(e) {
        uikit._touchStartY = null;
    },

	preventScroll: function(e) {
		let scrollDirection;
		let scrollCount;
		
		if (e.type === 'wheel') {
			scrollCount = e.deltaY;
		} else if (e.type === 'touchmove') {
			if (uikit._touchStartY === null) {
				uikit._touchStartY = e.touches[0].clientY;
				console.log(e.touches[0].clientY);
			}
			
			scrollCount = uikit._touchStartY - e.touches[0].clientY;
			//console.log(scrollCount);
		}

		if (scrollCount > 0 && !uikit.disableTriggers) {
			scrollDirection = 'down';
			uikit.scrollNext();
		} else if (scrollCount < 0 && !uikit.disableTriggers) {
			scrollDirection = 'up';
			uikit.scrollPrev();
		} else {
			scrollDirection = 'none';
		}

		//console.log("Scroll event prevented");
		//console.log({ scrollDirection, scrollCount });
		e.preventDefault();
		e.stopPropagation();
	},

	scrollToSection: function(section, speed = 1, offset = 0, ease = "power1.inOut") {
		
		var element = document.querySelector(section);
		if (element) {
			var elementRect = element.getBoundingClientRect();
			var absoluteElementTop = elementRect.top + window.pageYOffset;
			//console.log('--'+absoluteElementTop+' + '+offset+'='+ (absoluteElementTop+offset));

			// Отключаем скролл при начале анимации
			uikit.disableTriggers = true;

			this.controller.scrollTo(function (newpos) {
				requestAnimationFrame(function() {
					gsap.to(window, {
						duration: speed,
						scrollTo: { y: newpos + offset },
						ease: ease,
						onStart: function() {
							// Анимация началась
							uikit.disableTriggers = true;
						},
						onComplete: function() {
							//console.log($(window).scrollTop()+'!!!');
							if (uikit.disableTriggers) {
								gsap.killTweensOf(window); // Останавливаем все текущие анимации GSAP на объекте window
							}
							// Анимация закончилась
							setTimeout(function() {
								uikit.disableTriggers = false;
							},300);
						}
					});
				});
			});
			this.controller.scrollTo(absoluteElementTop);
		} else {
			console.log('Элемент не найден:', section);
		}
	},

	animFirst: function(){
		var threeHeight = 10; //1250;
		var twoSection = document.getElementsByClassName('js-two-section');
		
		$('.first-section__pixel').each(function(){
			let randomTop = Math.random() * 100;
			let randomLeft = Math.random() * 60;
			$(this).css('top', randomTop / uikit.scale()+'%')
				.css('left', randomLeft / uikit.scale()+'%');
		});
		
		let twoSectionTop = 52;
		let vh = 'vh'; 
		if(this.wwOrigin() <= this.lg && this.wwOrigin() > this.md){ // lg
			twoSectionTop = 52;
		}else if(this.wwOrigin() <= this.md && this.wwOrigin() > this.sm){
			twoSectionTop = 28;
			vh = '%';
		}else if(this.wwOrigin() <= this.sm){
			twoSectionTop = 32;
			vh = '%';
		}

		if(this.whOrigin() <= 600){
			twoSectionTop = 32;
			vh = '%';
		}

		var top = twoSectionTop / this.scale(); // 0.8 * 52 * 0.2 = 20% увеличение значения top

		var tweenTwoSectionIn = new TimelineMax()
			.to(twoSection, 0.3, {top: '-'+top+vh});

		var sceneFirst = null;
		sceneFirst = new ScrollMagic.Scene({triggerElement: ".js-first-section", duration: (threeHeight * 1), offset: 0, triggerHook: 0})
			//.setPin(".js-first-section")
			//.addIndicators({name: "first"})
			.addTo(this.controller);
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

		var tweenSun = new TimelineMax()
			.to(sun, 1, {top: '-200px', transform: 'translateX(-50%) scale(1)'});
		var tweenCity = new TimelineMax()
			.to(city, 1, {top: '0%'});
		
		var heroTop = 40;
		
		if(this.ww() <= (+this.md + 50) && this.ww() > this.sm){ // md
			heroTop = 10;
		}
		var tweenHeroCenter = new TimelineMax()
			.to(heroCenter, 1, {top: heroTop+'%'});
		var tweenHeroLeft = new TimelineMax()
			.to(heroLeft, 0.8, {marginLeft: '0'});
		var tweenHeroRight = new TimelineMax()
			.to(heroRight, 0.8, {marginRight: '0'});

		var sceneThree = new ScrollMagic.Scene({triggerElement: ".js-three-section-trigger", duration: (threeHeight * 1), offset: 0, triggerHook: 0})
			//.addIndicators({name: "three"})
			.addTo(this.controller);

		var sceneThreeCity = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 1) */, offset: 0, triggerHook: (this.wwInit > this.sm)? 0 : 0.7})
			//.setPin(".three-section__container")
			.setTween(tweenCity)
			//.addIndicators({name: "three-city"})
			.addTo(this.controller);

		var sceneThreeSun = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0/* (threeHeight * 0.5) */, offset: 0, triggerHook: (this.wwInit > this.sm)? 0 : 0.7})
			//.setPin(".js-three-section")
			.setTween(tweenSun)
			//.addIndicators({name: "three-sun"})
			.addTo(this.controller);

		var sceneThreeHeroCenter = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroCenter)
			//.addIndicators({name: "three-hero-center"})
			.addTo(this.controller);

		var sceneThreeHeroLeft = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroLeft)
			//.addIndicators({name: "three-hero-left"})
			.addTo(this.controller);

		var sceneThreeHeroRight = new ScrollMagic.Scene({triggerElement: ".js-three-section", duration: 0, offset: 0, triggerHook: 0})
			//.setPin(".js-three-section")
			.setTween(tweenHeroRight)
			//.addIndicators({name: "three-hero-right"})
			.addTo(this.controller);
	},
	
	animFour: function () {
		var fourHeight = 7400;
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


		var tweenStory = null;
		tweenStory = gsap.timeline()
			.to(story, {duration: 1, opacity: 1, y: '0%', scale: 1});
			//.to(story, 1, {opacity: '1', transform: 'translateY(0%) scale(1)'});
			
		// Создание анимаций для облаков
		var tweenCloud1 = null;
		tweenCloud1 = gsap.timeline();
		tweenCloud1.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});

		var tweenCloud1Move = null;
		tweenCloud1Move = gsap.timeline();
		tweenCloud1Move.to(cloud1, {duration: 1, opacity: 1, x: '10%', y: '20%', scale: 1});
		var tweenCloud1Out = null;
		tweenCloud1Out = gsap.timeline();
		tweenCloud1Out.to(cloud1, {duration: 1, opacity: 0, x: '10%', y: '-100%', scale: 1});

		var tweenCloud2 = null;
		tweenCloud2 = gsap.timeline();
		tweenCloud2.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});
		var tweenCloud2Move = null;
		tweenCloud2Move = gsap.timeline();
		tweenCloud2Move.to(cloud2, {duration: 1, opacity: 1, x: '-10%', y: '-20%', scale: 1});
		var tweenCloud2Out = null;
		tweenCloud2Out = gsap.timeline();
		tweenCloud2Out.to(cloud2, {duration: 1, opacity: 0, x: '0%', y: '-100%', scale: 0.8});

		// Создание анимаций для изображений
		var tweenImg1 = null;
		tweenImg1 = gsap.timeline();
		tweenImg1.to(img1, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenImg1Out = null;
		tweenImg1Out = gsap.timeline();
		tweenImg1Out.to(img1, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});

		var tweenImg2 = null;
		tweenImg2 = gsap.timeline();
		tweenImg2.to(img2, {duration: 0.5, opacity: 1, y: '0%', scale: 1});
		var tweenImg2Out = null;
		tweenImg2Out = gsap.timeline();
		tweenImg2Out.to(img2, {duration: 1, opacity: 0, y: '-100%', scale: 0.8});

		// Создание анимаций для текстов и заголовков
		var tweenTitle = null;
		tweenTitle = gsap.timeline();
		tweenTitle.to(title, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenTitleOut = null;
		tweenTitleOut = gsap.timeline();
		tweenTitleOut.to(title, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenText1 = null;
		tweenText1 = gsap.timeline();
		tweenText1.to(text1, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenText1Out = null;
		tweenText1Out = gsap.timeline();
		tweenText1Out.to(text1, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenText2 = null;
		tweenText2 = gsap.timeline();
		tweenText2.to(text2, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenText2Out = null;
		tweenText2Out = gsap.timeline();
		tweenText2Out.to(text2, {duration: 1, opacity: 0, y: '-100%', scale: 1});

		var tweenSubtitleOut = null;
		tweenSubtitleOut = gsap.timeline();
		tweenSubtitleOut.to(subtitle, {duration: 1, opacity: 0.2, y: '0%', scale: 1});

		// Создание анимаций для контейнеров
		var tweenContain1Out = null;
		tweenContain1Out = gsap.timeline();
		tweenContain1Out.to(contain1, {duration: 0.1, display: 'none'});
		var tweenContain2Out = null;
		tweenContain2Out = gsap.timeline();
		tweenContain2Out.to(contain2, {duration: 0.1, display: 'none'});
		var tweenContain3Out = null;
		tweenContain3Out = gsap.timeline();
		tweenContain3Out.to(contain3, {duration: 0.1, position: 'absolute'});

		// Создание анимаций для планет
		var tweenPlanet1 = null;
		tweenPlanet1 = gsap.timeline();
		tweenPlanet1.to(planet1, {duration: 1, opacity: 1, y: '0%'});
		var tweenPlanet1Out = null;
		tweenPlanet1Out = gsap.timeline();
		tweenPlanet1Out.to(planet1, {duration: 1, opacity: 0, y: '-120%'});
		var tweenPlanet1Out2 = null;
		tweenPlanet1Out2 = gsap.timeline();
		tweenPlanet1Out2.to(planet1, {duration: 1, opacity: 0, y: '-240%'});

		var tweenPlanet2 = null;
		tweenPlanet2 = gsap.timeline();
		tweenPlanet2.to(planet2, {duration: 1, opacity: 1, y: '0%'});
		var tweenPlanet2Out = null;
		tweenPlanet2Out = gsap.timeline();
		tweenPlanet2Out.to(planet2, {duration: 1, opacity: 0, y: '-120%'});

		var tweenPlanet3 = null;
		tweenPlanet3 = gsap.timeline();
		tweenPlanet3.to(planet3, {duration: 1, opacity: 1, y: '0%'});

		//var tweenPlanet3Out = new TimelineMax()
		//	.to(planet3, 1, {opacity: '0.5', transform: 'translateY(-100%)'});

		// Animation for each letter
		// Создание таймлайна с помощью GSAP 3
		var tweenLetters = null;
		tweenLetters = gsap.timeline();

		// Применение анимации к каждой букве с задержкой
		tweenLetters.to('.js-four-subtitle .letter', {
			duration: 10, // продолжительность анимации
			opacity: 1,   // конечное значение прозрачности
			stagger: 0.1  // задержка между стартами анимации каждой буквы
		});

		var sceneFour = null;
		sceneFour = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: (fourHeight * 1), offset: 0, triggerHook: 0})
			.setPin(".js-four-section")
			//.addIndicators({name: "four"})
			.addTo(this.controller);

		//?------------------------------------

		var sceneFourTrigger1 = null;
		sceneFourTrigger1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 1030, triggerHook: 0})
			//.setTween(tweenStory)
			//.addIndicators({name: "four-trigger-1"})
			.addTo(this.controller);

		var sceneFourTrigger2 = null;
		sceneFourTrigger2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 2450, triggerHook: 0})
			//.addIndicators({name: "four-trigger-2"})
			.addTo(this.controller);

		var sceneFourTrigger3 = null;
		sceneFourTrigger3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 3810, triggerHook: 0})
			//.addIndicators({name: "four-trigger-3"})
			.addTo(this.controller);

		var sceneFourTrigger4 = null;
		sceneFourTrigger4 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 5090, triggerHook: 0})
			//.addIndicators({name: "four-trigger-4"})
			.addTo(this.controller);

		var sceneFourTrigger5 = null;
		sceneFourTrigger5 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 6210, triggerHook: 0})
			//.addIndicators({name: "four-trigger-5"})
			.addTo(this.controller);

		var sceneFourTrigger6 = null;
		sceneFourTrigger6 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 7330, triggerHook: 0})
			//.addIndicators({name: "four-trigger-6"})
			.addTo(this.controller);

		//?------------------------------------
		
		var sceneFourStory = null;
		sceneFourStory = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 0, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenStory)
			//.addIndicators({name: "four-story"})
			.addTo(this.controller);

		var sceneFourCloud1 = null;
		sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1)
			//.addIndicators({name: "four-cloud-1"})
			.addTo(this.controller);

		var sceneFourCloud1Move = null;
		sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 2000, offset: 1350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Move)
			//.addIndicators({name: "four-cloud-1-move"})
			.addTo(this.controller);
		
		var sceneFourImg1 = null;
		sceneFourImg1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 300, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg1)
			//.addIndicators({name: "four-img-1"})
			.addTo(this.controller);

		var sceneFourTitle = null;
		sceneFourTitle = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 600, triggerHook: 0.7})
			.setTween(tweenTitle)
			//.addIndicators({name: "four-title"})
			.addTo(this.controller);

		var sceneFourText1 = null;
		sceneFourText1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 900, triggerHook: 0.7})
			.setTween(tweenText1)
			//.addIndicators({name: "four-text-1"})
			.addTo(this.controller);
		
		var sceneFourImg1Out = null;
		sceneFourImg1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1800, triggerHook: 0.7})
			.setTween(tweenImg1Out)
			//.addIndicators({name: "four-img-1-out"})
			.addTo(this.controller);

		var sceneFourTitleOut = null;
		sceneFourTitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1900, triggerHook: 0.7})
			.setTween(tweenTitleOut)
			//.addIndicators({name: "four-title-out"})
			.addTo(this.controller);

		var sceneFourText1Out = null;
		sceneFourText1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1950, triggerHook: 0.7})
			.setTween(tweenText1Out)
			//.addIndicators({name: "four-text-1-out"})
			.addTo(this.controller);
		
		var sceneFourContain1Out = null;
		sceneFourContain1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2100, triggerHook: 0.7})
			.setTween(tweenContain1Out)
			//.addIndicators({name: "four-contain-1-out"})
			.addTo(this.controller);

		var sceneFourImg2 = null;
		sceneFourImg2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 2200, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg2)
			//.addIndicators({name: "four-img-2"})
			.addTo(this.controller);

		var sceneFourText2 = null;
		sceneFourText2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 2800, triggerHook: 0.7})
			.setTween(tweenText2)
			//.addIndicators({name: "four-text-2"})
			.addTo(this.controller);

		var sceneFourImg2Out = null;
		sceneFourImg2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3300, triggerHook: 0.7})
			.setTween(tweenImg2Out)
			//.addIndicators({name: "four-img-2-out"})
			.addTo(this.controller);

		var sceneFourText2Out = null;
		sceneFourText2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 3450, triggerHook: 0.7})
			.setTween(tweenText2Out)
			//.addIndicators({name: "four-text-2-out"})
			.addTo(this.controller);

		var sceneFourCloud1Out = null;
		sceneFourCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 3350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "four-cloud-1-out"})
			.addTo(this.controller);

		var sceneFourContain2Out = null;
		sceneFourContain2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 3700, triggerHook: 0.7})
			.setTween(tweenContain2Out)
			//.addIndicators({name: "four-contain-2-out"})
			.addTo(this.controller);

		var sceneFourCloud2 = null;
		sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 3800, triggerHook: 0.7})
			.setTween(tweenCloud2)
			//.addIndicators({name: "four-cloud-2"})
			.addTo(this.controller);

		var sceneFourCloud2Move = null;
		sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4300, triggerHook: 0.7})
			.setTween(tweenCloud2Move)
			//.addIndicators({name: "four-cloud-2-move"})
			.addTo(this.controller);

		var sceneFourLetters = null;
		sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 3700, triggerHook: 0.9})
			.setTween(tweenLetters)
			//.addIndicators({name: "four-letters"})
			.addTo(this.controller);
		
		var sceneFourSubtitleOut = null;
		sceneFourSubtitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 4700, triggerHook: 0.7})
			.setTween(tweenSubtitleOut)
			//.addIndicators({name: "four-subtitle-out"})
			.addTo(this.controller);
		
		var sceneFourCloud2Out = null;
		sceneFourCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 4700, triggerHook: 0.7})
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "four-cloud-2-out"})
			.addTo(this.controller);

		var sceneFourContain3Out = null;
		sceneFourContain3Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 5000, triggerHook: 0.7})
			.setTween(tweenContain3Out)
			//.addIndicators({name: "four-contain-3-out"})
			.addTo(this.controller);

		var sceneFourPlanet1 = null;
		sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 4900, triggerHook: 0.7})
			.setTween(tweenPlanet1)
			//.addIndicators({name: "four-planet-1"})
			.addTo(this.controller);

		var sceneFourPlanet1Out = null;
		sceneFourPlanet1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out)
			//.addIndicators({name: "four-planet-1-out"})
			.addTo(this.controller);

		var sceneFourPlanet2 = null;
		sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 5900, triggerHook: 0.7})
			.setTween(tweenPlanet2)
			//.addIndicators({name: "four-planet-2"})
			.addTo(this.controller);

		var sceneFourPlanet1Out2 = null;
		sceneFourPlanet1Out2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet1Out2)
			//.addIndicators({name: "four-planet-1-out-2"})
			.addTo(this.controller);

		var sceneFourPlanet2Out = null;
		sceneFourPlanet2Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet2Out)
			//.addIndicators({name: "four-planet-2-out"})
			.addTo(this.controller);

		var sceneFourPlanet3 = null;
		sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 6900, triggerHook: 0.7})
			.setTween(tweenPlanet3)
			//.addIndicators({name: "four-planet-3"})
			.addTo(this.controller);
	},

	animFourXs: function () {
		//var fourHeight = 7400;
		var cloud1 = document.getElementsByClassName('js-four-cloud-1');
		var cloud2 = document.getElementsByClassName('js-four-cloud-2');
		
		var planet1 = $('.js-four-planet-1 .four-section__planet-img');
		var planet2 = $('.js-four-planet-2 .four-section__planet-img');
		var planet3 = $('.js-four-planet-3 .four-section__planet-img');
		
		$('.js-four-subtitle p').each(function(){
			var str = $(this).text();
			var newStr = str.replace(/([^\x00-\x80]|\w|\.|,)/g, "<span class='letter'>$&</span>");
			$(this).html(newStr);
		});
			
		// Создание анимаций для облаков
		var tweenCloud1 = null;
		tweenCloud1 = gsap.timeline();
		tweenCloud1.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});
		var tweenCloud1Move = null
		tweenCloud1Move = gsap.timeline();
		tweenCloud1Move.to(cloud1, {duration: 1, opacity: 1, x: '0%', y: '-40%', scale: 1});

		var tweenCloud2 = null;
		tweenCloud2 = gsap.timeline();
		tweenCloud2.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '0%', scale: 1});
		var tweenCloud2Move = null;
		tweenCloud2Move = gsap.timeline();
		tweenCloud2Move.to(cloud2, {duration: 1, opacity: 1, x: '0%', y: '-40%', scale: 1});

		// Создание анимаций для планет
		var tweenPlanet1 = null;
		tweenPlanet1 = gsap.timeline();
		tweenPlanet1.to(planet1, {duration: 0.4, opacity: 1, y: '0%'});
		var tweenPlanet1Out = null;
		tweenPlanet1Out = gsap.timeline();
		tweenPlanet1Out.to(planet1, {duration: 0.4, opacity: 0, y: '-100px', scale: 1});

		var tweenPlanet2 = null;
		tweenPlanet2 = gsap.timeline();
		tweenPlanet2.to(planet2, {duration: 0.4, opacity: 1, y: '0%'});
		var tweenPlanet2Out = null;
		tweenPlanet2Out = gsap.timeline();
		tweenPlanet2Out.to(planet2, {duration: 0.4, opacity: 0, y: '-100px', scale: 1});

		var tweenPlanet3 = null;
		tweenPlanet3 = gsap.timeline();
		tweenPlanet3.to(planet3, {duration: 0.4, opacity: 1, y: '0%'});
		var tweenPlanet3Out = null;
		tweenPlanet3Out = gsap.timeline();
		tweenPlanet3Out.to(planet3, {duration: 0.4, opacity: 0, y: '-100px', scale: 1});

		// Animation for each letter
		// Создание таймлайна с помощью GSAP 3
		var tweenLetters = null;
		tweenLetters = gsap.timeline();

		// Применение анимации к каждой букве с задержкой
		tweenLetters.to('.js-four-subtitle .letter', {
			duration: 10, // продолжительность анимации
			opacity: 1,   // конечное значение прозрачности
			stagger: 0.1  // задержка между стартами анимации каждой буквы
		});

		var sceneFourCloud1 = null;
		sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 0, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1)
			//.addIndicators({name: "four-cloud-1"})
			.addTo(this.controller);

		var sceneFourCloud1Move = null;
		/* sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 300, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Move)
			//.addIndicators({name: "four-cloud-1-move"})
			.addTo(this.controller); */

		var sceneFourCloud2 = null;
		sceneFourCloud2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 1100, triggerHook: 0.7})
			.setTween(tweenCloud2)
			//.addIndicators({name: "four-cloud-2"})
			.addTo(this.controller);

		var sceneFourCloud2Move = null;
		/* sceneFourCloud2Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 1300, triggerHook: 0.7})
			.setTween(tweenCloud2Move)
			//.addIndicators({name: "four-cloud-2-move"})
			.addTo(this.controller); */

		var sceneFourLetters = null;
		sceneFourLetters = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 1800, triggerHook: 0.9})
			.setTween(tweenLetters)
			//.addIndicators({name: "four-letters"})
			.addTo(this.controller);

		var sceneFourPlanet1 = null;
		sceneFourPlanet1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2200, triggerHook: 0.9})
			.setTween(tweenPlanet1)
			//.addIndicators({name: "four-planet-1"})
			.addTo(this.controller);

		var sceneFourPlanet2 = null;
		sceneFourPlanet2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 2600, triggerHook: 0.9})
			.setTween(tweenPlanet2)
			//.addIndicators({name: "four-planet-2"})
			.addTo(this.controller);

		var sceneFourPlanet3 = null;
		sceneFourPlanet3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 0, offset: 3100, triggerHook: 0.9})
			.setTween(tweenPlanet3)
			//.addIndicators({name: "four-planet-3"})
			.addTo(this.controller);
	},

	animFive: function () {
		var fiveHeight = this.wh(); //1250;
		var fiveTitle = document.getElementsByClassName('js-five-title');
		var fiveText = document.getElementsByClassName('js-five-text');
		var fiveImg = document.getElementsByClassName('js-five-img');
		var fiveCloud1 = document.getElementsByClassName('js-five-cloud-1');
		var fiveCloud2 = document.getElementsByClassName('js-five-cloud-2');
		var fiveCloud3 = document.getElementsByClassName('js-five-cloud-3');
		var fiveCloud4 = document.getElementsByClassName('js-five-cloud-4');
		var fiveCloud5 = document.getElementsByClassName('js-five-cloud-5');
		
		// Создание таймлайна и анимации для заголовка
		var tweenTitle = gsap.timeline();
		tweenTitle.to(fiveTitle, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenTitleOut = gsap.timeline();
		tweenTitleOut.to(fiveTitle, {duration: 1, opacity: 0, y: '-50%', scale: 1});

		// Создание таймлайна и анимации для текста
		var tweenText = gsap.timeline();
		tweenText.to(fiveText, {duration: 1, opacity: 1, y: '0%', scale: 1});
		var tweenTextOut = gsap.timeline();
		tweenTextOut.to(fiveText, {duration: 1, opacity: 0, y: '-50%', scale: 1});

		// Создание таймлайна и анимации для изображения
		var tweenImg = gsap.timeline();
		tweenImg.to(fiveImg, {duration: 1, y: '0%', scale: 1});

		var tweenImgOut = gsap.timeline();
		tweenImgOut.to(fiveImg, {duration: 1, y: '10%', scale: 0.9});

		var tweenCloud1 = gsap.timeline();
		tweenCloud1.to(fiveCloud1, {duration: 1, y: '-80%', scale: 1});

		var tweenCloud2 = gsap.timeline();
		tweenCloud2.to(fiveCloud2, {duration: 1, y: '-100%', scale: 1});

		var tweenCloud3 = gsap.timeline();
		tweenCloud3.to(fiveCloud3, {duration: 1, y: '-70%', scale: 1});

		var tweenCloud4 = gsap.timeline();
		tweenCloud4.to(fiveCloud4, {duration: 1, y: '-80%', scale: 1});

		var tweenCloud5 = gsap.timeline();
		tweenCloud5.to(fiveCloud5, {duration: 1, y: '-90%', scale: 1});

		var tweenCloud1Out = gsap.timeline();
		tweenCloud1.to(fiveCloud1, {duration: 1, y: '0%', scale: 1});

		var tweenCloud2Out = gsap.timeline();
		tweenCloud2.to(fiveCloud2, {duration: 1, y: '0%', scale: 1});

		var tweenCloud3Out = gsap.timeline();
		tweenCloud3.to(fiveCloud3, {duration: 1, y: '0%', scale: 1});

		var tweenCloud4Out = gsap.timeline();
		tweenCloud4.to(fiveCloud4, {duration: 1, y: '0%', scale: 1});

		var tweenCloud5Out = gsap.timeline();
		tweenCloud5.to(fiveCloud5, {duration: 1, y: '0%', scale: 1});

		var sceneFiveTrigger = new ScrollMagic.Scene({triggerElement: ".js-five-section-trigger", duration: 30, offset: -450, triggerHook: 0})
			//.addIndicators({name: "five-trigger"})
			.addTo(this.controller);


		var sceneFiveTitle = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 0, triggerHook: 0.8})
			.setTween(tweenTitle)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud1 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 890, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud1)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud2 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud2)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud3 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud3)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud4 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud4)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud5 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 650, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud5)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveText = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 200, triggerHook: 1})
			.setTween(tweenText)
			//.addIndicators({name: "five-text"})
			.addTo(this.controller);

		var sceneFiveImg = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 1})
			.setTween(tweenImg)
			//.addIndicators({name: "five-img"})
			.addTo(this.controller);

		var sceneFiveCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 950, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud3Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud3Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud4Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud4Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud5Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})
			.setTween(tweenCloud5Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveTitleOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 400, triggerHook: 0.8})
			.setTween(tweenTitleOut)
			//.addIndicators({name: "five-title-out"})
			.addTo(this.controller);

		var sceneFiveTextOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 1000, triggerHook: 0.8})
			.setTween(tweenTextOut)
			//.addIndicators({name: "five-text-out"})
			.addTo(this.controller);

		var sceneFiveImgOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 400, triggerHook: 1})
			.setTween(tweenImgOut)
			//.addIndicators({name: "five-img-out"})
			.addTo(this.controller);
	},

	animFiveXs: function () {
		var fiveHeight = this.wh(); //1250;
		var fiveCloud1 = document.getElementsByClassName('js-five-cloud-1');
		var fiveCloud2 = document.getElementsByClassName('js-five-cloud-2');
		var fiveCloud3 = document.getElementsByClassName('js-five-cloud-3');
		var fiveCloud4 = document.getElementsByClassName('js-five-cloud-4');
		var fiveCloud5 = document.getElementsByClassName('js-five-cloud-5');
		
		var tweenCloud1 = gsap.timeline();
		tweenCloud1.to(fiveCloud1, {duration: 1, y: '-20px', scale: 1});

		var tweenCloud2 = gsap.timeline();
		tweenCloud2.to(fiveCloud2, {duration: 1, y: '-30px', scale: 1});

		var tweenCloud3 = gsap.timeline();
		tweenCloud3.to(fiveCloud3, {duration: 1, y: '-15px', scale: 1});

		var tweenCloud4 = gsap.timeline();
		tweenCloud4.to(fiveCloud4, {duration: 1, y: '-20px', scale: 1});

		var tweenCloud5 = gsap.timeline();
		tweenCloud5.to(fiveCloud5, {duration: 1, y: '-25px', scale: 1});

		var tweenCloud1Out = gsap.timeline();
		tweenCloud1.to(fiveCloud1, {duration: 1, y: '10px', scale: 1});

		var tweenCloud2Out = gsap.timeline();
		tweenCloud2.to(fiveCloud2, {duration: 1, y: '20px', scale: 1});

		var tweenCloud3Out = gsap.timeline();
		tweenCloud3.to(fiveCloud3, {duration: 1, y: '25px', scale: 1});

		var tweenCloud4Out = gsap.timeline();
		tweenCloud4.to(fiveCloud4, {duration: 1, y: '10px', scale: 1});

		var tweenCloud5Out = gsap.timeline();
		tweenCloud5.to(fiveCloud5, {duration: 1, y: '15px', scale: 1});


		var sceneFiveCloud1 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 600, triggerHook: 0.8})
			.setTween(tweenCloud1)
			//.addIndicators({name: "five-cloud-1"})
			.addTo(this.controller);

		var sceneFiveCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 810, triggerHook: 0.8})
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "five-cloud-1-out"})
			.addTo(this.controller);	

		var sceneFiveCloud2 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 250, offset: 650, triggerHook: 0.8})
			.setTween(tweenCloud2)
			//.addIndicators({name: "five-cloud-2"})
			.addTo(this.controller);

		var sceneFiveCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 330, offset: 920, triggerHook: 0.8})
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "five-cloud-2-out"})
			.addTo(this.controller);

		var sceneFiveCloud3 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 300, offset: 700, triggerHook: 0.8})
			.setTween(tweenCloud3)
			//.addIndicators({name: "five-cloud-3"})
			.addTo(this.controller);

		var sceneFiveCloud3Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 350, offset: 1020, triggerHook: 0.8})
			.setTween(tweenCloud3Out)
			//.addIndicators({name: "five-cloud-3-out"})
			.addTo(this.controller);

		var sceneFiveCloud4 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 250, offset: 650, triggerHook: 0.8})
			.setTween(tweenCloud4)
			//.addIndicators({name: "five-cloud-4"})
			.addTo(this.controller);

		var sceneFiveCloud4Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 350, offset: 900, triggerHook: 0.8})
			.setTween(tweenCloud4Out)
			//.addIndicators({name: "five-cloud-4-out"})
			.addTo(this.controller);

		var sceneFiveCloud5 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 280, offset: 680, triggerHook: 0.8})
			.setTween(tweenCloud5)
			//.addIndicators({name: "five-cloud-5"})
			.addTo(this.controller);

		var sceneFiveCloud5Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 300, offset: 1000, triggerHook: 0.8})
			.setTween(tweenCloud5Out)
			//.addIndicators({name: "five-cloud-5-out"})
			.addTo(this.controller);
	},

	animFooter: function(){
		var footerHeight = 300; //1250;
		//var footerScene = document.getElementsByClassName('js-footer');
		var footerLogo = document.getElementsByClassName('js-footer-logo');
		var footerText = document.getElementsByClassName('js-footer-text');
		var footerHero = document.getElementsByClassName('js-footer-hero');
		var footerScrollUp = document.getElementsByClassName('js-scroll-up');
		//var twoSection = document.getElementsByClassName('js-two-section');
		gsap.set(footerLogo, {opacity: '0', x: '-=50%', y: '+=200'});
		gsap.set(footerText, {opacity: '0', y: '-=200'});
		gsap.set(footerHero, {opacity: '0', x: '+=250'});
		gsap.set(footerScrollUp, {opacity: '0', x: '-=150'});

		var tweenLogo = gsap.timeline();
		tweenLogo.to(footerLogo, {
			duration: 1,
			opacity: 1,
			//clearProps: "transform", // Сбрасывает предыдущие значения transform
			x: '+=0%',
			y: 0
		});
		var tweenText = gsap.timeline()
			.to(footerText, {duration: 1, opacity: 1, y: 0});
		var tweenHero = gsap.timeline()
			.to(footerHero, {duration: 1, opacity: 1, x: 0});
		var tweenScrollUp = gsap.timeline()
			.to(footerScrollUp, {duration: 1, opacity: 1, x: 0});

		var sceneLogo = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 0, triggerHook: 0.6})
			//.setPin(".js-first-section")
			.setTween(tweenLogo)
			//.addIndicators({name: "footer-logo"})
			.addTo(this.controller);

		var sceneText = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 100), offset: 100, triggerHook: 0.6})
			//.setPin(".js-first-section")
			.setTween(tweenText)
			//.addIndicators({name: "footer-text"})
			.addTo(this.controller);

		var sceneHero = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 200), offset: 0, triggerHook: 0.7})
			//.setPin(".js-first-section")
			.setTween(tweenHero)
			//.addIndicators({name: "footer-hero"})
			.addTo(this.controller);

		var sceneScrollUp = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 400), offset: 0, triggerHook: 0.8})
			//.setPin(".js-first-section")
			.setTween(tweenScrollUp)
			//.addIndicators({name: "footer-scroll-up"})
			.addTo(this.controller);
	},
	
	animFooterXs: function(){
		var footerHeight = 300; //1250;
		//var footerScene = document.getElementsByClassName('js-footer');
		var footerLogo = document.getElementsByClassName('js-footer-logo');
		var footerText = document.getElementsByClassName('js-footer-text');
		var footerHero = document.getElementsByClassName('js-footer-hero');
		var footerScrollUp = document.getElementsByClassName('js-scroll-up');
		//var twoSection = document.getElementsByClassName('js-two-section');
		gsap.set(footerLogo, {opacity: '0', x: '-=0%', y: '+=100'});
		gsap.set(footerText, {opacity: '0', y: '-=100'});
		gsap.set(footerHero, {opacity: '0', x: '+=150'});
		gsap.set(footerScrollUp, {opacity: '0', x: '-=50'});

		var tweenLogo = gsap.timeline();
		tweenLogo.to(footerLogo, {
			duration: 1,
			opacity: 1,
			//clearProps: "transform", // Сбрасывает предыдущие значения transform
			x: '+=0%',
			y: 0
		});
		var tweenText = gsap.timeline()
			.to(footerText, {duration: 1, opacity: 1, y: 0});
		var tweenHero = gsap.timeline()
			.to(footerHero, {duration: 1, opacity: 1, x: 0});
		var tweenScrollUp = gsap.timeline()
			.to(footerScrollUp, {duration: 1, opacity: 1, x: 0});

		var sceneLogo = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: 0/* (footerHeight * 1) */, offset: 200, triggerHook: 1})
			//.setPin(".js-first-section")
			.setTween(tweenLogo)
			//.addIndicators({name: "footer-logo"})
			.addTo(this.controller);

		var sceneText = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight + 0), offset: 300, triggerHook: 1})
			//.setPin(".js-first-section")
			.setTween(tweenText)
			//.addIndicators({name: "footer-text"})
			.addTo(this.controller);

		var sceneHero = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: 0/* (footerHeight + 0) */, offset: 0, triggerHook: 0.7})
			//.setPin(".js-first-section")
			.setTween(tweenHero)
			//.addIndicators({name: "footer-hero"})
			.addTo(this.controller);

		var sceneScrollUp = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: 0/* (footerHeight + 0) */, offset: 0, triggerHook: 0.8})
			//.setPin(".js-first-section")
			.setTween(tweenScrollUp)
			//.addIndicators({name: "footer-scroll-up"})
			.addTo(this.controller);
	},

	scrollUp: function () {
		$('.js-scroll-up').click(function(){
			uikit.disableTriggers = true;
			uikit.scrollToSection('.js-first-section', 3, uikit.wh() * -1);
			
			setTimeout(function () {
				uikit.currentSlide = 0;
				uikit.disableTriggers = false;
			},1100);
			return false;
		});
	},

	setViewPort: function(){
		
		this.wwInit = this.wwOrigin();
		this.whInit = this.whOrigin();

		if(this.wwInit <= this.xs && this.isTouch()){
			$('head meta[name=viewport]').remove();
			//$('meta[name=viewport]').attr('content', 'width=880, initial-scale=0.7, maximum-scale=0.7');
			$(document).bind("mobileinit", function() 
			{ 
				if (navigator.userAgent.toLowerCase().indexOf("android") != -1) 
				{ 
					$.mobile.defaultPageTransition = 'none'; 
					$.mobile.defaultDialogTransition = 'none'; 
				} 
				else if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) 
				{ 
					$.mobile.allowCrossDomainPages = true; 
					$.support.cors = true; 
				} 
   
				$('<meta>', {
					name: 'viewport',
					content: 'width=880, initial-scale=0.7, maximum-scale=0.7'
				}).appendTo('head');
   
			});
			

			//window.innerWidth = 880;
			//document.documentElement.clientWidth = 880;

			$('body').addClass('is-xs');
			$('.js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').addClass('is-xs');

			$('.js-first-section').height(this.whInit);

			

		}else if(this.wwInit <= this.sm2 && this.isTouch()){
			//$('meta[name=viewport]').attr('content', 'width=980, initial-scale=0.7, maximum-scale=1, user-scalable=no');
			$('<meta>', {
				name: 'viewport',
				content: 'width=device-width, initial-scale=0.7, maximum-scale=0.7'
			}).appendTo('head');

			$('body').addClass('is-sm');
			$('.js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').addClass('is-sm');
		}else{
			$('<meta>', {
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, maximum-scale=1'
			}).appendTo('head');
		}
	},

	debugData: function(){
		$('.js-debug-data').html(
			'<p>wwInit: '+this.wwInit+'</p>'+
			'<p>whInit: '+this.whInit+'</p>'+
			'<p>ww: '+this.ww()+'</p>'+
			'<p>wwOrigin: '+this.wwOrigin()+'</p>'+
			'<p>wh: '+this.wh()+'</p>'+
			'<p>whOrigin: '+this.whOrigin()+'</p>'+
			'<p>scale: '+this.scale()+'</p>'+
			'<p>resizing: '+this._resizing+'</p>'
		);
	},

	setScaleCss: function(){
		var scale = this.scale();
		let scaleProc = 100 - ((1 / scale) * 100);
	
		if (scale > 1 && scale <= 2) {
			
			console.log('+--'+scaleProc);
			$('<style>:root {--scale: ' + scaleProc + '%;}</style>').appendTo('head');
			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');

		}else if(uikit.ww() <= uikit.md && uikit.ww() > uikit.sm){
			scale = 1.25;
			//console.log('--'+scaleProc);
			$('<style>:root {--scale: ' + scaleProc + '%;}</style>').appendTo('head');
			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');
		}else{
			$('<style>:root {--scale: 0%;}</style>').appendTo('head');
		}

		if(uikit.wh() < 600){
			
			$('<style>:root {--scale: -0%;}</style>').appendTo('head');
			scale = 1.5;
			$('.js-scale').css('transform','scale(' + (1 / scale) + ')');
		}
	},

    mainInit: function () {
		var clrTimeOut2;

        this.dottedAnim();
        this.animFirst();
        this.animThree();
		if(this.wwInit > this.sm2){
			this.animFour();
			this.animFive();
			this.animFooter();
		}
		
		if(this.wwInit <= this.xs){
			this.animFourXs();
			this.animFiveXs();
			this.animFooterXs();
		}
		this.scrollUp();
		//this.debugData();

		if(this.wwOrigin() > 1023 && this.whOrigin() < this.wwOrigin()){
			this.disableScroll();
		}

    	clrTimeOut2 = setTimeout(() => {
			this._resizing = false;
		}, 1000);
    },

	init: function(reload = false){
		this._resizing = true;
		this.setViewPort();

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

		if(!reload){
			$(window).on('load', function() {
				//Принудительная прокрутка вверх
				uikit.disableTriggers = true;
				$('html, body').animate({scrollTop: 0}, 'fast');

				if(uikit.wwOrigin() > 1023 && uikit.whOrigin() < uikit.wwOrigin()){
					uikit.disableScroll();
				}else{
					uikit.enableScroll();
				}

				uikit.setScaleCss();
				
				//uikit.scrollToSection('.js-first-section',0);
				// Все элементы страницы полностью загружены

				setTimeout(()=>{
					
					$('.js-loader').fadeOut(400);
					$('.js-first-section').addClass('is-first-anim');
					$('.js-two-section').addClass('is-first-anim');
					uikit.mainInit();
				}, 200);

				setTimeout(()=>{
					$('.js-first-section').removeClass('is-first-anim');
					$('.js-two-section').removeClass('is-first-anim');
					$('body, html').removeClass('is-overflow');
					uikit.disableTriggers = false;
				}, 4200);
			});
		}else{
			
			// инициализация при ресайзе
			this.controller.destroy(true);
			this.controller = null;
			this.controller = new ScrollMagic.Controller();

			//uikit.disableTriggers = true;
			this.currentSlide = 0;
			$('html, body').animate({scrollTop: 0}, 'fast');

			if(this.wwOrigin() > 1023 && this.whOrigin() < this.wwOrigin()){
				this.disableScroll();
			}else{
				this.enableScroll();
			}

			this.setScaleCss();
				
			//uikit.scrollToSection('.js-first-section',0);
			// Все элементы страницы полностью загружены

			setTimeout(()=>{
				this.mainInit();
			}, 500);
		}
	}
};

$(document).ready(function() {
	uikit.init();
});

var lastOrientation = window.orientation;

$(window).on('orientationchange', function() {
    var currentOrientation = window.orientation;
    if (currentOrientation !== lastOrientation) {
        lastOrientation = currentOrientation;
        setTimeout(() => {
            $('head meta[name=viewport]').remove();
            $('body, .js-first-section, .js-two-section, .js-three-section, .js-four-section, .js-five-section, .js-footer, .js-header').removeClass('is-xs').removeClass('is-sm');
            uikit.init(true);
        }, 1000);
    }
});

