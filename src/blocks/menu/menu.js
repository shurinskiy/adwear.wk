import { driveTabs } from "../../js/libs/driveTabs";
import enquire from 'enquire.js';

(() => {
	const menu = document.querySelector('.menu');
	if (! menu) return;

	const wrapper = menu.querySelector('.menu__wrapper');

	driveTabs({
		container: menu,
		controls: menu.querySelectorAll('.menu__control'),
		selects: menu.querySelectorAll('.menu__level_0'),
		events: 'mouseover',
		cls: 'showed'
	});

	/* menu.querySelectorAll('.menu__item_haschild > span').forEach((haschild, i) => {
		haschild.addEventListener('click', e => {
			const submenu = haschild.nextElementSibling.closest('.menu__level');
			console.log(submenu);
		});
	}); */

	enquire.register("screen and (max-width: 1100px", {
		match: function() {
			// Предотвращаем горизонтальное перемещение через touch-события
			/* let startX = 0;
			let startY = 0;
			wrapper.addEventListener('touchstart', function (e) {
				startX = e.touches[0].clientX;
				startY = e.touches[0].clientY;
			}, { passive: true });
		
			wrapper.addEventListener('touchmove', function (e) {
				const currentX = e.touches[0].clientX;
				const currentY = e.touches[0].clientY;
				const deltaX = currentX - startX;
				const deltaY = currentY - startY;
				// Если горизонтальное смещение больше вертикального — отменяем событие
				if (Math.abs(deltaX) > Math.abs(deltaY)) {
					e.preventDefault();
				}
			}, { passive: false }); */
		
			const slide = (offset = 0) => {
				wrapper.style.setProperty('--slide', `${offset}%`);
				wrapper.classList.add('sliding');

				wrapper.addEventListener('transitionend', e => {
					wrapper.classList.remove('sliding')
				}, { once: true });
			}

			// Открытие уровня 0
			const insideLinks = menu.querySelectorAll(".menu__inside, .h-about__head");
	
			insideLinks.forEach(item => {
				item.addEventListener("click", function (e) {
					const level0 = item.nextElementSibling.closest('.menu__level_0');
				
					// костыль для меню "о компании"
					if (item.classList.contains('h-about__head')) {
						if (! e.target.closest('.h-about__icon')) return;
						e.preventDefault();
					}

					if (level0) {
						level0.style.overflowY = "auto";
						level0.style.overflowX = "hidden";
						level0.classList.add("active");
					}
					
					slide(-100);
				});
			});
		
			// Открытие уровня 1
			const subcategories = menu.querySelectorAll(".menu__level_0 .menu__inside");
			subcategories.forEach(link => {
				link.addEventListener("click", function (e) {
					if (! e.target.closest('.menu__icon')) return;
					e.preventDefault();
					
					const level0 = link.closest(".menu__level_0");
					const level1 = link.nextElementSibling.closest('.menu__level_1');
					
					if (level0) {
						level0.style.overflow = "visible";
					}
					
					if (level1) {
						level1.style.overflowY = "auto";
						level1.style.overflowX = "hidden";
						level1.classList.add("active");
					}

					slide(-200);
				});
			});
		
			// Обработчик кнопок "Назад" в уровне 0 (для каждой кнопки)
			const backLevel0Buttons = menu.querySelectorAll(".menu__level_0 .menu__back");
			backLevel0Buttons.forEach((backBtn) => {
				backBtn.addEventListener("click", function (e) {
					e.stopPropagation();

					const level0 = backBtn.closest(".menu__level_0");
					const level1 = level0.querySelector(".menu__level_1");
		
					if (level0) {
						level0.style.overflowY = "hidden";
						level0.style.overflowX = "hidden";
						level0.classList.remove("active");
		
						if (level1) {
							level1.classList.remove("active");
							level1.style.overflowY = "hidden";
							level1.style.overflowX = "hidden";
						}
					}

					slide(0);
				});
			});
		
			// Обработчик кнопок "Назад" в уровне 1 (для каждой кнопки)
			const backLevel1Buttons = menu.querySelectorAll(".menu__level_1 .menu__back");
			backLevel1Buttons.forEach((backBtn) => {
				backBtn.addEventListener("click", function (e) {
					e.stopPropagation();

					const level1 = backBtn.closest(".menu__level_1");
					const level0 = backBtn.closest(".menu__level_0");
		
					if (level1) {
						level1.classList.remove("active");
						level1.style.overflowY = "hidden";
						level1.style.overflowX = "hidden";
					}
				
					if (level0) {
						level0.classList.add("active");
						
						level0.style.overflowY = "auto";
						level0.style.overflowX = "hidden";
					}

					slide(-100);
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