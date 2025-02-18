(() => {

	document.querySelectorAll('.rating').forEach((item) => {
		item.querySelectorAll('.rating__star').forEach((star, i) => {
			if (i < Math.round(item.dataset.rate))
				star.classList.add('active');
		});
	});

})();
