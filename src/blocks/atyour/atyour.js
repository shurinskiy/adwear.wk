import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	const atyour = document.querySelector('[data-atyour-js]');
	if (! atyour) return;

	new Swiper(atyour.querySelector('.atyour__cards.swiper'), {
		modules: [Navigation],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		navigation: {
			nextEl: '.atyour__control_next',
			prevEl: '.atyour__control_prev',
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