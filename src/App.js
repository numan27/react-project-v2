import { Container } from "react-bootstrap"
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimeSection from "./components/AnimeSection";
import BestTools from "./components/BestTools";
import AnimeSection2 from "./components/AnimeSection2";
import Stats from "./components/Stats";
import SliderSection from "./components/SliderSection";
import SeparatorSection from "./components/SeparatorSection";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <FeatureCards />
        <AnimeSection />
        <BestTools />
        <AnimeSection2 />
      </Container>
      <Stats />
      <SliderSection />
      <SeparatorSection />

      <Footer />
    </div>
  );
}

export default App;
