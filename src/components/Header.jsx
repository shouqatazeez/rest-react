import { useState } from "react";
import { Logo_Url } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="border h-24 flex">
      <img src={Logo_Url} className="h-22 rounded-full" />
      <div className="space-x-5 m-9 ml-auto ">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>

        <a href="/">Cart</a>
        <button
          className="border rounded p-1.5 w-1xs cursor-pointer bg-gray-300 hover:bg-gray-200  "
          onClick={() => {
            btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
