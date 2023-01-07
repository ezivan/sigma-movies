import generateCards from "./generate_cards.js";
import generateModal from "./generate_modal.js";

export default function loadPage(url, container) {
  document.addEventListener("DOMContentLoaded", () => {
    generateCards(url, container, "card-template");
    generateModal();
  });
}

export function loadMore(url, container) {
  let page = 1;
  if (page < 1000) {
    page++;
    generateCards(`${url}&page=${page}`, container, "card-template");
  }
}
