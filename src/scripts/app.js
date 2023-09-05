import fadeIn from "./animations/fade.js";
import scrollLogo from "./animations/scroll.js";
import horizontalScroll from "./animations/horizontal.js";
import mouseMove from "./animations/mouse.js";
import staggerAnimation from "./animations/stagger.js";
import titleStagger from "./animations/titlestagger.js";
import circleAnimation from "./animations/circle.js";
import loadingScreen from "./animations/loadingScreen.js";
import imgHover from "./animations/imghover.js";

const afterAnimation = () => {
  mouseMove();
  horizontalScroll();
  titleStagger();
  scrollLogo();
  fadeIn();
  staggerAnimation();
  circleAnimation();
  imgHover();
}
loadingScreen(afterAnimation);