/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

function ItemColors({ text, colors }) {
  // console.log(item.colors);
  // console.log(colors);
  const [selectedColor, setSelectedColor] = useState(Object.values(colors)[0]);
  const [selectedColorName, setSelectedColorName] = useState(
    Object.keys(colors)[0],
  );

  return (
    <ul className="w-full items-center gap-2.5">
      {text && (
        <li className="flex gap-2 text-sm font-medium">
          <span>{text}:</span>
          <span className="font-semibold">{selectedColorName}</span>
        </li>
      )}
      <div className="mt-2.5 flex gap-2">
        {Object.entries(colors).map(([key, value]) => {
          return (
            <li key={Math.random()}>
              <div
                onClick={() => {
                  setSelectedColor(value), setSelectedColorName(key);
                }}
                style={{
                  backgroundColor: `${value}`,
                  outlineColor: `${value}`,
                }}
                className={`h-[18px] w-[18px] cursor-pointer rounded-full border-2 outline-2 outline-offset-2 ${
                  selectedColor === value && "outline"
                }`}
              ></div>
            </li>
          );
        })}
      </div>
    </ul>
  );
}

export default ItemColors;
