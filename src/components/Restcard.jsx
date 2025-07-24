import { Cdn_Url } from "../utils/constants";
const Restcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className=" m-4 p-4 border w-[200px]  hover:border-2 rounded bg-gray-200">
      <div className=" ">
        <img src={Cdn_Url + cloudinaryImageId} className="rounded-lg" />

        <h1
          className="
        font-bold  py-3"
        >
          {name}{" "}
        </h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{resData.info.sla.deliveryTime} minutes</h3>
      </div>
    </div>
  );
};

export default Restcard;
