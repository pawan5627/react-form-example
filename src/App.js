// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Frontend/views/Form';
import TableView from './Frontend/views/TableView'; // Import your TableView component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/table-view" element={<TableView />} />
        {/* Set the default route to the form */}
        <Route index element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
