import { v4 as contactId } from "uuid";
import Icon from "react-icons-kit";
import { twitter } from "react-icons-kit/fa/twitter";
import { angellist } from "react-icons-kit/fa/angellist";
import { github } from "react-icons-kit/fa/github";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { envelopeSquare } from "react-icons-kit/fa/envelopeSquare";

const contactInfo = [
  {
    id: contactId(),
    name: "Email Address",
    value: "mailto:chrissiku5@gmail.com",
    detail: "chrissiku5@gmail.com",
    icon: <Icon icon={envelopeSquare} size={20} />,
  },
  {
    id: contactId(),
    name: "Let's Chat",
    value:
      "https://wa.me/243992984499?text=Hello%20Christian%20Siku%2C%20how%20are%20you%20today%3F%0A",
    detail: "+243 992 984 499",
    icon: <Icon icon={whatsapp} size={20} />,
  },

  {
    id: contactId(),
    name: "Github",
    value: "https://github.com/Chrissiku/",
    detail: "Follow me on Github",
    icon: <Icon icon={github} size={20} />,
  },

  {
    id: contactId(),
    name: "Linkedin",
    value: "https://www.linkedin.com/in/christian-siku/",
    detail: "Let's connect on Linkedin",
    icon: <Icon icon={linkedin} size={20} />,
  },

  {
    id: contactId(),
    name: "Twitter",
    value: "https://twitter.com/christian_siku",
    detail: "follow me on twitter",
    icon: <Icon icon={twitter} size={20} />,
  },
];

const icon =
  "data:image/png;base64,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";

export { contactInfo, icon };