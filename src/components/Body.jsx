import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import ShimmerGallery from "./ShimmerGallery";

const Body = () => {
  const [reslist, setresList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtext, setsearchText] = useState("");

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

    const restaurant =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    setresList(restaurant);
    setAllRestaurants(restaurant);

    // setresList(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  // if (reslist.length == 0) {
  //   return <ShimmerGallery />;
  // }

  return reslist.length == 0 ? (
    <ShimmerGallery />
  ) : (
    <div className="m-3 ml-12  ">
      <div className="flex ">
        <div>
          <input
            type="text "
            placeholder="Enter restaurant name"
            className="border  p-1 ml-2 rounded "
            value={searchtext}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="border rounded ml-1 p-1 cursor-pointer hover:bg-gray-300 bg-green-200 "
            onClick={() => {
              const filterResdata = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setresList(filterResdata);
            }}
          >
            Search
          </button>

          <button
            className="border rounded cursor-pointer p-1 ml-1 bg-yellow-200 hover:bg-yellow-300"
            onClick={() => {
              setresList(allRestaurants);
              setsearchText("");
            }}
          >
            Reset
          </button>
        </div>

        <button
          className="border rounded cursor-pointer p-1.5 ml-3 bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            const filterdata = allRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setresList(filterdata);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap ">
        {reslist.map((restaurant, id) => (
          <Restcard key={id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
