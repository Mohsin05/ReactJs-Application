import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-26df6.firebaseio.com/'
});

export default instance;