import { v4 as Id } from 'uuid';
import Icon from 'react-icons-kit';
// import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from 'react-icons-kit/fa/twitter';
import { angellist } from 'react-icons-kit/fa/angellist';
import { github } from 'react-icons-kit/fa/github';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { globe } from 'react-icons-kit/fa/globe';

const TestimonialData = [
  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183712396-da5193a2-d986-4ea7-975f-c99ff0c9fa26.png',
    name: 'Debabrata Mandal',
    recomandation:
      'Christian is a highly talented and dedicated professional. He is technically robust, highly knowledgeable, detail-oriented, and has a strong work ethic. He has a growth mindset and is open-minded and friendly. He is an outstanding team player and has great soft skills. It was really a pleasure to work with him. I am sure that he would be a valuable asset to any company.',
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/bapidebabrata',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/erdebabratamandal/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/NayanKaran',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183704376-0552e165-500c-4c13-80ac-8d98a4b96988.jpg',
    name: 'Sanja Mandic',
    recomandation:
      "Christian is a fantastic software engineer, it was my pleasure to work with him, as he was doing everything on time and he is detail-oriented. We pair-programmed together in Microverse program and during that time his work ethic blew me away. Christian reads clearly the whole needed documentation and his attention to detail is evident in all of the projects I've worked with him on, he had really great ideas on how to improve UI. He's also comfortable to work with, as he's always positive, and now I see him as my friend. I can't recommend him enough!",
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/SanjaMandic42',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/sanja-mandic/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/Sanja969',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
      {
        id: Id(),
        mediaLink: 'https://sanja42.pythonanywhere.com/',
        icon: <Icon icon={globe} size={22} />,
        class: 'portfolio',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183712384-a995e74f-0763-42c0-8d2a-72b771d4c10c.jpg',
    name: 'Joseph (JoDrack) Buingo',
    recomandation:
      "Working and studying with Christian Siku was an enormous pleasure. I found him as someone with great experience and a profound understanding of complex problems. When you really get to connect with him, you'll find an incredible person with exceptional skills! I find his enthusiasm and dedication both inspiring and motivating. I have constantly felt Christian Siku was one of the most effective teammates I've ever had the opportunity of working and sharing with.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/Joseph60761952',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/jodrack/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/joseph07-drack',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },
  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183704228-b64b7bf0-e192-46bf-938f-4598b5f3ebc9.jpg',
    name: 'Favour Amarachi Ezeugwa',
    recomandation:
      'Chris has been an outstanding software developer. Having worked with him on some projects, I must say he is a development guru. His work is always top-notch, and he always goes the extra mile to ensure the project requirements are met. He is a highly-skilled, experienced, and helpful professional with a positive attitude. Working with Chris has been a great experience for me as I learned many hard and soft skills from him. Thanks, Chris.',
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/Favour_ezeugwa',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/favour-amarachi-ezeugwa/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/Favourezeugwa',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
      {
        id: Id(),
        mediaLink: 'https://angel.co/u/favour-amarachi-ezeugwa',
        icon: <Icon icon={angellist} size={22} />,
        class: 'angellist',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183712388-2a7610a1-933f-4e3c-8276-e639b37ad45b.jpg',
    name: 'Afolabi Akorede',
    recomandation:
      "'Clear and Concise' is the phrase that comes to mind when i think about Christian. intelligent and clever is part of his attributes, I can attest that he can describe a technical topic in a clear details in english. He is pleasant to work with and considerate, Christian would be an asset to any team.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/brainconnect0',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/brainconnect93/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/brainconnect93',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
      {
        id: Id(),
        mediaLink: 'https://brainconnect93.github.io/My-Portfolio/',
        icon: <Icon icon={globe} size={22} />,
        class: 'portfolio',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183704294-bf22d575-ec38-4494-b7f4-3c91b37aa75c.jpg',
    name: 'Silvia Tofana',
    recomandation:
      'He has good experience in the workings of how to handle works regarding servers, databases, and also system engineering. He also has good team management abilities and is a really dedicated worker. So I would really like to recommend him for the post of full stack developer of your company. I can assure you that, he would be a great option for helping your company in its future growth and success. Thank you for taking the time to read this recommendation from your busy schedule.',
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/silviatofana',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/silviatofana/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/silviatofana',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },
  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/189416603-5b794526-28ac-4dc7-887f-b592adf2072d.jpg',
    name: 'Ritobroto Mukherjee',
    recomandation:
      'Chirs is a very proactive personality in case of learning new things or trying out something new. He has a good sense while writing industry-standard code. He is a very fun to work with guy and helpful at times if needed. I would like to highly recommend him for any SDE role. I believe he can add good value to any tech team, be it remote or on-site. 🥇✔',
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/mukherjeerito',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/ritobroto-m3/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/RitobrotoMukherjee',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
      {
        id: Id(),
        mediaLink: 'https://ritobroto-mukherjee.blogspot.com/',
        icon: <Icon icon={globe} size={22} />,
        class: 'portfolio',
      },
    ],
  },

  {
    id: Id(),
    picture:
      'https://user-images.githubusercontent.com/101924220/183703261-51a3ea35-b7c2-4207-953c-9f5ded90eb60.jpg',
    name: 'Grace Muthui',
    recomandation:
      "Working with Christian is always fun and also an amazing learning experience as he portrays a lot of dedication and also extensive mastery when it comes to software development. Emphasizing on his technical skills we get to learn a lot from each other and I admire his problem solving skills and his strategic way of thinking when it comes to a given task. Also his soft skills are top notch and I hope to work with him again. I recommend him 100% for he is really a good asset on anyone's team.",
    social: [
      {
        id: Id(),
        mediaLink: 'https://twitter.com/Grayce_Muthui',
        icon: <Icon icon={twitter} size={22} />,
        class: 'twitter',
      },
      {
        id: Id(),
        mediaLink: 'https://www.linkedin.com/in/grayce-muthui/',
        icon: <Icon icon={linkedin} size={22} />,
        class: 'linkedin',
      },
      {
        id: Id(),
        mediaLink: 'https://github.com/Graycemuthui',
        icon: <Icon icon={github} size={22} />,
        class: 'github',
      },
    ],
  },
];

export default TestimonialData;
