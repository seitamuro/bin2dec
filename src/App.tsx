import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BinaryDigitTextInput, DecimalTextOutput, Digit8Container, Label } from './styles';

function App() {
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
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

      <hr style={{ width: "100%", borderColor: "#333333", marginBottom: "10px" }} />

      <Label>Decimal</Label>
      <DecimalTextOutput value={decimalNumber} readOnly />
    </div>
  )
}

export default App
