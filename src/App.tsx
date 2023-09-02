import Header from './Components/Header';
import css from './Styles/App.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  );
};

export default App;
