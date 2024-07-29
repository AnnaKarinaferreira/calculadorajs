import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState("");
  const [mi, setMi] = useState("");
  const [hf, setHf] = useState("");
  const [mf, setMf] = useState("");
  const [result, setResult] = useState('Resultado');

  function soma() {
    let resH = hi + hf;
    let resM = mi + mf;

    while (resM > 59) {
      resM -= 60;
      resH++;
    }

    setResult(`${resH}:${resM}`);
  }

  function subtrai() {
    let tempHi = hi;
    let tempHf = hf;
    let tempMi = mi;
    let tempMf = mf;
    let resH = 0;

    while (tempHi > 1) {
      tempMi += 60;
      tempHi--;
    }

    while (tempHf > 1) {
      tempMf += 60;
      tempHf--;
    }

    let resM = mi - mf;

    if (resM < 0) {
      resM *= -1;
    }

    while (resM > 59) {
      resH++;
      resM -= 60;
    }

    setResult(`${resH}:${resM}`);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Calculadora de Horas</h1>
      <input type="number"  value={hi} onChange={(e) => setHi(Number(e.target.value))} />:&nbsp;
      
      <input type="number"  value={hf} onChange={(e) => setHf(Number(e.target.value))} />:&nbsp;
      
      <button onClick={soma}>Somar</button>&nbsp;
      <button onClick={subtrai}>Subtrair</button>
      <p>{result}</p>
    </div>
  );
}

export default App