import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { makeModal } from "../../js/libs/makeModal";

(() => {
	makeModal({
		open: function(modal, button) {
			this.querySelector('.modal__bye')?.addEventListener('click', e => modal.close());
			disablePageScroll();
		},
		close: function() {
			enablePageScroll();
		}
	});

})();