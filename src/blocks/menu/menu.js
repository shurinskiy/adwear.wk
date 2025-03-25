import { driveTabs } from "../../js/libs/driveTabs";
import enquire from 'enquire.js';

(() => {
	const menu = document.querySelector('.menu');
	if (! menu) return;

	const wrapper = menu.querySelector('.menu__wrapper');

	// const viewbox = menu.querySelector('.menu__viewbox');

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
			let startX = 0;
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
			}, { passive: false });
		
			// Открытие уровня 0
			const insideLinks = menu.querySelectorAll(".menu__item_haschild > .menu__inside");
	
			insideLinks.forEach(item => {
				item.addEventListener("click", function (event) {
	
					const level0 = item.nextElementSibling.closest('.menu__level_0');
					if (level0) {
						level0.style.overflowY = "auto";
						level0.style.overflowX = "hidden";
						level0.classList.add("active");
					}
					wrapper.style.transform = "translateX(calc(-100% - 12px))";
				});
			});
		
			// Открытие уровня 1
			const subcategories = menu.querySelectorAll(".menu__level_0 .menu__inside");
			subcategories.forEach(link => {
				link.addEventListener("click", function (event) {
					event.preventDefault();
					wrapper.style.transform = "translateX(calc( -200% - 24px ))";
					
					const level0 = link.closest(".menu__level_0");
					if (level0) {
						level0.style.overflow = "visible";
					}
			
					const parentItem = link.closest(".menu__item_haschild");
					if (parentItem) {
			
						const level1 = parentItem.querySelector(".menu__level_1");
						if (level1) {
							level1.style.overflowY = "auto";
							level1.style.overflowX = "hidden";
							level1.classList.add("active");
						}
					}
				});
			});
		
			// Обработчик кнопок "Назад" в уровне 0 (для каждой кнопки)
			const backLevel0Buttons = menu.querySelectorAll(".menu__level_0 .menu__back");
			backLevel0Buttons.forEach((backBtn) => {
				backBtn.addEventListener("click", function (event) {
					event.stopPropagation();
					wrapper.style.transform = "translateX(0)";
		
					const level0 = backBtn.closest(".menu__level_0");
					if (level0) {
						level0.style.overflowY = "hidden";
						level0.style.overflowX = "hidden";
						level0.classList.remove("active");
		
						const level1 = level0.querySelector(".menu__level_1");
						if (level1) {
							level1.classList.remove("active");
							level1.style.overflowY = "hidden";
							level1.style.overflowX = "hidden";
						}
					}
				});
			});
		
			// Обработчик кнопок "Назад" в уровне 1 (для каждой кнопки)
			const backLevel1Buttons = menu.querySelectorAll(".menu__level_1 .menu__back");
			backLevel1Buttons.forEach((backBtn) => {
				backBtn.addEventListener("click", function (event) {
					event.stopPropagation();
					wrapper.style.transform = "translateX(calc( -100% - 12px))";
		
					const level1 = backBtn.closest(".menu__level_1");
					if (level1) {
						level1.classList.remove("active");
						level1.style.overflowY = "hidden";
						level1.style.overflowX = "hidden";
					}
				
					const level0 = backBtn.closest(".menu__level_0");
					if (level0) {
						level0.classList.add("active");
						
						level0.style.overflowY = "auto";
						level0.style.overflowX = "hidden";
					}
				});
			});
		},
		unmatch: function() {
			wrapper.removeAttribute('style');
			wrapper.querySelectorAll('.menu__level').forEach(menu => {
				menu.classList.remove('active');
				menu.removeAttribute('style');
			});
		}
	});

})();