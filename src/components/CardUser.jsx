
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../REDUX/ACTIONS/actions'


export const CardUser = ( { first_name, last_name, email, birthday, password, id } ) => {

    const dispatch = useDispatch()

    const userDelete = (id)=>{

        dispatch(deleteUser(id))

    }

    const emailCortado = email.slice(0,15) + "..."
    
    
    return (

        <div className='card'>

            <ul>
                <li><span>Nombre y apellido: </span><br/>{first_name} {last_name}</li>
                <li><span>Email: </span><br/>{email?.length > 15 ? emailCortado: email}</li>
                <li><span>Birthday:</span><br/>{birthday}</li>
            </ul>

           <div className='btn-card'>
                <i className="fas fa-trash-alt" onClick={()=>userDelete(id)}></i>
                <i className="fas fa-edit edit" onClick={()=> dispatch(editUser({first_name, last_name, email, birthday, password, id}))}></i>
           </div>

        </div>
    )
}
