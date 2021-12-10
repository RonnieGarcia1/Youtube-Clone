import { Component } from "react";
import YouTube from 'react-youtube';

class Videos extends Component{
    constructor() {
        super();
        this.state = {
            id: [],
        }
    }
    
    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="video-card">
                
                <div className="videos">
                <div>
                <YouTube videoId={this.props.match.params.id} opts={{ height: '290', width: '540' }} />
                </div>

                </div>
                </div>
            </div>
        )
    }
}
export default Videos;