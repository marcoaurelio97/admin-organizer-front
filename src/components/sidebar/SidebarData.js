import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Início',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Agenda',
    // path: '/schedule',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/schedule/list',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Contas',
    path: '/bills',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/bills/list',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Sair',
    path: '/logout',
    icon: <FaIcons.FaCartPlus />
  }
];