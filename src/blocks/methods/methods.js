import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	const section = document.querySelector('[data-methods-js]');
	if (! section) return;

	new Swiper(section.querySelector('.methods__cards.swiper'), {
		modules: [Navigation],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		navigation: {
			nextEl: '.methods__control_next',
			prevEl: '.methods__control_prev',
			lockClass: 'hidden'
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