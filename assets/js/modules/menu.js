export default function menu() {
  const $btn = document.querySelector(".menu-btn"),
    $menu = document.querySelector(".menu");

  document.addEventListener("DOMContentLoaded", () => {
    $btn.addEventListener("click", (e) => {
      $btn.firstElementChild.classList.toggle("none");
      $btn.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  });
}
