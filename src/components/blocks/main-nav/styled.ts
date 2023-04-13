import styled, { css } from 'styled-components';

interface INavState {
  isOpen: boolean;
}

export const NavList = styled.ul<INavState>`
  ${(props) => props.isOpen ? css`
    display: flex;
    position: absolute;
    background-color: ${props.theme.colors.primary};
    padding: 10px 60px 10px ${props.theme.pageIndents.mobilePadding};
    top: 0;
    left: 0;
    right: 0;
  ` : css`
    display: none;
  `}
  margin: 0;
  list-style: none;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
  }
`;

export const MainNavToggleBtn = styled.button<INavState>`
  position: relative;
  width: 23px;
  height: 22px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;

  ${(props) => props.isOpen ? css`
    :before, :after {
      content: "";
      position: absolute;
      left: 0;
      width: 23px;
      height: 3px;
      background-color: ${props.theme.colors.baseBlack};
    }
  ;

    :before {
      transform: rotate(-45deg);
    }

    :after {
      transform: rotate(45deg);
    }

  ` : css`
    :before {
      content: "";
      position: absolute;
      width: 23px;
      height: 4px;
      background-color: ${props.theme.colors.baseBlack};
      top: 0;
      left: 0;
      box-shadow: 0 9px 0 0 ${props.theme.colors.baseBlack}, 0 18px 0 0 ${props.theme.colors.baseBlack};
    }
  `};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: none;
  }
`;
