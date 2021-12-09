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
                <YouTube videoId="86YLFOog4GM" opts={{ height: '290', width: '540' }} />
                <p>EarthCam Live: Placeholder</p>
                </div>
                <div>
                <YouTube videoId="BcoIOmZRvEo" opts={{ height: '290', width: '540' }} />   
                <p>EarthCam Live: Placeholder</p>
                </div>
                <div>
                <YouTube videoId="CUyy8rBnuzY" opts={{ height: '290', width: '540' }} />
                <p>EarthCam Live: Placeholder</p>
                </div>
                <div>
                <YouTube videoId="fcGDU86DuSo" opts={{ height: '290', width: '540' }} />   
                <p>EarthCam Live: Placeholder</p>
                </div>
                <div>
                <YouTube videoId="aofxeUrkYQ4" opts={{ height: '290', width: '540' }} />
                <p>EarthCam Live: Placeholder</p>
                </div>
                </div>

                </div>

            </div>
        )
    }
}
export default Videos;