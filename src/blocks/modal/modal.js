import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { makeModal } from "../../js/libs/makeModal";
import Inputmask from "inputmask";

(() => {
	makeModal({
		open: function(modal, button) {
			disablePageScroll();
			
			Inputmask({ 
				"mask": "+7 (999) 999-99-99", 
				showMaskOnHover: false 
			}).mask(this.querySelectorAll('input[type="tel"]'));

			this.querySelector('.modal__bye')?.addEventListener('click', e => modal.close());

			window.smartCaptcha && window.smartCaptcha.render(this.querySelector('.smart-captcha'), {
				sitekey: 'ysc1_PJLwu4RqomXe8k70NwYhRFnD8SOwjBXaNRrFsiVo46f48e29',
				hl: 'ru',
			});
		},
		close: function() {
			enablePageScroll();
		}
	});

})();