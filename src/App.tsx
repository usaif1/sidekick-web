import React from "react";
import { Routes, Route } from "react-router";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Offerings from "./pages/Offerings";
import InstitutionLogin from "./pages/InstitutionLogin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // optional 404 page

const App: React.FC = () => {
  return (
    <Routes>
      {/* Routes using MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<InstitutionLogin />} />
      </Route>


      {/* Optional 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
