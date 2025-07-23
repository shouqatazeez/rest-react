import { useState } from "react";
import { Logo_Url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="border h-24 flex items-center">
      <img src={Logo_Url} className="h-23 max-w-2/12 rounded-full " />
      <div className="space-x-6 px-4 m-9 ml-auto ">
        <span>Online Status:{onlineStatus ? "✅" : "🛑"} </span>
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
