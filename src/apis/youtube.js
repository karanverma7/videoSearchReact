import axios from 'axios'

const KEY = 'AIzaSyB-t72yEVj1oeR1IAyDAjMKZ6BGYom7xhg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        maxResults: 5,
        part: 'snippet',
        type: 'video'
    }
})