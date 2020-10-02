import axios from 'axios'

const http = axios.create({
    baseURL:'http://112.74.99.5:3000/web/api'
})

http.interceptors.request.use(function(config){
    console.log(config);
    return config;
    },function(error){
        return Promise.reject(error);
});

http.interceptors.response.use(function(response){
    return response;
    }, function(error){
        return Promise.reject(error);
});

export default http