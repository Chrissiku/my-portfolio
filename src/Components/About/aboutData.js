import { v4 as AboutId } from "uuid";
import Icon from "react-icons-kit";
import { gears } from "react-icons-kit/fa/gears";
import { code } from "react-icons-kit/fa/code";
import { database } from "react-icons-kit/fa/database";
const ICON_SIZE = 50;
const skill = [
  {
    id: AboutId(),
    icon: <Icon icon={gears} size={ICON_SIZE} />,
    skill:
      "Mentorship, Pair Programming, Agile methodology, Active Listening, Leadership, Communication, Time Management, Problem Solving.",
  },
  {
    id: AboutId(),
    icon: <Icon icon={code} size={ICON_SIZE} />,
    skill: "React.js, Redux, Javascript(ES6), HTML(JSX), CSS, Jest, etc",
  },
  {
    id: AboutId(),
    icon: <Icon icon={database} size={ICON_SIZE} />,
    skill: "Ruby,Ruby on Rails, Rspec, SQL, PHP, MySQL, PostgreSQL,etc.",
  },
];

export default skill;
