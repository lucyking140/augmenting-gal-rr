import React from "react";
import ReactDOM from "react-dom";
import App from "./app.tsx";
import { HelmetProvider } from 'react-helmet-async';

/**
* Root of react site 
*
* Imports Helmet provider for the page head
* And App which defines the content and navigation
*/

// Changed this in accordance to React 18 
// Render the site https://reactjs.org/docs/react-dom.html#render
// ReactDOM.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
   <React.StrictMode>
      <HelmetProvider>
       <App />
     </HelmetProvider>
   </React.StrictMode>
);
