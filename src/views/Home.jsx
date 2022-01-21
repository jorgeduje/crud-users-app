import React from 'react'
import { UsersForm } from '../components/UsersForm'
import { UsersList } from '../components/UsersList'
import {FetchComponent} from "../components/FetchComponent/FetchComponent"

export const Home = () => {
    return (
      
          
        <div className='container-home'>
        
            <UsersForm /> 
            <UsersList />
            <FetchComponent />
            

        </div>
   
    )
}



