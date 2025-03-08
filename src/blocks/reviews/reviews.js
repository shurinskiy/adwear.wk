import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

(() => {
	const reviews = document.querySelector('[data-reviews-js]');
	if (! reviews) return;

	const updateProgress = function(sw) {
		const progress = (sw.realIndex + 1) / sw.slides.length * 100;
		sw.el.style.setProperty('--progress', progress);
	}

	new Swiper(reviews.querySelector('.reviews__slider.swiper'), {
		modules: [Navigation, Autoplay],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		speed: 400,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.reviews__control_next',
			prevEl: '.reviews__control_prev',
			lockClass: 'hidden'
		},
		on: {
			init: updateProgress,
			slideChange: updateProgress,
		},
		breakpoints: {
			0: {
				spaceBetween: 16,
				slidesPerView: 1.15,
			},
			481: {
				spaceBetween: 16,
				slidesPerView: 1.5,
			},
			641: {
				spaceBetween: 16,
				slidesPerView: 2.0,
			},
			781: {
				spaceBetween: 16,
				slidesPerView: 2.2,
			},
			961: {
				spaceBetween: 24,
				slidesPerView: 2.7,
			},
			1101: {
				spaceBetween: 24,
				slidesPerView: 3,
			}
		}
	});

})();