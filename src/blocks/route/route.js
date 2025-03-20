(() => {
	const section = document.querySelector('.route');
	if (! section) return;

	const maps = section.querySelectorAll('.route__map iframe');
	const controls = section.querySelectorAll('.route__button');
	const active  = [...controls].find(ctr => ctr.classList.contains('active'));

	maps.forEach((map, i) => map.src = active.dataset[`route${i}`]);
	
	controls.forEach((control, i) => {
		control.addEventListener('click', e => {
			controls.forEach(ctr => ctr.classList.remove('active'));
			maps.forEach((map, i) => map.src = control.dataset[`route${i}`]);
			control.classList.add('active');
		});
	});
	
})();