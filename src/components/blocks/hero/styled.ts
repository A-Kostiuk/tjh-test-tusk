import styled from 'styled-components';
import BlockBg from '../../../assets/hero-bg.jpg';
import { Indents } from '../../styled/indents/indents';

export const Section = styled.section`
  padding: 60px 0;
  min-height: 500px;
  background-image: url(${BlockBg});
  background-size: cover;
  background-color: ${({theme}) => theme.colors.imgBack};
  background-blend-mode: soft-light;
  background-position: 50%;
  color: ${({theme}) => theme.colors.baseWhite};
  text-align: center;
`;

export const Container = styled.div`
  ${Indents}
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 1.5;
  font-weight: 700;
  margin: 0 0 20px;
`;

export const Subtitle = styled.p`
  font-size: 32px;
  margin: 0 0 60px;
`;

export const StartBtn = styled.button`
  border: none;
  padding: 10px 40px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.text};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};

  :hover {
    font-weight: 700;
    transform: scale(1.2);
    transition: 300ms;
  }
`;
