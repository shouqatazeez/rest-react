import React, { useEffect, useState } from "react";
import Menushimmer from "./Menushimmer";
import { Star, MapPin, IndianRupeeIcon } from "lucide-react";
import { Menu_Url } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenuInfo();
  }, []);

  const fetchMenuInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=173999&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setresInfo(json.data);
  };
  if (resInfo == null) {
    return <Menushimmer />;
  }
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.cards[2]?.card?.card?.info?.sla || {};

  const regularCards = resInfo?.cards?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let itemCards = [];

  if (regularCards) {
    for (let section of regularCards) {
      const cardData = section?.card?.card;

      if (cardData?.itemCards?.length) {
        itemCards = cardData.itemCards;
        break;
      }

      if (Array.isArray(cardData?.categories)) {
        const found = cardData.categories.find((cat) =>
          Array.isArray(cat.itemCards)
        );
        if (found) {
          itemCards = found.itemCards;
          break;
        }
      }
    }
  }

  console.log(itemCards);

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

      <div className="m-8">
        <h2 className="font-bold mb-6 text-center text-2xl">Menu</h2>
        <ul className="space-y-4 flex flex-col items-center">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="flex items-center bg-white max-w-md w-full rounded-xl shadow-md p-4"
            >
              <img
                src={Menu_Url + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover rounded-xl mr-4"
              />

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-lg font-bold text-gray-950">
                    {item.card.info.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <IndianRupeeIcon size={16} className="text-gray-600" />
                    <span className="text-base text-gray-800 font-semibold">
                      {(item.card.info.price || item.card.info.defaultPrice) /
                        100}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {item.card.info.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
