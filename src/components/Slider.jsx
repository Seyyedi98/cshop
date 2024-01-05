/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ArrowButton from "./ui/Buttons/ArrowButton";
import Button from "./ui/Buttons/Button";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

function Slider({ slides, bgImage, bgColor }) {
  const [curSlide, setCurSlide] = useState(1);
  const data = slides[curSlide];

  function nextSlide() {
    if (curSlide < slides.length - 1) {
      setCurSlide(curSlide + 1);
    } else {
      setCurSlide(0);
    }
  }

  function prevSlide() {
    if (curSlide > 0) {
      setCurSlide(curSlide - 1);
    } else {
      setCurSlide(slides.length - 1);
    }
  }

  return (
    <div>
      <div className={`relative h-[680px] ${bgColor} overflow-hidden`}>
        {bgImage && <img src={bgImage} className="m-auto w-10/12" />}
        <div className="absolute left-4 top-1/2 z-10">
          <ArrowButton direction="left" action={prevSlide} />
        </div>
        <div className="absolute right-4 top-1/2 z-10">
          <ArrowButton direction="right" action={nextSlide} />
        </div>
        <div className={"absolute top-0 h-full w-full"}>
          <div className="container relative h-full">
            <div className="grid h-full w-[60%] content-center justify-items-start gap-8">
              <h4 className="animate-[fadeInRight_0.7s_forwards]  text-xl font-medium opacity-0">
                {data.subtitle}
              </h4>
              <h1 className="animate-[fadeInRight_0.7s_0.2s_forwards] text-7xl font-semibold leading-[1.1] opacity-0">
                {data.title}
              </h1>

              <Button
                animation="animate-[fadeInRight_0.7s_0.4s_forwards] opacity-0"
                mt="8"
                fill="black"
              >
                Explore more <RiSearchLine className="text-xl" />
              </Button>
            </div>

            <div className="absolute right-0 top-0 mr-[-10%] w-[52%] origin-top-left animate-[fadeIn_0.7s_forwards] opacity-0">
              <img src={data.image} />
            </div>
          </div>
        </div>
        )
      </div>
    </div>
  );
}

export default Slider;
