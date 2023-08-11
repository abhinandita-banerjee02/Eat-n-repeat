import axios from "axios";
import { API_KEY } from '@env';
// console.log(API_KEY);

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: API_KEY,
    }
})