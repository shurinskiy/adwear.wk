import enquire from 'enquire.js';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {
	const section = document.querySelector('[data-also-js]');
	if (! section) return;

	const slider = section.querySelector('.also__cards.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			modules: [Navigation],
			watchOverflow: true,
			spaceBetween: 24,
			threshold: 10,
			navigation: {
				nextEl: '.also__control_next',
				prevEl: '.also__control_prev',
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
				}
			}
		});
	}

	enquire.register("screen and (max-width: 1100px", {
		match: function() {
			enableSwiper(slider);
		},
		unmatch: function() {
			if (swiper !== undefined ) {
				swiper.destroy(true, true);
			} 
		}
	});

})();