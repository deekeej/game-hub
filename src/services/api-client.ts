import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'e5e35e13ac65409cafdbbfd84bae5c51'
    }
})
