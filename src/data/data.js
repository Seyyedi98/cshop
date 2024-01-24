/* eslint-disable no-undef */
import slidesImg1 from "../assets/images/sliders/sliderImg1.webp";
import slidesImg2 from "../assets/images/sliders/sliderImg2.webp";
import slidesImg3 from "../assets/images/sliders/sliderImg3.webp";
import slidesImg4 from "../assets/images/sliders/sliderImg4.webp";

import dep1 from "../assets/images/categories/department1.webp";
import dep2 from "../assets/images/categories/department2.webp";
import dep3 from "../assets/images/categories/department3.webp";
import dep4 from "../assets/images/categories/department4.webp";

const slides = [
  {
    id: 1,
    bgColor: "rgb(254, 252, 232)",
    title: "Shop the latest from top brands",
    subtitle: "Explore new arrivals",
    image: slidesImg1,
  },
  {
    id: 2,
    bgColor: "rgb(254, 242, 242)",
    title: "Give the gift of choice",
    subtitle: "Digital gift cards",
    image: slidesImg2,
  },
  {
    id: 3,
    bgColor: "rgb(239 ,246 ,255)",
    title: "Up to 80% off retail",
    subtitle: "Sale collection",
    image: slidesImg3,
  },
  {
    id: 4,
    bgColor: "rgb(240 ,253 ,244)",
    title: "Up to 80% off retail",
    subtitle: "Sale collection",
    image: slidesImg4,
  },
];

const departments = [
  {
    title: "Travel Kits",
    subtitle: "20+ categries",
    image: dep1,
    bgColor: "#ede9fe",
  },
  {
    title: "Beauty Products",
    subtitle: "10+ categries",
    image: dep2,
    bgColor: "#e2e8f0",
  },
  {
    title: "Sport Kits",
    subtitle: "34+ categries",
    image: dep3,
    bgColor: "#e0f2fe",
  },
  {
    title: "Pets food",
    subtitle: "12+ categries",
    image: dep4,
    bgColor: "#ffedd5",
  },
];

export { slides, departments };
