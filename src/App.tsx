import Header from './Components/Header';
import Hero from './Components/Hero';
import css from './Styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
