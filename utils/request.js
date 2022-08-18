import axios from "axios";

const API_LINK = process.env.NEXT_PUBLIC_API_LINK;

const request = axios.create({ baseURL: API_LINK });

export default request;
