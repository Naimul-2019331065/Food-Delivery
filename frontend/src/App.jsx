import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
