import Icon from "react-icons-kit";
import { thLarge } from "react-icons-kit/fa/thLarge";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="social">
          <Icon icon={thLarge} />
          <Icon icon={thLarge} />
          <Icon icon={thLarge} />
          <Icon icon={thLarge} />
          <Icon icon={thLarge} />
          <Icon icon={thLarge} />
          <a href="mailto:chrissik5@gmail.com">chrissik5@gmail.com</a>
        </div>
        <span>&copy;All Right reserved | Chris Siku</span>
      </section>
    </>
  );
};

export default Footer;
