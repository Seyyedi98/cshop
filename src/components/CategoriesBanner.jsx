import { useState } from "react";
import CategoriesNav from "./ui/Categories/CategoriesNav";
import {
  RiBasketballLine,
  RiMenLine,
  RiUserSmileLine,
  RiVipCrownLine,
  RiVipDiamondLine,
  RiWomenLine,
} from "react-icons/ri";
import CategoriesCard from "./ui/Categories/CategoriesCard";

import bag from "../assets/images/categories/c-bag.png";
import acc from "../assets/images/categories/c-acc.png";
import glasses from "../assets/images/categories/c-glasses.png";
import shoes from "../assets/images/categories/c-shoes.png";
import wallets from "../assets/images/categories/c-wallets.png";
import watches from "../assets/images/categories/c-watches.png";
import bg1 from "../assets/images/categories/cat-bg-1.svg";
import bg2 from "../assets/images/categories/cat-bg-2.svg";
import bg3 from "../assets/images/categories/cat-bg-3.svg";
import bg4 from "../assets/images/categories/cat-bg-4.svg";
import bg5 from "../assets/images/categories/cat-bg-5.svg";
import bg6 from "../assets/images/categories/cat-bg-6.svg";

function CategoriesBanner() {
  const categories = [
    {
      title: "Women",
      icon: <RiWomenLine />,
    },
    {
      title: "Men",
      icon: <RiMenLine />,
    },
    {
      title: "Kids",
      icon: <RiUserSmileLine />,
    },
    {
      title: "Sports",
      icon: <RiBasketballLine />,
    },
    {
      title: "Beauty",
      icon: <RiVipCrownLine />,
    },
    {
      title: "Jewerly",
      icon: <RiVipDiamondLine />,
    },
  ];

  const subCategories = [
    {
      title: "Backpack",
      length: 155,
      image: bag,
      background: bg1,
    },
    {
      title: "Shoes",
      length: 22,
      image: shoes,
      background: bg2,
    },
    {
      title: "Glasses",
      length: 144,
      image: glasses,
      background: bg3,
    },
    {
      title: "Wallets",
      length: 343,
      image: wallets,
      background: bg4,
    },
    {
      title: "Watchs",
      length: 222,
      image: watches,
      background: bg5,
    },
    {
      title: "Accessories",
      length: 155,
      image: acc,
      background: bg6,
    },
  ];

  const [isActive, setIsActive] = useState("Women");

  return (
    <div className="z-0 mx-4 rounded-3xl bg-neutral-100/70 md:m-auto md:mt-6 md:w-[85%] xl:mt-36 xl:w-[75%]">
      <div className="container py-16 md:py-24 ">
        <h1 className="text-center text-4xl font-semibold md:mt-0  md:text-5xl">
          Start exploring.
        </h1>
        <div>
          <ul
            className="invisible m-auto flex w-fit items-center justify-center gap-1
           rounded-full bg-white p-1 shadow-md md:mt-12 lg:visible lg:mb-12"
          >
            {categories.map((item, index) => (
              <CategoriesNav
                title={item.title}
                isActive={isActive}
                key={index}
                onClick={setIsActive}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {subCategories.map((cat) => (
            <div key={cat.title}>
              <CategoriesCard data={cat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesBanner;
