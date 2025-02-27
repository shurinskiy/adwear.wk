(() => {

	document.querySelectorAll('.samples__card').forEach((card) => {
		// const { clear } = window.getComputedStyle(card);
		// if (clear !== 'none') return;

		card.addEventListener('mouseenter', (e) => {
			let height = card.children[0]?.getBoundingClientRect().height;
			card.style.height = `${height}px`;
		});
		
		card.addEventListener('mouseleave', (e) => {
			card.style.height = '';
		});
	});

})();
