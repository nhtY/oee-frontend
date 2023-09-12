import axios from 'axios';
import { BASE_URL, CURRENT_DATA_PATH } from '../constants/apiUrl';

export const getCurrentOeeTableData = () => {
   
    console.log("Fetch Current OEE table data in API consumer...");

    return axios.get(BASE_URL.concat(CURRENT_DATA_PATH))
        .then(response => {
            console.log("FETCH current oee table data RESPONSE: ", response);
            return response.data;
        }).catch(err => {
            console.log("FETCH current oee table data ERROR: ", err);
            return err;
        });

}
