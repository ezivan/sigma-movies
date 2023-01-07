import slider from "./modules/slider.js";
import generateSliderItem from "./modules/slider_item.js";
import generateCards from "./modules/generate_cards.js";
import generateModal from "./modules/generate_modal.js";
import getMovies from "./modules/get_movies.js";
import menu from "./modules/menu.js";

let page = 1;

const generateHeroImage = async (url) => {
  const $hero = document.getElementById("hero-image"),
    $title = document.getElementById("hero-title"),
    $overview = document.getElementById("hero-overview");

  let data = await getMovies(url),
    i = Math.round(Math.random() * data.results.length);

  $hero.setAttribute(
    "style",
    `--backdrop: url(https://image.tmdb.org/t/p/original/${data.results[i].backdrop_path}`
  );
  $title.textContent = data.results[i].title;
  $overview.textContent = data.results[i].overview;
};

document.addEventListener("DOMContentLoaded", () => {
  slider("#arrow-left", "#arrow-right");
  generateHeroImage(
    "https://api.themoviedb.org/3/movie/popular?api_key=69c75a356e5a4696e4349dabc24ab312&language=es-MX"
  );
  generateSliderItem(
    "https://api.themoviedb.org/3/movie/popular?api_key=69c75a356e5a4696e4349dabc24ab312&language=es-MX"
  );
  generateCards(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=69c75a356e5a4696e4349dabc24ab312&language=es-MX",
    "top-movies",
    "card-template"
  );
  generateCards(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=69c75a356e5a4696e4349dabc24ab312&language=es-MX",
    "upcoming-movies",
    "card-template"
  );
  generateCards(
    "https://api.themoviedb.org/3/tv/popular?api_key=69c75a356e5a4696e4349dabc24ab312&language=es-MX",
    "tv-popular",
    "card-template"
  );
  generateModal();
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-show-more")) {
    e.preventDefault();
    if (page < 1000) {
      page++;
      generateCards(
        `${e.target.dataset.url}&page=${page}`,
        e.target.dataset.container,
        "card-template"
      );
    }
  }
});

menu();
