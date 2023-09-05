import gsap from "gsap";

const $box = document.getElementById('box');



const mouseMove = () => {

  gsap.set($box, {
    yPercent: -50,
    xPercent: -50,
  })

  const xTo = gsap.quickTo($box, 'x', {
    duration: .5
  })
  const yTo = gsap.quickTo($box, 'y', {
    duration: .5
  })

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  })
}

export default mouseMove;