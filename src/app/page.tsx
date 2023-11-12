"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const PinAnimation = () => {
  const textRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.to(pinRef.current, {
      background: "#fff",
      color: "#000",
      scrollTrigger: {
        trigger: pinRef.current,
        scrub: true,
        pin: true,
        markers: true,
      },
    });
    gsap.to(textRef.current, {
      autoAlpha: 1,
      duration: 10,
      text: "section 2",
      scrollTrigger: {
        trigger: pinRef.current,
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="h-screen bg-blue w-full flex justify-center items-center">
        <p className="text-[100px]">section 1</p>
      </div>
      <div
        ref={pinRef}
        className="h-screen w-full bg-dark flex items-center justify-center"
      >
        <p ref={textRef} className="text-[100px] w-[380px]" />
      </div>
      <div className="h-screen bg-green w-full flex justify-center items-center">
        <p className="text-[100px]">section 3</p>
      </div>
    </>
  );
};

export default PinAnimation;
