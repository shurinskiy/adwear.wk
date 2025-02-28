(() => {
	document.querySelector('.article__more').addEventListener('click', e => {
		document.querySelectorAll('.article__hidden').forEach(p => {
			p.classList.remove('hidden');
			e.currentTarget.remove();
		});
	});

})();
