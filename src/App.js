import YouTube from 'youtube-react';
import logo from './logo.svg';
import './App.css';

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




export default App;
