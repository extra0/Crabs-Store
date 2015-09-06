$(function(){

	// ф-я разбивки на разряды
	function numberWithCommas(x) {
		return x.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");
	}

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

	// слайдер внутри продукта
	$('.main__game-slider').bxSlider({
		speed: 700,
		easing: 'cubic-bezier(.72,.05,.39,.37)',
		controls: true,
		auto: true,
		autoHover: true,
		pagerCustom: '.main__game-slider-thumbs'
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

	//корзина
	function calculator() {
		var sum = 0,
			totalSum = $('.cart__total-price');

		// просчет общей суммы
		$('._total-product-price').each(function() {
			sum += parseFloat($(this).attr('data-total'));
		});


		// вывод суммы в строку "всего:" 
		totalSum.attr('data-total', sum);
		totalSum.html(sum);
		totalSum.html(numberWithCommas(totalSum.html()));

	}

	// изменнеие значения input
    $('.cart__counter').on('click', function() {

		var input = $(this).parent().find('input'),
			totalLine = $(this).parents('tr').find('._total-product-price'),
			currentPriceLine = $(this).parents('tr').find('._price');

		// изменяем значение в инпуте
		input.val(parseInt(input.val()) + parseInt($(this).attr('data-val')));

		if (input.val() < input.attr('data-min-val')) {
			input.val('1');
		}

		// изменяем значение общее по товару
		totalLine.html(numberWithCommas(input.val() * parseInt(currentPriceLine.attr('data-val'))));
		totalLine.attr('data-total', input.val() * parseInt(currentPriceLine.attr('data-val')));

		calculator();
	});

	calculator();

	// удаляем элемент
	$('.cart__close').click(function() {
		calculator();
	});


	$('.cart__promo-submit').click(function(){
		var i;
		i = $('.cart__total-price').attr('data-total') - $('#promo').attr('data-discount');
		i = numberWithCommas(i);
		$('.cart__total-price').html(i);
	});

});