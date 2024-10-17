import axios from "axios";

const restApi = axios.create({
    baseURL: 'http://localhost:3000'
});

export default restApi