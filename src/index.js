import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/invoice';
import Error from './routes/Error';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Simple Routes */}
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes> */}


      {/* Nested Routes */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
            {/* Index Ro */}
            <Route index element={<main style={{ padding: "1rem" }}><p>Select an invoice</p></main>} />
          </Route>
          {/*No match Route */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<div><main><h1>404</h1><h3>Page does not exist.</h3></main></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
