import axios from 'axios';

// Use the environment variable, or fall back to localhost for dev
// const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const baseURL = "/";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
