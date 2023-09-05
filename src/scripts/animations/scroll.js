import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrollLogo = () => {
	const $sections = document.querySelectorAll('[data-animation="pin-sidebar"]');

	$sections.forEach(($section) => {
		$pinElement = $section.querySelector('[data-animation="scroll-pin"]');

		gsap.to($pinElement, {
			y: window.innerHeight - $pinElement.scrollHeight - 100,
			scrollTrigger: {
				trigger: $section,
				start: "top top",
				end: "bottom bottom",
				pin: $pinElement,
				scrub: true,
			},
		});
	});
};

export default scrollLogo;
