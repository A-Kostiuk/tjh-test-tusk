import styled from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  min-height: 300px;
`;

export const CategoryWrapper = styled.div`
  order: -1;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;

  p {
    margin: 0;
  }

  img {
    width: 20px;
    height: 20px;
  }

  :after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    right: -10px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
  }
`;

export const Title = styled.h3`
  margin: 0;
  
  a {
    color: inherit;
  }
`;

export const Description = styled.p`
  margin: 0 0 10px;
  flex-grow: 1;
`;

export const Level = styled.p`
  margin: 0;
  position: relative;

  :before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
  }
`;
