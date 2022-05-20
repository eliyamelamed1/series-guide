import axios from 'axios';

const baseUrl = 'https://api.tvmaze.com';

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
