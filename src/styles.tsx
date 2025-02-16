import styled from 'styled-components';

export const Label = styled.span`
  margin: 10px;
  font-size: 18px;
`

export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  outline: none;

  &:focus {
    border: 1px solid orange;
  }
`

export const DecimalTextOutput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  outline: none;
`