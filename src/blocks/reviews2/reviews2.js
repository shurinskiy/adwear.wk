import enquire from 'enquire.js';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

(() => {
	const section = document.querySelector('[data-reviews2-js]');
	if (! section) return;

	const slider = section.querySelector('.reviews2__slider.swiper');
	const hiddenCount = +slider.querySelector('.swiper-wrapper')?.dataset.hidden;
	const slides = slider.querySelectorAll('.reviews2__card');
	const more = section.querySelector('.reviews2__more');
	let swiper;

	const updateProgress = function(sw) {
		const progress = (sw.realIndex + 1) / sw.slides.length * 100;
		sw.el.style.setProperty('--progress', progress);
	}

	const enableSwiper = (el) => {
		swiper = new Swiper(el, {
			modules: [Navigation, Autoplay],
			watchOverflow: true,
			spaceBetween: 24,
			threshold: 10,
			speed: 400,
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: '.reviews2__control_next',
				prevEl: '.reviews2__control_prev',
				lockClass: 'hidden'
			},
			on: {
				init: updateProgress,
				slideChange: updateProgress,
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

	// Скрыть карточки, основываясь на значении атрибута data-hidden
	slides.forEach((item, i) => (i >= hiddenCount) && (item.style.display = 'none'));

	// Показать скрытые карточки, по клику на кнопку .more
	more.addEventListener('click', e => {
		slides.forEach((slide, i) => {
			if (i >= hiddenCount) {
				slide.classList.add('showing');
				slide.removeAttribute('style');

				slide.addEventListener('animationend', e => {
					slide.classList.remove('showing');
				}, { once: true });
			}
		});
		
		more.remove();
	});

})();