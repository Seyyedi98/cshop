import PriceTag from "../priceTag";
import Rating from "../rating";

/* eslint-disable react/prop-types */
function PhotoGridProductCart({ item }) {
  return (
    <div className="w-[395px]">
      <div className="grid auto-cols-min grid-cols-3 grid-rows-3 gap-2.5">
        <img
          className="col-span-full row-start-1 row-end-3 h-[260px] w-[395px] rounded-2xl  bg-slate-100 object-cover"
          src={item.images[0]}
        />
        <img
          className="col-start-1 col-end-2 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={item.images[1]}
        />
        <img
          className="col-start-2 col-end-3 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={item.images[2]}
        />
        <img
          className="col-start-3 col-end-4 row-start-3 aspect-square rounded-xl bg-slate-100 object-cover"
          src={item.images[3]}
        />

        <div className="col-span-full mt-3 flex items-center justify-between">
          <h4 className="text-lg font-semibold sm:text-xl">{item.title}</h4>
          <PriceTag
            className="col-start-3 col-end-4 row-start-4 row-end-6"
            price={item.price}
          />
        </div>

        <span className="col-start-1 col-end-3 row-start-5 row-end-6 flex items-center gap-2 justify-self-start">
          <span className="text-sm font-thin text-slate-500">
            {Object.keys(item.colors[0])}
          </span>
          <span className="text-sm font-thin text-slate-400">|</span>
          <Rating rating={item.rating} numRates={item.numRates} />
        </span>
      </div>
    </div>
  );
}

export default PhotoGridProductCart;
