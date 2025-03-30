import { driveTabs } from "../../js/libs/driveTabs";
import enquire from 'enquire.js';

(() => {
	const menu = document.querySelector('.menu');
	if (! menu) return;

	const wrapper = menu.querySelector('.menu__wrapper');
	const viewbox = menu.querySelector('.menu__viewbox');

	driveTabs({
		container: menu,
		controls: menu.querySelectorAll('.menu__control'),
		selects: menu.querySelectorAll('[data-level="0"]'),
		events: 'mouseover',
		cls: 'showed'
	});

	enquire.register("screen and (max-width: 1100px", {
		match: function() {

			// Перейти на уровень внутрь
			menu.querySelectorAll(".menu__inside, .m-about__head").forEach(item => {
				const level = item.nextElementSibling.closest('[data-level]');
				const deep = (+level.dataset.level || 0) + 1;

				item.addEventListener("click", e => {
					if (! e.target.closest('.menu__icon')) return;
					e.preventDefault();

					viewbox.scrollTop = 0;
					level.classList.add("active");
					wrapper.classList.add('sliding');
					wrapper.style.setProperty('--slide', `-${deep}00%`);

					wrapper.addEventListener('transitionend', e => {
						wrapper.classList.remove('sliding')
					}, { once: true });
				});
			});

			// Перейти на уровень назад
			menu.querySelectorAll(".menu__back").forEach(item => {
				const level = item.closest('[data-level]');
				const deep = level.dataset.level;

				item.addEventListener('click', e => {
					level.classList.remove("active");
					wrapper.style.setProperty('--slide', `-${deep}00%`);
				});
			});
		},

		unmatch: function() {
			wrapper.removeAttribute('style');
			wrapper.classList.remove('sliding')

			wrapper.querySelectorAll('.menu__level').forEach(menu => {
				menu.classList.remove('active');
				menu.removeAttribute('style');
			});
		}
	});

})();