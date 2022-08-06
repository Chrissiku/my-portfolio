import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "react-icons-kit";
import { thLarge } from "react-icons-kit/fa/thLarge";
import Author from "../../Images/face_co.svg";
import Slider from "react-slick";

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
        <div className="slider">
          <div className="single-card">
            <div className="img">
              <img src={Author} alt="author" />
            </div>
            <h4>Author name</h4>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and.
            </p>
            <div className="social">
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="single-card">
            <div className="img">
              <img src={Author} alt="author" />
            </div>
            <h4>Author name</h4>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and.
            </p>
            <div className="social">
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="single-card">
            <div className="img">
              <img src={Author} alt="author" />
            </div>
            <h4>Author name</h4>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and.
            </p>
            <div className="social">
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="single-card">
            <div className="img">
              <img src={Author} alt="author" />
            </div>
            <h4>Author name</h4>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and.
            </p>
            <div className="social">
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="single-card">
            <div className="img">
              <img src={Author} alt="author" />
            </div>
            <h4>Author name</h4>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and.
            </p>
            <div className="social">
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
              <Icon icon={thLarge} size={22} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonyCards;
