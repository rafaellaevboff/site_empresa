import {createContext} from 'react'

export const CONTEXT = createContext({valor: 'oi'})

export const PROVIDER = ({ children }) => {


    const valoresDistribuidos = {
        valor: 'oi'
    }

    return (
        <CONTEXT.Provider value={valoresDistribuidos}>{children}</CONTEXT.Provider>
    )
}


