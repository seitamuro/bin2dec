import { useState } from 'react';
import './App.css';

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
  const [binary, setBinary] = useState('')

  return (
    <>
      <input type="text" onChange={(e) => setBinary(e.target.value)} />
      <div>{binaryToDecimal(binary)}</div>
    </>
  )
}

export default App
