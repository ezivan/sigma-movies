import getMovies from "./get_movies.js";

export default async function generateSliderItem(url) {
  const d = document,
    $carrousel = d.getElementById("carrousel"),
    $fragment = d.createDocumentFragment();

  const data = await getMovies(url);
  data.results.forEach((el) => {
    const $img = d.createElement("img");
    $img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
    $img.alt = "backdrop";
    $img.setAttribute("class", "movie-front-page");
    $img.dataset.title = el.title;
    $img.dataset.overview = el.overview;
    $img.dataset.release_date = el.release_date || el.first_air_date;
    $img.dataset.popularity = el.popularity;
    $img.dataset.vote_average = el.vote_average;
    $fragment.appendChild($img);
  });

  $carrousel.appendChild($fragment);
}
