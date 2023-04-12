import styled from 'styled-components';

export const ListItem = styled.li`
  line-height: 0;
`;

export const Link = styled.a`
  svg path {
    fill: ${({theme}) => theme.colors.social}
  }

  :hover {
    opacity: .8;
  }

  :active {
    opacity: 1;
  }
`;
