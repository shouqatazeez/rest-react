import Restcard from "./Restcard";
import resObj from "../utils/mockData";
const Body = () => {
  return (
    <div className="m-3">
      <div className="">
        <h1>Search</h1>
      </div>
      <div className="flex flex-wrap">
        {resObj.map((restaurant, id) => (
          <Restcard key={id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
