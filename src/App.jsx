import React from "react";

const App = () => {
  const Header = () => (
    <div className="border h-20 flex">
      <img
        src="https://static.vecteezy.com/system/resources/previews/035/526/567/original/restaurant-logo-free-vector.jpg"
        className="h-16 "
      />
      <div className="space-x-5 m-9 ml-auto">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Cart</a>
      </div>
    </div>
  );

  const Body = () => <div></div>;

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
