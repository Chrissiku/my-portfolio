import React from "react";
import Icon from "react-icons-kit";
import { thLarge } from "react-icons-kit/fa/thLarge";
import icon from "../Home/Icon";
import ParticlesBg from "particles-bg";

const Contact = () => {
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
      <section className="contact">
        <ParticlesBg type="custom" config={config} bg={true} />
        <h2 className="title">Contact</h2>
        <div className="contact-cards">
          <div className="contact-info">
            <div className="single-contact">
              <Icon icon={thLarge} size={20} />
              <div className="info">
                <span>Phone</span>
                <a href="tel:+243992984499">+243992984499</a>
              </div>
            </div>

            <div className="single-contact">
              <Icon icon={thLarge} size={20} />
              <div className="info">
                <span>Phone</span>
                <a href="tel:+243992984499">+243992984499</a>
              </div>
            </div>

            <div className="single-contact">
              <Icon icon={thLarge} size={20} />
              <div className="info">
                <span>Phone</span>
                <a href="tel:+243992984499">+243992984499</a>
              </div>
            </div>

            <div className="single-contact">
              <Icon icon={thLarge} size={20} />
              <div className="info">
                <span>Phone</span>
                <a href="tel:+243992984499">+243992984499</a>
              </div>
            </div>
            <div className="single-contact">
              <Icon icon={thLarge} size={20} />
              <div className="info">
                <span>Phone</span>
                <a href="mailto:chrissiku5@gmail.com">chrissiku5@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span>
              * All Information are required, so complete the form bellow to get
              in touch
            </span>
            <form>
              <div className="credentials">
                <input
                  type="text"
                  placeholder="Full name"
                  className="field"
                  required
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="field"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="field static"
                required
              />
              <textarea
                placeholder="Message"
                className="field static"
                rows={5}
                required
              ></textarea>
              <button type="submit" className="btn">
                Send <Icon icon={thLarge} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
