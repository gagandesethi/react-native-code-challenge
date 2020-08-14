import { ADD_CAT } from "../commons/Strings";

const initialState={
    addCat:undefined
};
const addCatReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_CAT:
            return{
                ...state,
                addCat:action.payload
            }
            default:
                return state;
    }
}
export default addCatReducer;