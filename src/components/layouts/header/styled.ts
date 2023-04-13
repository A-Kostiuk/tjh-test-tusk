import styled from 'styled-components';
import { Indents } from '../../styled/indents/indents';

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  min-height: ${({theme}) => theme.headerHeight};
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  ${Indents}
`;

export const LogoText = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
`;
