import React from 'react';
import MenuItemsList from "./MenuItemsList";
import { useState } from "react";
const MenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const toggleView = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleView}
        >
          <span className="font-bold text-md">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>⮟</span>
        </div>

        {showItems && <MenuItemsList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default MenuCategory;
