import { Component } from 'react';
import Videos from './Videos';
import YouTube from 'react-youtube';

class Home extends Component{
    
    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=dog&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }

    render(){
        return(
            <div>
                <form id="search-bar">
                    <input id="text-input" />
                    <button id="search-button">Search</button>
                </form>
                <div className="video-thumbnails">
                    <Videos />
                </div>
            </div>
        )
    }
  }

  export default Home;