import { useEffect, useRef, useState } from 'react';
import './App.css';
import { BinaryDigitTextInput, Digit8Container } from './styles';

function App() {
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
    </>
  )
}

export default App
