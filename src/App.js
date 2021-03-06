import './index.css'
import MeasureComponent from './components/Measure';
import InteractiveComponent from './components/Interactive';
import React from 'react';

function App() {
  return (
    <div className='gameWrapper'>
      <MeasureComponent />
      <InteractiveComponent />
    </div>
  );
}

export default App;
