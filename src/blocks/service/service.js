import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	const service = document.querySelector('[data-service-js]');
	if(!service) return;

	new Swiper(service.querySelector('.service__cards.swiper'), {
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
				slidesPerView: 2.7,
			},
			961: {
				spaceBetween: 24,
				slidesPerView: 3,
			},
			1101: {
				spaceBetween: 24,
				slidesPerView: 3.6,
			},
			1281: {
				spaceBetween: 24,
				slidesPerView: 4,
			},
		}
	});

})();