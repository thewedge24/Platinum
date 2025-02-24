document.addEventListener('DOMContentLoaded', function() {
	const themeSelect = document.getElementById('theme-select');
	const bgInput = document.getElementById('bginput');
	const bgSet = document.getElementById('bgset');
	const clearBgButton = document.getElementById('clear-bg');
	const saveThemeButton = document.getElementById('save-theme'); // New save button for theme

	function applyTheme(theme, customBg) {
		document.documentElement.classList.remove(
			'theme-ocean',
			'theme-grass',
			'theme-eyebreak',
			'theme-default',
			'theme-forest'
		);
		document.documentElement.classList.add(`theme-${theme}`);
		if (customBg) {
			document.documentElement.style.setProperty('--custom-bg', `url(${customBg})`);
		} else {
			document.documentElement.style.removeProperty('--custom-bg');
		}
	}

	function refreshPages() {
		// Refresh the current page.
		window.location.reload();
	}

	function saveTheme() {
		const theme = themeSelect.value;
		localStorage.setItem('theme', theme);
		applyTheme(theme, localStorage.getItem('custombg') || '');
		refreshPages(); // Refresh after saving the theme
	}

	function saveCustomBg() {
		const customBg = bgInput.value;
		localStorage.setItem('custombg', customBg);
		applyTheme(localStorage.getItem('theme') || 'default', customBg);
		refreshPages(); // Refresh after saving the background
	}

	function clearBackground() {
		localStorage.removeItem('custombg');
		applyTheme(localStorage.getItem('theme') || 'default', '');
		refreshPages(); // Refresh after clearing the background
	}

	// Listen for storage changes on other pages and refresh them.
	window.addEventListener('storage', function(e) {
		if (e.key === 'theme' || e.key === 'custombg') {
			window.location.reload();
		}
	});

	const initialTheme = localStorage.getItem('theme') || 'default';
	const initialCustomBg = localStorage.getItem('custombg') || '';

	if (themeSelect) {
		themeSelect.value = initialTheme;
	}

	if (saveThemeButton) {
		saveThemeButton.addEventListener('click', saveTheme);
	}

	if (bgInput && bgSet) {
		bgInput.value = initialCustomBg;
		bgSet.addEventListener('click', saveCustomBg);
	}

	if (clearBgButton) {
		clearBgButton.addEventListener('click', clearBackground);
	}

	applyTheme(initialTheme, initialCustomBg);
});