// Libraries
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Components
import Header from './Header';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <h1>SWE599 Client Application</h1>
      </BrowserRouter>
    </div>
  );
};

export default App;
