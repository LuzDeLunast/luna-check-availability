import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

if (import.meta.env.VITE_INIT_LOCKED) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
