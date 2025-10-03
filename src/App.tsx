import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Home,
  PrivacyPolicy,
  TermsOfService,
  Eula,
  Support,
  Mic,
} from "./pages";

const FlowaiRoutes = () => {
  const location = useLocation();

  AOS.init();

  return (
    <Routes location={location}>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/mic" element={<Mic />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  AOS.init();

  return (
    <>
      <BrowserRouter>
        <FlowaiRoutes />
      </BrowserRouter>

      <Toaster />
    </>
  );
};

export default App;
