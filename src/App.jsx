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
    const { resData } = props;
    return (
      <div className=" m-2 border w-46  hover:border-2 rounded ">
        <div className="">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData.info.cloudinaryImageId
            }
          />

          <h1>{resData.info.name}</h1>
          <h2>{resData.info.cuisines.join(", ")}</h2>
          <h3>{resData.info.avgRating} stars</h3>
          <h3>{resData.info.costForTwo}</h3>
          <h3>{resData.info.sla.deliveryTime} minutes</h3>
        </div>
      </div>
    );
  };

  const resObj = {
    restaurant: {
      info: {
        id: "547809",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/bbe012dc-8ba0-496c-815d-ed62c3928935_547809.JPG",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts", "Bakery"],
        avgRating: 4.6,
        avgRatingString: "4.6",
        totalRatingsString: "4.2K+",
        sla: {
          deliveryTime: 14,
          slaString: "10-15 mins",
          lastMileTravel: 0.9,
        },
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
        type: "WEBLINK",
      },
    },
  };

  const Body = () => (
    <div className="m-3">
      <div className="">
        <h1>Search</h1>
      </div>
      <div className="flex flex-wrap">
        <Restcard resData={resObj.restaurant} />
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
