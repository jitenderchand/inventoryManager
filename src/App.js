import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routing/routes';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Routes />
        </StrictMode>
      </BrowserRouter>
    </>
  );
};

App.displayName = 'App';

export default App;
