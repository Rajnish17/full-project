import React from "react";
import Register from "./Components/Register"
import ShowUser from "./Components/ShowUser"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/show" element={<ShowUser/>} />
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
