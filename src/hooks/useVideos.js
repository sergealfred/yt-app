import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]) // [] equivalent to componentDidMount

    // onTermSubmit renamed to search
     const search = async term => {
        const response = await youtube.get('/search', { params: {q: term }}); // q property from youtube API
 
        // take list of videos and set them as state on App component
        setVideos(response.data.items);
     };

     return [videos, search];
};

export default useVideos;