import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth-service";

const Register = () => {
  const navigate = useNavigate();
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const getUsername = (e) => {
    setUserName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleReigster = () => {
    AuthService.register(userName, email, password)
      .then(() => {
        window.alert("註冊成功");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={getUsername}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            onChange={getEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={getPassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />

        <button onClick={handleReigster} className="btn btn-primary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
