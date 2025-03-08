import enquire from 'enquire.js';
import Swiper from 'swiper';

(() => {
	const price = document.querySelector('[data-price-js]');
	if (! price) return;

	const slider = price.querySelector('.price__cols.swiper');
	let swiper;

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			watchOverflow: true,
			slidesPerView: 1,
			spaceBetween: 16,
			threshold: 10
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
