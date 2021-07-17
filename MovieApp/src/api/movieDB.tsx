import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params : {
        api_key : '7c4a0d3e6c1f90531ee4d908e4dccf6f',
        language: 'es_ES'
    }
})

export default movieDB;