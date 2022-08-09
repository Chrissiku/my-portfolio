/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import TestimonialData from './testimonialData';

const TestimonyCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="cards-list">
      <Slider {...settings}>
        {TestimonialData.map((testimonial) => (
          <div className="slider" key={testimonial.id}>
            <div className="single-card">
              <div className="img">
                <img src={testimonial.picture} alt={testimonial.name} />
              </div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.recomandation}</p>
              <div className="social">
                {testimonial.social.map((social) => (
                  <a
                    href={social.mediaLink}
                    target="_blanc"
                    noreferrer="true"
                    key={social.id}
                    className={social.class}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonyCards;
