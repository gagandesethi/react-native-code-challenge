import { ADD_CAT } from "../commons/Strings";
import { storecCat } from "../commons/Methods";

export function saveCats(data){
    return{
        type:ADD_CAT,
        payload:storecCat(data)
    }
}
