import './App.css';
import Home from './Components/Home';
import Logo from '/Users/ronniegarcia/Pursuit/mod3/Projects/yt-clone/src/images/youtube-logo.png'
import About from './Components/About';
import Videos from './Components/Videos'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <img id="yt-logo" src={Logo}/>
          <Link to="/"><h1>Home</h1></Link>
          <Link to="/about"><h1>About Us</h1></Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/videos/:id">
            <Videos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
