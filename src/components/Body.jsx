import Restcard from "./Restcard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [reslist, setresList] = useState(resObj);

  return (
    <div className="m-3 ">
      <div>
        <button
          className="border rounded cursor-pointer p-1.5 ml-2 bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            const filterdata = reslist.filter(
              (res) => res.info.avgRating > 4.5
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
