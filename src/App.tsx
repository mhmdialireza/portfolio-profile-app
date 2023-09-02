import Expertise from './Components/Expertise';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import People from './Components/People';
import Portfolio from './Components/Portfolio';
import Work from './Components/Work';
import css from './Styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Work />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
