import axios from "axios"

const axiosConfig = { withCredentials: true };

// fa_api
const sfHttpCommon = axios.create({
    baseURL: "http://192.168.35.117:15009/data_api/",
    headers: {
        "Content-type": "application/json", "credentials": "include",
        //"rejectUnauthorized": "false",
        "mode": "cors","crossDomain": "true"
    }
});

export {
    sfHttpCommon, axiosConfig
}
