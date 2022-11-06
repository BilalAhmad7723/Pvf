import axios from 'axios';

const http = axios.create({
  // baseURL: 'https://pakistanvoterfront.herokuapp.com',
   baseURL: 'http://192.168.1.33:5000', //Release Base URL
  // baseURL: 'http://192.168.20.3:5000', //Release Base URL
  //  baseURL: 'http://192.168.200.124:5000', //Release Base URL
 // baseURL: 'http://192.168.200.124:5000', 
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use(
  async config => { config.headers = { }; return config; },
  err => { return Promise.reject(err); },
);

export default http;