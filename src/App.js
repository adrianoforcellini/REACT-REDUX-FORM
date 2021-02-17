import Header from './components/header';
import Fieldset1 from './components/fieldset1'
import Fieldset2 from './components/fieldset2';
import './App.css';
import Button from './components/button';
import { Provider } from "react-redux";
import store from "./store";

// import { Provider } from 'react-redux';
// import store from './store/index';

function App() {
  return (
    <div className="App">
          <Provider store={store}>

      <Header />
      <Fieldset1 />
      <Fieldset2 />
      <Button />
      </Provider>

    </div>
  );
}

export default App;
