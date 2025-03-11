import { driveTabs } from "../../js/libs/driveTabs";

(() => {
	const menu = document.querySelector('.menu');
	if (! menu) return;

	const viewbox = menu.querySelector('.menu__viewbox');

	driveTabs({
		container: menu,
		controls: menu.querySelectorAll('.menu__control'),
		selects: menu.querySelectorAll('.menu__level_0'),
		cls: 'showed'
	});

	menu.querySelectorAll('.menu__item_haschild').forEach(haschild => {
		const submenu = haschild.querySelector('.menu__level');
		const span = haschild.querySelector('span');

		span.addEventListener('click', e => {
			// viewbox.append(submenu);
		});
	});

})();