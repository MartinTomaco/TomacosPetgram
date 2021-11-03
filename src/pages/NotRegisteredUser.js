import React from 'react'
import Context from '../Context'
import { UserForm } from '../componets/UserForm'

export const NotRegisteredUser = () => (
    <Context.Consumer>
        { 
            ({isAuth, activateAuth})=> {
                return(
                    <UserForm onSubmit={activateAuth}/>
                )
            }
        }
    </Context.Consumer>
)
