import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import enquire from 'enquire.js';

(() => {
	const slider = document.querySelector('.hero__items.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			modules: [Navigation],
			watchOverflow: true,
			spaceBetween: 16,
			threshold: 10,
			navigation: {
				nextEl: '.hero__control_next',
				prevEl: '.hero__control_prev',
				lockClass: 'hidden'
			},
			breakpoints: {
				0: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.7,
				},
				640: {
					slidesPerView: 2.2,
				},
				780: {
					slidesPerView: 2.6,
				}
			}
		});
	}
			
	enquire.register("screen and (max-width: 960px", {
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