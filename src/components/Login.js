import React, { useEffect } from 'react';
import '../styles/Login.css'
import '../styles/Font.css'

const Login = ({ user, login, logout, getDocs, getTypes }) => {

  useEffect(()=>{ document.title="Strona logowania" },[])
  
    
    let userDto = {
        name: '',
        email: '',
        password: '',
        password2: '',
        roleId: '',
        token: ''
      }
    
      const hadnleOnSubmit = (e) => {
        e.preventDefault();
        login(userDto);
      }
    
      function handleOnClick() {
        console.log('klik')
        const un = document.getElementById("loginID").value;
        const up = document.getElementById("passID").value;
    
        userDto = {
          email: un,
          password: up
        }
      }

      if (user.email !== '') {
        console.log("pobieram do drop list")
        getDocs();
        getTypes();
      }

      const handleLogout = () => {
        logout();
      }
    
    
      return (
          user.email === '' ?
        <div className="fontStyle">
            <form onSubmit={hadnleOnSubmit}>
              <p className="pLogin">Login: <input type="text" id="loginID" name="login" /></p>
              <p className="pPassword">Password: <input type="password" id="passID" name="password" /></p>
              <button className="button" type="submit" onClick={handleOnClick} >Zaloguj</button>
            </form>
        </div> :
        <div className="fontStyle">
          <div className="helloText">Witaj {user.name}! </div>
          <button className="button" type="submit" onClick={handleLogout} >Wyloguj</button>
        </div>
      );
}

export default Login;