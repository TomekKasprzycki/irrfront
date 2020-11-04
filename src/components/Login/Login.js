import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import './Login.scss'

const Login = ({ user, login, getDocs, getTypes, onLoad }) => {

  useEffect(()=>{ document.title="Strona logowania" },[])
  
    const [userDto, setUserDto] = useState({})
    
      const hadnleOnSubmit = (e) => {
        e.preventDefault();
        if(userDto.email!=='') {
        login(userDto);}
      }

      const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserDto({
          [name]: value
        })
 
      }

      if (user.email !== '') {
        getDocs();
        getTypes();
      }
      
      onLoad(user)    
    
      return (
          user.email === '' ?
        <div className='login-main'>
            <form className='login-form' onSubmit={hadnleOnSubmit}>
              <div className='login'>
                <div className='login-label' >Login:</div> 
                <div className='login-input-div'><input className='login-input' onChange={handleOnChange} type="text" name="email" /></div>
                <div className='login-label'>Password:</div>
                <div className='login-input-div'><input className='login-input' onChange={handleOnChange} type="password" name="password" /></div>
              </div>
              <button className="login-button" type="submit" >Zaloguj</button>
            </form>
            
        </div>
         :
        <Redirect to="/main"/>
      );
}

export default Login;