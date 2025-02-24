fetch('/assets/data/classtools.json')
	.then(response => response.json())
	.then(apps => {
		const appsContainer = document.querySelector('.apps');
		const searchInput = document.getElementById('input')
		searchInput.type = 'text';
		searchInput.placeholder = 'Search apps...';
		appsContainer.parentNode.insertBefore(searchInput, appsContainer); // Add before apps container

		function displayGames(appsToDisplay) { // Function to display apps
			appsContainer.innerHTML = ''; // Clear previous apps
			appsToDisplay.forEach(app => {
				const appElement = document.createElement('div');
				appElement.className = 'app';
				appElement.innerHTML = `
          <img src="${app.image}" alt="${app.name}">
          <h3>${app.name}</h3>
        `;

				appElement.addEventListener('click', async () => {
					let ute = app.url;
					async function sjEncode() {
						ute = "/scram/service/" + encodeURIComponent(ute);
						localStorage.setItem("url", ute);
						window.location.href = "/browser";
					}
					sjEncode();
				});

				appsContainer.appendChild(appElement);
			});
		}

		displayGames(apps); // Initial display of all apps

		searchInput.addEventListener('input', () => { // Search functionality
			const searchTerm = searchInput.value.toLowerCase();
			const filteredGames = apps.filter(app =>
				app.name.toLowerCase().includes(searchTerm)
			);
			displayGames(filteredGames);
		});

	});