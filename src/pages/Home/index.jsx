import { Container } from "react-bootstrap"
import FeatureCards from "./components/FeatureCards";

import AnimeSection from "./components/AnimeSection";
import BestTools from "./components/BestTools";
import AnimeSection2 from "./components/AnimeSection2";
import Stats from "./components/Stats";
import SliderSection from "./components/SliderSection";
import SeparatorSection from "./components/SeparatorSection";
import HeroSection from "./components/HeroSection";
import AppLayout from "../../components/AppLayout/AppLayout";

function Home() {
  return (
    <AppLayout>
     
      <HeroSection/>
      <Container>
        <FeatureCards />
        <AnimeSection />
        <BestTools />
        <AnimeSection2 />
      </Container>
      <Stats />
      <SliderSection />
      <SeparatorSection />
 
    </AppLayout>
  );
}

export default Home;
