import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth-service";

const Navbar = (props) => {
  const navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  const LogOut = () => {
    AuthService.logout();
    window.alert("已登出");
    setCurrentUser(AuthService.getCurrentUser());
    navigate("/login");
  };
  return (
    <div className="nav_head">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav_left">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/member">
                    Member Page
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/myList">
                    My List
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav_right">
            <ul className="navbar-nav">
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item logOut-item">
                  <Link onClick={LogOut} className="nav-link" to="#">
                    Logout
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item nameTag">
                  <span>Hi {currentUser.user.username}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
