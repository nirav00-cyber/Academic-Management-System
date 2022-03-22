import React,{useState,useRef} from 'react'
import classes from "./Login.module.css";

function Login(props)
{

    
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const emailRef = useRef();
    const passwordRef = useRef();

    const toggleLoginModeHandler = () =>
    {
        props.toggleMode("login");
    }

    const submitHandler = (e) =>
    {
        
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