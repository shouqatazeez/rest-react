import Restcard from "./Restcard";
// import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [reslist, setresList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const restaurantCard = json.data.cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );

    setresList(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );

    // setresList(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  return (
    <div className="m-3 ">
      <div>
        <button
          className="border rounded cursor-pointer p-1.5 ml-2 bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            const filterdata = reslist.filter(
              (res) => res.info.avgRating > 4.3
            );
            setresList(filterdata);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {reslist.map((restaurant, id) => (
          <Restcard key={id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
