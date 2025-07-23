export const Cdn_Url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const Logo_Url ="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg";
export const Menu_Url ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";


export const getRestaurantMenuURL = (resId) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
};