import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoClick }) => {

    const newList = videos.map( video => {
        return <VideoItem  key={ video.id.videoId } video={ video } onVideoClick={ onVideoClick } />
    })

    return (
        <div>{ newList }</div>
    )
}

export default VideoList;