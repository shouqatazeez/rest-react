import React from "react";

const App = () => {
  const Header = () => (
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

  const Restcard = (props) => {
    const { resName, cusines } = props;
    return (
      <div className=" m-2 border w-46  hover:border-2 rounded ">
        <div className="">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/68413230-9dc2-459a-91ac-c3950de16632_233050.JPG"
            className="object-cover w-full h-full"
          />
          <h1>{resName}</h1>
          <h2>{cusines}</h2>
          <h3>4.8 Stars</h3>
          <h3>15 minutes</h3>
        </div>
      </div>
    );
  };

  const Body = () => (
    <div className="m-3">
      <div className="">
        <h1>Search</h1>
      </div>
      <div className="flex flex-wrap">
        <Restcard
          resName="Bismillah Biryanis"
          cusines="North Indian ,Homemade"
        />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
