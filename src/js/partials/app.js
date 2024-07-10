
var uikit = {
    lg: '1450',
    md: '1200',
    sm: '992',
    xs: '640',
    xxs: '480',
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
				offset: 950
			}
		},
		{ // 3
			prev: {
				trigger: '.js-three-section-trigger'
			},
			next: {
				trigger: '.js-four-section',
				offset: 1510,
				speed: 2
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
				trigger: '.js-five-section-triggerr',
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
				offset: 0,
				speed: 1
			},
			next: {
				trigger: '.js-footer',
				offset: 0,
				speed: 1.5
			}
		},
		{ // 11
			prev: {
				trigger: '.js-five-img',
				offset: 0,
				speed: 1.5
			},
			next: {}
		}
	],
	lastDirection: 'down',
	currentSlide: 0,
	nextSlide: 1,
	disableTriggers: true,
	controller: new ScrollMagic.Controller(),
    ww: function(){
        return $(window).width();
    },

    wh: function(){
        return $(window).height();
    },

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

	disableScroll: function() {
		console.log("Scrolling disabled");
		window.addEventListener('wheel', uikit.preventScroll, {passive: false});
    	window.addEventListener('touchmove', uikit.preventScroll, {passive: false});
	},
	
	enableScroll: function() {
		console.log("Scrolling enabled");
		window.removeEventListener('wheel', uikit.preventScroll, {passive: false});
    	window.removeEventListener('touchmove', uikit.preventScroll, {passive: false});
	},

	scrollNext: function(){
		console.log('next');
		console.log(this.currentSlide);
		console.log(this.steps[this.currentSlide]?.next);
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
		console.log('prev');
		console.log(this.currentSlide);
		console.log(this.steps[this.currentSlide]?.prev);

		if(!this.steps[this.currentSlide]?.prev?.trigger || this.disableTriggers) return false;

		uikit.scrollToSection(
			this.steps[this.currentSlide].prev.trigger,
			this.steps[this.currentSlide].prev.speed,
			this.steps[this.currentSlide].prev.offset,
			this.steps[this.currentSlide].prev.ease
		);
		this.currentSlide = this.currentSlide - 1;
	},
	preventScroll: function(e) {
		let scrollDirection;
		let scrollCount;

		if (e.deltaY > 0 && !uikit.disableTriggers) {
			scrollDirection = 'down';
			uikit.scrollNext();
		} else if (e.deltaY < 0 && !uikit.disableTriggers) {
			scrollDirection = 'up';
			uikit.scrollPrev();
		} else {
			scrollDirection = 'none';
		}

		scrollCount = e.deltaY;

		//console.log("Wheel event prevented");
		//console.log({ scrollDirection, scrollCount });
		e.preventDefault();
		e.stopPropagation();
	},

	scrollToSection: function(section, speed = 1, offset = 0, ease = "power1.inOut") {
		//var newPos = document.querySelector(section).offsetTop; // Получаем верхнюю границу элемента
		//window.scrollTo({ top: newPos, behavior: 'smooth' }); // Прокрутка к элементу
		var element = document.querySelector(section);
		if (element) {
			var elementRect = element.getBoundingClientRect();
			var absoluteElementTop = elementRect.top + window.pageYOffset;
			//window.scrollTo({ top: absoluteElementTop, behavior: 'smooth' });
			console.log('--'+absoluteElementTop+' + '+offset+'='+ (absoluteElementTop+offset));

			// Отключаем скролл при начале анимации
			//uikit.disableScroll();
			// Обнуляем импульс прокрутки перед началом анимации
			//window.scrollTo({ top: window.pageYOffset, behavior: 'instant' });
			uikit.disableTriggers = true;

			this.controller.scrollTo(function (newpos) {
				//gsap.to(window, speed, {scrollTo: {y: newpos + offset}, ease: ease});
				requestAnimationFrame(function() {
					gsap.to(window, {
						duration: speed,
						scrollTo: { y: newpos + offset },
						ease: ease,
						onStart: function() {
							// Анимация началась
							uikit.disableTriggers = true;
							//uikit.disableScroll();
						},
						onComplete: function() {
							console.log($(window).scrollTop()+'!!!');
							if (uikit.disableTriggers) {
								console.log('+');
								gsap.killTweensOf(window); // Останавливаем все текущие анимации GSAP на объекте window
								//window.scrollTo({ top: $(window).scrollTop(), behavior: 'instant' }); // Принудительно устанавливаем текущее положение прокрутки
							}
							// Анимация закончилась
							setTimeout(function() {
								uikit.disableTriggers = false;
								//uikit.enableScroll();
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
		var firstScene = document.getElementsByClassName('js-first-section');
		var twoSection = document.getElementsByClassName('js-two-section');
		
		var tweenTwoSectionIn = new TimelineMax()
			.to(twoSection, 0.3, {top: '-49vh'});

		var sceneFirst = new ScrollMagic.Scene({triggerElement: ".js-first-section", duration: (threeHeight * 1), offset: 0, triggerHook: 0})
			//.setPin(".js-first-section")
			.addIndicators({name: "first"})
			/* .on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 1 to 2
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					//uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
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
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 2 to 1
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-first-section');	
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 2 to 3
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 0, 950); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
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
			.addIndicators({name: "four"})
			.addTo(this.controller);

		//?------------------------------------

		var sceneFourTrigger1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 1030, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 3 to 2
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-three-section-trigger'); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 3 to 4
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 2, 1410); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			//.setTween(tweenStory)
			.addIndicators({name: "four-trigger-1"})
			.addTo(this.controller);

		var sceneFourTrigger2 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 2450, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 4 to 3
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1410); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 4 to 5
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 2, 1340, "linear"); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			.addIndicators({name: "four-trigger-2"})
			.addTo(this.controller);

		var sceneFourTrigger3 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 3810, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 5 to 4
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 2, -1310, "linear"); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вниз
				//? 5 to 6
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1280); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			.addIndicators({name: "four-trigger-3"})
			.addTo(this.controller);

		var sceneFourTrigger4 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 5090, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 6 to 5
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1280); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 6 to 7
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1100); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			.addIndicators({name: "four-trigger-4"})
			.addTo(this.controller);

		var sceneFourTrigger5 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 6210, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 7 to 6
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1100); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 7 to 8
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 1100); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			.addIndicators({name: "four-trigger-5"})
			.addTo(this.controller);

		var sceneFourTrigger6 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 50, offset: 7330, triggerHook: 0})
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				//? 8 to 7
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -1100); // Прокрутка к следующему разделу, если скролим вверх
				}
			})
			.on('end', function (event) {
				if(uikit.disableTriggers) return;
				//? 8 to 9
				// Проверяем, что направление прокрутки вниз
				if (event.scrollDirection === 'FORWARD') {
					uikit.scrollToSection('.js-four-section', 1, 700); // Прокрутка к следующему разделу, если скролим вниз
				}
			}) */
			.addIndicators({name: "four-trigger-6"})
			.addTo(this.controller);

		//?------------------------------------
		
		/* var sceneFourContain1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 100, offset: 0, triggerHook: 0})
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
			.addTo(this.controller); */

		var sceneFourStory = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 0, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenStory)
			//.addIndicators({name: "four-story"})
			.addTo(this.controller);

		var sceneFourCloud1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 1000, offset: 350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1)
			//.addIndicators({name: "four-cloud-1"})
			.addTo(this.controller);

		var sceneFourCloud1Move = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 2000, offset: 1350, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenCloud1Move)
			//.addIndicators({name: "four-cloud-1-move"})
			.addTo(this.controller);
		
		var sceneFourImg1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 500, offset: 300, triggerHook: 0.7})
			//.setPin(".js-four-section")
			.setTween(tweenImg1)
			//.addIndicators({name: "four-img-1"})
			.addTo(this.controller);

		var sceneFourTitle = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 600, triggerHook: 0.7})
			.setTween(tweenTitle)
			//.addIndicators({name: "four-title"})
			.addTo(this.controller);

		var sceneFourText1 = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 400, offset: 900, triggerHook: 0.7})
			.setTween(tweenText1)
			//.addIndicators({name: "four-text-1"})
			.addTo(this.controller);
		
		var sceneFourImg1Out = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1800, triggerHook: 0.7})
			.setTween(tweenImg1Out)
			//.addIndicators({name: "four-img-1-out"})
			.addTo(this.controller);

		var sceneFourTitleOut = new ScrollMagic.Scene({triggerElement: ".js-four-section", duration: 300, offset: 1900, triggerHook: 0.7})
			.setTween(tweenTitleOut)
			//.addIndicators({name: "four-title-out"})
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
		var fiveCloud1 = document.getElementsByClassName('js-five-cloud-1');
		var fiveCloud2 = document.getElementsByClassName('js-five-cloud-2');
		var fiveCloud3 = document.getElementsByClassName('js-five-cloud-3');
		var fiveCloud4 = document.getElementsByClassName('js-five-cloud-4');
		var fiveCloud5 = document.getElementsByClassName('js-five-cloud-5');
		

		/* var tweenTitle = new TimelineMax()
			.to(fiveTitle, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});
		var tweenText = new TimelineMax()
			.to(fiveText, 1, {opacity: '1', transform: 'translateY(0) scale(1)'});
		var tweenImg = new TimelineMax()
			.to(fiveImg, 1, { transform: 'translateY(0) scale(1)'}); */
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
			//.setPin(".js-four-section")
			/* .on('leave', function (event) {
				if(uikit.disableTriggers) return;
				// Проверяем, что направление прокрутки вверх
				if (event.scrollDirection === 'REVERSE') {
					uikit.scrollToSection('.js-four-section', 1, -60); // Прокрутка к следующему разделу, если скролим вверх
				}
			}) */
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

		var sceneFiveCloud1 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 890, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud1)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud2 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud2)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud3 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud3)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud4 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud4)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud5 = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 650, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud5)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveText = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 200, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenText)
			//.addIndicators({name: "five-text"})
			.addTo(this.controller);

		var sceneFiveImg = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 1})
			//.setPin(".three-section__container")
			.setTween(tweenImg)
			//.addIndicators({name: "five-img"})
			.addTo(this.controller);

		var sceneFiveCloud1Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 950, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud1Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud2Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 850, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud2Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud3Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 750, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud3Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud4Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 800, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud4Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveCloud5Out = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 900, offset: 0, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenCloud5Out)
			//.addIndicators({name: "five-title"})
			.addTo(this.controller);

		var sceneFiveTitleOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 400, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenTitleOut)
			.addIndicators({name: "five-title-out"})
			.addTo(this.controller);

		var sceneFiveTextOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 200, offset: 1000, triggerHook: 0.8})
			//.setPin(".three-section__container")
			.setTween(tweenTextOut)
			.addIndicators({name: "five-text-out"})
			.addTo(this.controller);

		var sceneFiveImgOut = new ScrollMagic.Scene({triggerElement: ".js-five-section", duration: 400, offset: 400, triggerHook: 1})
			//.setPin(".three-section__container")
			.setTween(tweenImgOut)
			.addIndicators({name: "five-img-out"})
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
		gsap.set(footerLogo, {x: '-=50%', y: '+=300'});
		gsap.set(footerText, {opacity: '0', y: '-=200'});
		gsap.set(footerHero, {x: '+=50%'});
		gsap.set(footerScrollUp, {x: '-=50%'});

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
			.addIndicators({name: "footer-logo"})
			.addTo(this.controller);

		var sceneText = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 200, triggerHook: 0.6})
			//.setPin(".js-first-section")
			.setTween(tweenText)
			.addIndicators({name: "footer-text"})
			.addTo(this.controller);

		var sceneHero = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 100, triggerHook: 0.6})
			//.setPin(".js-first-section")
			.setTween(tweenHero)
			.addIndicators({name: "footer-hero"})
			.addTo(this.controller);

		var sceneScrollUp = new ScrollMagic.Scene({triggerElement: ".js-footer", duration: (footerHeight * 1), offset: 150, triggerHook: 0.6})
			//.setPin(".js-first-section")
			.setTween(tweenScrollUp)
			.addIndicators({name: "footer-scroll-up"})
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
		this.animFooter();
		this.scrollUp();
		this.disableScroll();
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
});

$(document).ready(function () {

    uikit.disableScroll();

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
    //console.log($(this).scrollTop());
});
