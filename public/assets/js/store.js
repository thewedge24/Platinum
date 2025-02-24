const proxySelect = document.getElementById("proxySelect");
const wispSelect = document.getElementById("wispSelect");

if (proxySelect) {
	proxySelect.value = localStorage.getItem("proxy") || "uv";
	proxySelect.addEventListener("change", function() {
		localStorage.setItem("proxy", proxySelect.value);
	});
}

if (wispSelect) {
	const defaultWispURL = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

	const savedWispURL = localStorage.getItem("wisp");
	if (savedWispURL === defaultWispURL) {
		wispSelect.value = "default";
	} else if (savedWispURL) {
		wispSelect.value = "tp";
	} else {
		wispSelect.value = "default";
	}

	wispSelect.addEventListener("change", function() {
		if (wispSelect.value === "default") {
			localStorage.setItem("wisp", defaultWispURL);
		} else if (wispSelect.value === "tp") {
			const customWispURL = prompt("Enter your WISP URL:");
			if (customWispURL) {
				localStorage.setItem("wisp", customWispURL);
			}
		}
	});
}