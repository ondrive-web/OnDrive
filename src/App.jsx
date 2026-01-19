import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AdvantagesSection from './components/Advantages/Advantages';
import Countries from './components/Countries/Countries';
import AuctionsSection from './components/Auctions/Auctions';
import BudgetSection from './components/Budget/Budget';
import Steps from './components/Steps/Steps';
import ReferralSection from './components/Referal/Referal';
import Footer from './components/Footer/Footer';
import Reviews from './components/Reviews/Reviews';

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
      <BudgetSection />
      <Steps />
      <ReferralSection />
      <Reviews />

      <Footer />

      {/*  */}
      <ContactButton />
    </div>
  );
}

export default App;
