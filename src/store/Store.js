import React, { useState } from 'react';

//export const baseItemContext= createContext('baseItem')
export const baseContext = React.createContext()
export const convertToContext = React.createContext()

const Store = ({ children }) => {

    //const [baseItem, setBaseItem] = useState('')
    const [base, setBase] = useState('TRY')
    const [convertTo, setConvertTo] = useState('USD')

    return (
        <baseContext.Provider value={[base, setBase]} >
            <convertToContext.Provider value={[convertTo, setConvertTo]} >
            {children}
            </convertToContext.Provider>
        </baseContext.Provider>
    )
}

export default Store;