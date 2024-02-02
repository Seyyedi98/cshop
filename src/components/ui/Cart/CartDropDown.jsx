/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import CartItemRow from "./CartItemRow";
import Button from "../Buttons/Button";
import { getTotalPrice } from "../../../features/slices/cartSlice";

function CartDropDown() {
  const products = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div
      className="flex w-[450px] flex-col gap-1 rounded-2xl border-2 border-solid 
    border-slate-200 bg-white p-4 shadow-lg"
    >
      {products.length > 0 && (
        <>
          <h4 className="mb-4 text-xl font-semibold">Shopping cart</h4>

          <ul>
            {products.map((product) => (
              <CartItemRow key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex justify-between">
            <div>
              <h4 className="text-base font-semibold">Subtotal</h4>
              <p className="block text-sm font-normal text-slate-500">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
            <span className="text-base font-semibold">${totalPrice}</span>
          </div>

          <div className="mt-6 flex gap-4">
            <Button size="medium" full color="tranparent">
              View cart
            </Button>
            <Button size="medium" full color="black">
              Check out
            </Button>
          </div>
        </>
      )}
      {products.length == 0 && <p>Start adding new items</p>}
    </div>
  );
}

export default CartDropDown;
