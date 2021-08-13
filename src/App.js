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
          <h1>H1 Header Text - 3rem - {baseFontSize * 3}px</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
          <h2>H2 Header Text - 2.5rem - {baseFontSize * 2.5}px</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
          <h3>H3 Header Text - 2rem - {baseFontSize * 2}px</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
          <h4>H4 Header Text - 1.5rem - {baseFontSize * 1.5}px</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
          <h5>H5 Header Text - 1rem - {baseFontSize * 1}px</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum expedita cumque laboriosam voluptatum? Placeat voluptas officiis molestias, repellendus, consectetur hic dolor nemo explicabo non iure, officia cupiditate vero reiciendis.</p>
        </div>
          <div className="toolbox">
            <p>Current base size is: <strong>{baseFontSize}px</strong></p>
            <button onClick={increaseBase}>Increase</button>
            <button onClick={decreaseBase}>Decrease</button>
            <button onClick={resetBase}>Reset</button>
          </div>
      </div>
    </>
  );
}

export default App;
