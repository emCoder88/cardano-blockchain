// code

let myIcon = document.querySelectorAll("#myIcon");
let body = document.querySelector("body");
let tr = true;
let media = document.querySelector(".media-nav");
let click = document.querySelector(".click");

myIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (tr) {
      body.style.overflow = "hidden";
      media.style.transform = "translateX(0px)";
      click.style.opacity = "0";
      tr = false;
    } else {
      body.style.overflow = "auto";
      media.style.transform = "translateX(-500px)";
      click.style.opacity = "1";
      tr = true;
    }
  });
});
