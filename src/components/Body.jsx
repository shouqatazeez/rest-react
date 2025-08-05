// import Restcard from "./Restcard";
// import { useEffect, useState } from "react";
// import ShimmerGallery from "./ShimmerGallery";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//   const [reslist, setresList] = useState([]);
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [searchtext, setsearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();

//     const restaurantCard = json.data.cards.find(
//       (card) =>
//         card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
//     );

//     const restaurant =
//       restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
//       [];

//     setresList(restaurant);
//     setAllRestaurants(restaurant);
//   };

//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-red-100 text-red-700 px-6 py-3 rounded-md shadow-md text-lg font-semibold text-center max-w-xs">
//           <p>
//             You’re currently offline.
//             <br />
//             Please check your internet connection and refresh.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const handleSearch = () => {
//     const filtered = allRestaurants.filter((res) =>
//       res.info.name.toLowerCase().includes(searchtext.toLowerCase())
//     );
//     setresList(filtered);
//   };

//   const handleReset = () => {
//     setresList(allRestaurants);
//     setsearchText("");
//   };

//   const handleTopRated = () => {
//     const topRated = allRestaurants.filter((res) => res.info.avgRating > 4.5);
//     setresList(topRated);
//   };

//   return reslist.length === 0 ? (
//     <ShimmerGallery />
//   ) : (
//     <div className="p-4 max-w-screen-xl mx-auto">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//         <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto ml-4">
//           <input
//             type="text"
//             placeholder="Search restaurants..."
//             className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring focus:border-blue-300"
//             value={searchtext}
//             onChange={(e) => setsearchText(e.target.value)}
//           />
//           <button
//             onClick={handleSearch}
//             className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
//           >
//             Search
//           </button>
//           <button
//             onClick={handleReset}
//             className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition cursor-pointer"
//           >
//             Reset
//           </button>
//         </div>
//         <button
//           onClick={handleTopRated}
//           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition cursor-pointer"
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       {/* Restaurant Cards Grid */}

//       <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
//         {reslist.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={`/restaurantmenu/${restaurant.info.id}`}
//           >
//             <Restcard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import ShimmerGallery from "./ShimmerGallery";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [reslist, setresList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtext, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("/api/swiggy"); // <-- Call your own API
      const json = await data.json();

      const restaurantCard = json.data.cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
          undefined
      );

      const restaurant =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setresList(restaurant);
      setAllRestaurants(restaurant);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-red-100 text-red-700 px-6 py-3 rounded-md shadow-md text-lg font-semibold text-center max-w-xs">
          <p>
            You’re currently offline.
            <br />
            Please check your internet connection and refresh.
          </p>
        </div>
      </div>
    );
  }

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setresList(filtered);
  };

  const handleReset = () => {
    setresList(allRestaurants);
    setsearchText("");
  };

  const handleTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating > 4.5);
    setresList(topRated);
  };

  return reslist.length === 0 ? (
    <ShimmerGallery />
  ) : (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto ml-4">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring focus:border-blue-300"
            value={searchtext}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition cursor-pointer"
          >
            Reset
          </button>
        </div>
        <button
          onClick={handleTopRated}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition cursor-pointer"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {reslist.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurantmenu/${restaurant.info.id}`}
          >
            <Restcard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
