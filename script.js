let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let parallaxContainer = document.getElementById("parallaxContainer");
let isParallaxContainerIntersecting = true;
let sectionEnd = document.getElementById("sec-end");

const parallaxContainerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isParallaxContainerIntersecting = true;
      } else {
        isParallaxContainerIntersecting = false;
      }
    });
  },
  { threshold: 0 }
);
parallaxContainerObserver.observe(parallaxContainer);

const sectionContainerObserver = new IntersectionObserver((entries) => {
  const endingSpan = entries[0];
  if (endingSpan.isIntersecting) {
    isParallaxContainerIntersecting = false;
    parallaxContainerObserver.unobserve(parallaxContainer);
  } else {
    isParallaxContainerIntersecting = true;
    parallaxContainerObserver.observe(parallaxContainer);
  }
});
sectionContainerObserver.observe(sectionEnd);

window.addEventListener("scroll", () => {
  if (isParallaxContainerIntersecting) {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
  }
});
