import React from "react";
import Register from "./Components/Register"
import ShowUser from "./Components/ShowUser"
// import Edit from "./Components/Edit";

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
        {/* <Route path="/edit" element={<Edit/>} /> */}
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
