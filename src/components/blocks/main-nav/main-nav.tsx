import * as React from 'react';
import { NavList } from './styled';
import { MainNavItem } from '../../ui/main-nav-item/main-nav-item';

type INavItem = {
  title: string,
  path: string
};

const navItems: INavItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'About Us',
    path: '',
  },
  {
    title: 'Contact Us',
    path: '',
  },
];

export const MainNav = () => {
  return (
    <nav>
      <NavList>
        {navItems.map((navItem) => <MainNavItem key={navItem.title} {...navItem} />,
        )}
      </NavList>
    </nav>
  );
};
