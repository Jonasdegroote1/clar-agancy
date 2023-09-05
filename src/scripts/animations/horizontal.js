import {
  gsap
} from 'gsap';
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const colorElement = ($el, color, $section, backgroundColor, $title) => {
  gsap.to($el, {
    color: color,
  })
  gsap.to($section, {
    backgroundColor: backgroundColor,
  })
  gsap.to($title, {
    color: color,
    backgroundColor: backgroundColor,
  });
}


const horizontalScroll = () => {
  const $triggers = document.querySelectorAll("[data-animation='horizontal-scroll']");

  const $section = document.querySelector("[data-animation='pin-sidebar']");

  const $title = document.querySelector("[data-animation='scroll-pin']");

  $triggers.forEach($trigger => {
    const $horizontalScroll = $trigger.querySelector("[data-child='horizontal-scroll']");
    const $innerElements = $horizontalScroll.querySelectorAll("[data-child='scroll-child']");

    const scrollTween = gsap.to($horizontalScroll, {
      x: (window.innerWidth - $horizontalScroll.scrollWidth) - 1200,
      scrollTrigger: {
        trigger: $trigger,
        start: 'top top',
        end: 'bottom top',
        pin: $trigger,
        pinSpacing: true,
        scrub: true,
        onLeaveBack: (e) => {
          if (e.direction === -1) {
            return colorElement($innerElements, '#082a9b', $section, '#fff', $title)
          }
        }
      }
    });

    $innerElements.forEach($innerElement => {
      const color = $innerElement.dataset.color ? $innerElement.dataset.color : 'blue';

      const backgroundColor = $innerElement.dataset.background ? $innerElement.dataset.background : '#FFFFFF';

      ScrollTrigger.create({
        trigger: $innerElement,
        containerAnimation: scrollTween,
        start: "start 50%",
        end: "end 20%",
        onEnter: () => colorElement($innerElements, color, $section, backgroundColor, $title),
        onEnterBack: () => colorElement($innerElements, color, $section, backgroundColor, $title),
      });

    });
  });
}

export default horizontalScroll;