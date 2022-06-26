import axios from "axios";

const API_LINK = process.env.API_LINK;

const request = axios.create({ baseURL: API_LINK });

export default request;
