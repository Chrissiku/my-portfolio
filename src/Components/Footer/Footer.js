import Icon from "react-icons-kit";
import { thLarge } from "react-icons-kit/fa/thLarge";
import ParticlesBg from "particles-bg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social">
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
          <Icon icon={thLarge} size={20} />
        </div>
        <div className="line"></div>
        <span>2022 &copy; All Right reserved | Chris Siku</span>
        <ParticlesBg num={20} type="cobweb" bg={true} color="#0ab4e7" />
      </div>
    </>
  );
};

export default Footer;
