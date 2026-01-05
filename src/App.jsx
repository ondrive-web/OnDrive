import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AdvantagesSection from './components/Advantages/AdvantagesSection';
import Countries from './components/Countries/Countries';
import AuctionsSection from './components/Auctions/Auctions';

// Contact BTN
import ContactButton from './components/ContactButton/ContactButton';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AdvantagesSection />
      <Countries />
      <AuctionsSection />

      {/*  */}
      <ContactButton />
    </div>
  );
}

export default App;
