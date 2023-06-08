import logo from './logo.svg';
import './App.css';
import './Components/Header/Header.css'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
