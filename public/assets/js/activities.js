fetch('/assets/data/activities.json')
	.then(response => response.json())
	.then(games => {
		const appsContainer = document.querySelector('.games');
		const searchInput = document.getElementById('input')
		searchInput.type = 'text';
		searchInput.placeholder = 'Search games...';
		appsContainer.parentNode.insertBefore(searchInput, appsContainer); // Add before games container

		function displayGames(gamesToDisplay) { // Function to display games
			appsContainer.innerHTML = ''; // Clear previous games
			gamesToDisplay.forEach(game => {
				const gameElement = document.createElement('div');
				gameElement.className = 'game';
				gameElement.innerHTML = `
          <img src="${game.image}" alt="${game.name}">
          <h3>${game.name}</h3>
        `;

				gameElement.addEventListener('click', async () => {
					let ute = game.url;
					async function sjEncode() {
						ute = "/scram/service/" + encodeURIComponent(ute);
						localStorage.setItem("url", ute);
						window.location.href = "/browser";
					}
					sjEncode();
				});

				appsContainer.appendChild(gameElement);
			});
		}

		displayGames(games); // Initial display of all games

		searchInput.addEventListener('input', () => { // Search functionality
			const searchTerm = searchInput.value.toLowerCase();
			const filteredGames = games.filter(game =>
				game.name.toLowerCase().includes(searchTerm)
			);
			displayGames(filteredGames);
		});

	});