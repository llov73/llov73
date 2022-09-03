const bg = document.querySelector("body.bg");

function handleResizebg() {
  if (window.innerWidth < 700) {
    bg.classList = "resizedS";
  } else if (window.innerWidth >= 1200) {
    bg.classList = "bg";
  } else if (window.innerWidth > 900) {
    bg.classList = "resizedM";
  }
}

window.addEventListener("resize", handleResizebg);