import React,{useState,useRef} from 'react'
import classes from "./Login.module.css";

function Login()
{

    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const submitHandler = (e) =>
    {
        
    }
    const toggleLoginModeHandler = () =>
    {
        setIsLogin((prevState)=>!prevState);
    }
  return (
    <div className={classes.container}>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          {error && <div className={classes.error}>{error}</div>}
          
          <form onSubmit={submitHandler}>
                {!isLogin && <div className={classes.form_control}>
                    <label htmlFor='username'>Name</label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Enter Name' ref={usernameRef}
                        required />
                </div>}
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
                {!isLogin && <div className={classes.form_control}>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirm-password'
                        placeholder='Enter Password' ref={passwordConfirmRef}
                        required />
              </div>}
              {!isLogin && <div className={classes.form_control}>
                    <label htmlFor='contact_num'>Contact Number</label>
                    <input
                        type='number'
                        id='contact_num'
                        placeholder='Enter Contact Number' ref={passwordConfirmRef}
                        required />
              </div>}
              {!isLogin && <div className={classes.form_control}>
                    <label htmlFor='address'>Address</label>
                    <textarea
                        type='text'
                        id='address'
                        placeholder='Enter Address' ref={passwordConfirmRef}
                        required />
                </div>}
                <button disabled={isLoading} type='submit' className={classes.btn}>
                    {isLogin ? 'Login' : 'SignUp'}
                </button>

                <button disabled={isLoading} className={classes.btn_link}
                    type='button'
                    onClick={toggleLoginModeHandler}>
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </form></div>
  )
}

export default Login;