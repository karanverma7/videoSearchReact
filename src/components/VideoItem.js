import React from 'react'
import './VideoItem.css'


const VideoItem = ({ video, onVideoClick }) => {

    return (
        <div className="video-item" onClick={ () => onVideoClick(video) }>
            <img src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title}></img>
            <div>
                <h4>{ video.snippet.title }</h4>
                <p>Featured by: { video.snippet.channelTitle }</p>
            </div>        
        </div>
    )
}

export default VideoItem;