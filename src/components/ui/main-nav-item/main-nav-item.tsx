import * as React from 'react';
import { StyledLink } from './styled';

type Props = {
  title: string,
  path: string
};

export const MainNavItem = ({title, path}: Props) => {
  return (
    <li>
      <StyledLink to={path}>{title}</StyledLink>
    </li>
  );
};
