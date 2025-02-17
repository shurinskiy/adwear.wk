import { runCounter } from "../../js/libs/runCounter";

(() => {
	runCounter(document.querySelectorAll('[data-count-anime]'), { duration: 1 });

})();