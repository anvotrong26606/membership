$(document).ready(function () {
	// SCROLL MAIN MENU
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll >= $('header').height()) {
			$('header').addClass('scroll-menu');
		} else {
			$('header').removeClass('scroll-menu');
		}
	});
	// SCROLL MENU BY ID
	$(".list-menu li").on('click', function () {

		// xóa tất cả những thẻ li nào có class active
		$('header ul li').removeClass('active-menu');
		// thêm class active vào chính thẻ được click vào
		$(this).addClass('active-menu');
		let id = $(this).find('a').href("href");
		//Scroll tới vị trí click
		$('html, body').animate({
			scrollTop: $('#' + id).offset().top - $('header').height()
		}, 500);
		console.log(id);
	});
	// SLIDER CÁC ĐỐI TÁC CỦA CÔNG TY
	$('.slider-clients').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: `<svg class ="icon_prev" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M243.2,266.5c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9L489.8,3c4.2-4,10.9-3.9,14.9,0.3   c4,4.2,3.9,10.9-0.3,14.9l-254,245.5C248.4,265.6,245.8,266.5,243.2,266.5z" fill="#6A6E7C"/><path d="M497.2,512c-2.6,0-5.3-1-7.3-3l-254-245.5c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3l254,245.5   c4.2,4,4.3,10.7,0.3,14.9C502.7,510.9,499.9,512,497.2,512z" fill="#6A6E7C"/><path d="M14.8,266.5c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9L261.5,3c4.2-4,10.9-3.9,14.9,0.3   c4,4.2,3.9,10.9-0.3,14.9l-254,245.5C20.1,265.6,17.5,266.5,14.8,266.5z" fill="#6A6E7C"/><path d="M268.8,512c-2.6,0-5.3-1-7.3-3L7.5,263.6c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3l254,245.5   c4.2,4,4.3,10.7,0.3,14.9C274.4,510.9,271.6,512,268.8,512z" fill="#6A6E7C"/></g></svg>`,
		nextArrow: `<svg class ="icon_next" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
		<g>
		<title>background</title>
		<rect x="-1" y="-1" width="582" height="402" fill="none"/>
		</g>
		<g>
		<title>Layer 1</title>
		<g transform="rotate(180 256 256.04)" fill="#6A6E7C">
		<path d="m243.2 266.5c-2.8 0-5.5-1.1-7.6-3.2-4-4.2-3.9-10.9 0.3-14.9l253.9-245.4c4.2-4 10.9-3.9 14.9 0.3s3.9 10.9-0.3 14.9l-254 245.5c-2 1.9-4.6 2.8-7.2 2.8z"/>
		<path d="m497.2 512c-2.6 0-5.3-1-7.3-3l-254-245.5c-4.2-4-4.3-10.7-0.3-14.9s10.7-4.3 14.9-0.3l254 245.5c4.2 4 4.3 10.7 0.3 14.9-2.1 2.2-4.9 3.3-7.6 3.3z"/>
		<path d="m14.8 266.5c-2.8 0-5.5-1.1-7.6-3.2-4-4.2-3.9-10.9 0.3-14.9l254-245.4c4.2-4 10.9-3.9 14.9 0.3s3.9 10.9-0.3 14.9l-254 245.5c-2 1.9-4.6 2.8-7.3 2.8z"/>
		<path d="m268.8 512c-2.6 0-5.3-1-7.3-3l-254-245.4c-4.2-4-4.3-10.7-0.3-14.9s10.7-4.3 14.9-0.3l254 245.5c4.2 4 4.3 10.7 0.3 14.9-2 2.1-4.8 3.2-7.6 3.2z"/>
		</g>
		</g>
		</svg>`,
	});

	(function ($) {
		// USE STRICT
		"use strict";
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 900,
			outDuration: 900,
			linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
			loading: true,
			loadingParentElement: 'html',
			loadingClass: 'page-loader',
			loadingInner: '<div class="page-loader__spin"></div>',
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: ['animation-duration', '-webkit-animation-duration'],
			overlay: false,
			overlayClass: 'animsition-overlay-slide',
			overlayParentElement: 'html',
			transition: function (url) {
				window.location.href = url;
			}
		});
	})(jQuery);
});
