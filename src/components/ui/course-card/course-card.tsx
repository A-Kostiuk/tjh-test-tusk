import * as React from 'react';
import { ICourse } from '../../../interfaces/course';
import { CardItem, CategoryWrapper, Description, Level, Title } from './styled';

interface Props extends ICourse {
}

export const CourseCard = ({title, description, image, level, category}: Props) => {
  return (
    <CardItem>
      <Title>
        <a href={''} title={title}>{title}</a>
      </Title>
      <CategoryWrapper>
        <p>{category}</p>
        <img src={image} alt={category} width={20} height={20} />
      </CategoryWrapper>
      <Description>{description}</Description>
      <Level>Level: {level}</Level>
    </CardItem>
  );
};
