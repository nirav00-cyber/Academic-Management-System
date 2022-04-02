import React,{useState,useRef} from 'react'
import classes from "./Login.module.css";
import { useAuth } from '../../lib/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login(props)
{

    
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { loginUser,userInfo } = useAuth();
    const navigate = useNavigate();


    const emailRef = useRef();
    const passwordRef = useRef();

    const toggleLoginModeHandler = () =>
    {
        props.toggleMode("login");
    }

   
    const submitHandler = async(e) =>
    {
        e.preventDefault();
      
        const loginInfo = {
           
            email: emailRef.current.value,
            password: passwordRef.current.value
           
        };

        console.log("login request made");
        let data = { status: "null" };
        try
        {  setIsLoading(true);
            data = await loginUser(loginInfo);
            console.log(data);
            console.log(userInfo);

             setIsLoading(false); 
           
            if (data.status === 'ok')
            {
           
                navigate('/home');
                // redirect to home page
                // toggleLoginModeHandler(); 
            }
        }
        catch (err)
        {
                 setIsLoading(false); 

            if (data.status === 'error')
                setError("Error: Invalid credentials");
            else
                setError("Error occured ! try again");
            console.log(err);
        }
       
    }

  return (
    <div className={classes.container}>
            <h2>Login</h2>
          {error && <div className={classes.error}>{error}</div>}
          
          <form onSubmit={submitHandler}>
              
                <div className={classes.form_control}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text' id='email' placeholder='Enter Email' ref={emailRef}
                    required/>
 
                </div>
                <div className={classes.form_control}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter Password' ref={passwordRef}
                    required/>

                </div>
   
                <button disabled={isLoading} type='submit' className={classes.btn}>
                    Login
                </button>

                <button disabled={isLoading} className={classes.btn_link}
                    type='button'
                    onClick={toggleLoginModeHandler}>
                    Create new account / Register
                </button>
            </form></div>
  )
}

export default Login;