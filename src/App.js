import './App.css';
import Home from './Components/Home';
import Logo from '/Users/ronniegarcia/Pursuit/mod3/Projects/yt-clone/src/images/youtube-logo.png'
import About from './Components/About';
import Videos from './Components/Videos'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

<<<<<<< HEAD
function App() {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  );
  return (

    <YouTube videoId="2g811Eo7K8U" opts={{ height: '390', width: '640' }} /> 
    );
};
// function App() {
// return (
//     <div className="App">
//       <header className="App-header">
     
//       </header>
//     </div>
//   );
// }



=======

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <img id="yt-logo" src={Logo} alt="yt logo"/>
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
>>>>>>> 0a64b41734c29496707d5d8f9366d931bd8ee7cd

export default App;
