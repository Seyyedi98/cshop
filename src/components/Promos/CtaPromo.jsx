/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { RiArrowRightLine } from "react-icons/ri";
import promo3 from "../../assets/images/banner/promo3.webp";

function CtaPromo() {
  return (
    <>
      <div className="z-10 flex flex-col justify-center p-24">
        <h1 className="mt-10 text-5xl font-semibold leading-[1.2]">
          Don't miss out on special offers
        </h1>
        <p className="mt-6 block text-slate-500">
          Register to receive news about the latest, savings combos, discount
          codes...
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-800">
              01
            </span>
            <p className="font-medium text-neutral-700">Savings combos</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
              02
            </span>
            <p className="font-medium text-neutral-700">Freeship</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-800">
              03
            </span>
            <p className="font-medium text-neutral-700">Premium magazines</p>
          </li>
        </ul>
        <div className="mt-4">
          <div className="relative mt-8">
            <input
              placeholder="Enter your email"
              className="w-4/5 rounded-full border-2 px-4 py-2.5 text-sm outline-none 
              transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
            <button
              className="absolute right-[100px] top-[3.5px] rounded-full
             bg-slate-900 p-[5.5px] text-2xl text-slate-200 hover:bg-slate-700 focus:ring-2
              focus:ring-blue-500 focus:ring-offset-2"
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
      <img src={promo3} className="z-10 -mt-20 h-[664px] w-[664px]" />
    </>
  );
}

export default CtaPromo;
