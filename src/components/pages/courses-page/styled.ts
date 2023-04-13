import styled from 'styled-components';
import { Indents } from '../../styled/indents/indents';

export const ContentWrapper = styled.div`
  ${Indents};

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;
