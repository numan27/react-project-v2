import {Container} from "react-bootstrap"
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimeSection from "./components/AnimeSection";
import BestTools from "./components/BestTools";

function App() {
  return (
    <div>
      <Header />
      <Container>
      <FeatureCards />
      <AnimeSection />
      <BestTools />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
