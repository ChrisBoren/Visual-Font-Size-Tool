import logo from './logo.svg';
import { useState, useEffect } from 'react';
// import './App.css';

function App() {

  const [baseFontSize, setBaseFontSize] = useState(16);


  useEffect(() => {
    document.documentElement.style.setProperty('--base-font', `${baseFontSize}px`);
  }, [baseFontSize])

  const increaseBase = () => {
    // if (baseFontSize > 1) {
    setBaseFontSize(baseFontSize + 1);
    // }
  }
  const decreaseBase = () => {
    if (baseFontSize > 1) {
      setBaseFontSize(baseFontSize - 1);
    }
  }

  const resetBase = () => {
    setBaseFontSize(16);
  }

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
        </div>
        <div className="wrapper">
          <div className="buttons">
            <p>Current base size is: {baseFontSize}</p>
            <button onClick={increaseBase}>Increase</button>
            <button onClick={decreaseBase}>Decrease</button>
            <button onClick={resetBase}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
