import { DATABASE_SUCCESS, DATABASE_FAIL
} from "../actions/types";

// set initial logged in state to false
const initialState = {
 db : []
};

//this needs cleaned up so state is not database -> db -> 0 -> db

export default (state=initialState, action) => {
 const {type, payload} = action;
 let {db} = state;
 switch(type){

     case DATABASE_SUCCESS:
         db = [{ db:payload }];
         console.log(payload);         
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