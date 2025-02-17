import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  containerBg: '#ffffff',
  text: '#2d3748',
  labelText: '#4a5568',
  border: '#e2e8f0',
  inputBg: '#ffffff',
  outputBg: '#f7fafc',
  focusBorder: '#4299e1',
  focusShadow: 'rgba(66, 153, 225, 0.3)',
  hoverBorder: '#bee3f8',
  divider: 'linear-gradient(to right, #e2e8f0, #4299e1, #e2e8f0)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
};

export const darkTheme = {
  background: '#1a202c',
  containerBg: '#2d3748',
  text: '#e2e8f0',
  labelText: '#e2e8f0',
  border: '#4a5568',
  inputBg: '#2d3748',
  outputBg: '#2d3748',
  focusBorder: '#4299e1',
  focusShadow: 'rgba(66, 153, 225, 0.3)',
  hoverBorder: '#4299e1',
  divider: 'linear-gradient(to right, #4a5568, #4299e1, #4a5568)',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
};

export const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
  body {
    background-color: ${props => props.theme.background};
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }
`;

const highlight = keyframes`
  0% {
    background: ${props => props.theme.outputBg};
  }
  50% {
    background: rgba(66, 153, 225, 0.2);
  }
  100% {
    background: ${props => props.theme.outputBg};
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background: ${props => props.theme.containerBg};
  border-radius: 24px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 0.3s ease;
`;

export const Digit8Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
`;

export const BinaryDigitTextInput = styled.input`
  width: 60px;
  height: 60px;
  border: 2px solid ${props => props.theme.border};
  border-radius: 12px;
  background: ${props => props.theme.inputBg};
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.text};
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  caret-color: transparent;

  &:focus {
    border-color: ${props => props.theme.focusBorder};
    box-shadow: 0 0 0 3px ${props => props.theme.focusShadow};
    animation: ${pulse} 0.5s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &:hover {
    border-color: ${props => props.theme.hoverBorder};
  }
`;

export const DecimalTextOutput = styled.input`
  width: 180px;
  padding: 12px 20px;
  border: 2px solid ${props => props.theme.border};
  border-radius: 12px;
  background: ${props => props.theme.outputBg};
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.text};
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  animation: ${highlight} 0.6s ease-out;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.labelText};
  margin: 16px 0 8px;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background: ${props => props.theme.divider};
  margin: 32px 0;
`;

export const ThemeToggleButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.theme.containerBg};
  color: ${props => props.theme.text};
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 20px;

  &:hover {
    border-color: ${props => props.theme.focusBorder};
    box-shadow: 0 0 0 2px ${props => props.theme.focusShadow};
  }
`;
