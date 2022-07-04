const card = document.querySelector(".card");
const container = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h4");
const sizes = document.querySelector(".sizes");
const sizeButtons = document.querySelectorAll(".sizes button");
const purchase = document.querySelector(".purchase button");
// Animation event listener.
card.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 32;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 32;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// Animate in.
card.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
  // Pop out.
  sneaker.style.transform = "translateZ(100px) rotateZ(-20deg)";
  title.style.transform = "translateZ(40px)";
  description.style.transform = "translateZ(80px)";
  sizes.style.transform = "translateZ(40px)";
  purchase.style.transform = "translateZ(20px)";
});
// Animate out.
card.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.6s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Pop back.
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
// Shoe size selection.
for (i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function () {
    for (i = 0; i < sizeButtons.length; i++) {
      sizeButtons[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}
