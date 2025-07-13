import React from "react";
import Header from "./Header";

const App = () => {
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

  const resObj = [
    {
      info: {
        id: "437301",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f8f8c38f-320b-4e47-bffc-9df7b76d9552_437301.JPG",
        locality: "OLD MLA Quarters roa",
        areaName: "Himayat Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.4,
        parentId: "721",
        avgRatingString: "4.4",
        totalRatingsString: "3.6K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-14 00:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/pizza-hut-old-mla-quarters-roa-himayat-nagar-rest437301",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "189032",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c3a5815a-56c1-45da-b298-a0e7576802ac_189032.jpg",
        locality: "Khairatabad",
        areaName: "Khairatabad",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        parentId: "166",
        avgRatingString: "4.1",
        totalRatingsString: "14K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 4.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-14 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "1.2K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/burger-king-khairatabad-rest189032",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "24613",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/3a1d6fd3-4798-4b47-b834-99a372d52af5_24613.JPG",
        locality: "Stock Exchange Road",
        areaName: "Himayath Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
        parentId: "2456",
        avgRatingString: "4.5",
        totalRatingsString: "21K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "2.6K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "233055",
        name: "The Good Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d154a250-4cd7-4530-b209-ddc09d952b14_233055.jpg",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
        avgRating: 4.2,
        parentId: "7918",
        avgRatingString: "4.2",
        totalRatingsString: "1.7K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/the-good-bowl-beside-little-flower-primary-school-abids-rest233055",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23707",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/b4352cf6-9167-4c7b-9ef0-c35436e05567_23707.jpg",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "71K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-14 02:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "9.8K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/mcdonalds-himayath-nagar-rest23707",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "233050",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/68413230-9dc2-459a-91ac-c3950de16632_233050.JPG",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4,
        parentId: "21809",
        avgRatingString: "4.0",
        totalRatingsString: "4.8K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Rolls.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Rolls.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/faasos-wraps-rolls-and-shawarma-beside-little-flower-primary-school-abids-rest233050",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "108986",
        name: "NIC Ice Creams",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/9cd55603-d1dd-4210-a329-1f88eef9ffa8_108986.JPG",
        locality: "KMIT",
        areaName: "Narayanguda",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.6",
        totalRatingsString: "23K+",
        sla: {
          deliveryTime: 15,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹124",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/nic-ice-creams-kmit-narayanguda-rest108986",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "233054",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d59d769d-1a54-4976-aea2-1ab75a192c1e_233054.jpg",
        locality: "Beside Little Flower Primary school",
        areaName: "Abids",
        costForTwo: "₹450 for two",
        cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
        avgRating: 4.3,
        parentId: "4444",
        avgRatingString: "4.3",
        totalRatingsString: "1.1K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/sweet-truth-cake-and-desserts-beside-little-flower-primary-school-abids-rest233054",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "112288",
        name: "Kwality Walls Ice Cream and More",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/72236cce-3703-4365-a19b-5adba2eaf701_112288.jpg",
        locality: "THE LOP STOP ICE CREAM",
        areaName: "Basheer Bagh",
        costForTwo: "₹100 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.7,
        veg: true,
        parentId: "582",
        avgRatingString: "4.7",
        totalRatingsString: "6.4K+",
        sla: {
          deliveryTime: 10,
          lastMileTravel: 0.1,
          serviceability: "SERVICEABLE",
          slaString: "5-10 mins",
          lastMileTravelString: "0.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:01:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20RX%20listing%2018px.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20RX%20listing%2018px.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/kwality-walls-ice-cream-and-more-the-lop-stop-ice-cream-basheer-bagh-rest112288",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "3324",
        name: "Srikanya",
        cloudinaryImageId: "tw4ytwle8yommmgdy4b0",
        locality: "Somajiguda",
        areaName: "Punjagutta",
        costForTwo: "₹250 for two",
        cuisines: ["Biryani", "Andhra", "South Indian"],
        avgRating: 4.3,
        parentId: "7317",
        avgRatingString: "4.3",
        totalRatingsString: "89K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 15:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "3.0K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/srikanya-somajiguda-punjagutta-rest3324",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "262087",
        name: "Imperial Multicuisine Restaurant",
        cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
        locality: "Banjara Hills",
        areaName: "Redhills",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
        avgRating: 4.3,
        parentId: "543714",
        avgRatingString: "4.3",
        totalRatingsString: "23K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹200 OFF",
          subHeader: "ABOVE ₹799",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "547809",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/bbe012dc-8ba0-496c-815d-ed62c3928935_547809.JPG",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "4.2K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-14 00:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20RX%20listing%2018px.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20RX%20listing%2018px.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.7",
            ratingCount: "147",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "2796",
        name: "Blue Fox",
        cloudinaryImageId: "67a049690883e2a8cc66975daa3e40fd",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹800 for two",
        cuisines: ["Biryani", "Chinese", "Tandoor"],
        avgRating: 4.4,
        parentId: "48033",
        avgRatingString: "4.4",
        totalRatingsString: "56K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 22:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "4.2K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/blue-fox-himayath-nagar-rest2796",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "7003",
        name: "Almond House",
        cloudinaryImageId: "sewngcxy3c0h9atmav2l",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹500 for two",
        cuisines: ["Sweets", "Desserts", "Snacks", "Beverages"],
        avgRating: 4.8,
        veg: true,
        parentId: "40",
        avgRatingString: "4.8",
        totalRatingsString: "20K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Mithai.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "8.9K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/almond-house-himayath-nagar-rest7003",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "25251",
        name: "Meridian Restaurant",
        cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
        locality: "Panjagutta",
        areaName: "Panjagutta",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Chinese", "Kebabs"],
        avgRating: 4.4,
        parentId: "19276",
        avgRatingString: "4.4",
        totalRatingsString: "251K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 4.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "23K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/meridian-restaurant-panjagutta-rest25251",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "7203",
        name: "Taj Mahal-Abids",
        cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d",
        locality: "Abids",
        areaName: "Abids",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "North Indian", "Biryani", "Snacks"],
        avgRating: 4.5,
        veg: true,
        parentId: "924",
        avgRatingString: "4.5",
        totalRatingsString: "65K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "19K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/taj-mahal-abids-abids-rest7203",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "12046",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/5815ca5f-c602-4459-aaff-0f19c753f150_12046.jpg",
        locality: "Himayath Nagar",
        areaName: "Himayath Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.3,
        parentId: "2",
        avgRatingString: "4.3",
        totalRatingsString: "40K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-14 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "997",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/subway-himayath-nagar-rest12046",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "662646",
        name: "Starbucks Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/482d629c-01b2-4570-ab36-4be26474a070_662646.JPG",
        locality: "Bhola Nagar",
        areaName: "Banjara Green Colony",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.3,
        parentId: "195515",
        avgRatingString: "4.3",
        totalRatingsString: "863",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
              description: "Delivery!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/starbucks-coffee-bhola-nagar-banjara-green-colony-rest662646",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "2535",
        name: "Agra Sweets Banjara",
        cloudinaryImageId: "ydsyhgg51xaxsrjbaxdv",
        locality: "Masab Tank",
        areaName: "Masab Tank",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Beverages"],
        avgRating: 4.5,
        parentId: "34",
        avgRatingString: "4.5",
        totalRatingsString: "97K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Mithai.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "1.5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-masab-tank-rest2535",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "6498",
        name: "Hotel Sandarshini",
        cloudinaryImageId: "9f5783b9975a73ec001560327065a01c",
        locality: "Masab Tank",
        areaName: "Masab Tank",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "South Indian", "Juices"],
        avgRating: 4.6,
        veg: true,
        parentId: "476",
        avgRatingString: "4.6",
        totalRatingsString: "104K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-13 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "2.2K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-5a370eea-acaf-4645-ac6c-e91fa38778b4",
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/hotel-sandarshini-masab-tank-rest6498",
        type: "WEBLINK",
      },
    },
  ];

  const Body = () => (
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

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
