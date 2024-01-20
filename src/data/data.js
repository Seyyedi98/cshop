/* eslint-disable no-undef */
import slidesImg1 from "../assets/images/sliders/sliderImg1.webp";
import slidesImg2 from "../assets/images/sliders/sliderImg2.webp";
import slidesImg3 from "../assets/images/sliders/sliderImg3.webp";
import slidesImg4 from "../assets/images/sliders/sliderImg4.webp";

import headset1 from "../assets/images/Products/Headsets/Headset1.jpg";
import headset2 from "../assets/images/Products/Headsets/Headset2.jpg";
import headset3 from "../assets/images/Products/Headsets/Headset3.jpg";
import headset4 from "../assets/images/Products/Headsets/Headset4.jpg";
import laptop1 from "../assets/images/Products/Laptop/Laptop1.jpg";
import laptop2 from "../assets/images/Products/Laptop/Laptop2.jpg";
import laptop3 from "../assets/images/Products/Laptop/Laptop3.jpg";
import laptop4 from "../assets/images/Products/Laptop/Laptop4.jpg";
import tablet1 from "../assets/images/Products/tablet/tablet1.jpg";
import tablet2 from "../assets/images/Products/tablet/tablet2.jpg";
import tablet3 from "../assets/images/Products/tablet/tablet3.jpg";
import tablet4 from "../assets/images/Products/tablet/tablet4.jpg";
import watch1 from "../assets/images/Products/watches/watch1.jpg";
import watch2 from "../assets/images/Products/watches/watch2.jpg";
import watch3 from "../assets/images/Products/watches/watch3.jpg";
import watch4 from "../assets/images/Products/watches/watch1.jpg";
import earbud1 from "../assets/images/Products/earbuds/earbuds1.jpg";
import earbud2 from "../assets/images/Products/earbuds/earbuds2.jpg";
import earbud3 from "../assets/images/Products/earbuds/earbuds3.jpg";
import earbud4 from "../assets/images/Products/earbuds/earbuds1.jpg";
import mobile1 from "../assets/images/Products/mobile/mobile1.jpg";
import mobile2 from "../assets/images/Products/mobile/mobile2.jpg";
import mobile3 from "../assets/images/Products/mobile/mobile3.jpg";
import mobile4 from "../assets/images/Products/mobile/mobile1.jpg";
import sneakers1 from "../assets/images/Products/Sneakers/Sneakers-01.jpg";
import sneakers2 from "../assets/images/Products/Sneakers/Sneakers-02.jpg";
import sneakers3 from "../assets/images/Products/Sneakers/Sneakers-03.jpg";
import sneakers4 from "../assets/images/Products/Sneakers/Sneakers-04.jpg";
import pc1 from "../assets/images/Products/PC/PC1.jpg";
import pc2 from "../assets/images/Products/PC/PC2.jpg";
import pc3 from "../assets/images/Products/PC/PC1.jpg";
import pc4 from "../assets/images/Products/PC/PC4.jpg";
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

