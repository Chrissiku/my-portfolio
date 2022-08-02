import React from "react";
import { v4 as menuId } from "uuid";
import Icon from "react-icons-kit";
import { home } from "react-icons-kit/fa/home";
import { user } from "react-icons-kit/fa/user";

const ICON_SIZE = 25;

const linksArray = [
  {
    id: menuId(),
    menu: "Home",
    path: "/",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    menu: "About",
    path: "/",
    icon: <Icon icon={user} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    menu: "Work",
    path: "/",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    menu: "contact",
    path: "/",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    menu: "testimonial",
    path: "/",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
];

const socialArray = [
  {
    id: menuId(),
    network: "Github",
    link: "https://github.com/chrissiku",
    icon: <Icon icon={user} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    network: "facebook",
    link: "www.github.com/chrissiku",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
  
  {
    id: menuId(),
    network: "Linkedin",
    link: "www.github.com/chrissiku",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
  
  {
    id: menuId(),
    network: "Twitter",
    link: "www.github.com/chrissiku",
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
];

export { linksArray, socialArray };
