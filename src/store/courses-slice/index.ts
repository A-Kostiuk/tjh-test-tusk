import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourse } from '../../interfaces/course';
import { Courses } from '../../mocks/courses';

interface ICourses {
  allCourses: ICourse[];
  sortCourses: ICourse[];
  level: string[];
  category: string[];
  searchValueTitle: string;
}

const initialState: ICourses = {
  allCourses: Courses,
  sortCourses: Courses,
  level: [],
  category: [],
  searchValueTitle: '',
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchValueTitle: (state, action: PayloadAction<string>) => {
      state.searchValueTitle = action.payload;
      state.sortCourses = state.allCourses.filter((course) => course.title.toLocaleLowerCase().includes(state.searchValueTitle));
    },
    setLevel: (state, action: PayloadAction<string>) => {
      const isChecked = state.level.includes(action.payload);
      if (isChecked) {
        state.level = state.level.filter((level) => level !== action.payload);
      } else {
        state.level.push(action.payload);
      }
    },
    setCategory: (state, action: PayloadAction<string>) => {
      const isChecked = state.category.includes(action.payload);
      if (isChecked) {
        state.category = state.category.filter((category) => category !== action.payload);
      } else {
        state.category.push(action.payload);
      }
    },
    updateSortCourses: (state) => {
      const {allCourses, category, level, searchValueTitle} = state;

      if (!searchValueTitle && !category.length && !level.length) {
        state.sortCourses = allCourses;
      }
      state.sortCourses = allCourses.filter((course) => {
        const includesCategory = !category.length ? true : category.includes(course.category.toLowerCase());
        const includesLevel = !level.length ? true : level.includes(course.level.toLocaleLowerCase());
        const includesSearch = !searchValueTitle ? true : course.title.toLowerCase().includes(searchValueTitle.toLowerCase());
        return includesCategory && includesLevel && includesSearch;
      });
    },
  },
});

export const {setSearchValueTitle, setLevel, setCategory, updateSortCourses} = coursesSlice.actions;

export default coursesSlice;
