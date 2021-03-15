import axios from 'axios';


const KEY = 'AIzaSyBJI8AxVW-VpGmpCa9pmwxgPup_xdL2Q4I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


