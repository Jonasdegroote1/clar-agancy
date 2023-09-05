import gsap from "gsap";

import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const $titleFadeIn = document.querySelectorAll('[data-animation="fade-in"]');


const fadeIn = () => {
  $titleFadeIn.forEach(($title) => {

    gsap.from($title, {
      duration: 3,
      opacity: 0,
      y: 50,
      ease: "power",
      scrollTrigger: {
        trigger: $title,
        start: "top 60%",
        end: "bottom 10%",
        toggleActions: "play reset play reset",
      },
    });
  })
}

export default fadeIn;