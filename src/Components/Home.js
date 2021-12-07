import { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

class Home extends Component{
    render(){
        return(
            <div>
        
        <form className="search-bar">
            <input>
            
            </input>
        </form>
        
        <div className="video-thumbnails">
            Video Thumbnail
        </div>
        {/* <Link to="/about">About page with router</Link> */}
      </div>
        )
    }
  }

  export default Home;