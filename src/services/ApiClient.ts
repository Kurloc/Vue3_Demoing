// @ts-ignore
import axios, { AxiosInstance } from "axios";
const http: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BACK_END_URL,
    headers: {
        "Content-type": "application/json",
    },
});

export default http
