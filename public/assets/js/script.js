document.getElementById("frame").src = localStorage.getItem("url");

if (localStorage.getItem("load") == "quick") {
	document.getElementById("particles-js").remove();
	document.getElementById("wrapper").remove();
	document.getElementById("bga").remove();
}

function reload() {
	// Get the main iframe directly using its ID
	const iframe = document.getElementById("frame");
	if (iframe) {
		iframe.src = iframe.src;
		// Assuming Load() is defined elsewhere - you may need to implement this
		if (typeof Load === 'function') {
			Load();
		}
	} else {
		console.error("Iframe not found");
	}
}

function toggleFullscreen() {
	const elem = document.getElementById("frame");
	if (!elem) {
		console.error("Iframe not found");
		return;
	}

	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		/* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE/Edge */
		elem.msRequestFullscreen();
	}
}

function toggledevtools() {
	// Get the main iframe directly using its ID
	const iframe = document.getElementById("frame");
	if (!iframe) {
		console.error("Iframe not found");
		return;
	}

	const erudaWindow = iframe.contentWindow;
	if (!erudaWindow) {
		console.error("No content window found for iframe");
		return;
	}

	const erudaDocument = iframe.contentDocument;
	if (!erudaDocument) {
		console.error("No content document found for iframe");
		return;
	}

	// Wait for iframe to load before injecting Eruda
	if (erudaDocument.readyState !== 'complete') {
		console.error("Please wait for the page to load completely");
		return;
	}

	if (erudaWindow.eruda && erudaWindow.eruda._isInit) {
		// If Eruda is initialized, destroy it
		erudaWindow.eruda.destroy();
	} else {
		// If Eruda doesn't exist or isn't initialized, create and init it
		if (!erudaWindow.eruda) {
			const script = erudaDocument.createElement("script");
			script.src = "https://cdn.jsdelivr.net/npm/eruda";
			script.onload = () => {
				if (!erudaWindow.eruda) {
					console.error("Failed to load Eruda in iframe");
					return;
				}
				erudaWindow.eruda.init();
				erudaWindow.eruda.show();
			};
			erudaDocument.head.appendChild(script);
		} else {
			// If Eruda exists but isn't initialized, just init it
			erudaWindow.eruda.init();
			erudaWindow.eruda.show();
		}
	}
}

function togglepopup() {
	window.open(document.getElementById("frame").src);
}

// Export the functions if using modules
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		toggledevtools,
		reload,
		toggleFullscreen
	};
}