import gsap from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const titleStagger = () => {

  const $staggerItems = document.querySelectorAll("[data-animation='title-stagger']");


  $staggerItems.forEach($staggerItem => {
    const $stagger = $staggerItem.querySelectorAll('[data-child="title-stagger"]');


    gsap.from($stagger, {
      duration: 2,
      opacity: 0,
      stagger: .5,
      y: 100,
      scrollTrigger: {
        start: "top 60%",
        end: "bottom top",
        trigger: $staggerItem,
        toggleActions: "play reset play reset",
      }
    })
  })
}

export default titleStagger;