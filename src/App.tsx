import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import './App.css';
import { BinaryDigitTextInput, BinaryTextInput, Container, DecimalTextOutput, Digit8Container, Label } from './styles';

const binarySchema = z.string().regex(/^([01]+)$/).max(8).or(z.literal(""))

const binaryToDecimal = (binary: string) => {
  let ans = 0
  let cnt = 0;
  for (const char of Array.from(binary).reverse()) {
    if (char === "1") {
      ans += Math.pow(2, cnt)
    }
    cnt += 1
  }

  return ans
}

function App() {
  const [binary, setBinary] = useState('0')
  const isValidBinary = (value: string) => {
    const result = binarySchema.safeParse(value)
    return result.success
  }

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
    <>
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
                inputRefs.current[index].value = "0"
                setCurrentIndex((prev) => Math.min(prev + 1, 7))
              } else if (e.key === "1") {
                inputRefs.current[index].value = "1"
                setCurrentIndex((prev) => Math.min(prev + 1, 7))
              } else if (e.key === "Backspace") {
                inputRefs.current[index].value = "0"
                setCurrentIndex((prev) => Math.max(prev - 1, 0))
              }
            }}
          />
        ))}
      </Digit8Container>

      <Container>
        <Label>Binary:</Label>
        <BinaryTextInput type="text" value={binary} onChange={(e) => {
          const newValue = e.target.value
          if (isValidBinary(newValue)) {
            setBinary(newValue)
          }
        }} />
      </Container>
      <Container>
        <Label>Decimal:</Label>
        <DecimalTextOutput value={binaryToDecimal(binary)} disabled />
      </Container>
    </>
  )
}

export default App
