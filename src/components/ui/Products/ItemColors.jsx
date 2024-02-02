/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function ItemColors({ text, colors, cartColor, setCartColor }) {
  const [selectedColor, setSelectedColor] = useState(Object.values(colors)[0]);
  const [selectedColorName, setSelectedColorName] = useState(
    Object.keys(colors)[0],
  );

  useEffect(() => {
    if (setCartColor && cartColor === "") setCartColor(Object.keys(colors)[0]);
  }, [cartColor, colors, setCartColor]);

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
                  setSelectedColor(value),
                    setSelectedColorName(key),
                    setCartColor && setCartColor(key);
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
