import React, { useEffect, useState } from 'react';
import './Login.scss'

const Login = ({ user, login, logout, getDocs, getTypes, onLoad }) => {

  useEffect(()=>{ document.title="Strona logowania" },[])
  
    const [userDto, setUserDto] = useState({})
    
      const hadnleOnSubmit = (e) => {
        e.preventDefault();
        login(userDto);
      }

      const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserDto({
          [name]: value
        })
 
      }

      if (user.email !== '') {
        console.log("pobieram do drop list")
        getDocs();
        getTypes();
      }
      
      onLoad(user)

      const handleLogout = () => {
        logout();
      }
    
    
      return (
          user.email === '' ?
        
            <form className="login" onSubmit={hadnleOnSubmit}>
              <div >Login:</div> 
              <div><input onChange={handleOnChange} type="text" id="loginID" name="email" /></div>
              <div>Password:</div>
              <div><input onChange={handleOnChange} type="password" id="passID" name="password" /></div>
              <button className="login-button" type="submit" >Zaloguj</button>
            </form>
         :
        <div className="">
          <h1 className="">Witaj {user.name}! </h1>
          <button className="" type="submit" onClick={handleLogout} >Wyloguj</button>
        </div>
      );
}

export default Login;