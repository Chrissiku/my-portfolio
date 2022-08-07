import { v4 as Id } from "uuid";
import Icon from "react-icons-kit";
// import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { angellist } from "react-icons-kit/fa/angellist";
import { github } from "react-icons-kit/fa/github";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { globe } from "react-icons-kit/fa/globe";

const TestimonialData = [
  {
    id: Id(),
    picture:
      "https://pbs.twimg.com/profile_images/1554508793224073217/5PnA54dx_400x400.jpg",
    name: "Sanja Mandic",
    recomandation:
      "Christian is a fantastic software engineer, it was my pleasure to work with him, as he was doing everything on time and he is detail-oriented. We pair-programmed together in Microverse program and during that time his work ethic blew me away. Christian reads clearly the whole needed documentation and his attention to detail is evident in all of the projects I've worked with him on, he had really great ideas on how to improve UI. He's also comfortable to work with, as he's always positive, and now I see him as my friend. I can't recommend him enough!",
    social: [
      {
        id: Id(),
        mediaLink: "https://twitter.com/SanjaMandic42",
        icon: <Icon icon={twitter} size={22} />,
        class: "twitter",
      },
      {
        id: Id(),
        mediaLink: "https://www.linkedin.com/in/sanja-mandic/",
        icon: <Icon icon={linkedin} size={22} />,
        class: "linkedin",
      },
      {
        id: Id(),
        mediaLink: "https://github.com/Sanja969",
        icon: <Icon icon={github} size={22} />,
        class: "github",
      },
      {
        id: Id(),
        mediaLink: "https://sanja42.pythonanywhere.com/",
        icon: <Icon icon={globe} size={22} />,
        class: "portfolio",
      },
    ],
  },

  {
    id: Id(),
    picture:
      "https://pbs.twimg.com/profile_images/1550549731088162822/1K8Uq2wQ_400x400.jpg",
    name: "Favour Amarachi Ezeugwa",
    recomandation:
      "Chris has been an outstanding software developer. Having worked with him on some projects, I must say he is a development guru. His work is always top-notch, and he always goes the extra mile to ensure the project requirements are met. He is a highly-skilled, experienced, and helpful professional with a positive attitude. Working with Chris has been a great experience for me as I learned many hard and soft skills from him. Thanks, Chris.",
    social: [
      {
        id: Id(),
        mediaLink: "https://twitter.com/Favour_ezeugwa",
        icon: <Icon icon={twitter} size={22} />,
        class: "twitter",
      },
      {
        id: Id(),
        mediaLink: "https://www.linkedin.com/in/favour-amarachi-ezeugwa/",
        icon: <Icon icon={linkedin} size={22} />,
        class: "linkedin",
      },
      {
        id: Id(),
        mediaLink: "https://github.com/Favourezeugwa",
        icon: <Icon icon={github} size={22} />,
        class: "github",
      },
      {
        id: Id(),
        mediaLink: "https://angel.co/u/favour-amarachi-ezeugwa",
        icon: <Icon icon={angellist} size={22} />,
        class: "angellist",
      },
    ],
  },

  {
    id: Id(),
    picture: "https://avatars.githubusercontent.com/u/100236377?v=4",
    name: "Silvia Tofana",
    recomandation:
      "He has good experience in the workings of how to handle works regarding servers, databases, and also system engineering. He also has good team management abilities and is a really dedicated worker. So I would really like to recommend him for the post of full stack developer of your company. I can assure you that, he would be a great option for helping your company in its future growth and success. Thank you for taking the time to read this recommendation from your busy schedule.",
    social: [
      {
        id: Id(),
        mediaLink: "https://twitter.com/silviatofana",
        icon: <Icon icon={twitter} size={22} />,
        class: "twitter",
      },
      {
        id: Id(),
        mediaLink: "https://www.linkedin.com/in/silviatofana/",
        icon: <Icon icon={linkedin} size={22} />,
        class: "linkedin",
      },
      {
        id: Id(),
        mediaLink: "https://github.com/silviatofana",
        icon: <Icon icon={github} size={22} />,
        class: "github",
      },
    ],
  },

  {
    id: Id(),
    picture:
      "https://pbs.twimg.com/profile_images/1508840180320550919/09Kc0uHf_400x400.jpg",
    name: "Grace Muthui",
    recomandation:
      "Working with Christian is always fun and also an amazing learning experience as he portrays a lot of dedication and also extensive mastery when it comes to software development. Emphasizing on his technical skills we get to learn a lot from each other and I admire his problem solving skills and his strategic way of thinking when it comes to a given task. Also his soft skills are top notch and I hope to work with him again. I recommend him 100% for he is really a good asset on anyone's team.",
    social: [
      {
        id: Id(),
        mediaLink: "https://twitter.com/Grayce_Muthui",
        icon: <Icon icon={twitter} size={22} />,
        class: "twitter",
      },
      {
        id: Id(),
        mediaLink: "https://www.linkedin.com/in/grayce-muthui/",
        icon: <Icon icon={linkedin} size={22} />,
        class: "linkedin",
      },
      {
        id: Id(),
        mediaLink: "https://github.com/Graycemuthui",
        icon: <Icon icon={github} size={22} />,
        class: "github",
      },
    ],
  },
];

export { TestimonialData };
