import styled from 'styled-components';
import { Indents } from '../../styled/indents/indents';

export const StyledFooter = styled.footer`
  min-height: ${({theme}) => theme.footerHeight};
  padding: 15px 0;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${Indents};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }



`;
