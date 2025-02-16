import { useState } from 'react';
import { z } from 'zod';
import './App.css';
import { BinaryTextInput, DecimalTextOutput, Label } from './styles';

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

  return (
    <>
      <div>
        <Label>Binary:</Label>
        <BinaryTextInput type="text" value={binary} onChange={(e) => {
          const newValue = e.target.value
          if (isValidBinary(newValue)) {
            setBinary(newValue)
          }
        }} />
      </div>
      <div>
        <Label>Decimal:</Label>
        <DecimalTextOutput value={binaryToDecimal(binary)} disabled />
      </div>
    </>
  )
}

export default App
