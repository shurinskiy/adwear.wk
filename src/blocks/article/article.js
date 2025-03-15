(() => {
	const section = document.querySelector('.article');
	if (! section ) return;

	section.querySelector('.article__more')?.addEventListener('click', e => {
		section.querySelectorAll('.article__hidden').forEach(p => {
			p.classList.remove('hidden');
			e.currentTarget.remove();
		});
	});

})();
