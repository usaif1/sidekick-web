import React from "react";
import { Routes, Route } from "react-router";

// Modal
import GlobalModal from "./components/GlobalModal";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Offerings from "./pages/Offerings";
import InstitutionLogin from "./pages/InstitutionLogin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // optional 404 page

// TnC  and Privacy Policy\
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Routes using MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<InstitutionLogin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

        </Route>


        {/* Optional 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalModal />

    </>
  );
};

export default App;
