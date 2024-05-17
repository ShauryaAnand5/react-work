import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const MenuItemsList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = ()=>{
    // Dispatch an action
    dispatch(addItem("pizza"))
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
            </div>
            <span>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            {/* <span> ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price/100}</span> */}
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-24 rounded-lg bg-white shadow-lg" onClick={handleAddItem}>
                ADD+
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItemsList;

// <div
// key={item.card.info.id}
// className="pt-2 m-2 border-gray-300 border-b-2 text-left"
// >
// <div className="font-bold">
//   <span className="flex justify-between">
//     <span>{item?.card?.info?.name}</span>
//     <span>
//       <img
//         src={CDN_URL + item?.card?.info?.imageId}
//         className="w-20 flex-wrap"
//       />
//     </span>
//   </span>
// </div>
// <div className="pb-2">
//   <span>
//     ₹
//     {item?.card?.info?.price
//       ? item?.card?.info?.price / 100
//       : item?.card?.info?.defaultPrice / 100}
//   </span>
//   {/* <span> ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price/100}</span> */}
// </div>
// <p className="text-xs">{item?.card?.info?.description}</p>
// </div>
