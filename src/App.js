import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="">YouTube</a>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/videos/:id" component={Videos}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
