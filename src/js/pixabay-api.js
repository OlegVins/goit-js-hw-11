import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54587804-730d69b5b34cc935cc62fa273';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    return axios.get(BASE_URL, { params }).then(response => {
        return response.data;
    });
}