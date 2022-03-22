import React,{useState} from 'react';
import Login from '../components/Login/Login';
import Signup from '../components/Login/Signup';

function LoginPage()
{
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleModeHandler = (mode) =>
  {
    if (mode === "login")
      setIsLogin(false);
    else
      setIsLogin(true);
  }
  return (
    <>
      {isLogin && <Login toggleMode={toggleModeHandler}/>}
    {!isLogin && <Signup toggleMode={toggleModeHandler}/>}
    </>
  );
}

export default LoginPage;