document.addEventListener("DOMContentLoaded", function() {
	// Get HTML elements
	const saveLocalStorageButton = document.getElementById("saveLocalStorageButton");
	const tabTitleInput = document.getElementById("tabTitleInput");
	const tabIconInput = document.getElementById("tabIconInput");
	const input = document.getElementById("input");

	// Load defaults (or existing values)
	let name = localStorage.getItem("tabTitle") || "My Drive - Google Drive";
	let icon = localStorage.getItem("tabIcon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

	// Set initial input values from localStorage or defaults
	if (tabTitleInput) tabTitleInput.value = name;
	if (tabIconInput) tabIconInput.value = icon;

	// Save Function
	if (saveLocalStorageButton) {
		saveLocalStorageButton.addEventListener("click", () => {
			if (tabTitleInput) {
				localStorage.setItem("tabTitle", tabTitleInput.value);
				console.log("Tab Title saved:", tabTitleInput.value);
				name = tabTitleInput.value; // Update name immediately
			}
			if (tabIconInput) {
				localStorage.setItem("tabIcon", tabIconInput.value);
				console.log("Tab Icon saved:", tabIconInput.value);
				icon = tabIconInput.value; // Update icon immediately
			}
			console.log("Tab icon and title saved to local storage");
		});
	}

	// Placeholder overwrite (anti-detection technique)
	if (input) {
		let placeholderText = "Search the Web Freely..."; // Store the original text

		function overwritePlaceholder() {
			input.placeholder = placeholderText; // Set the placeholder
			requestAnimationFrame(overwritePlaceholder); // Call this function again on the next frame
		}

		requestAnimationFrame(overwritePlaceholder); // Start the loop
	} else {
		console.error("Element with ID 'input' not found.");
	}



	// iframe and popup logic
	let inFrame;

	try {
		inFrame = window !== top; // Check if the page is in an iframe
	} catch (e) {
		inFrame = true; // If an error occurs, assume we're in an iframe
	}

	if (!localStorage.getItem("ab")) localStorage.setItem("ab", true); // Set "ab" flag if not set

	if (!inFrame && !navigator.userAgent.includes("Firefox") && localStorage.getItem("ab") === "true") {
		const popup = open("about:blank", "_blank");

		if (popup) {
			setTimeout(() => {
				if (!popup || popup.closed) {
					alert("Please allow popups for this site. This allows us to cloak the proxy so your activity remains private. You can turn this off in the site settings.");
				} else {
					const doc = popup.document;
					const iframe = doc.createElement("iframe");
					const style = iframe.style;
					const link = doc.createElement("link");

					doc.title = name; // Use the current 'name' value
					link.rel = "icon";
					link.href = `${icon}?v=${new Date().getTime()}`; // Prevent favicon caching
					doc.head.appendChild(link);

					iframe.src = location.href;
					style.position = "fixed";
					style.top = style.bottom = style.left = style.right = 0;
					style.border = style.outline = "none";
					style.width = style.height = "100%";
					doc.body.appendChild(iframe);

					const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomUrl();
					location.replace(pLink);
				}
			}, 50);
		} else {
			console.warn("Popup blocked by browser.");
		}
	}

	// Random URL Function
	function getRandomUrl() {
		const randomUrls = [
			"https://gimkit.com",
			"https://classroom.google.com",
			"https://drive.google.com",
			"https://google.com",
			"https://docs.google.com",
			"https://slides.google.com",
			"https://sso.rumba.pk12ls.com/sso/login",
			"https://blooket.com",
			"https://clever.com",
			"https://edpuzzle.com",
			"https://khanacademy.org",
			"https://wikipedia.org",
			"https://dictionary.com"
		];
		return randomUrls[randRange(0, randomUrls.length)];
	}

	// Generate a random number within a given range
	function randRange(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
});