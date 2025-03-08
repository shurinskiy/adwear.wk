import { driveTabs } from "../../js/libs/driveTabs";

(() => {
	const menu = document.querySelector('.menu');
	if (! menu) return;

	driveTabs({
		container: menu,
		controls: menu.querySelectorAll('.menu__control'),
		selects: menu.querySelectorAll('.menu__level_0'),
		cls: 'active'
	});

})();
