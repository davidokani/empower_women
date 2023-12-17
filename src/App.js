import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Page/Main/Main";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;