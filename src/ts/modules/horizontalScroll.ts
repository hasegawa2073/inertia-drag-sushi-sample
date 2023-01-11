import { slider, sliderItems } from "../variables/variable.js";

type Coordinate = {
  [K: string]: number;
};

const scroll: Coordinate = {
  currentX: 0,
  currentY: 0,
  endX: 0,
  endY: 0,
};
const scrollTo: Coordinate = {
  x: 0,
  y: 0,
};
const dragAmount: Coordinate = {
  x: 0,
  y: 0,
};
const mouseCoordinate: Coordinate = {
  startX: 0,
  startY: 0,
  moveX: 0,
  moveY: 0,
  endX: 0,
  endY: 0,
};
let isScrolling: boolean = false;
let timeoutID = 0;

export const horizontalScroll = () => {
  slider?.addEventListener("scroll", (e: Event) => {
    if (!(e.target instanceof HTMLElement)) return;
    isScrolling = true;
    scroll.currentX = e.target?.scrollLeft;
    scroll.currentY = e.target?.scrollTop;
    scrollTo.x = scroll.currentX;
    scrollTo.y = scroll.currentY;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      if (!(e.target instanceof HTMLElement)) return;
      isScrolling = false;
      if (isScrolling === false) {
        scroll.endX = e.target?.scrollLeft;
        scroll.endY = e.target?.scrollTop;
      }
    }, 500);
  });
  sliderItems?.addEventListener("mousedown", (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    scroll.startX = e.target?.scrollLeft;
    scroll.startY = e.target?.scrollTop;
    mouseCoordinate.startX = e.clientX;
    mouseCoordinate.startY = e.clientY;
    mouseCoordinate.moveX = e.clientX;
    mouseCoordinate.moveY = e.clientY;
  });
  sliderItems?.addEventListener("mousemove", (e: MouseEvent) => {
    if (!sliderItems?.classList.contains("js-grabbing")) return;
    dragAmount.x = mouseCoordinate.moveX - mouseCoordinate.startX;
    dragAmount.y = mouseCoordinate.moveY - mouseCoordinate.startY;
    mouseCoordinate.moveX = e.clientX;
    mouseCoordinate.moveY = e.clientY;
    scrollTo.x = scroll.endX - dragAmount.x;
    scrollTo.y = scroll.endY - dragAmount.y;
    slider?.scroll({
      left: scrollTo.x,
    });
  });
  sliderItems?.addEventListener("mouseup", (e: MouseEvent) => {
    scroll.endX = scroll.currentX;
    scroll.endY = scroll.currentY;
  });
};
