import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {


    const [isAuth, setIsAuth] = useState(()=>{
        return window.sessionStorage.getItem('token') //Si tiene token isAuth inicia true
    })

    const value = {
        isAuth,
        activateAuth: token => {
            setIsAuth(true)
            window.sessionStorage.setItem('token', token)
        },
        removeAuth: () => {
            setIsAuth(false)
            window.sessionStorage.removeItem('token')
            __APOLLO_CLIENT__.resetStore()
        }
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}