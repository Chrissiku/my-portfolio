import Icon from "react-icons-kit";
import { thLarge } from "react-icons-kit/fa/thLarge";
import ParticlesBg from "particles-bg";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <ParticlesBg num={20} type="cobweb" bg={true} color="#0ab4e7"/>
        <div className="social">
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <a href="mailto:chrissik5@gmail.com">chrissik5@gmail.com</a>
        </div>
        <span>&copy;All Right reserved | Chris Siku</span>
      </section>
    </>
  );
};

export default Footer;
