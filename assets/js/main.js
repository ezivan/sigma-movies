import loadPage, { loadMore } from "./modules/load_page.js";
import menu from "./modules/menu.js";

const url = document.getElementById("btn-next").dataset.url,
  container = document.getElementById("btn-next").dataset.container;

menu();
loadPage(url, container);

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-next")) {
    loadMore(e.target.dataset.url, e.target.dataset.container);
  }
});
