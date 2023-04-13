import * as React from 'react';
import { ContentWrapper } from './styled';
import { CoursesFilter } from '../../blocks/courses-filter/courses-filter';
import { ListOfCourses } from '../../blocks/list-of-courses/list-of-courses';

export const CoursesPage = () => {
  return (
    <>
      <h1 hidden={true}>Courses</h1>
      <ContentWrapper>
        <CoursesFilter />
        <ListOfCourses />
      </ContentWrapper>
    </>
  );
};
