import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthService from "./service/auth-service";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import Register from "./components/register";
import Login from "./components/login";
import Member from "./components/member";
import MyList from "./components/myList";
import { CartProvider } from "react-use-cart";
import Photo from "./components/photo";
import Footer from "./components/footer";

import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" exact element={<Register />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        ></Route>
      </Routes>
      <CartProvider>
        <Routes>
          <Route
            path="/member"
            exact
            element={
              <Member
                Photo={Photo}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/myList"
            exact
            element={
              <MyList
                Photo={Photo}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          ></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
