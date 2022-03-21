import React from 'react';

const AuthContext = React.createContext();


export function AuthProvider(props)
{

 const value = {

    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}