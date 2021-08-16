import React, { useState, createContext } from 'react'



export const context = createContext()

export const ContextProvider = props => {
    const [userData, setUserData] = useState({})
    const [repos, setRepos] = useState({})
    const [loading, setLoading] = useState('')

    return (
        <context.Provider value= {{
            loading,
            setLoading,
            userData,
            repos,
            setUserData,
            setRepos
        }}>
             {props.children}
        </context.Provider>
           

    )
}