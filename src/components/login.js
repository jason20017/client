import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth-service";
import googleMark from "../image/google-logo.png";

const Login = (props) => {
  const navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert("登入成功");
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/member");
      })
      .catch((err) => {
        console.log(err.response);
        setMessage(err.response.data);
      });
  };

  const googleLogin = () => {
    AuthService.loginWithGoogle();
  };
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <div className="row">
          <div className="col-md-12">
            <button onClick={googleLogin}>
              <img src={googleMark} alt="google" />
              <span>login with Google</span>
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Email</label>
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
        <div className="form-group">
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
        <div className="form-group">
          <button>
            <Link to="/register" className="btn btn-primary btn-block">
              <span>Register to be member</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
