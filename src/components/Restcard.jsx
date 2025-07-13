const Restcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className=" m-2 border w-46  hover:border-2 rounded ">
      <div className="">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />

        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{resData.info.sla.deliveryTime} minutes</h3>
      </div>
    </div>
  );
};

export default Restcard;
