import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const Label = styled.span`
  margin-right: 1rem;
  width: 80px;
  text-align: right;
  font-size: 18px;
`

export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 18px;
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
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  outline: none;
`
