/* eslint-disable no-unused-vars */
import VerticalSliderFull from "../components/VerticalSliderFull";
import Header from "../components/Header";
import Banner from "../components/Hero";
import "../styles/styles.css";
import VerticalSliderSmall from "../components/VerticalSliderSmall";
import { products, slides } from "../data/data";

function Homepage() {
  const newArrivalItems = products.slice(-6);

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
    </div>
  );
}

export default Homepage;
