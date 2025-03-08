import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import { Cart } from "./pages/Cart";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);
  return (
    <>
      {showLogin ? <LoginPopup onsetShowLogin={setShowLogin} /> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar onsetShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
