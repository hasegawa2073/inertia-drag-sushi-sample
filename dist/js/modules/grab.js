import { sliderItems } from "../variables/variable.js";
export const grab = () => {
    sliderItems?.addEventListener("mousedown", () => {
        sliderItems?.classList.add("js-grabbing");
    });
    sliderItems?.addEventListener("mouseup", () => {
        sliderItems?.classList.remove("js-grabbing");
    });
    sliderItems?.addEventListener("mouseleave", () => {
        sliderItems?.classList.remove("js-grabbing");
    });
};
