import Menushimmer from "./Menushimmer";
import MenucardAccordian from "./MenucardAccordian";
import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

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

  let categoriesWithItems = [];

  if (regularCards) {
    for (let section of regularCards) {
      const cardData = section?.card?.card;

      if (
        cardData?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        categoriesWithItems.push({
          title: cardData.title || "Menu",
          items: cardData.itemCards || [],
        });
      }
    }
  }

  return (
    <div className="text-center m-2">
      <h1 className="font-bold text-xl mb-3 text-gray-800">{name}</h1>
      <div className="max-w-md mx-auto my-1 p-1 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center text-sm gap-1">
          <Star size={16} className="fill-yellow-400 text-yellow-500" />
          <span className="font-bold ">{avgRating}</span>
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

        {categoriesWithItems.map((category, index) => (
          <MenucardAccordian
            key={category.title}
            title={category.title}
            items={category.items}
            isOpen={openCategoryIndex === index}
            onToggle={() =>
              setOpenCategoryIndex(openCategoryIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
