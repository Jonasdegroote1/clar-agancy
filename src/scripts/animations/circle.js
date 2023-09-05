import gsap from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const circleAnimation = () => {

  const $staggerItems = document.querySelectorAll("[data-animation='circle-stagger']");


  $staggerItems.forEach($staggerItem => {
    const $stagger = $staggerItem.querySelectorAll('[data-child="circle-stagger"]');

    gsap.from($stagger, {
      duration: 2,
      opacity: 0,
      stagger: -.5,
      transformOrigin: 'bottom',
      scale: 0,
      scrollTrigger: {
        start: "top 60%",
        trigger: $staggerItems,
        toggleActions: "play reset play reset",
      }
    })
  })
}

export default circleAnimation;