import React from "react";
import { v4 as menuId } from "uuid";
import Icon from "react-icons-kit";
import { home } from "react-icons-kit/fa/home";

const ICON_SIZE = 20;

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
    icon: <Icon icon={home} size={ICON_SIZE} />,
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
];
export default linksArray;
