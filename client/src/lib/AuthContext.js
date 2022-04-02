import React,{useContext,useEffect,useState} from 'react';
import Axios from 'axios';



const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider(props)
{
    const [userInfo, setUserInfo] = useState();
    const [config, setConfig] = useState({});
    
    useEffect(() =>
    {
        setConfig({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        
    }, [userInfo]);
    

    async function registerUser(signupInfo)
    {
        

        const  response = await Axios.post("http://localhost:3001/auth/registerUser", signupInfo);
        
        if (response.data.status === 'error')
            return { status: 'error' };
        localStorage.setItem('token', (response.data.token));
        
        console.log(response.data);
        
        setUserInfo(response.data);
        return { status: 'ok' }; 
    }

    async function loginUser(loginInfo)
    {
        
        const response = await Axios.post("http://localhost:3001/auth/loginUser", loginInfo);
        console.log(response.data);
        if (response.data)
        {
            localStorage.setItem('token',    
                 response.data.token
            );
        setUserInfo(response.data);
            console.log('login succesfful');
            return { status: 'ok' };
        } 
        
        console.log(response);
        return {status:'error'};
         
    }
    const logout = () =>
    {
        localStorage.remove('token');
    }
    async function addCourse(courseData)
    {
        const response = await Axios.post("http://localhost:3001/courses/addNewCourse",courseData,config);
        console.log(response);
        if (response.data)
            return { status: 'ok' };
        return { status: 'error' };
        
    }
    async function getCourses()
    {
        let response = {};
        try
        {
            response = await Axios.get("http://localhost:3001/courses", config);
            console.log(response);
            return response.data;

        } catch (err)
        {
            console.log(err.response.status)
            if (err.response.status === 401)
                return { status: 'login' };
            return { status: 'error' };
        }

    }


 const value = {
     registerUser,
     loginUser,
     userInfo,
     logout,
     addCourse,
     getCourses
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}