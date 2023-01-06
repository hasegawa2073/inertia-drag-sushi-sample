import { sushiName } from "../variables/variable.js";

export const changeName = () => {
  const items = document.querySelectorAll(".slider__item");
  const options = {
    root: document.querySelector(".sushi__intersect"),
    rootMargin: "0px -50%",
    threshold: 0,
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  items.forEach((item) => {
    observer.observe(item);
  });
  function doWhenIntersect(items: any[]) {
    items.forEach((item) => {
      if (!sushiName) return;
      if (item.isIntersecting) {
        sushiName.textContent = item.target.children[0].alt;
      }
    });
  }
};
