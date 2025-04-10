import React from "react";
import { Routes, Route } from "react-router";

// components
import IndexElement from "./IndexElement";
import Policy from "./Policy";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexElement />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
};

export default App;
