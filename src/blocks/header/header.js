import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { driveMenu } from "../../js/libs/driveMenu";

(() => {
	const header = document.querySelector('[data-header-js]');
	if (! header) return;
	
	const navi = header.querySelector('.header__menu');
	const toggle = header.querySelector('.header__toggle');
	const close = header.querySelector('.header__close');
	
	const menu = driveMenu(navi, [toggle, close], {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			disablePageScroll();
			toggle.classList.add('opened');
			document.body.classList.add('underlay');

			this.querySelectorAll('a.header__menu-link[href*="#"]').forEach(link => {
				link.addEventListener('click', (e) => menu.menuClose(e));
			});

		},
		close: function() {
			enablePageScroll();
			this.removeAttribute('style');
			toggle.classList.remove('opened');
			document.body.classList.add('underlay_closing');
			
			this.addEventListener('transitionend', e => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
			
		}
	});
	
	window.addEventListener('scroll', () => {
		header.classList[window.scrollY < 30 ? 'remove': 'add']('header_scrolled');
	});

	// открытие и закрытие меню, свайпом на мобильных устройствах
	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));

})();
