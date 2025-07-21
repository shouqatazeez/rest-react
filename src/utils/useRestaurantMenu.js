import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {

    const [resInfo,setresInfo] = useState(null);

  useEffect(() => {
    fetchMenuInfo();
  }, []);

  const fetchMenuInfo = async () => {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const data = await fetch(url);

    const json = await data.json();

    setresInfo(json.data);
  };
  return resInfo;
}

export default useRestaurantMenu;
