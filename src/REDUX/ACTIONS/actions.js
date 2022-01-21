
import { functionTypes } from "../TYPES/types";

export const fetchData = ( dataFromApi )=>{

    return{
        type: functionTypes.fetch,
        payload: dataFromApi
    }

}

export const submit = ( newUser )=>{

    return{
        type: functionTypes.submit,
        payload: newUser
    }

}

export const editUser = ( user )=>{

    return{
        type: functionTypes.edit,
        payload: user
    }

}

export const deleteUser = ( userOff )=>{

    return{
        
        type: functionTypes.delete,
        payload: userOff
    }

}



export const updateUser = ( user )=>{
    
    return{
        type: functionTypes.putUser,
        payload: user
    }
}

export const settingFlag = ()=>{

    return{

        type: functionTypes.setFlag,
        payload: false

    }
}
