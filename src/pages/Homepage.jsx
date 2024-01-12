/* eslint-disable no-unused-vars */
import VerticalSliderFull from "../components/VerticalSliderFull";
import Header from "../components/Header";
import Banner from "../components/Hero";
import "../styles/styles.css";
import VerticalSliderSmall from "../components/VerticalSliderSmall";
import { products, slides } from "../data/data";
import HowItWorks from "../components/HowItWorks";

function Homepage() {
  const numNewArrivalItems = 6;
  const newArrivalItems = products.slice(-{ numNewArrivalItems });

  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <VerticalSliderFull
        title=" Discover more. "
        subtitle="Good things are waiting for you"
        slides={slides}
      />
      <VerticalSliderSmall
        title="New Arrivals. "
        subtitle="REY backpacks & bags"
        products={newArrivalItems}
      />
      <HowItWorks />
    </div>
  );
}

export default Homepage;
