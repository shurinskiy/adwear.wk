import scrollLock from 'scroll-lock';
import { makeModal } from "../../js/libs/makeModal";

(() => {
	makeModal({
		init: function(underlay) {
			underlay.setAttribute('data-scroll-lock-scrollable', '');
		},
		open: function(modal, button) {
			this.querySelector('.modal__bye')?.addEventListener('click', e => modal.close());
			scrollLock.disablePageScroll();
		},
		close: function() {
			scrollLock.enablePageScroll();
		}
	});

})();