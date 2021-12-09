import { Component } from "react";
import YouTube from 'react-youtube';

class Videos extends Component{

    
    render(){
        return(
            <div>
                <div className="video-card">
                
                <div className="videos">
                <div>
                <YouTube videoId="AdUw5RdyZxI" opts={{ height: '290', width: '540' }} />
                <p>EarthCam Live: Times Square in 4k</p>
                </div>
                
                <div>
                <YouTube videoId="AdUw5RdyZxI" opts={{ height: '290', width: '540' }} />
                <p>EarthCam Live: Times Square in 4k</p>
                </div>

                </div>
                </div>
            </div>
        )
    }
}
export default Videos;