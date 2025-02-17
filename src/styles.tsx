import styled from 'styled-components';

export const Digit8Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 0);
  gap: 4rem;
  margin: 10px;
`

export const BinaryDigitTextInput = styled.input`
  margin: 0px;
  border-radius: 5px; 
  border: 1px solid #a3a3a3;
  outline: none;
  width: 50px;
  height: 50px;
  display: flex;
  text-align: center;
  font-size: 28px;

  &:focus {
    border: 1px solid orange;
  }
`

export const DecimalTextOutput = styled.input`
  width 100px;
  font-size: 18px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  outline: none;
`
