import { ChevronDown, ChevronUp, IndianRupeeIcon } from "lucide-react";
import { Menu_Url } from "../utils/constants";

const MenuCategory = ({ title, items, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle();
  };
  return (
    <div className="mb-6 max-w-md mx-auto">
      <div
        className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-md hover:bg-gray-200 shadow-lg"
        onClick={toggleAccordion}
      >
        <h3 class Name="text-lg font-semibold text-left text-gray-900">
          {title} ({items.length})
        </h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <ul className="space-y-4 mt-4">
          {items.map((item) => (
            <li
              key={item.card.info.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4"
            >
              {item.card.info.imageId && (
                <img
                  src={Menu_Url + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-24 h-24 object-cover rounded-xl mr-4"
                />
              )}
              <button>Add +</button>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-lg font-bold text-gray-950">
                    {item.card.info.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <IndianRupeeIcon size={16} className="text-gray-600" />
                    <span className="text-base text-gray-800 font-semibold">
                      {(item.card.info.price || item.card.info.defaultPrice) /
                        100}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {item.card.info.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuCategory;
