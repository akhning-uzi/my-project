import React from "react";
import Navbar from "./shared/navbar/navbar";
import { Routes } from "react-router-dom";
import Main from "./pages/main";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
