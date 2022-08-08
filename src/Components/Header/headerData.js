import React from 'react';
import { v4 as menuId } from 'uuid';
import Icon from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { info } from 'react-icons-kit/fa/info';
import { briefcase } from 'react-icons-kit/fa/briefcase';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';
import { volumeControlPhone } from 'react-icons-kit/fa/volumeControlPhone';
import { github } from 'react-icons-kit/fa/github';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { twitter } from 'react-icons-kit/fa/twitter';
import { angellist } from 'react-icons-kit/fa/angellist';

const ICON_SIZE = 25;

const linksArray = [
  {
    id: menuId(),
    menu: 'Home',
    path: '/',
    component: 'home',
    icon: <Icon icon={home} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    menu: 'About',
    path: '/',
    component: 'about',
    icon: <Icon icon={info} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    menu: 'Work',
    path: '/',
    component: 'work',
    icon: <Icon icon={briefcase} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    menu: 'testimonial',
    path: '/',
    component: 'testimonial',
    icon: <Icon icon={thumbsUp} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    menu: 'contact',
    path: '/',
    component: 'contact',
    icon: <Icon icon={volumeControlPhone} size={ICON_SIZE} />,
  },
];

const socialArray = [
  {
    id: menuId(),
    network: 'Github',
    link: 'https://github.com/chrissiku',
    icon: <Icon icon={github} size={ICON_SIZE} />,
  },
  {
    id: menuId(),
    network: 'Linkedin',
    link: 'https://www.linkedin.com/in/christian-siku/',
    icon: <Icon icon={linkedin} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    network: 'AngelList',
    link: 'https://angel.co/u/chris-siku',
    icon: <Icon icon={angellist} size={ICON_SIZE} />,
  },

  {
    id: menuId(),
    network: 'Twitter',
    link: 'https://twitter.com/christian_siku',
    icon: <Icon icon={twitter} size={ICON_SIZE} />,
  },
];

export { linksArray, socialArray };
