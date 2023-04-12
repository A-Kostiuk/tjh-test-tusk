import * as React from 'react';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { Link, ListItem } from './styled';

type Props = {
  title: string;
  path: string;
  iconId: string;
};

export const SocialLinkItem = ({title, path, iconId}: Props) => {
  return (
    <ListItem>
      <Link href={path} title={title}>
        <SharedSvgIcons width={30} height={30} id={iconId} />
      </Link>
    </ListItem>
  );
};
