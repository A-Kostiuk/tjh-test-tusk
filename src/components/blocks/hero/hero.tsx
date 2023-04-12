import * as React from 'react';
import { Container, Section, StartBtn, Subtitle, Title } from './styled';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  const onStartBtnClickHandler = () => {
    navigate('/courses');
  };

  return (
    <Section>
      <Container>
        <Title>
          IT Courses
        </Title>
        <Subtitle>Online and workplace learning with RQF, Endorsed and Certified qualifications</Subtitle>
        <StartBtn onClick={onStartBtnClickHandler}>Start NOW</StartBtn>
      </Container>
    </Section>
  );
};
