import { useState } from "react";
import { Logo_Url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Menu, X } from "lucide-react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" shadow-md bg-white z-50">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center">
          <img src={Logo_Url} className="h-14 w-14 rounded-full" alt="logo" />
          <span className="text-xl font-bold ml-3">ReactBite</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-gray-900" />
          ) : (
            <Menu size={28} className="text-gray-900" />
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          <span>Online Status: {onlineStatus ? "✅" : "🛑"}</span>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
          <a href="/" className="hover:text-blue-600">
            Cart
          </a>
          <button
            className="bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded"
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 border-t space-y-4">
          <span className="block">
            Online Status: {onlineStatus ? "✅" : "🛑"}
          </span>
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About Us
          </Link>
          <Link to="/contact" className="block">
            Contact Us
          </Link>
          <a href="/" className="block">
            Cart
          </a>
          <button
            className="w-full bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded"
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
              setMobileMenuOpen(false);
            }}
          >
            {btnName}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
