import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState();
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
  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
