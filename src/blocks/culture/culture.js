import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

(() => {
	new Swiper(document.querySelector('.culture__items.swiper'), {
		modules: [Navigation, Autoplay],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.culture__control_next',
			prevEl: '.culture__control_prev',
			lockClass: 'hidden'
		},
		breakpoints: {
			0: {
				spaceBetween: 16,
				slidesPerView: 1.15,
			},
			481: {
				spaceBetween: 16,
				slidesPerView: 1.8,
			},
			641: {
				spaceBetween: 16,
				slidesPerView: 2.4,
			},
			781: {
				spaceBetween: 16,
				slidesPerView: 2.8,
			},
			961: {
				spaceBetween: 24,
				slidesPerView: 1.8,
			},
			1101: {
				spaceBetween: 24,
				slidesPerView: 2.4,
			},
			1281: {
				spaceBetween: 24,
				slidesPerView: 2.7,
			},
		}
	});

})();