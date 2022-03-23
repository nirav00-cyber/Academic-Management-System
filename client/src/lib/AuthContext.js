import React,{useContext} from 'react';
import Axios from 'axios';
const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider(props)
{
    async function registerUser(signupInfo)
    {
        

        const  response = await Axios.post("http://localhost:3001/auth/registerUser", signupInfo);
        
        console.log(response);
        return response.data;
        // const data = await response.json();
        // console.log(data);
        
    }
    async function loginUser(loginInfo)
    {
        

        const  response = await Axios.post("http://localhost:3001/auth/loginUser", loginInfo);
        
        console.log(response);
        return response.data;
        // const data = await response.json();
        // console.log(data);
        
    }
 const value = {
     registerUser,
     loginUser
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}