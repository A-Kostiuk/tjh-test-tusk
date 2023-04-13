import * as React from 'react';
import { MainNavToggleBtn, NavList } from './styled';
import { MainNavItem } from '../../ui/main-nav-item/main-nav-item';
import { useState } from 'react';

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
  const [navState, setNavState] = useState<boolean>(false);

  const mainNavToggleBtnOnClickHandler = () => {
    setNavState(!navState);
  };

  return (
    <nav>
      <NavList isOpen={navState}>
        {navItems.map((navItem) => <MainNavItem key={navItem.title} {...navItem} />,
        )}
      </NavList>
      <MainNavToggleBtn isOpen={navState} aria-label={'Toggle navigation'} onClick={mainNavToggleBtnOnClickHandler} />
    </nav>
  );
};
