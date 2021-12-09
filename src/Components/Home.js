import { Component } from 'react';
import YouTube from 'react-youtube';

class Home extends Component{
    constructor() {
        super();
        this.state = {
            searchStr: ""
        }
    }
    
    // componentDidMount(){
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchStr}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }

    handleSearch = (e) => {
        this.setState({
            searchStr: e.target.value,
        })
        console.log(this.state.searchStr);
    }

    handleResult = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchStr}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }

    // need to work on e.target

    render(){
        return(
            <div>
                <form onSubmit={this.handleResult} id="search-bar">
                    <input type="text" id="text-input" onInput={this.handleSearch} value={this.state.searchStr} />
                    <button type="submit" id="search-button">Search</button>
                </form>
                <div className="video-thumbnails">
                    Video Thumbnail
                </div>
            </div>
        )
    }
  }

  export default Home;