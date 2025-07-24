import { Cdn_Url } from "../utils/constants";
import { StarIcon } from "@heroicons/react/24/solid";

const Restcard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[220px] rounded-2xl bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
      <img
        src={Cdn_Url + cloudinaryImageId}
        alt={name}
        className="w-full h-36 object-cover rounded-xl mb-3"
      />

      <h1 className="font-bold text-lg text-gray-900 truncate">{name}</h1>
      <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>

      <div className="flex items-center text-sm mt-2">
        <StarIcon
          className="w-4 h-4 text-yellow-500 mr-1"
          fill="currentColor"
        />
        <span className="font-medium text-gray-800">{avgRating}</span>
        <span className="mx-1 text-gray-400">•</span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>

      <p className="text-sm text-gray-500 mt-1">
        {sla?.deliveryTime} min delivery
      </p>
    </div>
  );
};

export default Restcard;
