import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    // inVideoSelect refactored - a one-line function => inline JSX
    // onVideoSelect={(video) => setSelectedVideo(video)}
    // is equivalent to
    // onVideoSelect={setSelectedVideo}
    // take argument and pass it directly through in the same order to some other function

    return(
        <div className="ui container">
             <SearchBar onTermSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>              
                </div>
            </div>
        </div>
    );
};

export default App;