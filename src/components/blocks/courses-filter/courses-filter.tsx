import * as React from 'react';
import { FilterCheckbox } from '../../layouts/filter-checkbox/filter-checkbox';
import { Form, SearchWrapper } from './styled';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { ChangeEvent } from 'react';
import { setSearchValueTitle, setLevel, setCategory, updateSortCourses } from '../../../store/courses-slice';

const categories = [
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'Python',
    value: 'python',
  },
];
const levels = [
  {
    name: 'Beginner',
    value: 'beginner',
  },
  {
    name: 'Intermediate',
    value: 'intermediate',
  },
  {
    name: 'Advanced',
    value: 'advanced',
  },
];

export const CoursesFilter = () => {
  const dispatch = useCustomDispatch();
  const {searchValueTitle} = useCustomSelector((state) => state.courses);

  const searchOnInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValueTitle(e.target.value));
    dispatch(updateSortCourses());
  };

  return (
    <section>
      <h2 hidden={true}>Courses filter</h2>
      <Form>
        <SearchWrapper>
          <label htmlFor={'search'}>Search:</label>
          <input type={'text'} id={'search'} placeholder={'Find by name'}
                 value={searchValueTitle}
                 onInput={searchOnInputHandler} />
        </SearchWrapper>
        <FilterCheckbox title={'Categories'} types={categories} setFunc={setCategory} />
        <FilterCheckbox title={'Levels'} types={levels} setFunc={setLevel} />
      </Form>
    </section>
  );
};
