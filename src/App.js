import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
// import YouTube from './images/youtube-logo.png';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
        <Link to="/"id="nav-home"><p><strong>YouTube</strong></p></Link>
          <Link to="/" id="nav-home"><p>Home</p></Link>
          <Link to="/about" id="nav-about"><p>About Us</p></Link>
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
