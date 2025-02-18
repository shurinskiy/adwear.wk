import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	new Swiper(document.querySelector('.service__cards.swiper'), {
		modules: [Navigation],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		navigation: {
			nextEl: '.service__control_next',
			prevEl: '.service__control_prev',
			lockClass: 'hidden'
		},
		breakpoints: {
			0: {
				spaceBetween: 16,
				slidesPerView: 1.15,
			},
			480: {
				spaceBetween: 16,
				slidesPerView: 1.8,
			},
			640: {
				spaceBetween: 16,
				slidesPerView: 2.4,
			},
			780: {
				spaceBetween: 16,
				slidesPerView: 2.7,
			},
			960: {
				spaceBetween: 24,
				slidesPerView: 3,
			},
			1100: {
				spaceBetween: 24,
				slidesPerView: 3.6,
			},
			1280: {
				spaceBetween: 24,
				slidesPerView: 4,
			},
		}
	});

})();