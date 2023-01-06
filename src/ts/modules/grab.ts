import { sliderItems } from "../variables/variable.js";

export const grab = () => {
  window.addEventListener("mousedown", (e) => {
    sliderItems?.classList.toggle("js-grabbing");
  });
  window.addEventListener("mouseup", (e) => {
    sliderItems?.classList.toggle("js-grabbing");
  });
};