const products = [
  {
    id: 1,
    bgColor: "rgb(254, 252, 232)",
    title: "Headset",
    subtitle: "Unlimit musin",
    images: [headset1, headset2, headset3, headset4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
        Orange: "#fb923c",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction. The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
  },
  {
    id: 2,
    bgColor: "rgb(221, 237, 255)",
    title: "Laptop",
    subtitle: "Powerful computing",
    images: [laptop1, laptop2, laptop3, laptop4],
    price: 1299,
    rating: 4.7,
    numRates: 150,
    colors: [
      {
        Silver: "#c0c0c0",
        Blue: "#3498db",
        Green: "#2ecc71",
      },
    ],
    description:
      "Experience high-performance computing with our latest laptop. Equipped with advanced processors and cutting-edge technology, this laptop delivers powerful and efficient performance for all your computing needs.",
  },
  {
    id: 3,
    bgColor: "rgb(255, 245, 230)",
    title: "Smartphone",
    subtitle: "Stay connected",
    images: [mobile1, mobile2, mobile3, mobile4],
    price: 699,
    rating: 4.8,
    numRates: 200,
    colors: [
      {
        Black: "#000000",
        "Rose Gold": "#e74c3c",
        Silver: "#bdc3c7",
      },
    ],
    description:
      "Our latest smartphone offers a seamless and immersive experience. Stay connected with powerful features, stunning design, and a vibrant display. Capture every moment with the advanced camera technology.",
  },
  {
    id: 4,
    bgColor: "rgb(243, 244, 246)",
    title: "Camera",
    subtitle: "Capture memories",
    images: [mobile1, mobile2, mobile3, mobile4],
    price: 499,
    rating: 4.6,
    numRates: 180,
    colors: [
      {
        Silver: "#bdc3c7",
        Black: "#2c3e50",
        Gold: "#ffd700",
      },
    ],
    description:
      "Elevate your photography with our high-quality camera. Whether you're a professional photographer or a casual shooter, this camera delivers exceptional image quality and advanced features to capture memorable moments.",
  },
  {
    id: 5,
    bgColor: "rgb(240, 243, 255)",
    title: "Smart Watch",
    subtitle: "Stay active",
    images: [watch1, watch2, watch3, watch4],
    price: 199,
    rating: 4.5,
    numRates: 220,
    colors: [
      {
        Black: "#000000",
        White: "#ffffff",
        Red: "#e74c3c",
        Blue: "#3498db",
      },
    ],
    description:
      "Monitor your health and stay connected with our smartwatch. Packed with fitness tracking features, a stylish design, and a variety of watch faces, this smartwatch is the perfect companion for an active lifestyle.",
  },
  {
    id: 6,
    bgColor: "rgb(255, 243, 234)",
    title: "Wireless Earbuds",
    subtitle: "Immersive audio",
    images: [earbud1, earbud2, earbud3, earbud4],
    price: 149,
    rating: 4.9,
    numRates: 250,
    colors: [
      {
        White: "#ffffff",
        Gold: "#ffd700",
      },
    ],
    description:
      "Experience immersive audio with our wireless earbuds. Enjoy crystal-clear sound, comfortable fit, and the freedom of wireless technology. Perfect for music lovers and on-the-go enthusiasts.",
  },
  {
    id: 7,
    bgColor: "rgb(255, 235, 236)",
    title: "Gaming Console",
    subtitle: "Ultimate gaming experience",
    images: [tablet1, tablet2, tablet3, tablet4],
    price: 399,
    rating: 4.8,
    numRates: 300,
    colors: [
      {
        Black: "#000000",
        Red: "#e74c3c",
        Blue: "#3498db",
        Green: "#2ecc71",
      },
    ],
    description:
      "Immerse yourself in the ultimate gaming experience with our gaming console. Powerful graphics, responsive controls, and a vast library of games make this console the perfect choice for gamers of all levels.",
  },
  {
    id: 8,
    bgColor: "rgb(243, 245, 243)",
    title: "Tablet",
    subtitle: "Portable productivity",
    images: [tablet1, tablet2, tablet3, tablet4],
    price: 349,
    rating: 4.7,
    numRates: 180,
    colors: [
      {
        Silver: "#bdc3c7",
        Blue: "#3498db",
      },
    ],
    description:
      "Enhance your productivity on the go with our tablet. Featuring a sleek design, powerful performance, and a high-resolution display, this tablet is perfect for work, entertainment, and creativity.",
  },
  {
    id: 9,
    bgColor: "rgb(255, 255, 255)",
    title: "Running Shoes",
    subtitle: "Comfortable and stylish",
    images: [sneakers1, sneakers2, sneakers3, sneakers4],
    price: 129,
    rating: 4.7,
    numRates: 120,
    colors: [
      {
        Black: "#000000",
        White: "#ffffff",
        Red: "#e74c3c",
      },
    ],
    description:
      "Hit the pavement in style with our comfortable running shoes. Engineered for maximum comfort and performance, these shoes will take your running experience to the next level. Stay active and look good doing it!",
  },
  {
    id: 10,
    bgColor: "rgb(240, 240, 240)",
    title: "Smart Home Hub",
    subtitle: "Control your home",
    images: [pc1, pc2, pc3, pc4],
    price: 199,
    rating: 4.6,
    numRates: 190,
    colors: [
      {
        White: "#ffffff",
        Black: "#000000",
        Blue: "#3498db",
        Gray: "#7f8c8d",
      },
    ],
    description:
      "Transform your home into a smart home with our smart home hub. Control your lights, thermostat, and other devices with ease. The intuitive interface makes home automation simple and convenient.",
  },
];
const topSells = [
  {
    id: 1,
    bgColor: "rgb(254, 252, 232)",
    title: "Headset",
    subtitle: "Unlimit musin",
    image: headset1,
    images: [headset1, headset2, headset3, headset4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
        orange: "#fb923c",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
  },
  {
    id: 2,
    bgColor: "rgb(254, 252, 232)",
    title: "Tablet",
    subtitle: "Unlimit musin",
    image: headset1,
    images: [tablet1, tablet2, tablet3, tablet4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
  },
  {
    id: 3,
    bgColor: "rgb(254, 252, 232)",
    title: "Watches",
    subtitle: "Unlimit musin",
    image: headset1,
    images: [watch1, watch2, watch3, watch4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
  },
  {
    id: 4,
    bgColor: "rgb(254, 252, 232)",
    title: "Earbuds",
    subtitle: "Unlimit musin",
    image: headset1,
    images: [earbud1, earbud2, earbud3, earbud4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
  },
  {
    id: 5,
    bgColor: "rgb(254, 252, 232)",
    title: "Mobile Phones",
    subtitle: "Unlimit musin",
    image: headset1,
    images: [mobile1, mobile2, mobile3, mobile4],
    price: 299,
    rating: 4.9,
    numRates: 285,
    colors: [
      {
        Black: "#222222",
      },
    ],
    description:
      "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
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

export { slides, products, topSells, departments };
