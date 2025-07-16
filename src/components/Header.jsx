import { useState } from "react";
import { Logo_Url } from "../utils/constants";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="border h-24 flex">
      <img src={Logo_Url} className="h-22 rounded-full" />
      <div className="space-x-5 m-9 ml-auto ">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
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
