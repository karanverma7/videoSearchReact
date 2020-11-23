import React from 'react'
import './VideoDetails.css'


const VideoDetails = ({ video }) => {
    if(!video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="video-info">
                <iframe src={videoSrc} width="100%" height="400px" title="video player"/>
                <h3>{ video.snippet.title }</h3>
                <p>{ video.snippet.description }</p>
                <h5>Featured by: { video.snippet.channelTitle }</h5>
            </div>
        </div>
    )
}

export default VideoDetails;