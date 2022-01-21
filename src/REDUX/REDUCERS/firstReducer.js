
import { functionTypes } from "../TYPES/types";


const initialState = {

   flagEdit: false,
}

export const firstReducer = ( state = initialState, action )=>{

   switch (action.type) {
      
        case functionTypes.fetch:
            return{
                ...state,
                initialData: action.payload
            }
            
        case functionTypes.submit:
           
            return{
                ...state,
                userInputsVals: action.payload,
                flagEdit: false
            }

        case functionTypes.edit:
            return{
                ...state,
                flagEdit: true,
                selectedUser: action.payload
            }

        case functionTypes.delete:
            return{
                ...state,
                userId: action.payload,
                userInputsVals: undefined
            }
        
        case functionTypes.putUser:
         
            return{
                ...state,
                updatedUser: action.payload
            }

        case functionTypes.setFlag:
            return{
                ...state,
                flagEdit: action.payload,
                selectedUser: undefined
            }
        
           
       default:
           return state;
   }

}