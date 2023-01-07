const d = document,
  $track = d.querySelector(".carrousel-track");

export default function slider(btnLeft, btnRight) {
  let firstImgWidth = d.querySelectorAll(".carrousel-track img")[0].clientWidth;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnLeft)) {
      $track.scrollLeft -= firstImgWidth;
    }
    if (e.target.matches(btnRight)) {
      $track.scrollLeft += firstImgWidth;
    }
  });
}
