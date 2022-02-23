import React from 'react';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import FetchingData from './Components/FetchingData';

const App = () => {
  return (
    <div>
      <CounterOne />
      <CounterTwo />
      <FetchingData />
    </div>
  );
};

export default App;