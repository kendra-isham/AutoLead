import { DATABASE_SUCCESS, DATABASE_FAIL
} from "../actions/types";

// set initial state to empty array
const initialState = {
 db : []
};

export default (state=initialState, action) => {
 const {type, payload} = action;
 let {db} = state;
 switch(type){

     case DATABASE_SUCCESS:
         db = payload;
        // console.log(payload);         
         return {
             ...state,
             db
         }
     case DATABASE_FAIL:
         console.log("DATABASE_FAIL");  
         return {
             ...state,
             db
         }
     default: 
         return state
 };
};