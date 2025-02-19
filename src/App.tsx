import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BinaryDigitTextInput,
  Container,
  DecimalTextOutput,
  Digit8Container,
  Divider,
  Label,
  ThemeToggleButton,
  darkTheme,
  lightTheme
} from './styles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [decimalNumber, setDecimalNumber] = useState(0)

  const inputRefs = useRef<HTMLInputElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (inputRefs.current[currentIndex]) {
      inputRefs.current[currentIndex].focus()
    }
  }, [currentIndex])
  const handleFocus = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Label>Binary</Label>
        <Digit8Container>
          {Array(8).fill(0).map((_, index) => (
            <BinaryDigitTextInput
              defaultValue={"0"}
              key={index}
              ref={(element) => {
                if (element) {
                  inputRefs.current[index] = element
                }
              }}
              onFocus={() => handleFocus(index)}
              onKeyDown={(e) => {
                e.preventDefault()
                if (e.key === "0") {
                  setCurrentIndex((prev) => Math.min(prev + 1, 7))
                  if (inputRefs.current[index].value === "1") {
                    setDecimalNumber(prev => prev - Math.pow(2, 7 - index))
                  }
                  inputRefs.current[index].value = "0"
                } else if (e.key === "1") {
                  setCurrentIndex((prev) => Math.min(prev + 1, 7))
                  if (inputRefs.current[index].value === "0") {
                    setDecimalNumber(prev => prev + Math.pow(2, 7 - index))
                  }
                  inputRefs.current[index].value = "1"
                } else if (e.key === "Backspace") {
                  setCurrentIndex((prev) => Math.max(prev - 1, 0))
                  if (inputRefs.current[index].value === "1") {
                    setDecimalNumber(prev => prev - Math.pow(2, 7 - index))
                  }
                  inputRefs.current[index].value = "0"
                }
              }}
            />
          ))}
        </Digit8Container>

        <Divider />

        <Label>Decimal</Label>
        <DecimalTextOutput key={decimalNumber} value={decimalNumber} readOnly />
        <ThemeToggleButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "ライトモード" : "ダークモード"}
        </ThemeToggleButton>
      </Container>
    </ThemeProvider>
  )
}

export default App
