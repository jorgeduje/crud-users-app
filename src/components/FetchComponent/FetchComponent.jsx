import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../REDUX/ACTIONS/actions';

export const FetchComponent = () => {

    const userInputsVals = useSelector( state => state.firstReducer.userInputsVals )

    const userId = useSelector(state => state.firstReducer.userId)

    const updatedUser = useSelector(state => state.firstReducer.updatedUser)

    const [ error, setError ] = useState( { error: "" } )

    const dispatch = useDispatch()



    useEffect(()=>{

        const request = ()=>{
            axios.get("https://users-crud1.herokuapp.com/users/")
                .then( res => dispatch( fetchData(res.data) ) )
                .catch( err => setError( {...error, error: err} ) )
        }
        request()

        if(userInputsVals !== undefined){
            axios.post("https://users-crud1.herokuapp.com/users/", userInputsVals)
                .then(()=> request())
                .catch( err => setError( {...error, error: err} ) )
        }

        if(updatedUser){

            axios.put(`https://users-crud1.herokuapp.com/users/${updatedUser?.id}/`, updatedUser)
                .then(()=> request())
                .catch( err => setError( {...error, error: err} ) )

        }

        if(userId !== undefined){
            axios.delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
                .then(()=> request())
                .catch( err => setError( {...error, error: err} ) )
        }

    }, [userInputsVals, userId, updatedUser])


  return (
      <div>
          
      </div>
  )
};
