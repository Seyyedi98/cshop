/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

function ItemColors({ item, text }) {
  const [selectedColor, setSelectedColor] = useState(
    Object.values(item.colors[0])[0],
  );
  const [selectedColorName, setSelectedColorName] = useState(
    Object.keys(item.colors[0])[0],
  );
  let productColors, productColorsName;

  return (
    <ul className="w-full items-center gap-2.5">
      {text && (
        <li className="flex gap-2 text-sm font-medium">
          <span>{text}:</span>
          <span className="font-semibold">{selectedColorName}</span>
        </li>
      )}
      <div className="mt-2.5 flex gap-2">
        {item.colors.map((colorObj) => {
          productColors = Object.values(colorObj);
          productColorsName = Object.keys(colorObj);
          return productColors.map((color, index) => {
            return (
              <li key={Math.random()}>
                <div
                  onClick={() => {
                    setSelectedColor(color),
                      setSelectedColorName(productColorsName[index]);
                  }}
                  style={{
                    backgroundColor: `${color}`,
                    outlineColor: `${color}`,
                  }}
                  className={`h-[18px] w-[18px] cursor-pointer rounded-full border-2 outline-2 outline-offset-2 ${
                    selectedColor === color && "outline"
                  }`}
                ></div>
              </li>
            );
          });
        })}
      </div>
    </ul>
  );
}

export default ItemColors;
