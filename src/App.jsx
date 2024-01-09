import VerticalSliderFull from "./components/VerticalSliderFull";
import Header from "./components/Header";
import Banner from "./components/Hero";
import "./index.css";
import "./styles/styles.css";
import VerticalSliderSmall from "./components/VerticalSliderSmall";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <VerticalSliderFull
        title=" Discover more. "
        subtitle="Good things are waiting for you"
      />
      <VerticalSliderSmall
        title="New Arrivals. "
        subtitle="REY backpacks & bags"
      />
    </div>
  );
}

export default App;
