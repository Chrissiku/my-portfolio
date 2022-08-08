import React from 'react';
import Icon from 'react-icons-kit';
import { send } from 'react-icons-kit/fa/send';
import ParticlesBg from 'particles-bg';
import { icon, contactInfo } from './contactInfo';

const Contact = () => {
  const config = {
    num: [1, 1],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.2],
    body: icon,
    position: 'all',
    cross: 'dead',
    random: 2,
  };
  return (
    <>
      <section className="contact" id="contact">
        <ParticlesBg type="custom" config={config} bg />
        <h2 className="title">Contact</h2>
        <div className="contact-cards">
          <div className="contact-info">
            {contactInfo.map((contact) => (
              <a target="_blanc" href={contact.value} key={contact.id}>
                <div className="single-contact">
                  {contact.icon}
                  <div className="info">
                    <span>{contact.name}</span>
                    <span className="detail" href={contact.value}>
                      {contact.detail}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-form">
            <span>
              * All Information are required, Complete the form bellow and let&apos;s
              connect
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
              />
              <button type="submit" className="btn">
                Send
                {' '}
                <Icon icon={send} size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
