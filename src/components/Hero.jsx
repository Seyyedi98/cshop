/* eslint-disable no-unused-vars */
import dots from "../assets/images/banner/dots.svg";
import ArrowButton from "./ui/Buttons/ArrowButton";
import hero1 from "../assets/images/banner/hero-right-1.webp";
import hero2 from "../assets/images/banner/hero-right-2.webp";
import hero3 from "../assets/images/banner/hero-right-3.webp";
import Button from "./ui/Buttons/Button";
import { RiSearchLine } from "react-icons/ri";
import Slider from "./Slider";

function Banner() {
  return (
    <Slider
      slides={[
        {
          id: 1,
          image: hero1,
          subtitle: "In this season, find the best 🔥",
          title: "Exclusive collection for everyone",
        },
        {
          id: 2,
          image: hero2,
          subtitle: "In this season, find the best 🔥",
          title: "Exclusive collection for everyone",
        },
        {
          id: 3,
          image: hero3,
          subtitle: "In this season, find the best 🔥",
          title: "Exclusive collection for everyone",
        },
      ]}
      bgImage={dots}
      bgColor="bg-palegreen"
    ></Slider>
  );
}

export default Banner;
