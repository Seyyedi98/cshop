/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import CartItemRow from "./CartItemRow";
import Button from "../Buttons/Button";
import { getTotalPrice } from "../../../features/slices/cartSlice";
import { Link } from "react-router-dom";
import ArrowButton from "../Buttons/ArrowButton";

function CartDropDown({ setIsCartOpen }) {
  const products = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div
      className="flex h-screen w-screen flex-col gap-1 rounded-2xl border-2 border-solid border-slate-200 bg-white 
    p-4 shadow-lg md:h-full md:w-[450px]"
    >
      {products.length > 0 && (
        <>
          <span className="flex items-baseline gap-4">
            <span onClick={() => setIsCartOpen(false)} className="md:hidden">
              <ArrowButton direction="left" offset="close" />
            </span>

            <h4 className="mb-4 -translate-y-1 text-xl font-semibold">
              Shopping cart
            </h4>
          </span>

          <ul className="h-full overflow-y-scroll overscroll-contain pr-2 md:max-h-[370px]">
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
      {products.length == 0 && (
        <>
          <h1 className="px-12 pt-12 text-center text-lg font-semibold">
            Your cart is currently empty!
          </h1>
          <span className="mt-2 pb-12 text-center text-sm font-normal text-slate-500">
            You will find a lot of interesting products on our{" "}
            {
              <Link to="/shop" className="animate-pulse text-sky-500">
                Shop
              </Link>
            }{" "}
            page.
          </span>
        </>
      )}
    </div>
  );
}

export default CartDropDown;
