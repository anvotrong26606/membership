$(document).ready(function () {
	$('header').addClass('scroll-menu');

	$('.button-show-more-product').on('click', function () {
		console.log('OK');
	});


	(function ($) {
		// USE STRICT
		"use strict";
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 5000,
			outDuration: 1000,
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
