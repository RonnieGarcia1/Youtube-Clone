import { Component } from 'react';

class Home extends Component{
    
    componentDidMount(){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=dog&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }

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
      </div>
        )
    }
  }

  export default Home;