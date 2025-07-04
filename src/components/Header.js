import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  
  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-100 shadow-lg mb-2">
      <div className="logo-container">
        <Link>
          <img className="w-56" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="header-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="header-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="header-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link className="header-link" to="/cart">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Log Out")
                  : setBtnName("Login"); //login is getting clicked two times?
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
