import './App.css';


import Home from './components/home';
import Cart from './components/cart';

import { BrowserRouter, Route,  Switch } from 'react-router-dom';

function App() {

  return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
