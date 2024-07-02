
var uikit = {
    lg: '1450',
    md: '1200',
    sm: '992',
    xs: '640',
    xxs: '480',
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
				//var $this = $(this);
				opacity = !opacity;
				$(this).css('transform', 'translate(' + Math.ceil(Math.random() * 70) + 'px, ' + Math.ceil(Math.random() * 70) + 'px)').css('opacity',  opacity);
			});
		}, 4000);
		
	},

    mainInit: function () {
        this.dottedAnim();
        
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
        // Все элементы страницы полностью загружены
        $('.js-loader').fadeOut(400);
		$('.js-first-section').addClass('is-first-anim');
		$('.js-two-section').addClass('is-first-anim');

		setTimeout(()=>{
			$('.js-first-section').removeClass('is-first-anim');
			$('.js-two-section').removeClass('is-first-anim');
			$('body').removeClass('is-overflow');
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
