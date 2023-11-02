import '../../App.css';
import { Cards } from '../Cards/Cards';
import { HeroSection } from '../HeroSection/HeroSection';
import { Footer } from '../Footer/Footer';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
