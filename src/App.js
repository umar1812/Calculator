import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("")
  const [answer, setAnswer] = useState("")

  const handleVal = (e) => {
    setValue(value + e.target.value)
    setAnswer("")
  }

  const calculate = () => {
    setAnswer(value)
    // eslint-disable-next-line 
    setValue(eval(value).toString())
  }

  const clear = () => {
    setAnswer("")
    setValue("")
  }

  const back = () => {
    setValue(value.slice(0, -1))
  }
  return (
    <div className='main'>
      <div className='cal'>
        <h2>Calculator</h2>
        <div className='screen'>
          <div id='ans'>{answer}</div>
          <div id='val'>{value}</div>
        </div>
        <div className='buttons'>
          <div>
            <button className="operation" onClick={clear}>AC </button>
            <button className="operation" onClick={back}>C</button>
            <button onClick={handleVal} value="%" className="operation">%</button>
            <button onClick={handleVal} value="/" className="operation">&divide;</button>
          </div>
          <div>
            <button onClick={handleVal} value="7" className="num">7</button>
            <button onClick={handleVal} value="8" className="num">8</button>
            <button onClick={handleVal} value="9" className="num">9</button>
            <button onClick={handleVal} value="*" className="operation">x</button>
          </div>
          <div>
            <button onClick={handleVal} value="4" className="num">4</button>
            <button onClick={handleVal} value="5" className="num">5</button>
            <button onClick={handleVal} value="6" className="num">6</button>
            <button onClick={handleVal} value="-" className="operation">-</button>
          </div>
          <div>
            <button onClick={handleVal} value="1" className="num">1</button>
            <button onClick={handleVal} value="2" className="num">2</button>
            <button onClick={handleVal} value="3" className="num">3</button>
            <button onClick={handleVal} value="+" className="operation">+</button>
          </div>
          <div>
            <button onClick={handleVal} value="," className="num">,</button>
            <button onClick={handleVal} value="0" className="num">0</button>
            <button onClick={handleVal} value="." className="num">.</button>
            <button onClick={calculate} className="operation" value="=">=</button>
          </div>
        </div>
      </div >
    </div>
  );
}

export default App;
