import { css } from 'styled-components';

const Indents = css`
  padding: 0 ${({theme}) => theme.pageIndents.mobilePadding};
  width: 100%;
  max-width: ${({theme}) => theme.viewports.desktopWidth};
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.tabletPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.laptopPadding};
  }

  @media (min-width: ${({theme}) => theme.viewports.desktopWidth}) {
    padding: 0 ${({theme}) => theme.pageIndents.desktopPadding};
  }
`;

export { Indents };
