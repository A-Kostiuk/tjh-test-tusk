import * as React from 'react';
import { useCustomSelector } from '../../../hooks/store';
import { CourseCard } from '../../ui/course-card/course-card';
import { List } from './styled';


export const ListOfCourses = () => {
  const {sortCourses} = useCustomSelector((state => state.courses));

  return (
    <section>
      <h2>List of courses</h2>
      <List>
        {sortCourses.map((course) => <CourseCard key={course.id} {...course} />)}
      </List>
    </section>
  );
};
