import * as React from 'react';
import { Container, LogoText, StyledHeader } from './styled';
import { MainNav } from '../../blocks/main-nav/main-nav';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoText>EducationSite</LogoText>
        <MainNav />
      </Container>
    </StyledHeader>
  );
};
