$(function () {
	"use strict";
	//Navigation Burger Button
	$('.first-button').on('click', function () {

		$('.animated-icon1').toggleClass('open');
	});
	//Workers Section Slider
	$('.worker_slide').slick({
		centerMode: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		centerPadding: '60px',
		slidesToScroll: 1,
		slidesToShow: 3,
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
	//for menu fixed
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.custom_nav').addClass('menu-bg');
		} else {
			$('.custom_nav').removeClass('menu-bg');
		}
	});
})