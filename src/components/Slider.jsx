/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import ArrowButton from "./ui/Buttons/ArrowButton";
import Button from "./ui/Buttons/Button";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function Slider({ slides, bgImage, bgColor }) {
  const [curSlide, setCurSlide] = useState(0);
  const data = slides[curSlide];

  const changeSlideInterval = useEffect(() => {
    const changeSlideInterval = setInterval(nextSlide, 60000);
    return () => {
      clearInterval(changeSlideInterval);
    };
  }, [nextSlide]);

  function nextSlide() {
    if (curSlide < slides.length - 1) {
      setCurSlide(curSlide + 1);
    } else {
      setCurSlide(0);
    }
    clearInterval(changeSlideInterval);
  }

  function prevSlide() {
    if (curSlide > 0) {
      setCurSlide(curSlide - 1);
    } else {
      setCurSlide(slides.length - 1);
    }
    clearInterval(changeSlideInterval);
  }

  function Content() {
    return (
      <div className={`relative h-[680px] ${bgColor} overflow-hidden`}>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer gap-2">
          {slides.map((slide, index) => (
            <div
              className="h-1 w-20 rounded-full bg-white"
              key={slide.id}
              onClick={() => setCurSlide(index)}
            >
              <span
                className={twMerge(
                  `transition-width z-40 block h-1 w-0 animate-[slideIn_0.7s_forwards] rounded-full ${
                    curSlide === slide.id - 1 ? "w-20 bg-black" : "w-20"
                  }`,
                )}
              ></span>
            </div>
          ))}
        </div>
        {bgImage && <img src={bgImage} className="m-auto w-10/12" />}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 ">
          <ArrowButton
            direction="left"
            action={prevSlide}
            outlineColor="dark"
            color="rgb(71, 85, 105)"
            offset="far"
          />
        </div>
        <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
          <ArrowButton
            direction="right"
            action={nextSlide}
            outlineColor="dark"
            color="rgb(71, 85, 105)"
            offset="far"
          />
        </div>
        <div className={"absolute top-0 h-full w-full"}>
          <div className="container relative h-full">
            <div className="grid h-full w-[60%] content-center justify-items-start gap-8">
              <h4 className="animate-[fadeInRight_0.7s_forwards]  text-xl font-medium opacity-0">
                {data.subtitle}
              </h4>
              <h1 className="mb-8 animate-[fadeInRight_0.7s_0.2s_forwards] text-7xl font-semibold leading-[1.1] opacity-0">
                {data.title}
              </h1>

              <Button
                animation="animate-[fadeInRight_0.7s_0.4s_forwards] opacity-0"
                mt="8"
                color="black"
                size="big"
              >
                Explore more <RiSearchLine className="text-xl" />
              </Button>
            </div>
            <div
              className={`absolute right-0 mr-[-10%] w-[52%] origin-top-left animate-[fadeIn_0.7s_forwards] opacity-0 ${
                data.resize ? `bottom-0 mr-[-15%] w-[70%]` : `top-0`
              }`}
            >
              <img src={data.image} />
            </div>
          </div>
        </div>
        )
      </div>
    );
  }

  return <Content />;
}

export default Slider;
