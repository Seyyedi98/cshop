/* eslint-disable no-unused-vars */

import { useState } from "react";
import {
  RiFullscreenFill,
  RiHeartFill,
  RiHeartLine,
  RiShoppingBag2Line,
  RiStarFill,
  RiWaterPercentLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const [bookmark, setBookmark] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div>
      <div className="relative">
        <div className="relative grid h-full w-[296px] cursor-pointer place-items-center rounded-3xl bg-slate-50 ">
          {product.off && (
            <span className="absolute left-2 top-2 z-20 flex items-center justify-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <span className="text-base">
                <RiWaterPercentLine />
              </span>
              {product.off}% Discount
            </span>
          )}
          <img className="w-[180px] py-16" src={product.image} />

          <div className="absolute bottom-5 z-20 flex h-full w-full items-end justify-center gap-2 opacity-0 hover:animate-[fadeInUp_0.3s_ease-in-out] hover:opacity-100">
            <Link
              className="flex items-center justify-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-xs font-medium text-slate-600
               shadow-md transition-all duration-100 hover:bg-slate-50 hover:shadow-lg"
              to={`/product/${product.id}`}
            >
              <span>
                <RiShoppingBag2Line />
              </span>
              Go to product
            </Link>
            <button
              className="flex items-center justify-center gap-1 rounded-2xl bg-slate-900
             px-3 py-1.5 text-xs font-medium text-slate-50 shadow-md transition-all duration-100 hover:bg-slate-700 hover:shadow-lg"
            >
              <span className="text-base">
                <RiFullscreenFill />
              </span>
              Quick View
            </button>
          </div>
        </div>
        <button
          className={`absolute right-3 top-3 z-40 rounded-full bg-white p-1.5 text-2xl shadow-sm ${
            bookmark ? "text-red-500" : ""
          }`}
          onClick={() => setBookmark(!bookmark)}
        >
          {bookmark ? <RiHeartFill /> : <RiHeartLine />}
        </button>
        <div className="p-2">
          <ul className="mt-2 flex w-full items-center gap-2.5">
            {product.colors.map((color) => {
              return (
                <li key={color}>
                  <div
                    onClick={() => setSelectedColor(color)}
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
            })}
          </ul>
          <h4 className=" mt-4 text-base font-semibold tracking-wide">
            {product.title}
          </h4>
          <h5 className="mt-1 text-sm font-medium text-slate-500">
            {product.subtitle}
          </h5>

          <div className="mt-4 flex items-center justify-between">
            <span className="rounded-md border-2 border-solid px-2.5 py-[3px] text-sm font-semibold text-green-500">
              ${product.price}
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-lg text-yellow-400">
                <RiStarFill />
              </span>
              <p className="mt-0.5 text-sm font-thin text-slate-500">
                {product.rating} ({product.numRates} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductCard;
