import { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

class Home extends Component{
    render(){
        return(
            <div>
                <form id="search-bar">
                    <input id="text-input" />
                    <button id="search-button">Search</button>
                </form>
                <div className="video-thumbnails">
                    Video Thumbnail
                </div>
            </div>
        )
    }
  }

  export default Home;