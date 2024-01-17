import { RiStarFill } from "react-icons/ri";

/* eslint-disable react/prop-types */
function Rating({ rating, numRates }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="text-lg text-yellow-400">
        <RiStarFill />
      </span>
      <div className="mt-0.5 text-sm font-thin text-slate-500">
        {rating} ({numRates} reviews)
      </div>
    </div>
  );
}

export default Rating;
