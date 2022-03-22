import React,{useState,useRef} from 'react'
import classes from "./Signup.module.css";

function Signup(props)
{

    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const submitHandler = (e) =>
    {
        
    }
    const toggleLoginModeHandler = () =>
    {
        props.toggleMode("signup");
        // setIsLogin((prevState)=>!prevState);
    }
  return (
    <div className={classes.container}>
            <h2>Sign Up/Register</h2>
          {error && <div className={classes.error}>{error}</div>}
          
          <form onSubmit={submitHandler}>
               <div className={classes.form_control}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter Name' ref={nameRef}
                        required />
                </div>
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
               <div className={classes.form_control}>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirm-password'
                        placeholder='Enter Password' ref={passwordConfirmRef}
                        required />
              </div>
           <div className={classes.form_control}>
                    <label htmlFor='contact_num'>Contact Number</label>
                    <input
                        type='number'
                        id='contact_num'
                        placeholder='Enter Contact Number' ref={passwordConfirmRef}
                        required />
              </div>
            <div className={classes.form_control}>
                    <label htmlFor='address'>Address</label>
                    <textarea
                        type='text'
                        id='address'
                        placeholder='Enter Address' ref={passwordConfirmRef}
                        required />
                </div>
                <button disabled={isLoading} type='submit' className={classes.btn}>
                    Register
                </button>

                <button disabled={isLoading} className={classes.btn_link}
                    type='button'
                    onClick={toggleLoginModeHandler}>
                     Login with existing account
                </button>
            </form></div>
  )
}

export default Signup;