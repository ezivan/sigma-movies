import getMovies from "./get_movies.js";

export default async function generateCards(url, containerId, templateId) {
  const d = document,
    $fragment = d.createDocumentFragment(),
    $container = d.getElementById(containerId),
    $template = d.getElementById(templateId).content;

  let json = await getMovies(url);

  json.results.forEach((el) => {
    $template.querySelector(
      ".movie-front-page"
    ).src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
    $template.querySelector(".movie-front-page").alt = "Path";
    $template.querySelector(".movie-front-page").dataset.title =
      el.title || el.name;
    $template.querySelector(".movie-front-page").dataset.overview = el.overview;
    $template.getElementById("m-title").textContent = el.title || el.name;
    $template.querySelector(".movie-front-page").dataset.release_date =
      el.release_date || el.first_air_date;
    $template.querySelector(".movie-front-page").dataset.popularity =
      el.popularity;
    $template.querySelector(".movie-front-page").dataset.vote_average =
      el.vote_average;

    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $container.appendChild($fragment);
}
