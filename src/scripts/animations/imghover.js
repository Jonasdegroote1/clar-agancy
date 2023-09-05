import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const imgHover = () => {

  const $imgHover = document.querySelectorAll('[data-animation="img-hover"]');
  console.log($imgHover);

  $imgHover.forEach($img => {
    const $images = $img.querySelectorAll('[data-child="hover-child"]');

    const images = $images.dataset.image;
    console.log(images);
  })



}

export default imgHover;