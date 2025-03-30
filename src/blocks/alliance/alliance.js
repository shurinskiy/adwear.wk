import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import enquire from 'enquire.js';

(() => {
	const stages = document.querySelector('[data-alliance-js]');
	if (! stages) return;

	const slider = stages.querySelector('.alliance__items.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			modules: [Navigation],
			watchOverflow: true,
			threshold: 10,
			navigation: {
				nextEl: '.alliance__control_next',
				prevEl: '.alliance__control_prev',
				lockClass: 'hidden'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.15,
				},
				481: {
					spaceBetween: 16,
					slidesPerView: 1.7,
				},
				641: {
					spaceBetween: 16,
					slidesPerView: 2.2,
				},
				781: {
					spaceBetween: 16,
					slidesPerView: 2.7,
				},
			}
		});
	}
			
	enquire.register("screen and (max-width: 960px)", {
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