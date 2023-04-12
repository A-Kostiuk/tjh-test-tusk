import { ITheme } from '../interfaces/theme';

export const defaultTheme: ITheme = {
  colors: {
    baseBlack: '#000000',
    baseWhite: '#ffffff',
    primary: '#f8f8f8',
    secondary: '#ffffff',
    text: '#000000',
    social: 'rgb(0 62 131)',
    imgBack: 'rgba(9,70,120,.6)',
  },
  viewports: {
    mobileWidth: '360px',
    tabletWidth: '768px',
    laptopWidth: '1024px',
    desktopWidth: '1200px',
  },
  pageIndents: {
    mobilePadding: '20px',
    tabletPadding: '30px',
    laptopPadding: '60px',
    desktopPadding: '5px',
  },
  headerHeight: '65px',
  footerHeight: '65px',
  font: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '1.2',
    fontWeight: '400',
  },
};
