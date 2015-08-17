$(function(){

	// вызов фенсибокса
	$('.fancy').fancybox();

	//слайдер на главной
	$('.main__top-slider').bxSlider({
		speed: 700,
		easing: 'cubic-bezier(.72,.05,.39,.37)',
		controls: true,
		auto: true,
		autoHover: true
	});

	// слайдер покупок
	$('.medium-slider').bxSlider({
		speed: 450,
		slideWidth: 350,
		slideMargin: 20,
		minSlides: 3,
		maxSlides: 3,
		easing: 'cubic-bezier(.57, .03, 0, 1)',
		pager: false,
		controls: true,
		auto: false
	});

	// меняем задний фон банеров
	$('.banner__block').hover(function(){
		$(this).find('.banner__bg').toggleClass('_hover');
	});

});