import {axiosInstance} from './interceptor';
import { CURRENT_DATA_PATH } from '../constants/apiUrl';


/*

{
    "id": 15,
    "ggOee": 66.91,
    "ttGp": 5.0,
    "ttGg": 1.74,
    "tt1s": 2.22,
    "redTamir": 15,
    "farkliUrun": 13,
    "urunGrubu": 12,
    "createdAt": "2023-09-12T08:55:48.023069",
    "goee1s": 71.27
}

*/
export const getCurrentOeeTableData = async () => {
   
    console.log("Fetch Current OEE table data in API consumer...");

    return axiosInstance.get(CURRENT_DATA_PATH)
        .then(response => {
            console.log("FETCH current oee table data RESPONSE: ", response);
            return response.data;
        }).catch(err => {
            console.log("FETCH current oee table data ERROR: ", err);
            throw err;
        });

}
