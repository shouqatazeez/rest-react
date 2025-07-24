export const Cdn_Url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const Logo_Url ="https://mir-s3-cdn-cf.behance.net/projects/404/9488cc75605169.Y3JvcCw0MTUwLDMyNDYsNDgyLDQyMQ.png";
export const Menu_Url ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";


export const getRestaurantMenuURL = (resId) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
};