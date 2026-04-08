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
import TelegramNews from './components/Telegram/TelegramInfo';
// import TrustindexWidget from './components/Trustindex/Trustindex';

import ContactButton from './components/ContactButton/ContactButton';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AdvantagesSection id="about" />
      <Countries id="countries" />{' '}
      {/* Заменил с referral, так как это логичнее для стран */}
      <AuctionsSection id="auctions" />
      <BudgetSection id="budget" />
      <Steps id="steps" />
      <ReferralSection id="referral" /> {/* Перенес referral сюда */}
      <TelegramNews id="news" />
      {/* <TrustindexWidget id="trustindex" /> */}
      <Reviews id="reviews" />
      <Footer id="contact" />
      {/* */}
      <ContactButton />
    </div>
  );
}

export default App;
