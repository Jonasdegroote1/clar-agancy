import gsap from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const staggerAnimation = () => {

  const $staggerItems = document.querySelectorAll("[data-animation='stagger']");


  $staggerItems.forEach($staggerItem => {
    const $stagger = $staggerItem.querySelectorAll('[data-child="stagger"]');


    gsap.from($stagger, {
      duration: 2,
      opacity: 0,
      stagger: .5,
      x: -50,
      y: -50,
      scrollTrigger: {
        start: "top 60%",
        trigger: $staggerItems,
        toggleActions: "play reset play reset",
      }
    })
  })
}

export default staggerAnimation;