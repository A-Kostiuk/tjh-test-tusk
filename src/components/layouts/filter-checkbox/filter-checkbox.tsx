import * as React from 'react';
import { Fieldset, Legend, List, ListItem } from './styled';
import { useCustomDispatch } from '../../../hooks/store';
import { updateSortCourses } from '../../../store/courses-slice';

interface IType {
  name: string;
  value: string;
}

type Props = {
  title: string;
  types: IType[];
  setFunc: any;
};

export const FilterCheckbox = ({title, types, setFunc}: Props) => {
  const dispatch = useCustomDispatch();
  const checkboxOnChangeHandler = (e: any) => {
    dispatch(setFunc(e.target.value));
    dispatch(updateSortCourses());
  };

  return (<Fieldset>
      <Legend>{title}:</Legend>
      <List>
        {types.map((type) => <ListItem key={type.value}>
            <input type="checkbox" id={type.value} name={type.name} value={type.value}
                   onChange={checkboxOnChangeHandler}
            />
            <label htmlFor={type.value}>{type.name}</label>
          </ListItem>,
        )}
      </List>
    </Fieldset>
  );
};
