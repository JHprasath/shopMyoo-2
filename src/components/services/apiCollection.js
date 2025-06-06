// src/apiCollection.js
import axios from 'axios';

const collectionApi = axios.create({
  baseURL: 'http://localhost:8080/collection',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default collectionApi;
