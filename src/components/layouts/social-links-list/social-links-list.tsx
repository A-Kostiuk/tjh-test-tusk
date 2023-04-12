import * as React from 'react';
import { LinksList } from './styled';
import { SocialLinkItem } from '../../ui/social-link-item/social-link-item';

interface ISocial {
  title: string;
  path: string;
  iconId: string;
}

type Props = {
  socialsList: ISocial[]
};

export const SocialLinksList = ({socialsList}: Props) => {
  return (
    <LinksList>
      {socialsList.map((socialItem) => <SocialLinkItem key={socialItem.path} {...socialItem} />)}
    </LinksList>
  );
};
