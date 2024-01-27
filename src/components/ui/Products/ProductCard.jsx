/* eslint-disable no-unused-vars */

import {
  RiFullscreenFill,
  RiShoppingBag2Line,
  RiWaterPercentLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import PriceTag from "../priceTag";
import Bookmark from "../Buttons/Bookmark";
import ItemColors from "./ItemColors";

/* eslint-disable react/prop-types */
function ProductCard({ item }) {
  const navigate = useNavigate();

  const { id, title, price, subtitle, colors, rating, numRates, images } = item;
  const prodctImages = Object.values(images);

  // const [selectedColor, setSelectedColor] = useState(
  //   Object.values(item.colors[0])[0],
  // );

  return (
    <div>
      <div className="h[300px] relative">
        <div
          onClick={() => navigate(`/product/${item.id}`)}
          className="relative grid h-[250px] w-[92vw] cursor-pointer place-items-center overflow-hidden rounded-3xl bg-slate-50 sm:w-[296px]"
        >
          {item?.off && (
            <span className="absolute left-2 top-2 z-20 flex items-center justify-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <span className="text-base">
                <RiWaterPercentLine />
              </span>
              {item?.off}% Discount
            </span>
          )}
          <img className="h-full object-cover" src={prodctImages[0]} />

          <div className="absolute bottom-5 z-20 flex h-full w-full items-end justify-center gap-2 opacity-0 hover:animate-[fadeInUp_0.3s_ease-in-out] hover:opacity-100">
            <Link
              className="flex items-center justify-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-xs font-medium text-slate-600
               shadow-md transition-all duration-100 hover:bg-slate-50 hover:shadow-lg"
              to={`/product/${item.id}`}
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

        <span className="absolute right-3 top-3 z-40">
          <Bookmark />
        </span>
        <div className="p-2">
          <ItemColors colors={colors} />
          <h4
            className="mt-4 cursor-pointer text-base font-semibold tracking-wide"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            {title}
          </h4>
          <h5 className="mt-1 text-sm font-medium text-slate-500">
            {subtitle}
          </h5>

          <div className="mt-4 flex items-center justify-between">
            <PriceTag price={price} />
            <Rating rating={rating} numRates={numRates} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductCard;
