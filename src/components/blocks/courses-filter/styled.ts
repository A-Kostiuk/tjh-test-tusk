import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 18px;
    font-weight: 700;
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
  }
`;
