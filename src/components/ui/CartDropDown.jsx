/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";

function CartDropDown() {
  const products = useSelector((state) => state.cart.cart);
  // console.log(products);

  return (
    <div
      className="flex w-64 flex-col gap-1 rounded-3xl border-2 border-solid 
    border-slate-200 bg-white p-4 shadow-lg"
    >
      <h4 className="text-base font-semibold">Shopping cart</h4>
      <ul>
        {products.map((product) => (
          <li className="flex gap-4" key={product.id}>
            <span className="text-sm">{product.title}</span>
            <span className="text-sm">x {product.cartNumItems}</span>
          </li>
        ))}
      </ul>

      <hr className="border-slate-300" />
    </div>
  );
}

export default CartDropDown;
