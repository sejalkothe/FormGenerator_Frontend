import axios from 'axios'

const resApi = axios.create({
    baseURL: "http://localhost:5000/response/",
    timeout: 5000,
    headers: {
      'Accept-Version': 1,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

export default resApi