import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/api/apiSlice.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)


// import React from 'react';
// import { createRoot } from 'react-dom'; // Import createRoot from 'react-dom'
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { apiSlice } from './features/api/apiSlice.js';
// import App from './App.jsx';
// import './index.css';

// // Use createRoot to create a root instance
// const root = createRoot(document.getElementById('root'));

// // Render your app inside the root instance
// root.render(
//   <React.StrictMode>
//     <ApiProvider api={apiSlice}>
//       <App />
//     </ApiProvider>
//   </React.StrictMode>
// );
