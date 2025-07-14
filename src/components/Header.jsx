import { Logo_Url } from "../utils/constants";
const Header = () => {
  return (
    <div className="border h-24 flex">
      <img src={Logo_Url} className="h-22 " />
      <div className="space-x-5 m-9 ml-auto ">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">Cart</a>
      </div>
    </div>
  );
};

export default Header;
