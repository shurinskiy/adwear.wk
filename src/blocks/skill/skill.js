import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

(() => {

	const section = document.querySelector('[data-skill-js]');
	if(!section) return;
	
	const bigImage = section.querySelector('.skill__image img');

	const updateProgress = function(sw) {
		const progress = (sw.realIndex + 1) / sw.slides.length * 100;
		section.style.setProperty('--progress', progress);
	}

	const updateBigImage = function(sw, index) {
		bigImage.src = sw.slides[index].querySelector('img').src;
		bigImage.classList.add('showing');
		
		bigImage.addEventListener('animationend', e => {
			bigImage.classList.remove('showing');
		}, { once: true });
	}

	new Swiper(document.querySelector('.skill__slider.swiper'), {
		modules: [Autoplay],
		watchOverflow: true,
		spaceBetween: 24,
		threshold: 10,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		on: {
			init: updateProgress,
			slideChange: updateProgress,
			slideChangeTransitionEnd(sw) {
				const prevIndex = sw.activeIndex ? sw.activeIndex - 1 : sw.slides.length - 1;
				updateBigImage(sw, prevIndex);
			},
			click(sw, e) {
				e.target.closest('.skill__slide') && updateBigImage(sw, sw.clickedIndex);
			}
		},
		breakpoints: {
			0: {
				spaceBetween: 8,
				slidesPerView: 1.8,
			},
			481: {
				spaceBetween: 16,
				slidesPerView: 2.6,
			},
			641: {
				spaceBetween: 16,
				slidesPerView: 3.4,
			},
			781: {
				spaceBetween: 16,
				slidesPerView: 2.4,
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
