import { contactInfo } from '../Contact/contactInfo';

const Footer = () => (
  <>
    <footer id="footer">
      <div className="social">
        {contactInfo.map((contact) => (
          <a target="_blanc" key={contact.id} href={contact.value}>
            {contact.icon}
          </a>
        ))}
      </div>
      <div className="line" />
      <span>2022 &copy; All Right reserved | Chris Siku</span>
    </footer>
  </>
);

export default Footer;
