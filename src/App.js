import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [unit, setUnit] = useState('KJ')
  const [result, setResult] = useState('')
  const [finalUnit, setFinalUnit] = useState('calories')

  const convert = () => {
    if (!input) return;

    if (unit === 'KJ') {
      const cals = input / 4.184 
      setResult(cals)
      setFinalUnit('calories')
    }
    else {
      const kj = input * 4.184
      setResult(kj)
      setFinalUnit('KJ')
    }
  }

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  }
  
  const updateValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1 id="App-Name"> Converter Central </h1>
      <section>
        <div id="kj-convert">
          <h2> 
            KJ
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-icon" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
            </svg>         
            CALS 
            </h2>
            <div className="input-group mb-3" id="input-container">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" onBlur = {convert} onChange = {updateValue} />
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{unit}</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" onClick={() => handleUnitChange('KJ')}> KJ </a></li>
                <li><a className="dropdown-item" onClick={() => handleUnitChange('calories')}> calories </a></li>
              </ul>
          </div>
          {result && <p> {result} {finalUnit} </p>}
        </div>
      </section>
    </div>
  );
}


export default App;
