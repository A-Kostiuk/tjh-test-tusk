interface Font {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

interface Colors {
  baseBlack: string;
  baseWhite: string;
  primary: string;
  secondary: string;
  text: string;
  social: string;
  imgBack: string;
}

interface Viewports {
  mobileWidth: string;
  tabletWidth: string;
  laptopWidth: string;
  desktopWidth: string;
}

interface PageIndents {
  mobilePadding: string;
  tabletPadding: string;
  laptopPadding: string;
  desktopPadding: string;
}

export interface ITheme {
  colors: Colors;
  viewports: Viewports;
  pageIndents: PageIndents;
  headerHeight: string;
  footerHeight: string;
  font: Font;
}
