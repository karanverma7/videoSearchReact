import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
import './App.css'
import useVideos from '../hooks/useVideos'

const App = () => {

    const [ selectedVideo, setSelectedVideo ] = useState(null)
    const [ videos, search ] = useVideos('imagine dragons')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
    
    return (
        <div>
            <SearchBar onSubmit={ search }/>
            <div className="content">
                <VideoDetails video={ selectedVideo } /> 
                <VideoList videos={ videos } onVideoClick={ video => setSelectedVideo(video) } />
            </div>
        </div>
    )
}

export default App;
