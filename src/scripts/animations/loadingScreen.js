import {
  gsap
} from 'gsap';

const loadingScreen = (callback) => {
  const $welcomeContainer = document.getElementById('welcome');
  const $word = $welcomeContainer.querySelector('span');

  const timeline = gsap.timeline({
    onComplete: () => {
      callback();
    }
  });

  timeline
    .from($word, {
      y: 50,
      opacity: 0,
    })
    .to($word, {
      y: 0,
      opacity: 1,
    }).to($word, {
      y: -50,
      opacity: 0,
    })
    .to($welcomeContainer, {
      x: "100%",
      ease: "power2.inOut",
    })
}

export default loadingScreen;