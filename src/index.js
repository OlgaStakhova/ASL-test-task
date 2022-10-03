import 'normalize.css';
import './scss/main.scss';

import { gsap } from "gsap";
window.onload = function () {
  const no02 = document.querySelectorAll(".box");
  const wrapper = document.querySelector('.wrapper')

  gsap.set(wrapper, { xPercent: -50, yPercent: -50 })
  gsap.set(wrapper, { y: 25 })

  const boxWidth = 250;
  const totalWidth = boxWidth * 6;

  const dirFromLeft = "+=" + totalWidth

  const mod = gsap.utils.wrap(0, totalWidth);

  function marquee(which, time, direction) {
    gsap.set(which, {
      x: function (i) {
        return i * boxWidth;
      }
    });
    const action = gsap.timeline()
      .to(which, {
        x: direction,
        modifiers: {
          x: x => mod(parseFloat(x)) + "px"
        },
        duration: time, ease: 'none',
        repeat: -1,
      });
    return action
  }

  const master = gsap.timeline().add(marquee(no02, 20, dirFromLeft), 2);

}

