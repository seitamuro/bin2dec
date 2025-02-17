import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(66, 153, 225, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0);
  }
`;

export const Digit8Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const BinaryDigitTextInput = styled.input`
  width: 60px;
  height: 60px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  caret-color: transparent;

  &:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
    animation: ${pulse} 0.5s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &:hover {
    border-color: #bee3f8;
  }
`;

export const DecimalTextOutput = styled.input`
  width: 180px;
  padding: 12px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: #f7fafc;
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.6s ease-out;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #4a5568;
  margin: 16px 0 8px;
  animation: ${fadeIn} 0.6s ease-out;
  
  &:first-of-type {
    margin-top: 0;
  }
`;
