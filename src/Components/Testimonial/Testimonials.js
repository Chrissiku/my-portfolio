import React from "react";
import TestimonyCards from "./TestimonialCards";
import ParticlesBg from "particles-bg";
import icon from "../Home/Icon";

const Testimonial = () => {
  let config = {
    num: [4, 4],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: "all",
    cross: "dead",
    random: 10,
  };
  return (
    <>
      <section className="testimonial">
        <h2 className="title">Testimonial</h2>
        <TestimonyCards />
        <ParticlesBg type="custom" config={config} bg={true} />
      </section>
    </>
  );
};

export default Testimonial;
