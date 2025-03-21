(() => {
	const popup = document.querySelector('.cookie');
	
	if (! localStorage.getItem('cookie_agree') && popup)
		setTimeout(() => popup.classList.add('opened'), 5000);
	
	popup.querySelector('.button').onclick = e => {
		localStorage.setItem('cookie_agree', true);
		popup.classList.remove('opened');
	}
	
})();