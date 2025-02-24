document.addEventListener("DOMContentLoaded", () => {
	const searchEngineSelect = document.getElementById("search-engine");
	const proxy = document.getElementById("proxy");
	const saveSearchEngineButton = document.getElementById("save-search-engine");
	const saveProxyButton = document.getElementById("save-proxy");
	const abCheckbox = document.getElementById("abCheckbox");
	const customTitleInput = document.getElementById("customTitle");
	const customIconInput = document.getElementById("customIcon");
	const panicKeyInput = document.getElementById("panicKey");
	const savePanicButton = document.getElementById("save-panic-button");
	let panicKeyValue = localStorage.getItem("panicKey") || "";
	const saveLocalStorageButton = document.getElementById("save-local-storage");

	function updateAB() {
		if (abCheckbox) {
			localStorage.setItem('ab', abCheckbox.checked);
			console.log("Checkbox State is now: " + abCheckbox.checked);
		}
	}

	if (abCheckbox) {
		abCheckbox.checked = localStorage.getItem('ab') === 'true';
		abCheckbox.addEventListener('change', updateAB);
	}

	if (searchEngineSelect) {
		searchEngineSelect.value = localStorage.getItem("search-engine") || "google";
	}

	if (proxy) {
		proxy.value = localStorage.getItem("proxy") || "sj";
	}

	if (customTitleInput) {
		customTitleInput.value = localStorage.getItem("tabTitle") || "";
	}

	if (customIconInput) {
		customIconInput.value = localStorage.getItem("tabIcon") || "";
	}

	if (panicKeyInput) {
		panicKeyInput.value = panicKeyValue;

		if (savePanicButton) {
			savePanicButton.addEventListener("click", () => {
				panicKeyValue = panicKeyInput.value;
				localStorage.setItem("panicKey", panicKeyValue);
				console.log("Panic key saved:", panicKeyValue);
				const message = document.getElementById("panic-key-saved-message");
				if (message) {
					message.textContent = "Panic key saved!";
					setTimeout(() => message.textContent = "", 3000);
				}
			});
		}
	}

	if (saveSearchEngineButton) {
		saveSearchEngineButton.addEventListener("click", () => {
			if (searchEngineSelect) {
				localStorage.setItem("search-engine", searchEngineSelect.value);
				console.log("Search engine set to:", searchEngineSelect.value);
			}
		});
	}

	if (saveProxyButton) {
		saveProxyButton.addEventListener("click", () => {
			if (proxy) {
				localStorage.setItem("proxy", proxy.value);
				console.log("Proxy set to:", proxy.value);
			}
		});
	}

	if (saveLocalStorageButton) {
		saveLocalStorageButton.addEventListener("click", () => {
			if (customTitleInput) {
				localStorage.setItem("tabTitle", customTitleInput.value);
			}
			if (customIconInput) {
				localStorage.setItem("tabIcon", customIconInput.value);
			}
			console.log("Local storage values saved");
		});
	}
});