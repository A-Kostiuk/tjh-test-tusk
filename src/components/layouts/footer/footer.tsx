import * as React from 'react';
import { StyledFooter, Container } from './styled';
import { CopyrightNotice } from '../../ui/copyright-notice/copyright-notice';
import { SocialLinksList } from '../social-links-list/social-links-list';

const socialsList = [
  {
    title: 'Instagram',
    path: 'https://www.instagram.com/tjhelpers/?igshid=YmMyMTA2M2Y%3D',
    iconId: 'instagram',
  }, {
    title: 'Facebook',
    path: 'https://www.facebook.com/tjhelpers',
    iconId: 'facebook',
  }, {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/company/tjhelpers/mycompany/',
    iconId: 'linkedin',
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <CopyrightNotice />
        <SocialLinksList socialsList={socialsList} />
      </Container>
    </StyledFooter>
  );
};
