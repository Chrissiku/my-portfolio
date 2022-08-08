import React from 'react';
import TestimonyCards from './TestimonialCards';

const Testimonial = () => (
  <>
    <section className="testimonial" id="testimonial">
      <h2 className="title">Testimonial</h2>
      <TestimonyCards />
      <a
        href="https://www.linkedin.com/recs/give/?senderId=christian-siku"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Publish your testimonial now
      </a>
    </section>
  </>
);

export default Testimonial;
