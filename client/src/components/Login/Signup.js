import React,{useState,useRef} from 'react'
import classes from "./Signup.module.css";
import { useAuth } from '../../lib/AuthContext';
import { useNavigate } from 'react-router-dom';
function Signup(props)
{

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const contactNumberRef = useRef();
    const addressRef = useRef();
    const navigate = useNavigate();
    const { registerUser } = useAuth();

    const submitHandler = async(e) =>
    {
        e.preventDefault();
        
        const signupInfo = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            contactNumber: contactNumberRef.current.value,
            address:addressRef.current.value
        };

        console.log("request made");
        setIsLoading(true);
        const data = await registerUser(signupInfo);
        setIsLoading(false);
        console.log(data);
        if (data.status === 'ok')
        {
            navigate('/courses');
            // redirect to home page
            // toggleLoginModeHandler(); 
        }
        if (data.status === 'error')
            setError("Error: Invalid credentials");
        // setIsLoading(false);

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
                        placeholder='Enter Contact Number' ref={contactNumberRef}
                        required />
              </div>
            <div className={classes.form_control}>
                    <label htmlFor='address'>Address</label>
                    <textarea
                        type='text'
                        id='address'
                        placeholder='Enter Address' ref={addressRef}
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