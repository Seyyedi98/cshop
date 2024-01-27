/* eslint-disable no-unused-vars */
import PriceTag from "../priceTag";
import Rating from "./Rating";

/* eslint-disable react/prop-types */
function PhotoGridProductCart({ item }) {
  const { id, title, price, colors, rating, numRates, images } = item;

  const prodctImages = Object.values(images);

  return (
    <div className="w-[395px]">
      <div className="grid auto-cols-min grid-cols-3 grid-rows-3 gap-2.5">
        <img
          className="col-span-full row-start-1 row-end-3 h-[260px] w-[395px] rounded-2xl  bg-slate-100 object-cover"
          src={prodctImages[0]}
        />
        <img
          className="col-start-1 col-end-2 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={prodctImages[1]}
        />
        <img
          className="col-start-2 col-end-3 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={prodctImages[2]}
        />
        <img
          className="col-start-3 col-end-4 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={prodctImages[3]}
        />

        <div className="col-span-full mt-3 flex items-center justify-between">
          <h4 className="text-lg font-semibold sm:text-xl">{title}</h4>
          <PriceTag
            className="col-start-3 col-end-4 row-start-4 row-end-6"
            price={price}
          />
        </div>

        <span className="col-start-1 col-end-3 row-start-5 row-end-6 flex items-center gap-2 justify-self-start">
          <span className="text-sm font-thin text-slate-500">
            {Object.keys(colors).slice(-2).join(" ")}
          </span>
          <span className="text-sm font-thin text-slate-400">|</span>
          <Rating rating={rating} numRates={numRates} />
        </span>
      </div>
    </div>
  );
}

export default PhotoGridProductCart;
