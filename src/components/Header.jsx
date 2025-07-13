const Header = () => {
  return (
    <div className="border h-24 flex">
      <img
        src="https://static.vecteezy.com/system/resources/previews/035/526/567/original/restaurant-logo-free-vector.jpg"
        className="h-22 "
      />
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
