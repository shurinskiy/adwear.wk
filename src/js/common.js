import { Fancybox } from "@fancyapps/ui";
import { runCounter } from "./libs/runCounter";
import { scrollBasedToggle } from "./libs/scrollBasedToggle";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import "./polyfills.js";
import "./blocks.js";

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */

let scrollToggle = scrollBasedToggle({ class: 'run' });

Fancybox.bind('[data-fbox]', {
	groupAttr: 'data-fbox',
	hideClass: '',
	Thumbs: { type: 'classic' },
	Toolbar: {
		display: {
			right: ["iterateZoom", "close"],
			left: ["infobar"],
			middle: [],
		},
	},
	Carousel: {
		Navigation: {
			prevTpl: '<svg tabindex="-1"><use xlink:href="#arr-left"></use></svg></button>',
			nextTpl: '<svg tabindex="-1"><use xlink:href="#arr-right"></use></svg></button>',
		},
	},
});

runCounter(document.querySelectorAll('[data-count-anime]'), {
	duration: 1,
});

new ResizeObserver(() => {
	const root = document.documentElement;
	const vw = root.clientWidth / 100;
	const vh = root.clientHeight / 100;

	root.style.setProperty('--vw', `${vw}px`);
	root.style.setProperty('--vh', `${vh}px`);
}).observe(document.documentElement);