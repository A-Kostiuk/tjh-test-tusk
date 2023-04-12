import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({theme}) => theme.colors.text};
  
  &:hover {
    opacity: .8;
  }
  
  &:active {
    opacity: 1;
  }
`
