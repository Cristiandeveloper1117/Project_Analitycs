import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/global-styles.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  // PARA ACTUALIZAR EL ESTADO
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/characters");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex">
      <div className="box-login">
        <div className="text-white">
          <p className="text-4xl font-bold">Inicia sesión </p>
        </div>
        {error && <p>{error}</p>}

        <form className="form-css" onSubmit={handleSubmit}>
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su email"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <label className="text-white" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <button className="button-login">Login</button>
        </form>
        <div>
          Si no tenes cuenta
          <NavLink className="bg-green-500 ml-5" to="register">Registrate</NavLink>
        </div>
      </div>
      <div>Hola</div>
    </div>
  );
}
