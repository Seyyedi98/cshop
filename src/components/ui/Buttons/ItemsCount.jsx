/* eslint-disable react/prop-types */
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function ItemsCount({ numItems, setNumItems }) {
  return (
    <div className="flex w-fit items-center justify-between gap-4 rounded-full bg-slate-100/70 px-2 py-3">
      <button
        disabled={numItems < 2}
        onClick={() => setNumItems(numItems - 1)}
        className={`${
          numItems < 2
            ? "border-slate-400 text-slate-400"
            : "border-slate-700 text-slate-900"
        } rounded-full border-[1px] bg-white p-2`}
      >
        <RiSubtractLine />
      </button>
      <span className="block w-4 select-none text-center font-semibold leading-none">
        {numItems}
      </span>
      <button
        onClick={() => setNumItems(numItems + 1)}
        className="rounded-full border-[1px] border-slate-700 bg-white p-2"
      >
        <RiAddLine />
      </button>
    </div>
  );
}

export default ItemsCount;
