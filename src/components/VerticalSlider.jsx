/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Children, useEffect, useRef, useState } from "react";
import ArrowButton from "./ui/Buttons/ArrowButton";

function VerticalSlider({ title, subtitle, items, children, overflow }) {
  const itemRef = useRef(null);
  const [curSlide, setCurSlide] = useState(0);
  const [childElWidth, setChildElWidth] = useState();

  // Calculate children items width for carousel
  const childEl = useRef(null);
  let childElsGap = 32;

  useEffect(() => {
    // Access the child component's DOM element
    const childElement = childEl.current;

    if (childElement) {
      // Get the width of the child component
      setChildElWidth(childElement.offsetWidth);
    }
  }, []);

  const moveSlideRight = function () {
    const refItem = itemRef.current;
    const newSlide =
      curSlide < items.length - items.length / 2 ? curSlide + 1 : 0;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${
      (childElWidth + childElsGap) * newSlide
    }px)`;
  };

  const moveSlideLeft = function () {
    const refItem = itemRef.current;
    const newSlide =
      curSlide > 0 ? curSlide - 1 : items.length - items.length / 2;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${
      (childElWidth + childElsGap) * newSlide
    }px)`;
  };

  return (
    <div
      className={`container mb-16 mt-32 p-1.5 ${
        overflow === "hidden" && "overflow-hidden"
      }`}
    >
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

      <div
        style={{ gap: `${childElsGap}px` }}
        className="flex transition-all duration-700"
        ref={itemRef}
      >
        {items.map((item, index) => {
          // Clone the child and pass additional props
          const clonedChild = React.cloneElement(children, {
            item: item,
          });
          return (
            <div ref={childEl} key={index}>
              {clonedChild}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSlider;
