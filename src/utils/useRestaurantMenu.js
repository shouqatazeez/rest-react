import React, { useEffect, useState } from 'react'
import { getRestaurantMenuURL } from './constants';

const useRestaurantMenu = (resId) => {

    const [resInfo,setresInfo] = useState(null);

  useEffect(() => {
    fetchMenuInfo();
  }, []);

  const fetchMenuInfo = async () => {
    const url = getRestaurantMenuURL(resId); 

    const data = await fetch(url);

    const json = await data.json();

    setresInfo(json.data);
  };
  return resInfo;
}

export default useRestaurantMenu;
