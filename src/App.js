import "./App.css";
// import React {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Characters from "./Pages/Characters";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";
import ReactGA from "react-ga"
import { useEffect } from "react";
// import FormikRegister from "./Components/formikRegister/FormikRegister";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-PPRE1H9SQB')
  })
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<ProtectedRoute><Login/></ProtectedRoute>}/>

        {/* <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/registerdos" element={<FormikRegister/>} /> */}

        <Route path="/characters" element={<ProtectedRoute><Characters /></ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
  );
};

export default App;
