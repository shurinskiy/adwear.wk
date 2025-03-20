(() => {
	const section = document.querySelector('.route');
	if (! section) return;

	const items = section.querySelectorAll('.route__item');
	const maps = section.querySelectorAll('.route__map iframe');
	const controls = section.querySelectorAll('.route__button');
	const active  = [...controls].find(ctr => ctr.classList.contains('active'));

	maps.forEach((map, i) => map.src = active.dataset[`route${i}`]);
	
	controls.forEach((control, i) => {
		control.addEventListener('click', e => {
			controls.forEach(ctr => ctr.classList.remove('active'));
			maps.forEach((map, i) => map.src = control.dataset[`route${i}`]);

			items.forEach(item => {
				const heads = item.querySelectorAll('.route__head');
				heads.forEach(head => head.classList.remove('active'));
				heads[i].classList.add('active');
			});

			control.classList.add('active');
		});
	});
	
})();