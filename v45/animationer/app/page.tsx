"use client";

import { useEffect, useRef } from "react";

function easeInSine(x: number): number {
  return 1 - Math.cos((x * Math.PI) / 2);
}

function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

export default function Home() {
  const ballRef = useRef(null);

  useEffect(() => {
    const start = Date.now(); //100 // mål: 2100 => duration: 2000
    const duration = 2000;
    const maxDistance = 400;
    const maxOpacity = 1;

    if (ballRef.current) {
      //@ts-expect-error style
      ballRef.current.style.opacity = 0;
    }

    // Denna funktion gör ett animations-steg
    function animate() {
      const time = Date.now(); //101
      const progress = time - start; // 101 - 100 = 1 (1 steg i animationen)

      // hur stor del av tiden har gått (1 = tiden är slut 0.5 halva animationen är gjord)
      const t = progress / duration; // 1/2000 = Hur lång del av animationen är gjord

      const easing = easeOutBounce(t);

      const currentDistance = maxDistance * easing;

      const currentOpacity = maxOpacity * easing;

      if (ballRef.current) {
        //@ts-expect-error style
        ballRef.current.style.transform = `translateX(${currentDistance}px)`;
        //@ts-expect-error style
        ballRef.current.style.opacity = currentOpacity;
      }

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <div ref={ballRef} className="w-10 h-10 rounded-full bg-amber-400"></div>
  );
}
