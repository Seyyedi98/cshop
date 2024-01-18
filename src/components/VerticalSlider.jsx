/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import ArrowButton from "./ui/Buttons/ArrowButton";

function VerticalSlider({ title, subtitle, items, children, overflow }) {
  const itemRef = useRef(null);
  const [curSlide, setCurSlide] = useState(0);
  const [childElWidth, setChildElWidth] = useState();
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);

  let childElsGap = isWideScreen ? 32 : 16;
  // Calculate children items width for carousel
  const childEl = useRef(null);

  useEffect(() => {
    // Access the child component's DOM element
    const childElement = childEl.current;

    if (childElement) {
      // Get the width of the child component
      setChildElWidth(childElement.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const moveSlideRight = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide < Math.floor(items.length / 2) ? curSlide + 1 : 0;
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${
      (childElWidth + childElsGap) * newSlide
    }px)`;
  };

  const moveSlideLeft = function () {
    const refItem = itemRef.current;
    const newSlide = curSlide > 0 ? curSlide - 1 : Math.floor(items.length / 2);
    setCurSlide(newSlide);
    refItem.style.transform = `translateX(-${
      (childElWidth + childElsGap) * newSlide
    }px)`;
  };

  return (
    <div
      className={`container mb-2 mt-16 p-4 xl:mb-16 xl:mt-32 xl:p-1.5 ${
        overflow === "hidden" && "overflow-hidden"
      }`}
    >
      <div className="mx-auto mb-16 flex items-center justify-between">
        <h1 className="text-lg font-semibold sm:text-2xl xl:text-4xl">
          {title}
          <span className="text-base text-slate-500 sm:text-2xl">
            {subtitle}
          </span>
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
