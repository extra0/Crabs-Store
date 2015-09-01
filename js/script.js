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

	// полет товара в корзину
	$(".product__cart").click(function() {
		// клонирование картинки для полета
		$(this).parents('.product__block').find('.product__image-wrap img').clone().css({
			'visibility': 'hidden',
			'position': 'absolute'
		}).appendTo($(this));

		// обработка полета
		$("html, body").animate({
			scrollTop: 0
		}, 1000)
		$(this).children('img')
			.clone()
			.css({
				'position': 'absolute',
				'z-index': '10000',
				'visibility': 'visible'
			})
			.appendTo(this)
			.animate({
				opacity: 0.5,
				marginTop: $('.header__cabinet-link').offset().top - $(this).children('img').offset().top,
				marginLeft: $('.header__cabinet-link').offset().left - $(this).children('img').offset().left,
				width: 70,
				height: 70
			}, 860, function() {
				$(this).remove();
			});
		setTimeout(function(){
			$(".product__cart").find('img').remove();
		}, 1000);
	});

	// раскрываем ответы на вопросы
	$('.waranty__link').click(function(){
		$(this).addClass('hidden');
		$(this).parents('.waranty__item').find('.waranty__question').prepend('<div class="line"></div>');
		$(this).parents('.waranty__item').prepend('<div class="waranty__item-bg"></div>');
		setTimeout(function() {
			$('.line').fadeOut(500);
		},1000);
		$(this).parents('.waranty__item').find('.waranty__answer').delay(1000).slideDown(500);
		return false;
	});

	// удаяляем строку в таблице
	$('.cart__close').click(function(){
		$(this).parents('tr').remove();
		return false;
	});

});