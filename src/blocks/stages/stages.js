import Swiper from 'swiper';
import enquire from 'enquire.js';

(() => {
	const slider = document.querySelector('.stages__steps.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			watchOverflow: true,
			threshold: 10,
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 1.15,
				},
				481: {
					spaceBetween: 16,
					slidesPerView: 1.5,
				},
			}
		});
	}
			
	enquire.register("screen and (max-width: 640px", {
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