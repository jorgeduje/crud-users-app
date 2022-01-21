import React from 'react'
import { CardUser } from './CardUser'
import { useSelector } from 'react-redux'


export const UsersList = () => {

    const { initialData } = useSelector( x => x.firstReducer )
    

    return (
       
        <div className='container-cards'>
            {
                initialData?.map( user =>

                    <CardUser 
                        key={user.id}
                        first_name={user.first_name} 
                        last_name={user.last_name}
                        email={user.email}
                        birthday={user.birthday}
                        password={user.password}
                        id={user.id}
                    />
                )
            }
        </div>
        
    )
}
