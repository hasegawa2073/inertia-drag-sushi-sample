import { sliderItems } from "../variables/variable.js";

export const createItemDOM = () => {
  type SushiObj = {
    name: string;
    path: string;
  };
  const sushiObjArry: SushiObj[] = [
    { name: "ウニ", path: "./images/uni.png" },
    { name: "マグロ", path: "./images/tuna.png" },
    { name: "うなぎ", path: "./images/eel.png" },
    { name: "たまご", path: "./images/tamago.png" },
    { name: "サーモン", path: "./images/salmon.png" },
    { name: "軍艦巻き", path: "./images/salmon-roe.png" },
  ];
  sushiObjArry.forEach((sushiObj) => {
    const itemDiv = document.createElement("div");
    const imgDiv = document.createElement("img");
    itemDiv.classList.add("slider__item");
    imgDiv.classList.add("slider__image");
    imgDiv.setAttribute("alt", sushiObj.name);
    imgDiv.setAttribute("src", sushiObj.path);
    itemDiv.append(imgDiv);
    sliderItems?.append(itemDiv);
  });
  const spacerDivBefore = document.createElement("div");
  const spacerDivAfter = document.createElement("div");
  spacerDivBefore.classList.add("slider__spacer");
  spacerDivAfter.classList.add("slider__spacer");
  sliderItems?.prepend(spacerDivBefore);
  sliderItems?.append(spacerDivAfter);
};
