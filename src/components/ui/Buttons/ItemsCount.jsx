/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../../features/slices/cartSlice";

function ItemsCount({ cartColor, item }) {
  const dispatch = useDispatch();

  const { id, cartNumItems } = item;

  return (
    <div className="flex w-fit items-center justify-between gap-4 rounded-full bg-slate-100/70 px-2 py-3">
      {cartNumItems < 2 ? (
        <button
          onClick={() => dispatch(removeFromCart({ id, cartColor }))}
          className={`${
            cartNumItems < 2
              ? "border-slate-400 text-slate-400"
              : "border-slate-700 text-slate-900"
          } rounded-full border-[1px] bg-white p-2`}
        >
          <RiSubtractLine />
        </button>
      ) : (
        <button
          disabled={cartNumItems < 2}
          onClick={() =>
            dispatch(
              updateQuantity({ id, cartColor, numItems: cartNumItems - 1 }),
            )
          }
          className={`${
            cartNumItems < 2
              ? "border-slate-400 text-slate-400"
              : "border-slate-700 text-slate-900"
          } rounded-full border-[1px] bg-white p-2`}
        >
          <RiSubtractLine />
        </button>
      )}

      <span className="block w-4 select-none text-center font-semibold leading-none">
        {cartNumItems}
      </span>
      <button
        onClick={() =>
          dispatch(
            updateQuantity({ id, cartColor, numItems: cartNumItems + 1 }),
          )
        }
        className="rounded-full border-[1px] border-slate-700 bg-white p-2"
      >
        <RiAddLine />
      </button>
    </div>
  );
}

export default ItemsCount;
