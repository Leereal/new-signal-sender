import { AiFillDashboard, AiFillRobot } from 'react-icons/ai';
import { BiBarChartAlt, BiBarChartSquare } from 'react-icons/bi';
import { BsCurrencyExchange, BsFillFileBinaryFill } from 'react-icons/bs';
import { GiComputerFan, GiRobotAntennas } from 'react-icons/gi';
import { GrRobot } from 'react-icons/gr';
import { HiChartSquareBar, HiOutlineChartSquareBar } from 'react-icons/hi';
import { SiProbot } from 'react-icons/si';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        url: 'dashboard',
        icon: <AiFillDashboard />,
      },
    ],
  },

  {
    title: 'Signals',
    links: [
      {
        name: 'forex',
        url: 'forex',
        icon: <BsCurrencyExchange />,
      },
      {
        name: 'binary options',
        url: 'binary-options',
        icon: <BsFillFileBinaryFill />,
      },
      {
        name: 'synthetic indices',
        url: 'synthetic-indices',
        icon: <GiComputerFan />,
      },
    ],
  },
  {
    title: 'Robots / EAs',
    links: [
      {
        name: 'forex bots',
        url: 'forex-bots',
        icon: <AiFillRobot />,
      },
      {
        name: 'binary bots',
        url: 'binary-bots',
        icon: <SiProbot />,
      },
      {
        name: 'rise and fall bots',
        url: 'rise-and-fall-bots',
        icon: <GrRobot />,
      },
      {
        name: 'synthetic indices bots',
        url: 'synthetic-indices-bots',
        icon: <GiRobotAntennas />,
      },
    ],
  },
  {
    title: 'Trading History',
    links: [
      {
        name: 'forex history',
        url: 'forex-history',
        icon: <HiChartSquareBar />,
      },
      {
        name: 'binary options history',
        url: 'binary-options-history',
        icon: <BiBarChartSquare />,
      },

      {
        name: 'rise and fall history',
        url: 'rise-and-fall-history',
        icon: <HiOutlineChartSquareBar />,
      },
      {
        name: 'synthetic indices history',
        url: 'synthetic-indices-history',
        icon: <BiBarChartAlt />,
      },
    ],
  },
  {
    title: 'Admin Section',
    links: [
      {
        name: 'members',
        url: 'members',
        icon: <HiChartSquareBar />,
      },
      {
        name: 'users',
        url: 'users',
        icon: <BiBarChartSquare />,
      },

      {
        name: 'activities',
        url: 'activities',
        icon: <HiOutlineChartSquareBar />,
      },
      {
        name: 'orders',
        url: 'orders',
        icon: <BiBarChartAlt />,
      },
    ],
  },
];
