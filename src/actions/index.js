import  axios from 'axios';
const API_URL= `http://tv.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats`;

export const FETCH_CHANNEL = 'FETCH_CHANNEL';

export function fetchChannel() {
    const request = axios.get(API_URL);

    return {
        'type': FETCH_CHANNEL,
        payload: request
    }
};
