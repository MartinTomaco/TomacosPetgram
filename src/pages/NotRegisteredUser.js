import React from 'react'
import Context from '../Context'
import { UserForm } from '../componets/UserForm'

export const NotRegisteredUser = () => (
    <Context.Consumer>
        { 
            ({isAuth, activateAuth})=> {
                return(
                    <>
                    <UserForm 
                    title={'Registrarse'}
                    onSubmit={activateAuth}
                    />
                    <UserForm 
                    title={'Iniciar sesion'}
                    onSubmit={activateAuth}
                    />
                    </>
                )
            }
        }
    </Context.Consumer>
)
