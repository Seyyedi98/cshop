/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import Header from "../components/Header";
import Bookmark from "../components/ui/Buttons/Bookmark";
import Rating from "../components/ui/rating";
import PriceTag from "../components/ui/priceTag";
import ItemColors from "../components/ui/Products/ItemColors";
import ItemsCount from "../components/ui/Buttons/ItemsCount";
import { useState } from "react";
import Button from "../components/ui/Buttons/Button";
import Dropdown from "../components/ui/Dropdown";
import { RiHandbagLine } from "react-icons/ri";

function Product() {
  const productId = useParams();
  const [numItems, setNumItems] = useState(1);
  const product = products.find((p) => p.id == productId.id);

  return (
    <>
      <Header />
      <div className="container mt-4 overflow-x-hidden lg:mt-12">
        {/* photoes and desc */}
        <div className="mx-6 grid grid-cols-1 sm:mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[970px] lg:grid-cols-2 lg:gap-12 xl:max-w-[1200px]">
          {/* photoes */}
          <div className="">
            <div className="relative mb-2">
              <span className="absolute right-[5%] top-[2%] z-40">
                <Bookmark />
              </span>
              <img
                src={product.images[0]}
                alt="product image"
                className="aspect-square w-[88vw] rounded-2xl bg-gray-100 object-cover"
              />
            </div>
            <div className="lg-h-[222px] flex w-full gap-2 sm:max-w-[296px] md:max-w-[346px]">
              <img
                src={product.images[1]}
                alt="product image"
                className=" h-[80vw] w-[44vw] rounded-2xl bg-gray-100 object-cover lg:h-[370px] lg:w-[225px] xl:lg:w-[283px]"
              />
              <img
                src={product.images[2]}
                alt="product image"
                className=" h-[80vw] w-[43vw] rounded-2xl bg-gray-100 object-cover lg:h-[370px] lg:w-[226px] xl:lg:w-[283px]"
              />
            </div>
          </div>

          {/* desc */}
          <div className="mt-8">
            <h4 className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl">
              {product.title}
            </h4>
            <div className="mb-3.5 mt-5 flex items-center justify-start gap-4 sm:mt-8">
              <PriceTag price={product.price} />
              {"|"}
              <Rating rating={product.rating} numRates={product.numRates} />
            </div>
            <div className="mt-3.5 sm:mt-8">
              <ItemColors text="Color" item={product} />
            </div>

            <div className="mt-8 flex items-center justify-between gap-2">
              <ItemsCount numItems={numItems} setNumItems={setNumItems} />
              <Button size="medium" color="black" full="full">
                <RiHandbagLine />
                Add To cart
              </Button>
            </div>

            <hr className=" my-10 border-slate-200 " />

            <div className="flex w-full flex-col gap-2">
              <Dropdown
                title="Description"
                text="Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture."
              />
              <Dropdown
                title="Fabric + Care"
                text="Made from a sheer Belgian power micromesh."
              />
              <Dropdown
                title="How it Fits"
                text="Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up."
              />
              <Dropdown
                title="FAQ"
                text="All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.
Please note, packs must be returned in full. We do not accept partial returns of packs.
Want to know our full returns policies? Here you go.
Want more info about shipping, materials or care instructions? Here!"
              />
            </div>
          </div>
        </div>

        <article className="mb-2 mt-12 px-8 sm:mx-auto sm:max-w-[600px] sm:px-0 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1200px]">
          <h2 className="text-2xl font-semibold">Product Detail</h2>
          <p className="mt-4 text-base font-thin text-slate-600">
            {product.description}
          </p>
        </article>
      </div>
    </>
  );
}

export default Product;
