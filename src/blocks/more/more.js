(() => {
	document.querySelectorAll('.more[data-more]').forEach(button => {
		const targets = document.querySelectorAll(button.dataset.more);

		button.addEventListener('click', e => {
			const isHidden = [...targets].some(target => target.classList.contains('hidden'));
			
			targets.forEach(target => target.classList.toggle('hidden', ! isHidden));
			button.classList.toggle('more_hidden', ! isHidden);
		});
	});

})();