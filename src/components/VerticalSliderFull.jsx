/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import ArrowButton from "./ui/Buttons/ArrowButton";
import VerticalSliderItems from "./VerticalSliderItems";
import { slides } from "../data/data";

function VerticalSliderFull({ title, subtitle }) {
  const itemRef = useRef(null);
  const [curSlide, setCurSlide] = useState(0);

  // Move the slider to the right
  const moveSlideRight = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide < slides.length - 2 ? curSlide + 1 : 0;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${572 * newSlide}px)`;
  };

  // Move the slider to the left
  const moveSlideLeft = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide > 0 ? curSlide - 1 : slides.length - 2;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${572 * newSlide}px)`;
  };
  return (
    <div className="container mb-16 mt-32">
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
        <VerticalSliderItems slides={slides} />
      </div>
    </div>
  );
}

export default VerticalSliderFull;
