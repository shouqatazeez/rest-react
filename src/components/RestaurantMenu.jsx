import React, { useEffect, useState } from "react";
import Menushimmer from "./Menushimmer";
import { Star, MapPin } from "lucide-react";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenuInfo();
  }, []);

  const fetchMenuInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=378344&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setresInfo(json.data);
  };
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.cards[2]?.card?.card?.info?.sla || {};

  if (resInfo == null) {
    return <Menushimmer />;
  }
  return (
    <div className="text-center m-2 ">
      <h1 className="font-bold text-xl mb-3 text-gray-800">{name}</h1>
      <div className="max-w-md mx-auto my-1 p-1 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center text-sm gap-1">
          <Star size={16} className="fill-yellow-400 text-yellow-500" />
          <span className="font-bold text-yellow-600">{avgRating}</span>
          <span className="text-shadow-black-400">
            ({totalRatingsString}) - {costForTwoMessage}
          </span>
        </div>
        <h2 className="m-2 text-orange-700">{cuisines.join(", ")}</h2>
        <div className="flex justify-center items-center gap-1 text-sm text-emerald-600">
          <MapPin size={16} className="text-emerald-600" />
          <span>{locality}</span>
        </div>
        <div className="flex justify-center gap-1 text-gray-700 text-sm">
          Delivery in<span className="font-semibold">{slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
