import axios from "axios";

const axiosInst = axios.create({
    baseURL: 'http://localhost:8000/'
});

export default axiosInst;