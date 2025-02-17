import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	new Swiper(document.querySelector('.culture__items.swiper'), {
		modules: [Navigation],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
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
				slidesPerView: 2.8,
			},
			960: {
				spaceBetween: 24,
				slidesPerView: 1.8,
			},
			1100: {
				spaceBetween: 24,
				slidesPerView: 2.4,
			},
			1280: {
				spaceBetween: 24,
				slidesPerView: 2.7,
			},
		}
	});

})();