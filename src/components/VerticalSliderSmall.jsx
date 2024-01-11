/* eslint-disable react/prop-types */
import ArrowButton from "./ui/Buttons/ArrowButton";
import { useRef, useState } from "react";
import ProductCard from "./ui/Products/ProductCard";

function VerticalSliderSmall({ title, subtitle, products }) {
  const itemRef = useRef(null);
  const [curSlide, setCurSlide] = useState(0);

  const moveSlideRight = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide < products.length - 4 ? curSlide + 1 : 0;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${328 * newSlide}px)`;
  };

  const moveSlideLeft = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide > 0 ? curSlide - 1 : products.length - 2;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${328 * newSlide}px)`;
  };

  return (
    <div className="container mb-16 mt-32 overflow-hidden p-1.5">
      <div className="mx-auto mb-16 flex items-center justify-between">
        <h1 className="text-4xl font-semibold">
          {title}
          <span className="text-slate-500">{subtitle}</span>
        </h1>
        <div className="flex gap-5">
          <ArrowButton
            direction="left"
            color="rgb(148, 163, 184)"
            outlineColor="light"
            offset="close"
            action={moveSlideLeft}
          />
          <ArrowButton
            direction="right"
            color="rgb(148, 163, 184)"
            outlineColor="light"
            offset="close"
            action={moveSlideRight}
          />
        </div>
      </div>

      <div className="flex gap-8 transition-all duration-700" ref={itemRef}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default VerticalSliderSmall;
