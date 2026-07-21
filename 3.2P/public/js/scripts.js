const cardSection = document.getElementById("card-section");

const createGameCard = (game) => {
  return `
    <div class="col s12 m6 l3">
      <div class="card game-card">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator game-image"
            src="${game.image}"
            alt="${game.title} board game"
          />
        </div>

        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            ${game.title}
            <i class="material-icons right">more_vert</i>
          </span>

          <p class="game-details">
            ${game.players} · ${game.time}
          </p>

          <p>
            <span class="difficulty-label">
              Difficulty: ${game.difficulty}
            </span>
          </p>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            ${game.title}
            <i class="material-icons right">close</i>
          </span>

          <p>${game.description}</p>
        </div>
      </div>
    </div>
  `;
};

const displayGames = (games) => {
  cardSection.innerHTML = "";

  games.forEach((game) => {
    cardSection.insertAdjacentHTML("beforeend", createGameCard(game));
  });
};

const displayError = () => {
  cardSection.innerHTML = `
    <div class="col s12 center-align">
      <p class="red-text">
        The games could not be loaded. Please try again.
      </p>
    </div>
  `;
};

const getGames = async () => {
  try {
    const response = await fetch("/api/games");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    displayGames(result.data);
  } catch (error) {
    console.error("Unable to load games:", error);
    displayError();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Board Game Explorer loaded");
  getGames();
});