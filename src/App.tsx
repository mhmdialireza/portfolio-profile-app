import Expertise from './Components/Expertise';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Work from './Components/Work';
import css from './Styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Work />
    </div>
  );
};

export default App;
