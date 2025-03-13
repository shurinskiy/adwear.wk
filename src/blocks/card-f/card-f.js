import { slideToggle } from "../../js/libs/helpers";

(() => {
	document.querySelectorAll('.card-f__head').forEach(cap => {
		cap.addEventListener('click', e => {
			e.stopPropagation();
			cap.classList.toggle('opened', slideToggle(cap.nextElementSibling, 300));
		});
	});

})();