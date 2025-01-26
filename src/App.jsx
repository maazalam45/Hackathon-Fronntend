import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import Slip from "./Components/Slip";
import Admin from "./Pages/admin";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoanApplication from "./Components/LoanApplication";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Show Header and Footer only for routes other than login and register */}
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/loan"
            element={
              <>
                <LoanApplication />
              </>
            }
          />
          <Route
            path="/slip"
            element={
              <>
                <Header />
                <Slip />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Header />
                <Admin />
                <Footer />
              </>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
