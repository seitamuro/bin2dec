import styled from 'styled-components';

export const Digit8Container = styled.div`
  display: flex;
  justify-self: center;
`

export const BinaryDigitTextInput = styled.input`
  margin: 10px;
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
  text-align: center;
  font-size: 28px;
  margin: 10px;
  padding: 5px;
`
