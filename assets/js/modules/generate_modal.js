const d = document,
  $template = d.getElementById("modal-template").content;

export default function generateModal() {
  const createModal = (el) => {
    $template.querySelector("img").src = el.src;
    $template.querySelector("img").alt = "poster";
    $template.querySelector("h3").textContent = el.dataset.title;
    $template.getElementById("overview").textContent =
      el.dataset.overview || "Descripción no disponible";
    $template.getElementById("release-date").textContent =
      el.dataset.release_date;
    $template.getElementById("popularity").textContent = el.dataset.popularity;
    $template.getElementById("vote-average").textContent =
      el.dataset.vote_average;

    let $clone = d.importNode($template, true);

    d.body.appendChild($clone);
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(".movie-front-page")) {
      createModal(e.target);
    }

    if (e.target.matches("#modal-close") || e.target.matches(".modal")) {
      d.body.removeChild(d.querySelector(".modal"));
    }
  });
}
