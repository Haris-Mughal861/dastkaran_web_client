import React from "react";
import Register
from "./components/auth/Register";
import Login from "./components/auth/Login";
import{Routes,Route } from 'react-router-dom'

const App = ()=>{
    return(
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />



        </Routes>
      
        )
}
export default App