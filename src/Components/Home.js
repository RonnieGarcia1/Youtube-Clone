import { Component } from 'react';
import Videos from './Videos';
import YouTube from 'react-youtube';

class Home extends Component{
    constructor() {
        super();
        this.state = {
            searchStr: "",
            data: []
        }
    }

    handleResult = (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchStr}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then((ytData) => {
            this.setState({
                data: ytData
            })
            console.log(this.state.data);
        });
    }

    handleSearch = (e) => {     
        this.setState({
            searchStr: e.target.value,
        })
        console.log(this.state.searchStr);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleResult} id="search-bar">
                    <input type="text" id="text-input" onChange={this.handleSearch} value={this.state.searchStr} />
                    <button type="submit" id="search-button">Search</button>
                </form>
                <div className="video-thumbnails">
                    <Videos />
                </div>
            </div>
        )
    }
  }

  export default Home;