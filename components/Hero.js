// components/Hero.js
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-title", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title">We are Outpost</h1>
      <p>Creating thoughtful design solutions</p>
      <button>Learn More</button>
    </section>
  );
};

export default Hero;
