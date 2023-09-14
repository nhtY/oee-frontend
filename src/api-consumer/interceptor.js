import axios from 'axios';
import { BASE_URL, CURRENT_DATA_PATH } from '../constants/apiUrl';

const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.response.use(
    
    (response) => {

        // console.log("RESPONSE INTERCEPTOR...")
        localizeNumberFields(response);

        return response;
    },

    (error) => {

        return Promise.reject(error);
    }
);

/*
"id": 2349,
    "ggOee": 67.37,
    "ttGp": 1.34,
    "ttGg": 2.36,
    "tt1s": 1.98,
    "redTamir": 442,
    "farkliUrun": 13,
    "urunGrubu": 12,
    "createdAt": "2023-09-14T10:07:51.106131",
    "goee1s": 66.18
*/

function localizeNumberFields(response) {
    console.log("LOCALIZE..")

    const requestedURL = response.request.responseURL;
    if (requestedURL.includes(CURRENT_DATA_PATH)) {
        console.log("PATH MATHCES..")
        response.data.ggOee = response.data.ggOee.toLocaleString(document.documentElement.lang);
        response.data.goee1s = response.data.goee1s.toLocaleString(document.documentElement.lang);
        response.data.ttGp = response.data.ttGp.toLocaleString(document.documentElement.lang);
        response.data.ttGg = response.data.ttGg.toLocaleString(document.documentElement.lang);
        response.data.tt1s = response.data.tt1s.toLocaleString(document.documentElement.lang);

        console.log("GG-OEE: ", parseFloat(response.data.ggOee));
    }

}

export const axiosInstance = instance;