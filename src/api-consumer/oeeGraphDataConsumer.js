import { LAST_TWELVE_PATH } from "../constants/apiUrl";
import {axiosInstance} from "./interceptor";

export const getOeeGraphData = async () => {
   
    console.log("Fetch Oee Graph Data in API consumer...");

    return axiosInstance.get(LAST_TWELVE_PATH)
        .then(response => {
            // console.log("FETCH Oee Graph Data RESPONSE: ", response);
            return response.data;
        }).catch(err => {
            console.log("FETCH Oee Graph Data ERROR: ", err);
            throw err;
        });

}




/* Sample Response Data:

{
    "content": [
        {
            "id": 5,
            "ggOee": 65.39,
            "ttGp": 0.55,
            "ttGg": 1.98,
            "tt1s": 0.24,
            "redTamir": 5,
            "farkliUrun": 13,
            "urunGrubu": 12,
            "createdAt": "2023-09-13T09:49:24.962147",
            "goee1s": 76.19
        },
        {
            "id": 4,
            "ggOee": 65.51,
            "ttGp": 2.88,
            "ttGg": 3.95,
            "tt1s": 3.48,
            "redTamir": 4,
            "farkliUrun": 13,
            "urunGrubu": 12,
            "createdAt": "2023-09-13T09:49:21.945437",
            "goee1s": 76.59
        },
        {
            "id": 3,
            "ggOee": 69.95,
            "ttGp": 0.59,
            "ttGg": 3.53,
            "tt1s": 2.91,
            "redTamir": 3,
            "farkliUrun": 13,
            "urunGrubu": 12,
            "createdAt": "2023-09-13T09:49:18.882188",
            "goee1s": 75.82
        },
        {
            "id": 2,
            "ggOee": 68.63,
            "ttGp": 3.59,
            "ttGg": 4.14,
            "tt1s": 3.18,
            "redTamir": 2,
            "farkliUrun": 13,
            "urunGrubu": 12,
            "createdAt": "2023-09-13T09:49:15.596128",
            "goee1s": 63.84
        },
        {
            "id": 1,
            "ggOee": 62.05,
            "ttGp": 3.16,
            "ttGg": 1.35,
            "tt1s": 2.75,
            "redTamir": 1,
            "farkliUrun": 13,
            "urunGrubu": 12,
            "createdAt": "2023-09-13T09:49:12.495204",
            "goee1s": 65.51
        }
    ],
    "pageable": {
        "sort": {
            "empty": false,
            "unsorted": false,
            "sorted": true
        },
        "offset": 0,
        "pageSize": 12,
        "pageNumber": 0,
        "unpaged": false,
        "paged": true
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 5,
    "size": 12,
    "number": 0,
    "sort": {
        "empty": false,
        "unsorted": false,
        "sorted": true
    },
    "first": true,
    "numberOfElements": 5,
    "empty": false
}

*/
