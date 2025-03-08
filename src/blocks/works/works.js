import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	const works = document.querySelector('[data-works-js]');
	if (! works) return;
	
	new Swiper(works.querySelector('.works__cards.swiper'), {
		modules: [Navigation],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		navigation: {
			nextEl: '.works__control_next',
			prevEl: '.works__control_prev',
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