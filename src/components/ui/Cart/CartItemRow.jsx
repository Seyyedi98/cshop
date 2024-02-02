/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/slices/cartSlice";
import PriceTag from "../priceTag";
import { useProduct } from "../../../features/products/useProduct";

function CartItemRow({ product }) {
  const dispatch = useDispatch();
  const { data } = useProduct({ productId: product.id });

  //   TODO: replace img with thumbnail

  return (
    <li className="" key={product.id}>
      <div className="mb-4 flex justify-between gap-4">
        <img
          className="h-24 w-20 rounded-lg object-cover"
          src={data?.images?.img1}
        />
        <div className="flex w-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <span className="text-base font-medium ">{product.title}</span>
                <span className="text-sm text-slate-500">
                  {product.cartColor}
                </span>
              </div>
            </div>
            <PriceTag price={product.price * product.cartNumItems} />
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              x {product.cartNumItems}
            </span>
            <span
              className="cursor-pointer text-sm font-medium  text-sky-600"
              onClick={() =>
                dispatch(
                  removeFromCart({
                    id: product.id,
                    cartColor: product.cartColor,
                  }),
                )
              }
            >
              Remove
            </span>
          </div>
        </div>
      </div>
      <hr className="mb-4 border-slate-200" />
    </li>
  );
}

export default CartItemRow;
