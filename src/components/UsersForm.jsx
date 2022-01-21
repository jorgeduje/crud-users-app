
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submit, updateUser, settingFlag } from "../REDUX/ACTIONS/actions"

export const UsersForm = () => {
   
    const flagEdit = useSelector(state => state.firstReducer.flagEdit) 
    const selectedUser = useSelector(state => state.firstReducer.selectedUser) 

    
    const dispatch = useDispatch() 
   
   
    const [ inputValues, setInputValues ] = useState({

        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""

    })

    useEffect(()=>{


        if(selectedUser){

            setInputValues(selectedUser)

        }

    }, [ selectedUser ])
   

    const submitUser = ( e )=>{

        e.preventDefault()
       
        if( !selectedUser ){
            dispatch(submit(inputValues))
            setInputValues({

                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""
        
         })

        }else{

            dispatch(updateUser(inputValues))
            setInputValues({

                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""
        
            })
            dispatch(settingFlag())

        }
            
    }

    const clearVals = ()=>{

        setInputValues({

            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
    
        })
        dispatch(settingFlag())
    }


    return (
        <div className='container-form'>
            
            <form className='form' onSubmit={(e)=>submitUser(e)}>

                <section>
                        <label htmlFor="firsName">First Name</label>
                        <input type="text" id='firsName' value={inputValues?.first_name} onChange={(e)=>setInputValues({...inputValues, first_name: e.target.value})}/>
                </section>

                <section>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' value={inputValues?.last_name} onChange={(e)=>setInputValues({...inputValues, last_name: e.target.value})}/>
                </section>

                <section>
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" id='birthday' value={inputValues?.birthday} onChange={(e)=>setInputValues({...inputValues, birthday: e.target.value})}/>
                </section>

                <section>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={inputValues?.email} onChange={(e)=>setInputValues({...inputValues, email: e.target.value})}/>
                </section>

                <section>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={inputValues?.password} onChange={(e)=>setInputValues({...inputValues, password: e.target.value})}/>
                </section>

                <div className='container-btn'>
                    <button type='submit'>Send</button>    
                    {
                        flagEdit && <button type="button" onClick={()=>clearVals()}>Clear</button>
                    }
                </div>

            </form>

        </div>
    )
}
