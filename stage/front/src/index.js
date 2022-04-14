import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '@styles/global.style'; 

const application = (
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  application,
  document.getElementById('root')
);