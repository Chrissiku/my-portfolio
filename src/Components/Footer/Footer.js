import { contactInfo } from "../Contact/contactInfo";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social">
          {contactInfo.map((contact) => (
            <a target="_blanc" key={contact.id} href={contact.value}>
              {contact.icon}
            </a>
          ))}
        </div>
        <div className="line"></div>
        <span>2022 &copy; All Right reserved | Chris Siku</span>
      </div>
    </>
  );
};

export default Footer;
