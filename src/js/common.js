import { Fancybox } from "@fancyapps/ui";
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
});