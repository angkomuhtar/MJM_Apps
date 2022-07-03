import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://10.0.2.2:3333/api-v1/',
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

export default instance;
