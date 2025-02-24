(function() {

	// Panic Key
	var storedKey = localStorage.getItem('panicKey');
	if (storedKey) {
		document.addEventListener('keydown', function(event) {
			if (event.key === storedKey) {
				window.location.href = 'https://www.google.com';
			}
		});
	}
})();