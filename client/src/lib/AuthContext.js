import React,{useContext,useEffect,useState} from 'react';
import Axios from 'axios';


const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider(props)
{
    const [userInfo, setUserInfo] = useState({});
    const [config, setConfig] = useState({});
    
    useEffect(() =>
    {
        console.log("reloaded");
        try
        {
            setConfig({
                headers: {
                    Authorization: `Bearer ${ localStorage.getItem('token') }`
                }
            });
            const userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(userData);
            setUserInfo({
                userInfo: userData
            })
        }
        catch (err)
        {
            console.log(err);
        }
        
    }, []);
    

    async function registerUser(signupInfo)
    {
        

        const  response = await Axios.post("http://localhost:3001/auth/registerUser", signupInfo);
        
        if (response.data.status === 'error')
            return { status: 'error' };
        localStorage.setItem('token', (response.data.token));
        localStorage.setItem('userInfo', JSON.stringify(response.data));
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
            localStorage.setItem('userInfo',JSON.stringify(response.data));
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
    async function addEnrollReq(enrollmentData)
    {
        try
        {
            console.log(enrollmentData);
            const response = await Axios.post("http://localhost:3001/courses/addEnrollmentReq", enrollmentData, config);
            console.log(response);
        
            return response;
        } catch (err)
        {
            return { status: 'error' };
        }
    }

    async function removeEnrollReq(removeEnrollmentData)
    {

        console.log(removeEnrollmentData);
        const removeData = {
            courseId: removeEnrollmentData.courseId,
            studentData:removeEnrollmentData.rowData
        }
        const addData = {
            courseId: removeEnrollmentData.courseId,
            studentId: removeEnrollmentData.rowData.id
        }
        console.log(addData);
        const response = await Axios.post("http://localhost:3001/courses/removeEnrollmentReq", removeData, config);
        console.log(response);
        const response1 = await Axios.post("http://localhost:3001/auth/addToCoursesTaken", addData, config);
        console.log(response1);
    }

    async function updateUserInfo(uid)
    {
        console.log(userInfo);
        const userData = { userId: uid };
        console.log(userData);
        const response = await
            Axios.post("http://localhost:3001/auth/getUserInfo", userData, config);
        console.log(response);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        return response.data;
        // setUserInfo(response.data);
    }

 const value = {
     registerUser,
     loginUser,
     userInfo,
     logout,
     addCourse,
     config,
     addEnrollReq,
     removeEnrollReq,
     updateUserInfo
    
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}