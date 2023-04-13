import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
