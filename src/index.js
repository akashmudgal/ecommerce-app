import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user.context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);

reportWebVitals();
